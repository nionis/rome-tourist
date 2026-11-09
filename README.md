# rome-tourist

An interactive chronicle of Rome: an eras-of-the-city map with sixty-eight moments, long-form guides to the Colosseum, St Peter's Basilica and the Pantheon, a first-visit itinerary, and a hundred-word Italian phrasebook with a quiz.

Static HTML, CSS and JavaScript — no build step.

**Live:** https://nionis.github.io/rome-tourist/

## Run locally

```sh
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

Needs a network connection for the Leaflet basemap; everything else is local.

## Pages

| Page | What it is |
|---|---|
| `index.html` | Map, timeline, era overlays and the sixty-eight moments |
| `colosseum.html` | Long-form guide to the amphitheatre |
| `st-peters.html` | Long-form guide to St Peter's Basilica |
| `pantheon.html` | Long-form guide to the Pantheon |
| `itinerary.html` | First-visit itinerary, by neighbourhood or by age |
| `italian.html` | Hundred-word phrasebook, quiz and saved words |

Content lives in `assets/data.js` (`window.ROME`) and `assets/italian-data.js` (`window.ITALIAN`); page behaviour in `assets/app.js`, `assets/itinerary.js` and `assets/italian.js`.

## Images and sources

Photographs are from Wikimedia Commons, resized to 1100 px, with per-file credits in `assets/img/credits.json` and shown under each photo. Historical facts follow the standard references listed in `AGENTS.md`.

See `AGENTS.md` for the content model, conventions and full project notes.
