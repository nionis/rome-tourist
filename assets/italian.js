/* Rome through time - Italian hundred: list, saves, quiz */
(() => {
  "use strict";

  const data = window.ITALIAN;
  if (!data || !Array.isArray(data.words) || !Array.isArray(data.groups)) return;

  const words = data.words;
  const groups = data.groups;
  const byId = new Map(words.map((word) => [word.it, word]));

  const STORAGE_SAVED = "rome-italian-saved-v1";
  const STORAGE_BEST = "rome-italian-best-v1";
  const ROUND_SIZE = 10;

  const speechOK =
    typeof window.speechSynthesis !== "undefined" &&
    typeof window.SpeechSynthesisUtterance !== "undefined";

  const SPEAKER_SVG =
    '<svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true" focusable="false"><path d="M3.5 7.5h3l4-3v11l-4-3h-3z" fill="currentColor"/><path d="M13 7c1.1 1 1.1 5 0 6M15.3 5c2.2 2 2.2 8 0 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';

  const BOOKMARK_SVG =
    '<svg viewBox="0 0 20 20" width="12" height="12" aria-hidden="true" focusable="false"><path d="M5.5 3.5h9v13l-4.5-3-4.5 3z" stroke-linejoin="round"/></svg>';

  const esc = (value) =>
    String(value).replace(/[&<>"']/g, (character) => {
      const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
      return map[character];
    });

  const norm = (value) =>
    String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  /* ---------- storage ---------- */

  let saved = (() => {
    try {
      const raw = localStorage.getItem(STORAGE_SAVED);
      const list = raw ? JSON.parse(raw) : [];
      return new Set(Array.isArray(list) ? list.filter((id) => byId.has(id)) : []);
    } catch {
      return new Set();
    }
  })();

  let bestEver = (() => {
    try {
      return Math.max(0, parseInt(localStorage.getItem(STORAGE_BEST), 10) || 0);
    } catch {
      return 0;
    }
  })();

  const persistSaved = () => {
    try {
      localStorage.setItem(STORAGE_SAVED, JSON.stringify([...saved]));
    } catch {
      /* Storage can be unavailable; the page still works for this session. */
    }
  };

  const persistBest = () => {
    try {
      localStorage.setItem(STORAGE_BEST, String(bestEver));
    } catch {
      /* ignore */
    }
  };

  /* ---------- speech ---------- */

  let italianVoice = null;

  const pickVoice = () => {
    if (!speechOK) return;
    const voices = window.speechSynthesis.getVoices();
    italianVoice = voices.find((voice) => /^it(-|_)/i.test(voice.lang)) || null;
  };

  const speak = (text) => {
    if (!speechOK || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "it-IT";
    utterance.rate = 0.86;
    if (italianVoice) utterance.voice = italianVoice;
    window.speechSynthesis.speak(utterance);
  };

  if (speechOK) {
    pickVoice();
    if (typeof window.speechSynthesis.addEventListener === "function") {
      window.speechSynthesis.addEventListener("voiceschanged", pickVoice);
    }
  }

  /* ---------- elements ---------- */

  const $ = (selector) => document.querySelector(selector);

  const wordGroupsEl = $("#wordGroups");
  const wordSearch = $("#wordSearch");
  const groupChips = $("#groupChips");
  const wordCount = $("#wordCount");
  const noWords = $("#noWords");
  const clearFilters = $("#clearFilters");

  const savedList = $("#savedList");
  const savedEmpty = $("#savedEmpty");
  const savedCount = $("#savedCount");
  const savedSectionCount = $("#savedSectionCount");
  const practiceSaved = $("#practiceSaved");
  const clearSaved = $("#clearSaved");

  const gameMount = $("#gameMount");
  const gameStatus = $("#gameStatus");
  const gameScore = $("#gameScore");
  const gameStreak = $("#gameStreak");
  const gameBest = $("#gameBest");
  const gameSetup = $("#gameSetup");
  const sourceAll = $("#sourceAll");
  const sourceSaved = $("#sourceSaved");
  const sourceSavedCount = $("#sourceSavedCount");
  const modeItEn = $("#modeItEn");
  const modeEnIt = $("#modeEnIt");
  const startGame = $("#startGame");

  const quiz = $("#quiz");
  const quizProgress = $("#quizProgress");
  const quizBar = $("#quizBar");
  const quizLabel = $("#quizLabel");
  const quizPrompt = $("#quizPrompt");
  const quizListen = $("#quizListen");
  const quizOptions = $("#quizOptions");
  const quizFeedback = $("#quizFeedback");
  const quizNext = $("#quizNext");
  const quizSave = $("#quizSave");
  const quizSummary = $("#quizSummary");

  /* ---------- word list ---------- */

  const optionLabel = (word) => (gameMode === "it-en" ? word.en : word.it);

  const wordRow = (word, action) => {
    const row = document.createElement("li");
    row.className = "word";
    row.dataset.group = word.group;
    row.dataset.search = norm(
      [word.it, word.en, word.ipa, word.say, word.pos].join(" ")
    );

    const isSaved = saved.has(word.it);
    const listen = speechOK
      ? `<button type="button" class="listen-btn" data-say="${esc(word.it)}" aria-label="Hear “${esc(word.it)}”">${SPEAKER_SVG}</button>`
      : "";

    const actionButton =
      action === "remove"
        ? `<button type="button" class="save-btn remove" data-remove="${esc(word.it)}" aria-label="Remove ${esc(word.it)} from saved words"><span class="save-label">Remove</span></button>`
        : `<button type="button" class="save-btn" data-save="${esc(word.it)}" aria-pressed="${isSaved}" data-on-label="Saved" data-off-label="Save">${BOOKMARK_SVG}<span class="save-label">${isSaved ? "Saved" : "Save"}</span></button>`;

    row.innerHTML = `
      <div class="word-main">
        <p class="word-it" lang="it">${esc(word.it)}<span class="word-pos">${esc(word.pos)}</span></p>
        <p class="word-ex"><span lang="it">${esc(word.example.it)}</span> <span class="word-ex-en">— ${esc(word.example.en)}</span></p>
        ${word.note ? `<p class="word-note">${esc(word.note)}</p>` : ""}
      </div>
      <p class="word-en">${esc(word.en)}</p>
      <div class="word-say">
        <span class="word-ipa">${esc(word.ipa)}</span>
        <span class="word-respell">${esc(word.say)}</span>
        ${listen}
      </div>
      ${actionButton}
    `;

    return row;
  };

  const renderWordGroups = () => {
    const fragment = document.createDocumentFragment();

    groups.forEach((group) => {
      const items = words.filter((word) => word.group === group.id);
      const block = document.createElement("section");
      block.className = "word-group-block";
      block.dataset.group = group.id;
      block.innerHTML = `
        <div class="word-group-head">
          <h3>${esc(group.name)}</h3>
          <span class="word-group-count">${items.length} words</span>
        </div>
        <p class="group-note">${esc(group.note)}</p>
        <ul class="word-list"></ul>
      `;

      const list = block.querySelector(".word-list");
      items.forEach((word) => list.appendChild(wordRow(word, "save")));
      fragment.appendChild(block);
    });

    wordGroupsEl.replaceChildren(fragment);
  };

  const renderChips = () => {
    const entries = [
      { id: "all", name: "All", count: words.length },
      ...groups.map((group) => ({
        id: group.id,
        name: group.name,
        count: words.filter((word) => word.group === group.id).length
      }))
    ];

    groupChips.innerHTML = entries
      .map(
        (entry) =>
          `<button type="button" class="group-chip" data-chip="${entry.id}" aria-pressed="${entry.id === "all"}">${esc(entry.name)}<span class="chip-n">${entry.count}</span></button>`
      )
      .join("");
  };

  let activeGroup = "all";

  const applyFilter = () => {
    const query = norm(wordSearch.value.trim());
    let shown = 0;

    wordGroupsEl.querySelectorAll(".word").forEach((row) => {
      const groupMatch = activeGroup === "all" || row.dataset.group === activeGroup;
      const textMatch = !query || row.dataset.search.includes(query);
      const visible = groupMatch && textMatch;
      row.hidden = !visible;
      if (visible) shown += 1;
    });

    wordGroupsEl.querySelectorAll(".word-group-block").forEach((block) => {
      block.hidden = !block.querySelector(".word:not([hidden])");
    });

    wordCount.textContent = `Showing ${shown} of ${words.length} words`;
    noWords.hidden = shown !== 0;
  };

  /* ---------- saved ---------- */

  const syncSaveButtons = () => {
    document.querySelectorAll("[data-save]").forEach((button) => {
      const id = button.dataset.save;
      if (!id) return;
      const on = saved.has(id);
      button.setAttribute("aria-pressed", String(on));
      const label = button.querySelector(".save-label");
      if (label) {
        label.textContent = on
          ? button.dataset.onLabel || "Saved"
          : button.dataset.offLabel || "Save";
      }
    });
  };

  const renderSaved = () => {
    const items = words.filter((word) => saved.has(word.it));

    savedList.replaceChildren(...items.map((word) => wordRow(word, "remove")));
    savedList.hidden = items.length === 0;
    savedEmpty.hidden = items.length > 0;
    practiceSaved.disabled = items.length === 0;
    clearSaved.hidden = items.length === 0;
    savedCount.textContent = String(items.length);
    savedSectionCount.textContent = String(items.length);
    sourceSavedCount.textContent = String(items.length);
    sourceSaved.disabled = items.length === 0;

    if (items.length === 0 && gameSource === "saved") setSource("all");

    syncSaveButtons();
  };

  const toggleSaved = (id) => {
    if (!byId.has(id)) return;
    if (saved.has(id)) saved.delete(id);
    else saved.add(id);
    persistSaved();
    renderSaved();
  };

  /* ---------- game ---------- */

  let gameSource = "all";
  let gameMode = "it-en";
  let round = null;

  const setStatus = (message) => {
    gameStatus.textContent = message;
  };

  const updateScores = () => {
    gameScore.textContent = String(round ? round.score : 0);
    gameStreak.textContent = String(round ? round.streak : 0);
    gameBest.textContent = String(bestEver);
  };

  const setSource = (source) => {
    if (source === "saved" && saved.size === 0) {
      setStatus("Save a word first, then you can practise the saved deck.");
      return;
    }
    gameSource = source;
    sourceAll.setAttribute("aria-pressed", String(source === "all"));
    sourceSaved.setAttribute("aria-pressed", String(source === "saved"));
  };

  const setMode = (mode) => {
    gameMode = mode;
    modeItEn.setAttribute("aria-pressed", String(mode === "it-en"));
    modeEnIt.setAttribute("aria-pressed", String(mode === "en-it"));
  };

  const buildOptions = (word) => {
    const options = [word];
    const seen = new Set([optionLabel(word)]);

    shuffle(words.slice()).forEach((candidate) => {
      if (options.length >= 4) return;
      if (candidate.it === word.it) return;
      const label = optionLabel(candidate);
      if (seen.has(label)) return;
      seen.add(label);
      options.push(candidate);
    });

    return shuffle(options);
  };

  const showQuestion = () => {
    const question = round.questions[round.index];
    const word = question.word;
    const italianPrompt = gameMode === "it-en";

    round.answered = false;

    quizProgress.textContent = `Question ${round.index + 1} of ${round.questions.length}`;
    quizBar.style.width = `${(round.index / round.questions.length) * 100}%`;
    quizLabel.textContent = italianPrompt
      ? "What does this mean?"
      : "Which Italian word means…?";
    quizPrompt.textContent = italianPrompt ? word.it : word.en;
    if (italianPrompt) quizPrompt.setAttribute("lang", "it");
    else quizPrompt.removeAttribute("lang");

    quizListen.hidden = !italianPrompt || !speechOK;
    quizListen.dataset.say = word.it;
    quizListen.setAttribute("aria-label", `Hear “${word.it}”`);

    quizOptions.replaceChildren();
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.dataset.it = option.it;
      if (!italianPrompt) button.setAttribute("lang", "it");
      button.innerHTML = `<span class="key" aria-hidden="true">${index + 1}</span><span>${esc(optionLabel(option))}</span>`;
      button.addEventListener("click", () => answer(option, button));
      quizOptions.appendChild(button);
    });

    quizFeedback.textContent = "";
    quizFeedback.className = "quiz-feedback";
    quizNext.hidden = true;
    quizSave.hidden = true;
    quizSave.dataset.save = "";
    quizPrompt.focus();
  };

  const answer = (chosen, chosenButton) => {
    if (!round || round.answered) return;

    const question = round.questions[round.index];
    const word = question.word;
    const correct = chosen.it === word.it;

    round.answered = true;

    const buttons = [...quizOptions.querySelectorAll(".quiz-option")];
    buttons.forEach((button) => {
      button.disabled = true;
      if (button.dataset.it === word.it) button.classList.add("is-correct");
    });
    if (!correct) chosenButton.classList.add("is-wrong");

    if (correct) {
      round.score += 1;
      round.streak += 1;
      round.best = Math.max(round.best, round.streak);
      if (round.streak > bestEver) {
        bestEver = round.streak;
        persistBest();
      }
    } else {
      round.streak = 0;
      round.missed.push(word);
    }

    updateScores();

    quizFeedback.className = `quiz-feedback ${correct ? "is-correct" : "is-wrong"}`;
    quizFeedback.innerHTML = `${
      correct ? "<b>Correct.</b>" : "<b>Not quite.</b>"
    } <span class="feedback-word" lang="it">${esc(word.it)}</span> — ${esc(word.en)}.
      <span class="feedback-say">${esc(word.ipa)} · ${esc(word.say)}</span>`;

    quizSave.hidden = false;
    quizSave.dataset.save = word.it;
    quizSave.dataset.onLabel = "Saved";
    quizSave.dataset.offLabel = "Save this word";
    syncSaveButtons();

    quizNext.hidden = false;
    quizNext.textContent =
      round.index + 1 >= round.questions.length ? "See the summary" : "Next question";
    quizBar.style.width = `${((round.index + 1) / round.questions.length) * 100}%`;
    quizNext.focus();
  };

  const finishRound = () => {
    const total = round.questions.length;
    const missed = round.missed;

    quiz.hidden = true;
    gameSetup.hidden = true;
    quizSummary.hidden = false;
    setStatus(`Round complete: ${round.score} out of ${total}.`);

    quizSummary.innerHTML = `
      <p class="summary-kicker">Round complete</p>
      <p class="summary-score">${round.score}<span> / ${total}</span></p>
      <p class="summary-line">Best streak this round: ${round.best} · Best ever: ${bestEver}</p>
      ${
        missed.length
          ? `<h3>Words to keep</h3><ul class="missed-list">${missed
              .map(
                (word) => `
            <li class="missed-item">
              <p class="missed-word" lang="it">${esc(word.it)}<span>${esc(word.en)}</span></p>
              <p class="missed-say">${esc(word.ipa)} · ${esc(word.say)}</p>
              <button type="button" class="save-btn" data-save="${esc(word.it)}" aria-pressed="${saved.has(word.it)}" data-on-label="Saved" data-off-label="Save">${BOOKMARK_SVG}<span class="save-label">${saved.has(word.it) ? "Saved" : "Save"}</span></button>
            </li>`
              )
              .join("")}</ul>`
          : '<p class="summary-clean">Clean round — nothing missed.</p>'
      }
      <div class="quiz-actions">
        <button type="button" class="italian-btn primary" data-act="again">Play again</button>
        <button type="button" class="italian-btn" data-act="setup">Change settings</button>
      </div>
    `;

    syncSaveButtons();
    quizSummary.focus();
  };

  const startRound = () => {
    const pool =
      gameSource === "saved" ? words.filter((word) => saved.has(word.it)) : words.slice();

    if (pool.length === 0) {
      setStatus("Nothing saved yet. Save a word first.");
      return;
    }

    const chosen = shuffle(pool).slice(0, Math.min(ROUND_SIZE, pool.length));

    round = {
      questions: chosen.map((word) => ({ word, options: buildOptions(word) })),
      index: 0,
      score: 0,
      streak: 0,
      best: 0,
      missed: [],
      answered: false
    };

    gameSetup.hidden = true;
    quizSummary.hidden = true;
    quiz.hidden = false;
    updateScores();
    setStatus(`Round in progress — ${round.questions.length} questions.`);
    showQuestion();
  };

  /* ---------- events ---------- */

  wordSearch.addEventListener("input", applyFilter);

  groupChips.addEventListener("click", (event) => {
    const chip = event.target.closest(".group-chip");
    if (!chip) return;
    activeGroup = chip.dataset.chip;
    groupChips.querySelectorAll(".group-chip").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === chip));
    });
    applyFilter();
  });

  clearFilters.addEventListener("click", () => {
    activeGroup = "all";
    wordSearch.value = "";
    groupChips.querySelectorAll(".group-chip").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.chip === "all"));
    });
    applyFilter();
    wordSearch.focus();
  });

  sourceAll.addEventListener("click", () => setSource("all"));
  sourceSaved.addEventListener("click", () => setSource("saved"));
  modeItEn.addEventListener("click", () => setMode("it-en"));
  modeEnIt.addEventListener("click", () => setMode("en-it"));
  startGame.addEventListener("click", startRound);
  quizNext.addEventListener("click", () => {
    if (!round || !round.answered) return;
    round.index += 1;
    if (round.index >= round.questions.length) finishRound();
    else showQuestion();
  });

  quizSummary.addEventListener("click", (event) => {
    const action = event.target.closest("[data-act]");
    if (!action) return;
    if (action.dataset.act === "again") {
      startRound();
      return;
    }
    quizSummary.hidden = true;
    gameSetup.hidden = false;
    setStatus("Ready when you are.");
    startGame.focus();
  });

  practiceSaved.addEventListener("click", () => {
    if (saved.size === 0) return;
    setSource("saved");
    startRound();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $("#game").scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start"
    });
  });

  clearSaved.addEventListener("click", () => {
    if (saved.size === 0) return;
    if (!window.confirm("Remove all saved words? This cannot be undone.")) return;
    saved.clear();
    persistSaved();
    renderSaved();
    setStatus("Saved words cleared.");
  });

  gameMount.addEventListener("keydown", (event) => {
    if (!round || round.answered || quiz.hidden) return;
    if (event.key >= "1" && event.key <= "4") {
      const button = quizOptions.children[Number(event.key) - 1];
      if (button) {
        event.preventDefault();
        button.click();
      }
    }
  });

  document.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-say]");
    if (speakButton) {
      speak(speakButton.dataset.say);
      return;
    }

    const saveButton = event.target.closest("[data-save]");
    if (saveButton && saveButton.dataset.save) {
      toggleSaved(saveButton.dataset.save);
      return;
    }

    const removeButton = event.target.closest("[data-remove]");
    if (removeButton) {
      saved.delete(removeButton.dataset.remove);
      persistSaved();
      renderSaved();
    }
  });

  /* ---------- init ---------- */

  if (!speechOK) {
    document.querySelectorAll(".listen-btn").forEach((button) => {
      button.hidden = true;
    });
  }

  renderWordGroups();
  renderChips();
  renderSaved();
  updateScores();
  applyFilter();
})();
