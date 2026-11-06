# AGENTS.md

## Purpose of this repository

Research workspace for a short trip to Rome, and the source of a single-page interactive chronicle of the city: a map of the historic centre, a timeline across seven ages, and a short brief with photographs for each of sixty-eight moments, and long-form guides to the Colosseum, St Peter's Basilica and the Pantheon.

There is no build system, package manager, or test suite. The site is plain HTML, CSS, and JavaScript.

This file is also the project's factual baseline. Material added here must stay consistent with it, and this file must be corrected when a better source contradicts it.

## The website

```
index.html          page shell: header, map, panel, timeline
colosseum.html      long-form guide to the amphitheatre
st-peters.html      long-form guide to St Peter's Basilica
pantheon.html       long-form guide to the Pantheon
assets/styles.css   all styling (paper/ink palette, serif display type)
assets/guide.css    shared styling for the three guide pages
assets/guide.js     section-nav scrollspy for the guide pages
assets/data.js      window.ROME = { eras, events } — the only content source
assets/app.js       Leaflet map, timeline, filters, overlays and playback logic
assets/img/         136 chronicle photographs + guide images, 1100 px wide, with credits.json
```

Run it with any static server:

```sh
python3 -m http.server 8765
# open http://127.0.0.1:8765/
```

Opening `index.html` directly also works, but a server is the reliable path.

**Dependencies (CDN, no install):** Leaflet 1.9.4 from unpkg with SRI hashes; Fraunces and Inter from Google Fonts; Esri World Light Gray basemap tiles. The basemap needs a network connection; images, text, and layout are local.

**Content model.** `assets/data.js` is the single source of truth:

- `eras[]` — `id`, `name`, `short`, `start`/`end` (negative years are BC), `range`, `color`, `blurb`, and `overlay`.
- `events[]` — `id`, `era`, `kind` (`history` | `monument` | `church` | `city`), `year` (numeric, used for ordering and the timeline), `label` (display string, e.g. `"c. AD 125"`), `title`, `place`, `lat`, `lng`, `blurb`, `images[]`, and an optional `guide` `{ href, name }`. Each image is `{ img, alt, credit }`, with `img` a slug under `assets/img/` and `credit` `{ name, license, url }`. The first image is the primary; every moment carries at least two, and the feature card lets the reader switch between them. When `guide` is present, the feature card links to that long-form page.

**Era overlays.** Each era's `overlay` is drawn on the basemap as a schematic reconstruction:

- `note` — the one-line explanation shown in the map legend.
- `extent[]` — polygons with `name`, `tone` (`urban` | `new` | `sparse` | `abandoned`) and `coords` (`[lat, lng]` rings). Abandoned and sparse shapes are drawn under `urban` ones.
- `walls[]` — polylines with `name` and `coords`.
- `lines[]` — polylines with `name`, `kind` (`aqueduct` | `street` | `road`) and `coords`.
- `marks[]` — circles with `name`, `lat`, `lng` (used for the founding-era hill settlements).

