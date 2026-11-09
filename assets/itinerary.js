/* Rome through time — first-visit itinerary.
   Two orders over the same chronicle data: by neighbourhood, or by age.
   Distances are straight-line sums multiplied by 1.3 for streets. */
(() => {
  "use strict";

  const { eras, events } = window.ROME;
  const byId = Object.fromEntries(events.map((event) => [event.id, event]));
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const KIND_LABEL = {
    history: "History",
    monument: "Monument",
    church: "Church",
    city: "City fabric",
  };

  /* Neighbourhood chapters. `ids` is the walking order, not chronology.
     A moment added to data.js but not listed here is inserted into its
     nearest chapter by proximity, so the itinerary never loses a point. */
  const PLACES = [
    {
      key: "ancient",
      name: "The ancient core",
      color: "#7a3b28",
      anchor: [41.8905, 12.4895],
      blurb:
        "The valley between the Palatine, Caelian and Esquiline holds the city’s oldest stories and its most famous building. The walk starts at the Colosseum, crosses the arches into the Forum and climbs the Palatine, then returns east to San Clemente and Nero’s palace.",
      note: "Metro B, Colosseo. The Colosseum, Forum and Palatine share one timed ticket.",
      ids: [
        "colosseum",
        "arch-of-constantine",
        "arch-of-titus",
        "founding-of-rome",
        "seven-hills",
        "fall-of-west",
        "forum-drained",
        "twelve-tables",
        "punic-wars",
        "basilica-of-maxentius",
        "appian-way",
        "san-clemente",
        "great-fire",
      ],
    },
    {
      key: "capitoline",
      name: "Capitoline and Monti",
      color: "#7a5510",
      anchor: [41.8945, 12.4865],
      blurb:
        "The Capitoline was the citadel, and the slope below it became the Forum’s political annexe. Most of the chapter’s moments crowd the same small hill; then the walk drops through the Imperial Fora to Trajan’s column and markets.",
      note: "Start at Piazza Venezia; check museum hours before building the day around them.",
      ids: [
        "republic-founded",
        "temple-jupiter-optimus",
        "santa-maria-aracoeli",
        "commune",
        "cola-di-rienzo",
        "republic-1798",
        "capitoline-museums",
        "gallic-sack",
        "gracchus",
        "forum-of-caesar",
        "forum-of-augustus",
        "trajan",
        "markets-of-trajan",
      ],
    },
    {
      key: "navona",
      name: "Navona and the Pantheon",
      color: "#2f5a72",
      anchor: [41.8985, 12.4755],
      blurb:
        "A dense square kilometre of temple, stadium and palace. Largo Argentina, Piazza Navona and the Pantheon sit within ten minutes of each other, with Sant’Ivo and the Column of Marcus Aurelius at the edges.",
      note: "No metro in the lanes; walk in from Largo Argentina or Spagna.",
      ids: [
        "caesar",
        "theatre-of-pompey",
        "four-rivers",
        "stadium-of-domitian",
        "sant-ivo",
        "pantheon",
        "pantheon-church",
        "marcus-column",
      ],
    },
    {
      key: "campo",
      name: "Campo Marzio and the Spanish Steps",
      color: "#4c5635",
      anchor: [41.9065, 12.4805],
      blurb:
        "Augustus built his mausoleum here, the popes laid out the tridente, and the Trevi Fountain closes the walk. Piazza del Popolo, the Ara Pacis and the Spanish Steps are the set pieces.",
      note: "Metro A, Spagna or Flaminio.",
      ids: [
        "piazza-del-popolo",
        "sack-1527",
        "augustus",
        "ara-pacis",
        "spanish-steps",
        "trevi",
      ],
    },
    {
      key: "vatican",
      name: "Vatican and Prati",
      color: "#71425f",
      anchor: [41.9035, 12.459],
      blurb:
        "Across the river, the world’s smallest state and the basilica over Peter’s grave. Castel Sant’Angelo anchors the east bank; the walk ends in Prati, where the nineteenth-century city meets the Vatican.",
      note: "Metro A, Ottaviano. Shoulders and knees covered at St Peter’s.",
      ids: [
        "castel-sant-angelo",
        "via-della-conciliazione",
        "st-peters-colonnade",
        "old-st-peters",
        "st-peters",
        "sistine",
        "charlemagne",
        "first-jubilee",
        "avignon",
        "prati-district",
      ],
    },
    {
      key: "trastevere",
      name: "Trastevere and the Janiculum",
      color: "#295f54",
      anchor: [41.8885, 12.468],
      blurb:
        "The quarter across the Tiber, with the basilica’s medieval mosaics and Bramante’s round temple on the Janiculum above it. Short, and best in the late afternoon.",
      note: "Tram 8 from Largo Argentina. The Janiculum is uphill.",
      ids: ["tempietto", "trastevere"],
    },
    {
      key: "aventine",
      name: "Aventine, Testaccio and the walls",
      color: "#8f4c24",
      anchor: [41.879, 12.481],
      blurb:
        "South of the Forum, the Baths of Caracalla, the Aurelian Walls and Testaccio’s artificial hill. This is the emptiest walk of the nine and the one with the most ancient masonry underfoot.",
      note: "Metro B, Circo Massimo, then walk south.",
      ids: ["caracalla", "aurelian-walls", "liberation", "sack-455", "testaccio"],
    },
    {
      key: "esquiline",
      name: "Esquiline, Lateran and the north-east",
      color: "#514f6e",
      anchor: [41.8925, 12.504],
      blurb:
        "East of Termini, where the aqueducts entered the city and the popes kept their cathedral. Porta Pia makes the modern state; the Lateran makes the papal city.",
      note: "Metro A, San Giovanni, for the Lateran; Repubblica and Castro Pretorio cover the north end.",
      ids: [
        "porta-pia",
        "alaric",
        "servian-wall",
        "diocletian",
        "sulla-march",
        "aqua-claudia",
        "edict-of-milan",
        "lateran-basilica",
        "lateran-treaty",
        "gregory-great",
      ],
    },
    {
      key: "beyond",
      name: "Beyond the centre",
      color: "#5f574d",
      anchor: [41.925, 12.465],
      blurb:
        "One moment outside the historic centre: the 1960 Olympic stadium in the Foro Italico, north of the Flaminio. A tram ride and a short walk; skip it if the days are full.",
      note: "Tram 2 from Flaminio, then a short walk; check the tram route before you set out.",
      ids: ["olympics"],
    },
  ];

  const $ = (id) => document.getElementById(id);
  const el = {
    toolbar: $("itToolbar"),
    switch: document.querySelector(".order-switch"),
    summary: $("itSummary"),
    explainer: $("itExplainer"),
    walks: $("itWalks"),
    map: $("itMap"),
    mapPane: document.querySelector(".it-map-pane"),
    caption: $("itMapCaption"),
    factMoments: $("factMoments"),
    factWalks: $("factWalks"),
    factAges: $("factAges"),
    factDistance: $("factDistance"),
  };

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));

  const metres = (a, b) => {
    const R = 6371000;
    const rad = Math.PI / 180;
    const dLat = (b.lat - a.lat) * rad;
    const dLng = (b.lng - a.lng) * rad;
    const lat1 = a.lat * rad;
    const lat2 = b.lat * rad;
    const h =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
  };

  const routeKm = (stops) => {
    let total = 0;
    for (let i = 1; i < stops.length; i += 1) total += metres(stops[i - 1], stops[i]);
    return (total * 1.3) / 1000;
  };

  const fmtKm = (km) => {
    if (km <= 0) return "0 m";
    if (km < 1) return `${Math.round((km * 1000) / 10) * 10} m`;
    return `${km.toFixed(1)} km`;
  };

  const legLabel = (a, b) => {
    const straight = metres(a, b);
    if (straight < 15) return "same site";
    const walked = straight * 1.3;
    if (walked < 1000) return `${Math.max(10, Math.round(walked / 10) * 10)} m`;
    return `${(walked / 1000).toFixed(1)} km`;
  };

  /* Nearest-neighbour walk that opens at the earliest moment, so a chapter
     begins where its period begins and then keeps the legs short. */
  function walkOrder(list) {
    if (list.length < 3) return [...list];
    const start = [...list].sort((a, b) => a.year - b.year || a.id.localeCompare(b.id))[0];
    const rest = list.filter((event) => event !== start);
    const ordered = [start];

    while (rest.length) {
      const last = ordered[ordered.length - 1];
      let best = 0;
      let bestDistance = Infinity;
      rest.forEach((event, index) => {
        const distance = metres(last, event);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      ordered.push(rest.splice(best, 1)[0]);
    }

    return ordered;
  }

  function insertByProximity(stops, event) {
    if (!stops.length) return [event];
    let bestIndex = stops.length;
    let bestCost = Infinity;

    for (let i = 0; i <= stops.length; i += 1) {
      const prev = i > 0 ? stops[i - 1] : null;
      const next = i < stops.length ? stops[i] : null;
      let cost = 0;
      if (prev) cost += metres(prev, event);
      if (next) cost += metres(next, event);
      if (prev && next) cost -= metres(prev, next);
      if (cost < bestCost) {
        bestCost = cost;
        bestIndex = i;
      }
    }

    stops.splice(bestIndex, 0, event);
    return stops;
  }

  function placeChapters() {
    const claimed = new Set();
    const chapters = PLACES.map((place) => {
      const stops = place.ids.map((id) => byId[id]).filter(Boolean);
      stops.forEach((event) => claimed.add(event.id));
      return { ...place, stops, range: null };
    });

    events
      .filter((event) => !claimed.has(event.id))
      .forEach((event) => {
        let best = 0;
        let bestDistance = Infinity;
        chapters.forEach((chapter, index) => {
          const distance = metres(event, {
            lat: chapter.anchor[0],
            lng: chapter.anchor[1],
          });
          if (distance < bestDistance) {
            bestDistance = distance;
            best = index;
          }
        });
        insertByProximity(chapters[best].stops, event);
      });

    return chapters.filter((chapter) => chapter.stops.length);
  }

  function ageChapters() {
    return eras
      .map((era) => ({
        key: era.id,
        name: era.name,
        color: era.color,
        range: era.range,
        blurb: era.blurb,
        note: null,
        stops: walkOrder(events.filter((event) => event.era === era.id)),
      }))
      .filter((chapter) => chapter.stops.length);
  }

  const placeTotal = placeChapters().reduce(
    (total, chapter) => total + routeKm(chapter.stops),
    0
  );

  /* ---------- map ---------- */

  let map = null;
  let layer = null;
  const markers = new Map();

  function initMap() {
    if (!window.L) {
      el.map.innerHTML =
        '<p class="it-map-fallback">The map needs a network connection. The walks below are complete without it.</p>';
      return null;
    }

    const instance = L.map("itMap", {
      zoomControl: false,
      scrollWheelZoom: false,
      zoomSnap: 0.5,
    }).setView([41.895, 12.482], 14);

    const attribution =
      'Tiles &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri</a> — Esri, HERE, Garmin, &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors';

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 19, maxNativeZoom: 16, attribution }
    ).addTo(instance);

    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 19, maxNativeZoom: 16 }
    ).addTo(instance);

    L.control.zoom({ position: "bottomright" }).addTo(instance);

    return instance;
  }

  function pinIcon(number, color) {
    return L.divIcon({
      className: "it-pin-wrap",
      html: `<span class="it-pin" style="--c:${color}">${number}</span>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
    });
  }

  /* Events within about a hundred metres share a dial, so numbers stay
     clickable even where several moments crowd one site. */
  function displayPoints(stops) {
    const groups = [];
    stops.forEach((stop, index) => {
      const group = groups.find((candidate) => {
        const anchor = stops[candidate[0]];
        return (
          Math.abs(anchor.lat - stop.lat) < 0.00075 &&
          Math.abs(anchor.lng - stop.lng) < 0.0009
        );
      });
      if (group) group.push(index);
      else groups.push([index]);
    });

    const points = stops.map((stop) => [stop.lat, stop.lng]);

    groups.forEach((indices) => {
      if (indices.length < 2) return;
      const radius = Math.min(0.0007, 0.00016 + indices.length * 0.00012);
      indices.forEach((stopIndex, i) => {
        const angle = (i / indices.length) * Math.PI * 2 - Math.PI / 2;
        points[stopIndex] = [
          stops[stopIndex].lat + Math.sin(angle) * radius,
          stops[stopIndex].lng + Math.cos(angle) * radius,
        ];
      });
    });

    return points;
  }

  function drawChapter(chapter) {
    if (!map) return;
    if (!layer) layer = L.layerGroup().addTo(map);

    layer.clearLayers();
    markers.clear();

    const truePoints = chapter.stops.map((stop) => [stop.lat, stop.lng]);
    const points = displayPoints(chapter.stops);

    if (truePoints.length > 1) {
      L.polyline(truePoints, {
        color: chapter.color,
        weight: 2,
        opacity: 0.7,
        dashArray: "1 7",
        lineCap: "round",
      }).addTo(layer);
    }

    chapter.stops.forEach((stop, index) => {
      const label = `${index + 1}. ${stop.title} — ${stop.place}`;
      const marker = L.marker(points[index], {
        icon: pinIcon(index + 1, chapter.color),
        title: label,
        riseOnHover: true,
      });

      marker.addTo(layer);
      const node = marker.getElement();
      if (node) node.setAttribute("aria-label", label);
      marker.on("click", () => openStop(stop.id, { scroll: true, toggle: false }));
      markers.set(stop.id, marker);
    });

    const bounds = L.latLngBounds(truePoints);
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [38, 38], maxZoom: 16, animate: false });
    }
  }

  /* ---------- render ---------- */

  const state = {
    order: new URLSearchParams(location.search).get("by") === "age" ? "age" : "place",
    chapters: [],
    current: null,
    selected: null,
  };

  let spyPause = 0;

  function chapterKicker(chapter, index) {
    const count = `${chapter.stops.length} stop${chapter.stops.length === 1 ? "" : "s"}`;
    const distance =
      chapter.stops.length > 1 ? ` · est. ${fmtKm(routeKm(chapter.stops))}` : "";
    if (state.order === "age") {
      return `Age ${index + 1} · ${esc(chapter.range)} · ${count}${distance}`;
    }
    return `Walk ${index + 1} · ${count}${distance}`;
  }

  function chapterNote(chapter) {
    if (chapter.note) return chapter.note;
    if (state.order === "age" && routeKm(chapter.stops) > 8) {
      return "This age is spread across the city; use the metro or a tram for the long legs.";
    }
    return null;
  }

  function stopHtml(event, index) {
    const image = (event.images || [])[0];
    const guide = event.guide
      ? `<a href="${esc(event.guide.href)}">Full guide: ${esc(event.guide.name)} <span aria-hidden="true">→</span></a>`
      : "";

    const figure = image
      ? `<figure class="it-stop-figure">
          <img src="assets/img/${esc(image.img)}.jpg" alt="${esc(image.alt)}" loading="lazy" decoding="async">
          <figcaption><a href="${esc(image.credit.url)}" target="_blank" rel="noopener">${esc(image.credit.name)}</a> · ${esc(image.credit.license)} · Wikimedia Commons</figcaption>
        </figure>`
      : "";

    return `<li class="it-stop" data-id="${esc(event.id)}">
      <button type="button" class="it-stop-head" aria-expanded="false" aria-controls="stop-${esc(event.id)}">
        <span class="it-stop-num">${String(index + 1).padStart(2, "0")}</span>
        <span class="it-stop-text">
          <span class="it-stop-title">${esc(event.title)}</span>
          <span class="it-stop-place">${esc(event.place)}</span>
        </span>
        <span class="it-stop-year">${esc(event.label)}</span>
        <span class="it-kind" data-kind="${esc(event.kind)}"><span class="sr-only">${esc(KIND_LABEL[event.kind] || event.kind)}</span></span>
        <svg class="it-chev" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" focusable="false"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="it-stop-detail" id="stop-${esc(event.id)}" hidden>
        ${figure}
        <p>${esc(event.blurb)}</p>
        <p class="it-stop-links">
          <a href="index.html#${esc(event.id)}">Open in the chronicle <span aria-hidden="true">→</span></a>
          ${guide}
        </p>
      </div>
    </li>`;
  }

  function chapterHtml(chapter, index) {
    const note = chapterNote(chapter);
    const rows = [];

    chapter.stops.forEach((stop, stopIndex) => {
      rows.push(stopHtml(stop, stopIndex));
      if (stopIndex < chapter.stops.length - 1) {
        rows.push(
          `<li class="it-leg" aria-hidden="true">${legLabel(stop, chapter.stops[stopIndex + 1])}</li>`
        );
      }
    });

    return `<section class="it-walk" data-key="${esc(chapter.key)}" aria-labelledby="walk-${esc(chapter.key)}">
      <header class="it-walk-head">
        <div>
          <p class="it-walk-kicker">${chapterKicker(chapter, index)}</p>
          <h2 id="walk-${esc(chapter.key)}"><span class="it-walk-dot" style="--c:${chapter.color}" aria-hidden="true"></span>${esc(chapter.name)}</h2>
          <p class="it-walk-blurb">${esc(chapter.blurb)}</p>
          ${note ? `<p class="it-walk-note">${esc(note)}</p>` : ""}
        </div>
        <button type="button" class="it-walk-map" data-key="${esc(chapter.key)}" aria-label="Show ${esc(chapter.name)} on the map">Show on map</button>
      </header>
      <ol class="it-stops">${rows.join("")}</ol>
    </section>`;
  }

  function updateToolbar() {
    el.switch.querySelectorAll("button[data-order]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.order === state.order));
    });

    const count = `${state.chapters.length} ${state.order === "age" ? "ages" : "walks"} · ${events.length} moments`;
    el.summary.textContent =
      state.order === "age"
        ? `${count} · one chapter per age`
        : `${count} · about ${Math.round(placeTotal)} km on foot`;

    el.explainer.textContent =
      state.order === "age"
        ? "Seven chapters, one for each age of the city, in order. Each opens at its earliest moment and then takes the nearest next stop, so a period is explored area by area rather than by zigzagging between dates."
        : "Nine areas, each a compact walk. The stops are in walking order, with the distance to the next stop marked between them. Start anywhere; the order inside a chapter is a suggestion, not a schedule.";
  }

  function updateFacts() {
    el.factMoments.textContent = String(events.length);
    el.factWalks.textContent = String(PLACES.length);
    el.factAges.textContent = String(eras.length);
    el.factDistance.textContent = `≈ ${Math.round(placeTotal)} km`;
  }

  function activate(key, options = {}) {
    const chapter = state.chapters.find((item) => item.key === key);
    if (!chapter) return;

    const changed = state.current !== key;
    state.current = key;

    if (
      changed &&
      state.selected &&
      !chapter.stops.some((stop) => stop.id === state.selected)
    ) {
      closeStops();
    }

    el.caption.textContent = `${
      state.order === "age" ? "Age" : "Walk"
    } ${state.chapters.indexOf(chapter) + 1} · ${chapter.name}`;

    el.walks.querySelectorAll(".it-walk").forEach((section) => {
      section.classList.toggle("is-current", section.dataset.key === key);
    });

    if (changed || options.fit) drawChapter(chapter);
  }

  const SPY = window.matchMedia("(min-width: 1121px)");
  let ticking = false;

  function syncChapterToScroll() {
    if (!SPY.matches || performance.now() < spyPause) return;
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      ticking = false;
      const threshold = window.innerHeight * 0.42;
      let active = state.chapters[0];

      el.walks.querySelectorAll(".it-walk").forEach((section) => {
        if (section.getBoundingClientRect().top <= threshold) {
          active =
            state.chapters.find((chapter) => chapter.key === section.dataset.key) || active;
        }
      });

      if (active) activate(active.key);
    });
  }

  function render() {
    state.chapters = state.order === "age" ? ageChapters() : placeChapters();
    state.current = null;
    state.selected = null;

    updateToolbar();
    el.walks.innerHTML = state.chapters.map(chapterHtml).join("");
    syncChapterToScroll();

    if (state.chapters[0]) activate(state.chapters[0].key, { fit: true });
  }

  /* ---------- stop details ---------- */

  function highlightMarker(id) {
    markers.forEach((marker, key) => {
      const pin = marker.getElement()?.querySelector(".it-pin");
      if (pin) pin.classList.toggle("is-active", key === id);
    });
  }

  function closeStops() {
    el.walks.querySelectorAll(".it-stop-detail").forEach((detail) => {
      detail.hidden = true;
    });
    el.walks.querySelectorAll(".it-stop-head").forEach((head) => {
      head.setAttribute("aria-expanded", "false");
    });
    highlightMarker(null);
    state.selected = null;
  }

  function openStop(id, options = {}) {
    const stop = el.walks.querySelector(`.it-stop[data-id="${CSS.escape(id)}"]`);
    if (!stop) return;

    const detail = stop.querySelector(".it-stop-detail");
    const head = stop.querySelector(".it-stop-head");

    if (options.toggle !== false && !detail.hidden) {
      closeStops();
      return;
    }

    closeStops();
    detail.hidden = false;
    head.setAttribute("aria-expanded", "true");
    state.selected = id;

    const event = byId[id];
    const chapter = state.chapters.find((item) =>
      item.stops.some((stopEvent) => stopEvent.id === id)
    );
    if (chapter) activate(chapter.key, { fit: false });
    highlightMarker(id);

    if (map && event) {
      map.panInside([event.lat, event.lng], { padding: [90, 90], animate: !REDUCED });
    }

    if (options.scroll) {
      spyPause = performance.now() + 900;
      stop.scrollIntoView({ block: "center", behavior: REDUCED ? "auto" : "smooth" });
    }
  }

  /* ---------- controls ---------- */

  function syncUrl() {
    const url = new URL(location.href);
    if (state.order === "age") url.searchParams.set("by", "age");
    else url.searchParams.delete("by");
    history.replaceState(null, "", url);
  }

  function setOrder(order) {
    if (order === state.order) return;
    state.order = order;
    syncUrl();
    render();

    if (window.scrollY > 160) {
      const hero = document.querySelector(".it-hero");
      spyPause = performance.now() + 700;
      window.scrollTo({
        top: hero.offsetTop + hero.offsetHeight,
        behavior: REDUCED ? "auto" : "smooth",
      });
    }
  }

  el.switch.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-order]");
    if (button) setOrder(button.dataset.order);
  });

  el.walks.addEventListener("click", (event) => {
    const head = event.target.closest(".it-stop-head");
    if (head) {
      openStop(head.closest(".it-stop").dataset.id);
      return;
    }

    const mapButton = event.target.closest(".it-walk-map");
    if (mapButton) {
      const section = mapButton.closest(".it-walk");
      activate(mapButton.dataset.key, { fit: true });

      if (window.matchMedia("(min-width: 1121px)").matches) {
        spyPause = performance.now() + 900;
        section.scrollIntoView({
          block: "start",
          behavior: REDUCED ? "auto" : "smooth",
        });
      } else {
        el.mapPane.scrollIntoView({ block: "start", behavior: REDUCED ? "auto" : "smooth" });
      }
    }
  });

  window.addEventListener("scroll", syncChapterToScroll, { passive: true });

  window.addEventListener("resize", () => {
    if (map) map.invalidateSize();
    if (SPY.matches) syncChapterToScroll();
  });

  /* ---------- init ---------- */

  updateFacts();
  map = initMap();
  render();
})();
