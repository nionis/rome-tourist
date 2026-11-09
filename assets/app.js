/* Rome through time — map + timeline controller */
(() => {
  "use strict";

  const { eras, events } = window.ROME;
  const MIN = -753;
  const MAX = 2026;
  const SPAN = MAX - MIN;
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const byId = Object.fromEntries(events.map((e) => [e.id, e]));
  const eraById = Object.fromEntries(eras.map((e) => [e.id, e]));

  const KIND_ORDER = ["all", "history", "monument", "church", "city"];
  const KIND_LABEL = {
    all: "All",
    history: "History",
    monument: "Monuments",
    church: "Churches",
    city: "City fabric",
  };
  const KIND_ADJ = {
    history: "history",
    monument: "monument",
    church: "church",
    city: "city-fabric",
  };
  const KIND_TITLE = {
    history: "History",
    monument: "Monument",
    church: "Church",
    city: "City fabric",
  };

  const $ = (id) => document.getElementById(id);
  const el = {
    yearNow: $("yearNow"),
    eraNow: $("eraNow"),
    eraRange: $("eraRange"),
    eraTitle: $("eraTitle"),
    eraBlurb: $("eraBlurb"),
    filters: $("filters"),
    feature: $("feature"),
    featureImg: $("featureImg"),
    featureCredit: $("featureCredit"),
    featureThumbs: $("featureThumbs"),
    featureYear: $("featureYear"),
    featurePlace: $("featurePlace"),
    featureTitle: $("featureTitle"),
    featureText: $("featureText"),
    featureGuide: $("featureGuide"),
    featureEmpty: $("featureEmpty"),
    featureOpen: $("featureOpen"),
    lightbox: $("lightbox"),
    lightboxImg: $("lightboxImg"),
    lightboxCredit: $("lightboxCredit"),
    lightboxCount: $("lightboxCount"),
    lightboxPrev: $("lightboxPrev"),
    lightboxNext: $("lightboxNext"),
    lightboxClose: $("lightboxClose"),
    eventList: $("eventList"),
    siteCount: $("siteCount"),
    mapBadge: $("mapBadge"),
    mapBadgeText: $("mapBadgeText"),
    mapLegend: $("mapLegend"),
    reconToggle: $("reconToggle"),
    panel: $("panel"),
    axis: $("axis"),
    axisTrack: $("axisTrack"),
    bands: $("bands"),
    dots: $("dots"),
    labels: $("labels"),
    playhead: $("playhead"),
    caption: $("axisCaption"),
    play: $("play"),
    prev: $("prev"),
    next: $("next"),
  };

  const state = {
    year: MIN,
    eraId: null,
    featureId: null,
    imageIndex: 0,
    playing: false,
    timer: null,
    kind: "all",
    showRecon: true,
  };

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));

  const fmt = (year) => {
    if (year < 0) return `${-year} BC`;
    return year >= 1000 ? String(year) : `AD ${year}`;
  };
  const pct = (year) => ((year - MIN) / SPAN) * 100;

  const eraFor = (year) =>
    eras.find((e) => year >= e.start && year < e.end) || eras[eras.length - 1];

  const eraEvents = (eraId) => events.filter((e) => e.era === eraId);
  const matchesKind = (event) => state.kind === "all" || event.kind === state.kind;
  const visibleEraEvents = (eraId) => eraEvents(eraId).filter(matchesKind);
  const visibleEvents = () => events.filter(matchesKind);

  function pickFeature(eraId, year) {
    const list = visibleEraEvents(eraId);
    if (!list.length) return null;

    let best = list[0];
    for (const event of list) if (event.year <= year) best = event;
    return best;
  }

  /* ---------- map ---------- */

  const map = L.map("map", {
    zoomControl: false,
    scrollWheelZoom: true,
    zoomSnap: 0.5,
  }).setView([41.895, 12.482], 14);

  const basemapAttribution =
    'Tiles &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri</a> — Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, maxNativeZoom: 16, attribution: basemapAttribution }
  ).addTo(map);

  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, maxNativeZoom: 16 }
  ).addTo(map);

  L.control.zoom({ position: "bottomright" }).addTo(map);

  let layer = null;
  const markersById = new Map();
  let markerData = [];

  function pinIcon(n, kind) {
    return L.divIcon({
      className: "pin-wrap",
      html: `<span class="pin" data-kind="${kind}">${n}</span>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });
  }

  function renderMarkers(list, era) {
    if (layer) {
      layer.clearLayers();
    } else {
      layer = L.layerGroup().addTo(map);
    }
    markersById.clear();
    markerData = [];

    const points = [];
    list.forEach((event, i) => {
      const label = `${event.title} — ${KIND_TITLE[event.kind]}`;
      const marker = L.marker([event.lat, event.lng], {
        icon: pinIcon(i + 1, event.kind),
        title: label,
        riseOnHover: true,
      });
      marker.addTo(layer);
      const markerEl = marker.getElement();
      if (markerEl) markerEl.setAttribute("aria-label", label);
      marker.on("click", () => {
        stopPlay();
        selectEvent(event.id, { scroll: true });
      });
      markersById.set(event.id, marker);
      markerData.push({ marker, base: L.latLng(event.lat, event.lng) });
      points.push([event.lat, event.lng]);
    });

    fitMap(points, era);
    spreadMarkers();
    markSelected();
  }

  function fitMap(points, era) {
    const bounds = L.latLngBounds(points);

    if (era.overlay) {
      (era.overlay.extent || []).forEach((shape) => {
        shape.coords.forEach(([lat, lng]) => bounds.extend([lat, lng]));
      });
      (era.overlay.walls || []).forEach((wall) => {
        wall.coords.forEach(([lat, lng]) => bounds.extend([lat, lng]));
      });
      (era.overlay.marks || []).forEach((mark) => {
        bounds.extend([mark.lat, mark.lng]);
      });
    }

    if (!bounds.isValid()) return;

    map.fitBounds(bounds, {
      padding: [52, 52],
      maxZoom: 16,
      animate: false,
    });
  }

  /* Fan out pins that share a site so every moment stays clickable. */
  function spreadMarkers() {
    if (!markerData.length) return;

    markerData.forEach(({ marker, base }) => marker.setLatLng(base));

    const points = markerData.map(({ marker, base }) => ({
      marker,
      point: map.latLngToLayerPoint(base),
    }));

    const groups = [];
    points.forEach((item) => {
      const group = groups.find((g) =>
        g.some((other) => other.point.distanceTo(item.point) < 30)
      );
      if (group) group.push(item);
      else groups.push([item]);
    });

    groups.forEach((group) => {
      if (group.length < 2) return;
      const cx = group.reduce((sum, q) => sum + q.point.x, 0) / group.length;
      const cy = group.reduce((sum, q) => sum + q.point.y, 0) / group.length;
      const radius = Math.max(15, Math.ceil(31 / (2 * Math.sin(Math.PI / group.length))));
      group.forEach((item, i) => {
        const angle = (i / group.length) * Math.PI * 2 - Math.PI / 2;
        item.marker.setLatLng(
          map.layerPointToLatLng(
            L.point(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius)
          )
        );
      });
    });
  }

  map.on("zoomend", spreadMarkers);

  function markSelected() {
    markersById.forEach((marker, id) => {
      const pin = marker.getElement()?.querySelector(".pin");
      if (!pin) return;
      const active = id === state.featureId;
      pin.classList.toggle("is-active", active);
      marker.setZIndexOffset(active ? 1000 : 0);
    });
  }

  /* ---------- era reconstruction overlay ---------- */

  const overlayLayer = L.layerGroup().addTo(map);
  const TONE_RANK = { abandoned: 0, sparse: 1, new: 2, urban: 3 };

  function drawOverlay(era) {
    overlayLayer.clearLayers();

    if (!state.showRecon || !era.overlay) {
      el.mapLegend.hidden = true;
      el.reconToggle.setAttribute("aria-pressed", "false");
      return;
    }

    const overlay = era.overlay;
    el.reconToggle.setAttribute("aria-pressed", "true");

    const extents = (overlay.extent || [])
      .slice()
      .sort((a, b) => (TONE_RANK[a.tone] ?? 3) - (TONE_RANK[b.tone] ?? 3));

    extents.forEach((shape) => {
      const style =
        shape.tone === "abandoned"
          ? { color: "#7a6d5d", fillColor: "#8a7c69", weight: 1, opacity: 0.42, fillOpacity: 0.045, dashArray: "2 6" }
          : shape.tone === "sparse"
            ? { color: era.color, fillColor: era.color, weight: 1, opacity: 0.45, fillOpacity: 0.06, dashArray: "3 7" }
            : shape.tone === "new"
              ? { color: era.color, fillColor: era.color, weight: 1.4, opacity: 0.55, fillOpacity: 0.11, dashArray: "1 4" }
              : { color: era.color, fillColor: era.color, weight: 1.7, opacity: 0.7, fillOpacity: 0.17, dashArray: "5 4" };
      L.polygon(shape.coords, style)
        .bindTooltip(shape.name, { sticky: true, className: "recon-tip" })
        .addTo(overlayLayer);
    });

    (overlay.walls || []).forEach((wall) => {
      L.polyline(wall.coords, {
        color: "#3b322a",
        weight: 2.2,
        opacity: 0.55,
        dashArray: null,
      })
        .bindTooltip(wall.name, { sticky: true, className: "recon-tip" })
        .addTo(overlayLayer);
    });

    (overlay.lines || []).forEach((line) => {
      const style =
        line.kind === "aqueduct"
          ? { color: era.color, weight: 1.8, opacity: 0.75, dashArray: "7 5" }
          : line.kind === "street"
            ? { color: "#3b322a", weight: 1.5, opacity: 0.55, dashArray: "3 4" }
            : { color: era.color, weight: 2, opacity: 0.65, dashArray: null };
      L.polyline(line.coords, style)
        .bindTooltip(line.name, { sticky: true, className: "recon-tip" })
        .addTo(overlayLayer);
    });

    (overlay.marks || []).forEach((mark) => {
      L.circle([mark.lat, mark.lng], {
        radius: 80,
        color: era.color,
        weight: 1,
        opacity: 0.6,
        fillColor: era.color,
        fillOpacity: 0.13,
      })
        .bindTooltip(mark.name, {
          permanent: true,
          direction: "top",
          offset: [0, -4],
          className: "recon-label",
          opacity: 1,
        })
        .addTo(overlayLayer);
    });

    renderLegend(era);
  }

  function renderLegend(era) {
    const overlay = era.overlay;
    if (!overlay) {
      el.mapLegend.hidden = true;
      return;
    }

    const rows = [];
    const wallNames = new Set();

    (overlay.extent || []).forEach((shape) => {
      const tone = shape.tone === "new" ? "new" : shape.tone === "abandoned" ? "abandoned" : "urban";
      rows.push(`<div class="legend-row"><span class="lg-swatch extent ${tone}"></span>${esc(shape.name)}</div>`);
    });

    (overlay.walls || []).forEach((wall) => {
      const name = wall.name.replace(/,.*$/, "");
      if (wallNames.has(name)) return;
      wallNames.add(name);
      rows.push(`<div class="legend-row"><span class="lg-swatch wall"></span>${esc(name)}</div>`);
    });

    (overlay.lines || []).forEach((line) => {
      rows.push(`<div class="legend-row"><span class="lg-swatch ${line.kind}"></span>${esc(line.name)}</div>`);
    });

    if ((overlay.marks || []).length) {
      rows.push(`<div class="legend-row"><span class="lg-swatch marks"></span>Hilltop settlements</div>`);
    }

    el.mapLegend.style.setProperty("--era", era.color);
    el.mapLegend.innerHTML =
      `<p class="legend-title">Reconstruction <span>scheme</span></p>` +
      rows.join("") +
      `<p class="legend-note">${esc(overlay.note)}</p>`;
    el.mapLegend.hidden = false;
  }

  el.reconToggle.addEventListener("click", () => {
    state.showRecon = !state.showRecon;
    drawOverlay(eraById[state.eraId]);
  });

  /* ---------- axis ---------- */

  function buildAxis() {
    el.bands.innerHTML = eras
      .map((era) => {
        const left = pct(era.start);
        const width = pct(era.end) - left;
        return `<div class="band" data-era="${era.id}" style="left:${left}%;width:${width}%;--c:${era.color}" title="${esc(era.name)} · ${esc(era.range)}"><span>${esc(era.short)}</span></div>`;
      })
      .join("");

    el.dots.innerHTML = events
      .map((event) => {
        const era = eraById[event.era];
        return `<span class="dot" data-kind="${event.kind}" style="left:${pct(event.year)}%;--c:${era.color}" title="${esc(event.label)} — ${esc(event.title)}"></span>`;
      })
      .join("");

    const marks = eras.map((era, i) => ({
      year: era.start,
      label: fmt(era.start),
      edge: i === 0 ? "edge-start" : "",
      minor: i === 1 || i === 3,
    }));
    marks.push({ year: MAX, label: "today", edge: "edge-end", minor: true });

    el.labels.innerHTML = marks
      .map(
        (mark) =>
          `<span class="axis-label ${mark.edge}${mark.minor ? " minor" : ""}" style="left:${pct(mark.year)}%">${esc(mark.label)}</span>`
      )
      .join("");
  }

  /* ---------- panel ---------- */

  function renderFilters(era) {
    const list = eraEvents(era.id);
    el.filters.innerHTML = KIND_ORDER.map((kind) => {
      const count = kind === "all" ? list.length : list.filter((e) => e.kind === kind).length;
      return `<button type="button" class="chip" data-kind="${kind}" aria-pressed="${state.kind === kind}">
        <span class="chip-dot" aria-hidden="true"></span><span>${esc(KIND_LABEL[kind])}</span><b>${count}</b>
      </button>`;
    }).join("");
  }

  function renderEra(era) {
    state.eraId = era.id;

    el.eraRange.textContent = era.range;
    el.eraTitle.textContent = era.name;
    el.eraBlurb.textContent = era.blurb;

    el.panel.style.setProperty("--era", era.color);
    el.eventList.style.setProperty("--era", era.color);
    el.mapBadge.style.setProperty("--era", era.color);

    renderFilters(era);

    const list = visibleEraEvents(era.id);
    el.siteCount.textContent = `${list.length} moment${list.length === 1 ? "" : "s"}`;
    el.mapBadgeText.textContent = `${era.name} · ${list.length} moment${list.length === 1 ? "" : "s"}`;

    el.eventList.innerHTML = list.length
      ? list
          .map(
            (event, i) => `<li><button type="button" class="row" data-id="${event.id}" aria-current="false">
          <span class="row-idx">${String(i + 1).padStart(2, "0")}</span>
          <span class="row-year">${esc(event.label)}</span>
          <span class="row-title">${esc(event.title)}</span>
        </button></li>`
          )
          .join("")
      : `<li class="list-empty">No ${KIND_ADJ[state.kind] || "history"} moments in this age. Pick another filter or drag the timeline.</li>`;

    drawOverlay(era);
    renderMarkers(list, era);
  }

  function showEmpty() {
    state.featureId = null;
    el.feature.hidden = true;
    el.featureEmpty.hidden = false;
    el.featureEmpty.textContent =
      state.kind === "all"
        ? "No moments in this age."
        : `No ${KIND_ADJ[state.kind] || "history"} moments in this age. Pick another filter or drag the timeline.`;
    markSelected();
  }

  function renderThumbs(event) {
    const images = event.images || [];
    el.featureThumbs.hidden = images.length < 2;
    el.featureThumbs.innerHTML = images
      .map(
        (image, i) => `<button type="button" class="feature-thumb" data-index="${i}" aria-pressed="${i === 0}" aria-label="Photo ${i + 1} of ${images.length}: ${esc(image.alt)}">
          <img src="assets/img/${image.img}.jpg" alt="" loading="lazy" decoding="async">
        </button>`
      )
      .join("");
  }

  function renderImage(event, index) {
    const image = event.images[index];
    if (!image) return;

    state.imageIndex = index;
    el.featureImg.alt = image.alt;

    if (el.featureImg.dataset.src !== image.img) {
      el.featureImg.dataset.src = image.img;
      el.featureImg.classList.remove("is-loaded");
      el.featureImg.src = `assets/img/${image.img}.jpg`;
      if (el.featureImg.complete) {
        requestAnimationFrame(() => el.featureImg.classList.add("is-loaded"));
      }
    }

    el.featureCredit.innerHTML =
      `<a href="${esc(image.credit.url)}" target="_blank" rel="noopener">${esc(image.credit.name)}</a>` +
      ` · ${esc(image.credit.license)} · Wikimedia Commons`;

    [...el.featureThumbs.children].forEach((thumb, i) => {
      thumb.setAttribute("aria-pressed", String(i === index));
    });
  }

  function setFeature(event, opts = {}) {
    if (!event) {
      showEmpty();
      return;
    }

    state.featureId = event.id;
    el.feature.hidden = false;
    el.featureEmpty.hidden = true;

    el.feature.style.setProperty("--era", eraById[event.era].color);
    el.featureYear.textContent = event.label;
    el.featurePlace.textContent = event.place;
    el.featureTitle.textContent = event.title;
    el.featureText.textContent = event.blurb;

    if (event.guide) {
      el.featureGuide.hidden = false;
      el.featureGuide.href = event.guide.href;
      el.featureGuide.textContent = `Full guide: ${event.guide.name}`;
      el.featureGuide.setAttribute("aria-label", `Read the full guide to ${event.guide.name}`);
    } else {
      el.featureGuide.hidden = true;
      el.featureGuide.removeAttribute("href");
      el.featureGuide.removeAttribute("aria-label");
    }

    renderThumbs(event);
    renderImage(event, 0);

    markSelected();

    if (opts.pan) {
      const target = L.latLng(event.lat, event.lng);
      if (!map.getBounds().pad(-0.07).contains(target)) {
        map.panInside(target, { padding: [70, 70], animate: !REDUCED });
      }
    }

    if (opts.scroll) {
      el.panel.scrollTo({ top: 0, behavior: REDUCED ? "auto" : "smooth" });
    }
  }

  /* ---------- slideshow ---------- */

  let slideEvent = null;
  let slideIndex = 0;

  function renderSlide() {
    const images = slideEvent?.images || [];
    const image = images[slideIndex];
    if (!image) return;

    el.lightboxImg.src = `assets/img/${image.img}.jpg`;
    el.lightboxImg.alt = image.alt;
    el.lightboxCredit.innerHTML =
      `<a href="${esc(image.credit.url)}" target="_blank" rel="noopener">${esc(image.credit.name)}</a>` +
      ` · ${esc(image.credit.license)} · Wikimedia Commons`;
    el.lightboxCount.textContent = `${slideIndex + 1} / ${images.length}`;
    el.lightboxPrev.disabled = images.length < 2;
    el.lightboxNext.disabled = images.length < 2;
  }

  function openSlideshow(event) {
    const images = event.images || [];
    if (!images.length) return;

    slideEvent = event;
    slideIndex = Math.min(state.imageIndex, images.length - 1);
    renderSlide();
    el.lightbox.showModal();
  }

  function stepSlide(direction) {
    const images = slideEvent?.images || [];
    if (images.length < 2) return;

    slideIndex = (slideIndex + direction + images.length) % images.length;
    renderSlide();
  }

  function syncUI() {
    const era = eraFor(state.year);
    el.yearNow.textContent = fmt(state.year);
    el.eraNow.textContent = era.name;

    el.playhead.style.left = `${pct(state.year)}%`;
    el.axis.setAttribute("aria-valuenow", String(state.year));
    el.axis.setAttribute("aria-valuetext", `${fmt(state.year)}, ${era.name}`);

    el.caption.innerHTML = `<b>${esc(era.name)}</b> <span>${esc(era.range)}</span>`;

    el.bands.querySelectorAll(".band").forEach((band) => {
      band.classList.toggle("is-active", band.dataset.era === era.id);
    });

    el.dots.querySelectorAll(".dot").forEach((dot) => {
      dot.classList.toggle("is-muted", state.kind !== "all" && dot.dataset.kind !== state.kind);
    });

    el.eventList.querySelectorAll(".row").forEach((row) => {
      row.setAttribute(
        "aria-current",
        row.dataset.id === state.featureId ? "true" : "false"
      );
    });

    markSelected();
  }

  /* ---------- state transitions ---------- */

  function setYear(year) {
    const clamped = Math.max(MIN, Math.min(MAX, Math.round(year)));
    state.year = clamped;

    const era = eraFor(clamped);
    if (era.id !== state.eraId) renderEra(era);

    setFeature(pickFeature(era.id, clamped), { pan: false });
    syncUI();
  }

  function selectEvent(id, opts = {}) {
    const event = byId[id];
    if (!event) return;

    state.year = event.year;
    const era = eraById[event.era];
    if (era.id !== state.eraId) renderEra(era);

    setFeature(event, { pan: opts.pan !== false, scroll: opts.scroll });
    syncUI();
  }

  function applyFilter(kind) {
    if (state.kind === kind) return;
    state.kind = kind;

    const era = eraById[state.eraId];
    renderEra(era);
    setFeature(pickFeature(era.id, state.year), { pan: true });
    syncUI();
  }

  function nearestVisibleIndex() {
    const list = visibleEvents();
    if (!list.length) return -1;
    const index = list.findIndex((e) => e.id === state.featureId);
    if (index !== -1) return index;

    let best = 0;
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].year <= state.year) best = i;
    }
    return best;
  }

  function stepEvent(direction) {
    const list = visibleEvents();
    if (!list.length) return;
    const index = nearestVisibleIndex();
    const next = list[Math.max(0, Math.min(list.length - 1, index + direction))];
    if (next) selectEvent(next.id);
  }

  function firstVisibleInEra(eraId) {
    return visibleEraEvents(eraId)[0] || null;
  }

  function stepEra(direction) {
    const index = eras.indexOf(eraById[state.eraId]);
    for (let i = index + direction; i >= 0 && i < eras.length; i += direction) {
      const first = firstVisibleInEra(eras[i].id);
      if (first) {
        selectEvent(first.id);
        return;
      }
    }
  }

  /* ---------- playback ---------- */

  function stopPlay() {
    clearTimeout(state.timer);
    state.timer = null;
    state.playing = false;
    el.play.textContent = "Play";
    el.play.classList.remove("is-playing");
  }

  function startPlay() {
    state.playing = true;
    el.play.textContent = "Pause";
    el.play.classList.add("is-playing");

    const tick = () => {
      const list = visibleEvents();
      const index = list.findIndex((e) => e.id === state.featureId);
      const next = list[index + 1];
      if (!next) {
        stopPlay();
        return;
      }
      selectEvent(next.id);
      state.timer = setTimeout(tick, 3400);
    };

    state.timer = setTimeout(tick, 700);
  }

  function togglePlay() {
    if (state.playing) stopPlay();
    else startPlay();
  }

  /* ---------- axis interaction ---------- */

  let dragging = false;

  function yearFromClientX(clientX) {
    const rect = el.axisTrack.getBoundingClientRect();
    const t = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return MIN + t * SPAN;
  }

  function snapToEvent(year) {
    const target = pct(year);
    let nearest = null;
    let distance = 1.6;
    for (const event of visibleEvents()) {
      const d = Math.abs(pct(event.year) - target);
      if (d < distance) {
        distance = d;
        nearest = event;
      }
    }
    if (nearest) selectEvent(nearest.id, { pan: true });
  }

  el.axis.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    stopPlay();
    dragging = true;
    el.axis.classList.add("is-dragging");
    el.axis.setPointerCapture(event.pointerId);
    setYear(yearFromClientX(event.clientX));
    el.axis.focus({ preventScroll: true });
  });

  el.axis.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    setYear(yearFromClientX(event.clientX));
  });

  const endDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    el.axis.classList.remove("is-dragging");
    snapToEvent(yearFromClientX(event.clientX));
  };
  el.axis.addEventListener("pointerup", endDrag);
  el.axis.addEventListener("pointercancel", () => {
    dragging = false;
    el.axis.classList.remove("is-dragging");
  });

  const STEP_KEYS = ["ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown"];
  const ERA_KEYS = ["Home", "End", "PageUp", "PageDown"];

  /* Arrows steer the timeline from anywhere on the page. Home/End and
     PageUp/PageDown stay on the slider, so they never hijack page scrolling. */
  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
    if (el.lightbox.open) return;
    if (!STEP_KEYS.includes(event.key)) return;

    const target = event.target;
    const element = target instanceof Element ? target : null;
    if (element?.closest("input, textarea, select, [contenteditable='true'], #map")) return;

    const onAxis = Boolean(element?.closest("#axis"));
    if (!onAxis && ERA_KEYS.includes(event.key)) return;

    event.preventDefault();
    stopPlay();

    if (event.key === "ArrowLeft") stepEvent(-1);
    else if (event.key === "ArrowRight") stepEvent(1);
    else if (event.key === "Home") {
      const first = visibleEvents()[0];
      if (first) selectEvent(first.id);
    } else if (event.key === "End") {
      const all = visibleEvents();
      const last = all[all.length - 1];
      if (last) selectEvent(last.id);
    } else if (event.key === "PageUp") stepEra(-1);
    else if (event.key === "PageDown") stepEra(1);
  });

  /* ---------- controls ---------- */

  el.eventList.addEventListener("click", (event) => {
    const row = event.target.closest(".row");
    if (!row) return;
    stopPlay();
    selectEvent(row.dataset.id, { scroll: true });
  });

  el.filters.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    stopPlay();
    applyFilter(chip.dataset.kind);
  });

  el.play.addEventListener("click", togglePlay);
  el.prev.addEventListener("click", () => {
    stopPlay();
    stepEvent(-1);
  });
  el.next.addEventListener("click", () => {
    stopPlay();
    stepEvent(1);
  });

  el.featureThumbs.addEventListener("click", (event) => {
    const thumb = event.target.closest(".feature-thumb");
    if (!thumb) return;
    const feature = byId[state.featureId];
    if (feature) renderImage(feature, Number(thumb.dataset.index));
  });

  el.featureOpen.addEventListener("click", () => {
    const feature = byId[state.featureId];
    if (feature) openSlideshow(feature);
  });

  el.lightboxClose.addEventListener("click", () => el.lightbox.close());
  el.lightboxPrev.addEventListener("click", () => stepSlide(-1));
  el.lightboxNext.addEventListener("click", () => stepSlide(1));
  el.lightbox.addEventListener("click", (event) => {
    if (event.target === el.lightbox) el.lightbox.close();
  });
  el.lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepSlide(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      stepSlide(1);
    }
  });

  el.featureImg.addEventListener("load", () => {
    el.featureImg.classList.add("is-loaded");
  });

  window.addEventListener("resize", () => map.invalidateSize());

  /* ---------- init ---------- */

  buildAxis();
  const initial = byId[location.hash.slice(1)];
  selectEvent(initial ? initial.id : events[0].id, { pan: false });
})();