The geometry is deliberately approximate, derived from standard historical maps of the Servian and Aurelian circuits, the medieval *abitato*/*disabitato*, and the post-1870 districts. Never present it as survey data. The "Era overlay" button on the map toggles the whole layer.

`app.js` builds the timeline from era spans, places event dots by year, fits the map to the selected era, draws that era's reconstruction, fans out pins that share a site, and steps through events. The timeline drags, snaps to the nearest event, and ←/→ step through moments from anywhere on the page (map and form fields excepted); Home/End and PageUp/PageDown act on the focused timeline. The filter chips above the feature card apply one `kind` at a time: they rebuild the pin set, the event list, the feature card and the timeline dots (non-matching dots are dimmed), and navigation steps only through matching moments. Each pin takes its category's colour, and the chips carry the same swatches; marker labels name the category for screen readers, so colour is never the only cue.

**Guide pages.** `colosseum.html`, `st-peters.html` and `pantheon.html` are long-form companions to the chronicle, sharing `assets/guide.css` and `assets/guide.js`. Each page opens with a back link of the form `index.html#<event-id>`; `app.js` reads that hash at startup and opens the matching moment. Guide images are named `guide-<page>-<subject>.jpg` and are credited under each figure and in `credits.json`.

**Adding a moment:** add an event to `assets/data.js` with the right `kind` and at least two images, drop 1100 px JPEGs at `assets/img/<slug>.jpg`, and give each image `alt` text and a `credit` with the author, licence and Commons file URL. Keep `year` and `label` consistent, and keep the era's `start`/`end` intact — the timeline geometry depends on them. If the moment implies a change to an era's built-up extent (a new district, a wall), update that era's `overlay` too.

**Images.** Wikimedia Commons files, resized to 1100 px; per-file metadata lives in `assets/img/credits.json` and is surfaced under each photo. If an image is replaced, update both the credit entry and the event's `images[]` entry.

**Adding a guide.** Create `<slug>.html` from the shared guide skeleton, use the classes in `assets/guide.css`, and include `assets/guide.js` for the section nav. Add a credited hero image and a pair of credited photographs for every "What to look for" item — around twenty-five images per guide — named `guide-<slug>-<subject>.jpg` at 1100 px wide. Then attach `guide: { href, name }` to the relevant moments in `assets/data.js` so the feature card shows the link; the guide's back link should point at `index.html#<event-id>`, which `app.js` resolves on load.

## Rome in brief

Rome (Roma) is the capital of Italy and of the Lazio region, on the Tiber about 25 km from the Tyrrhenian Sea. Roughly 2.8 million people live in the city. The historic centre inside the Aurelian Walls has been a UNESCO World Heritage Site since 1980.

Its history is easiest to hold as three stacked layers:

1. **Ancient capital** — centre of a republic and then an empire that at its height reached from Britain to Mesopotamia, with possibly around a million inhabitants in the city itself.
2. **Papal city** — after the western empire collapsed, the bishop of Rome became the city's effective ruler; the Middle Ages and Renaissance were shaped by the papacy and by pilgrims.
3. **National capital** — capital of a unified Italy from 1871, with the Vatican remaining an independent state inside the city since 1929.

The layers are physically stacked. The Pantheon survives as a church, the Theatre of Marcellus was fortified into a palace, and countless churches and palazzi sit on Roman foundations.

**Legacy:** Roman law (the Twelve Tables, then Justinian's *Corpus Juris Civilis*), Latin and the Romance languages, the Latin alphabet, the calendar (Julian reform 45 BC, Gregorian reform 1582), concrete, roads, aqueducts, and the vocabulary of republican politics — senate, consul, veto.

## Chronology

Dates before the late Republic are often traditional rather than documented; the monarchy in particular is partly legendary.

| Date | Event |
| --- | --- |
| 753 BC | Traditional founding by Romulus (21 April); archaeology shows Palatine settlements from about the 10th century BC |
| 509 BC | Expulsion of the last king, Tarquinius Superbus; the Republic begins |
| 390 BC | Gauls defeat the Romans at the Allia and sack the city |
| 264–146 BC | Three Punic Wars against Carthage; Carthage destroyed in 146 BC, the same year Corinth falls and Greece is annexed |
| 133–31 BC | Late-Republic crisis: Gracchi, Marius and Sulla, Caesar, the triumvirs, civil war |
| 44 BC | Caesar assassinated on the Ides of March |
| 31 BC | Octavian defeats Antony and Cleopatra at Actium |
| 27 BC | Octavian becomes Augustus; the Principate (Empire) begins |
| AD 80 | Colosseum inaugurated under Titus |
| AD 117 | Trajan dies at the empire's greatest extent |
| AD 212 | Caracalla grants citizenship to all free men of the empire |
| AD 284–305 | Diocletian reorganises the empire and splits it into a tetrarchy |
| AD 313 | Edict of Milan tolerates Christianity |
| AD 330 | Constantine founds Constantinople as a new capital |
| AD 395 | Empire permanently divided between East and West on Theodosius I's death |
| AD 410 / 455 | Rome sacked by the Visigoths (Alaric) and then the Vandals |
| AD 476 | Odoacer deposes Romulus Augustulus; the western empire ends |
| AD 800 | Charlemagne crowned emperor by Pope Leo III in St Peter's |
| 1309–1377 | Papacy moves to Avignon; returns to Rome in 1377 |
| 1508–1512 | Michelangelo paints the Sistine Chapel ceiling |
| 1527 | Sack of Rome by mutinous troops of Charles V |
| 1870–1871 | Italian troops breach Porta Pia; Rome becomes capital of unified Italy |
| 1929 | Lateran Treaty creates Vatican City State |
| 1944 | Rome liberated (4 June) during the Second World War |

## Eras

### Founding and monarchy (traditional 753–509 BC)

The founding story — twins Romulus and Remus, suckled by a wolf, Romulus killing Remus and naming the city — is myth, told by Livy and others centuries later. Archaeology supports a real process: separate hilltop villages on the Palatine and neighbouring hills coalesced into one city during the 8th–6th centuries BC. Seven kings are traditionally listed, the last three Etruscan; Etruscan rule left its mark on Roman ritual, dress, and engineering.

### Republic (509–27 BC)

Two annually elected consuls, a Senate, and popular assemblies replaced the king. The Republic expanded through Italy and then the Mediterranean, absorbing Greek culture while fighting Carthage for dominance. Success bred strain: the Gracchi tried land reform and were killed; generals with personal armies — Marius, Sulla, Pompey, Caesar — turned politics into civil war. Caesar's dictatorship and assassination ended any hope of restoring the old order; Octavian's victory at Actium in 31 BC left one man in charge.

### Empire (27 BC – AD 476)

Augustus kept republican forms and held the real power, beginning two centuries of relative stability and prosperity (*Pax Romana*). The Flavians rebuilt the city after the fire of AD 64 and civil war of AD 69; Trajan pushed the frontier to its maximum; Hadrian consolidated it. The 3rd century brought invasion, inflation, and rapid turnover of emperors. Diocletian and Constantine restructured the state, moved its centre of gravity east, and tied it to Christianity. The western half fragmented through the 5th century; in 476 the last western emperor was deposed, though Roman institutions and the bishop of Rome persisted.

### Medieval and papal city (476–1400s)

Rome shrank drastically, its population falling into the tens of thousands. Power passed to the papacy, supported by Frankish kings after Charlemagne's coronation in 800, and the popes governed a territorial state in central Italy. The city revived a communal government in the 12th century and was torn by noble faction fights (Guelphs and Ghibellines). The papacy's move to Avignon (1309–1377) left Rome impoverished and half-ruined; the return of the popes, followed by the Western Schism, set the stage for the rebuilding of the Renaissance.

### Renaissance and Baroque (1400s–1700s)

Renaissance popes — above all Julius II and Leo X — spent vast sums turning Rome into a showcase: Bramante began the new St Peter's in 1506, Michelangelo painted the Sistine ceiling (1508–1512) and designed the dome, Raphael decorated the papal apartments. The Sack of 1527 interrupted the work but not the ambition. The 17th century added the Baroque layer — Bernini's colonnade, baldachin, and fountains, Borromini's churches — and the 18th century the Trevi Fountain and the Spanish Steps.

### Modern capital (1798–today)

French revolutionary armies briefly created a Roman Republic in 1798, and another short-lived republic under Mazzini and Garibaldi fell in 1849. In 1870 Italian troops entered the city through Porta Pia; Rome became the capital of the new Kingdom of Italy in 1871, and the papacy withdrew into the Vatican in protest until the Lateran Treaty of 1929 settled the relationship. The 20th century brought Fascist rule, German occupation, liberation in 1944, the 1960 Olympics, and the postwar growth of a modern administrative city around the historic core.

## The ancient city, site by site

| Site | Date | Why it matters |
| --- | --- | --- |
| Palatine Hill | settlements from c. 10th c. BC | Legendary birthplace of Rome; later the emperors' palace hill — the word "palace" comes from it |
| Roman Forum | Republic to Empire | Civic, legal, and commercial centre: Senate house, Rostra, temples, basilicas |
| Colosseum | AD 70–80 | Flavian amphitheatre for about 50,000 spectators, funded from the spoils of the Jewish War (per Josephus) |
| Pantheon | rebuilt under Hadrian c. AD 113–125 | Best-preserved Roman building; 43.3 m concrete dome with an open oculus; a church since 609 |
| Circus Maximus | origins 6th c. BC, rebuilt under Trajan | Chariot-racing track for up to about 150,000 |
| Baths of Caracalla | AD 212–216 | Huge imperial bath complex, a model of Roman engineering and social life |
| Aurelian Walls | AD 271–275 | About 19 km of defensive circuit; still defines the historic centre |
| Castel Sant'Angelo | AD 135–139 | Hadrian's mausoleum, later a papal fortress and prison |
| Arch of Constantine | AD 315 | Commemorates the victory at the Milvian Bridge that led to Constantine's conversion |
| St Peter's Basilica | 1506–1626 | Renaissance and Baroque basilica over the traditional tomb of Peter; Michelangelo's dome, Bernini's baldachin |
| Sistine Chapel | ceiling 1508–1512; *Last Judgment* 1536–1541 | Michelangelo's frescoes; still the papal conclave chapel |
| Capitoline Museums | founded 1471 | Often called the world's oldest public museum; Capitoline Wolf, Marcus Aurelius equestrian statue |
| Trevi Fountain | 1732–1762 | Baroque terminus of the Aqua Virgo aqueduct (19 BC) |
| Piazza Navona | ancient stadium footprint | Built over Domitian's stadium; Bernini's Fountain of the Four Rivers (1651) |

## Orientation

- The Tiber runs north–south. The historic centre lies on the east bank, the Vatican on the west bank, and Trastevere on the south-west slope of the Janiculum.
- The traditional seven hills are the Aventine, Caelian, Capitoline, Esquiline, Palatine, Quirinal, and Viminal.
- The centre is divided into 22 *rioni*; the ancient core (Monti, Campitelli, Sant'Angelo, Regola, Parione, Ponte, Pigna) is compact and walkable.
- The metro has lines A, B, B1, and C; Termini is the main rail hub. Most sightseeing is done on foot or by bus and tram, and the historic centre is small: Colosseum to Pantheon is about 2 km, Pantheon to St Peter's about 2 km.

## Practical essentials

- Book Colosseum/Forum/Palatine and Vatican Museums tickets in advance from the official sites; timed slots sell out. Verify opening days and prices before relying on them — they change.
- Churches require covered shoulders and knees, and quiet; they are active places of worship, not only monuments.
- The *nasoni* fountains run drinkable water. Do not sit, climb, or eat on monuments, and do not enter fountains — fines are enforced.
- A *coperto* is a normal cover charge, not a scam. Aperitivo runs roughly 18:00–20:00; many kitchens close in the mid-afternoon.
- Carry a passport: hotels must register guests, and ID is required for some sites.
- Tipping is not expected; rounding up is enough.

## Conventions for agents working in this repository

- **Dates:** write BC/AD (e.g. "509 BC", "AD 80"). Use years only unless the month or day matters. Mark legendary or traditional material as such — the founding date 753 BC is traditional, not archaeological.
- **Facts vs. estimates:** say "estimates vary" for figures such as ancient population or amphitheatre capacity; never present a guess as a measurement.
- **No invented specifics:** do not fabricate quotes, ticket prices, opening hours, or event schedules. Time-sensitive details must be date-stamped ("as of 2026") and flagged for re-checking.
- **Sources:** cite the work or site inline for any claim that is not common knowledge (e.g. "Josephus, *Jewish War*"). Prefer primary sources and official archaeological or municipal publications over travel blogs.
- **Files:** kebab-case names. Content changes belong in `assets/data.js`, not hard-coded in `app.js`; layout and interaction changes belong in `assets/styles.css` and `assets/app.js`.
- **Coordinates:** use the real site location to about four decimal places. If two events share a site, that is fine — the map fans the pins out. Never move a pin away from its site to make the map look balanced.
- **Consistency:** the chronology table above, the era list in `assets/data.js`, and the event years must agree. When a date changes, update all three.
- **Edits:** correct errors in place rather than appending contradictions, and keep this file short enough to be read in one sitting.

## Standard references

- Livy, *Ab Urbe Condita* — the founding narrative and early Republic.
- Suetonius, *Lives of the Caesars*; Cassius Dio, *Roman History* — the imperial period.
- *Oxford Classical Dictionary* — dates, offices, and institutions.
- UNESCO listing: "Historic Centre of Rome, the Properties of the Holy See…" (1980, extended 1990).
- Parco archeologico del Colosseo and Musei Vaticani official sites — current access and conservation information.
