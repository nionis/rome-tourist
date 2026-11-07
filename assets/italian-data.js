/* Rome through time - the first hundred Italian words.
   `ipa` is broad standard Italian; `say` is an English respelling where
   capitals mark the stressed syllable. Examples are deliberately short. */

window.ITALIAN = {
  groups: [
    {
      id: "basics",
      name: "Yes, no & basics",
      note: "The shortest answers, and the little words that change a sentence."
    },
    {
      id: "greetings",
      name: "Greetings & courtesy",
      note: "Start here. A greeting and a thank-you carry most of a short exchange."
    },
    {
      id: "glue",
      name: "Little glue words",
      note: "Articles, conjunctions and prepositions — the small words that hold sentences together."
    },
    {
      id: "questions",
      name: "Question words",
      note: "Eight words that turn a statement into a question."
    },
    {
      id: "people",
      name: "People & pronouns",
      note: "Pronouns, and the people you will talk about."
    },
    {
      id: "numbers",
      name: "Numbers 1–10",
      note: "One to ten. Prices, platforms and tables all start here."
    },
    {
      id: "food",
      name: "Food & drink",
      note: "Ordering, reading a menu, and asking for the bill."
    },
    {
      id: "out",
      name: "Out & about",
      note: "Places and things you will ask for by name."
    },
    {
      id: "around",
      name: "Getting around",
      note: "Directions, and the words you will see on signs."
    },
    {
      id: "time",
      name: "Time",
      note: "When things happen, and how to say now and later."
    },
    {
      id: "verbs",
      name: "Core verbs",
      note: "Ten verbs that combine with almost everything else."
    },
    {
      id: "describe",
      name: "Describing things",
      note: "A few adjectives that cover most of what you will want to say."
    }
  ],

  words: [
    {
      it: "sì",
      en: "yes",
      ipa: "/si/",
      say: "see",
      pos: "adverb",
      group: "basics",
      note: "The accent distinguishes it from si, “oneself”.",
      example: { it: "Sì, per favore.", en: "Yes, please." }
    },
    {
      it: "no",
      en: "no",
      ipa: "/nɔ/",
      say: "noh",
      pos: "adverb",
      group: "basics",
      note: "A clean, short vowel; not the English diphthong.",
      example: { it: "No, grazie.", en: "No, thank you." }
    },
    {
      it: "non",
      en: "not",
      ipa: "/non/",
      say: "non",
      pos: "adverb",
      group: "basics",
      note: "Negates the verb: non capisco = I don’t understand.",
      example: { it: "Non capisco.", en: "I don’t understand." }
    },
    {
      it: "bene",
      en: "well / fine",
      ipa: "/ˈbɛ.ne/",
      say: "BEH-neh",
      pos: "adverb",
      group: "basics",
      note: "Va bene = all right, OK.",
      example: { it: "Sto bene, grazie.", en: "I’m fine, thank you." }
    },
    {
      it: "ciao",
      en: "hello / bye",
      ipa: "/ˈtʃa.o/",
      say: "CHAH-oh",
      pos: "interjection",
      group: "greetings",
      note: "Informal. Use buongiorno or buonasera with strangers and in shops.",
      example: { it: "Ciao, come stai?", en: "Hi, how are you?" }
    },
    {
      it: "buongiorno",
      en: "good morning / good day",
      ipa: "/bwonˈdʒor.no/",
      say: "bwon-JOR-noh",
      pos: "interjection",
      group: "greetings",
      note: "Literally “good day”; used until mid-afternoon.",
      example: { it: "Buongiorno, un caffè per favore.", en: "Good morning, a coffee please." }
    },
    {
      it: "buonasera",
      en: "good evening",
      ipa: "/ˌbwo.naˈse.ra/",
      say: "bwo-nah-SEH-rah",
      pos: "interjection",
      group: "greetings",
      note: "From late afternoon onward.",
      example: { it: "Buonasera, avete un tavolo?", en: "Good evening, do you have a table?" }
    },
    {
      it: "arrivederci",
      en: "goodbye",
      ipa: "/ar.ri.veˈder.tʃi/",
      say: "ah-ree-veh-DEHR-chee",
      pos: "interjection",
      group: "greetings",
      note: "Literally “until we see each other again”.",
      example: { it: "Arrivederci, e grazie!", en: "Goodbye, and thanks!" }
    },
    {
      it: "per favore",
      en: "please",
      ipa: "/per faˈvo.re/",
      say: "pehr fah-VOH-reh",
      pos: "phrase",
      group: "greetings",
      example: { it: "Un biglietto, per favore.", en: "One ticket, please." }
    },
    {
      it: "grazie",
      en: "thank you",
      ipa: "/ˈɡrat.tsje/",
      say: "GRAH-tsyeh",
      pos: "interjection",
      group: "greetings",
      note: "The z is “ts”, not the English z.",
      example: { it: "Grazie mille!", en: "Thanks a lot!" }
    },
    {
      it: "prego",
      en: "you’re welcome / go ahead",
      ipa: "/ˈprɛ.ɡo/",
      say: "PREH-goh",
      pos: "interjection",
      group: "greetings",
      note: "The all-purpose reply to grazie; also “please, go ahead”.",
      example: { it: "Prego, si accomodi.", en: "Please, take a seat." }
    },
    {
      it: "scusi",
      en: "excuse me / sorry",
      ipa: "/ˈsku.zi/",
      say: "SKOO-zee",
      pos: "interjection",
      group: "greetings",
      note: "Formal; use scusa with friends.",
      example: { it: "Scusi, dov’è il bagno?", en: "Excuse me, where is the bathroom?" }
    },
    {
      it: "il",
      en: "the (masculine singular)",
      ipa: "/il/",
      say: "eel",
      pos: "article",
      group: "glue",
      example: { it: "Il conto, per favore.", en: "The bill, please." }
    },
    {
      it: "la",
      en: "the (feminine singular)",
      ipa: "/la/",
      say: "lah",
      pos: "article",
      group: "glue",
      example: { it: "La stazione è vicina.", en: "The station is nearby." }
    },
    {
      it: "un",
      en: "a / an (masculine)",
      ipa: "/un/",
      say: "oon",
      pos: "article",
      group: "glue",
      example: { it: "Vorrei un caffè.", en: "I’d like a coffee." }
    },
    {
      it: "una",
      en: "a / an (feminine)",
      ipa: "/ˈu.na/",
      say: "OO-nah",
      pos: "article",
      group: "glue",
      example: { it: "Una camera per due.", en: "A room for two." }
    },
    {
      it: "e",
      en: "and",
      ipa: "/e/",
      say: "eh",
      pos: "conjunction",
      group: "glue",
      note: "No accent. È (with a grave accent) means “is”.",
      example: { it: "Pane e vino.", en: "Bread and wine." }
    },
    {
      it: "ma",
      en: "but",
      ipa: "/ma/",
      say: "mah",
      pos: "conjunction",
      group: "glue",
      example: { it: "Vorrei venire, ma non posso.", en: "I’d like to come, but I can’t." }
    },
    {
      it: "o",
      en: "or",
      ipa: "/o/",
      say: "oh",
      pos: "conjunction",
      group: "glue",
      example: { it: "Tè o caffè?", en: "Tea or coffee?" }
    },
    {
      it: "di",
      en: "of / from",
      ipa: "/di/",
      say: "dee",
      pos: "preposition",
      group: "glue",
      example: { it: "Un bicchiere di vino.", en: "A glass of wine." }
    },
    {
      it: "a",
      en: "to / at / in",
      ipa: "/a/",
      say: "ah",
      pos: "preposition",
      group: "glue",
      example: { it: "Vado a Roma.", en: "I’m going to Rome." }
    },
    {
      it: "in",
      en: "in / into",
      ipa: "/in/",
      say: "een",
      pos: "preposition",
      group: "glue",
      example: { it: "Sono in centro.", en: "I’m in the centre." }
    },
    {
      it: "per",
      en: "for / through",
      ipa: "/per/",
      say: "pehr",
      pos: "preposition",
      group: "glue",
      note: "per favore = please; per Roma = to Rome.",
      example: { it: "Un biglietto per Roma.", en: "A ticket to Rome." }
    },
    {
      it: "con",
      en: "with",
      ipa: "/kon/",
      say: "kon",
      pos: "preposition",
      group: "glue",
      example: { it: "Vengo con te.", en: "I’m coming with you." }
    },

    {
      it: "cosa",
      en: "thing / what",
      ipa: "/ˈkɔ.za/",
      say: "KOH-zah",
      pos: "noun (f.)",
      group: "questions",
      note: "Cosa? and che cosa? both mean “what?”.",
      example: { it: "Cosa vuoi?", en: "What do you want?" }
    },
    {
      it: "che",
      en: "what / that / which",
      ipa: "/ke/",
      say: "keh",
      pos: "pronoun",
      group: "questions",
      note: "Che cosa? is the full form of “what?”.",
      example: { it: "Che cos’è questo?", en: "What is this?" }
    },
    {
      it: "chi",
      en: "who",
      ipa: "/ki/",
      say: "kee",
      pos: "pronoun",
      group: "questions",
      example: { it: "Chi è?", en: "Who is it?" }
    },
    {
      it: "dove",
      en: "where",
      ipa: "/ˈdo.ve/",
      say: "DOH-veh",
      pos: "adverb",
      group: "questions",
      example: { it: "Dove si trova il museo?", en: "Where is the museum?" }
    },
    {
      it: "quando",
      en: "when",
      ipa: "/ˈkwan.do/",
      say: "KWAN-doh",
      pos: "adverb",
      group: "questions",
      example: { it: "Quando apre?", en: "When does it open?" }
    },
    {
      it: "perché",
      en: "why / because",
      ipa: "/perˈke/",
      say: "pehr-KEH",
      pos: "adverb",
      group: "questions",
      note: "The accent marks the stress.",
      example: { it: "Perché è chiuso?", en: "Why is it closed?" }
    },
    {
      it: "come",
      en: "how / like",
      ipa: "/ˈko.me/",
      say: "KOH-meh",
      pos: "adverb",
      group: "questions",
      example: { it: "Come si dice…?", en: "How do you say…?" }
    },
    {
      it: "quanto",
      en: "how much / how many",
      ipa: "/ˈkwan.to/",
      say: "KWAN-toh",
      pos: "adjective",
      group: "questions",
      example: { it: "Quanto costa?", en: "How much does it cost?" }
    },
    {
      it: "quale",
      en: "which",
      ipa: "/ˈkwa.le/",
      say: "KWAH-leh",
      pos: "adjective",
      group: "questions",
      example: { it: "Quale treno va a Roma?", en: "Which train goes to Rome?" }
    },

    {
      it: "io",
      en: "I",
      ipa: "/ˈi.o/",
      say: "EE-oh",
      pos: "pronoun",
      group: "people",
      example: { it: "Io sono di Londra.", en: "I’m from London." }
    },
    {
      it: "tu",
      en: "you (informal)",
      ipa: "/tu/",
      say: "too",
      pos: "pronoun",
      group: "people",
      note: "With friends, children and peers. Use lei with strangers.",
      example: { it: "Tu parli inglese?", en: "Do you speak English?" }
    },
    {
      it: "lei",
      en: "you (formal) / she",
      ipa: "/lɛi/",
      say: "lay",
      pos: "pronoun",
      group: "people",
      note: "Capitalised Lei in writing when it means formal “you”.",
      example: { it: "Lei è molto gentile.", en: "You are very kind." }
    },
    {
      it: "noi",
      en: "we / us",
      ipa: "/nɔi/",
      say: "noy",
      pos: "pronoun",
      group: "people",
      example: { it: "Noi due, per favore.", en: "The two of us, please." }
    },
    {
      it: "loro",
      en: "they / them",
      ipa: "/ˈlo.ro/",
      say: "LOH-roh",
      pos: "pronoun",
      group: "people",
      example: { it: "Loro sono in vacanza.", en: "They are on holiday." }
    },
    {
      it: "amico",
      en: "friend (male)",
      ipa: "/aˈmi.ko/",
      say: "ah-MEE-koh",
      pos: "noun (m.)",
      group: "people",
      note: "amica for a woman; plural amici / amiche.",
      example: { it: "È un mio amico.", en: "He’s a friend of mine." }
    },
    {
      it: "famiglia",
      en: "family",
      ipa: "/faˈmiʎ.ʎa/",
      say: "fah-MEE-lyah",
      pos: "noun (f.)",
      group: "people",
      note: "gli is the “ly” sound, as in million.",
      example: { it: "Viaggio con la famiglia.", en: "I’m travelling with my family." }
    },
    {
      it: "nome",
      en: "name",
      ipa: "/ˈno.me/",
      say: "NOH-meh",
      pos: "noun (m.)",
      group: "people",
      example: { it: "Il mio nome è…", en: "My name is…" }
    },

    {
      it: "uno",
      en: "one",
      ipa: "/ˈu.no/",
      say: "OO-noh",
      pos: "number",
      group: "numbers",
      note: "Also the indefinite article “a/an” before some nouns.",
      example: { it: "Uno, due, tre…", en: "One, two, three…" }
    },
    {
      it: "due",
      en: "two",
      ipa: "/ˈdu.e/",
      say: "DOO-eh",
      pos: "number",
      group: "numbers",
      example: { it: "Un tavolo per due.", en: "A table for two." }
    },
    {
      it: "tre",
      en: "three",
      ipa: "/tre/",
      say: "treh",
      pos: "number",
      group: "numbers",
      example: { it: "Tre biglietti.", en: "Three tickets." }
    },
    {
      it: "quattro",
      en: "four",
      ipa: "/ˈkwat.tro/",
      say: "KWAT-troh",
      pos: "number",
      group: "numbers",
      example: { it: "Quattro notti.", en: "Four nights." }
    },
    {
      it: "cinque",
      en: "five",
      ipa: "/ˈtʃiŋ.kwe/",
      say: "CHEEN-kweh",
      pos: "number",
      group: "numbers",
      note: "c before i is “ch”.",
      example: { it: "Cinque minuti.", en: "Five minutes." }
    },
    {
      it: "sei",
      en: "six",
      ipa: "/sɛi/",
      say: "say",
      pos: "number",
      group: "numbers",
      example: { it: "Sei euro.", en: "Six euros." }
    },
    {
      it: "sette",
      en: "seven",
      ipa: "/ˈsɛt.te/",
      say: "SET-teh",
      pos: "number",
      group: "numbers",
      note: "Hold the double t.",
      example: { it: "Sette giorni.", en: "Seven days." }
    },
    {
      it: "otto",
      en: "eight",
      ipa: "/ˈɔt.to/",
      say: "OT-toh",
      pos: "number",
      group: "numbers",
      example: { it: "Otto fermate.", en: "Eight stops." }
    },
    {
      it: "nove",
      en: "nine",
      ipa: "/ˈnɔ.ve/",
      say: "NOH-veh",
      pos: "number",
      group: "numbers",
      example: { it: "Nove gradi.", en: "Nine degrees." }
    },
    {
      it: "dieci",
      en: "ten",
      ipa: "/ˈdjɛ.tʃi/",
      say: "DYEH-chee",
      pos: "number",
      group: "numbers",
      note: "ie is “yeh”.",
      example: { it: "Dieci minuti a piedi.", en: "Ten minutes on foot." }
    },

    {
      it: "acqua",
      en: "water",
      ipa: "/ˈak.kwa/",
      say: "AH-kwah",
      pos: "noun (f.)",
      group: "food",
      note: "cq is pronounced like a double k.",
      example: { it: "Un’acqua naturale.", en: "A still water." }
    },
    {
      it: "caffè",
      en: "coffee / espresso",
      ipa: "/kafˈfɛ/",
      say: "kaf-FEH",
      pos: "noun (m.)",
      group: "food",
      note: "In Rome, un caffè means an espresso.",
      example: { it: "Un caffè, per favore.", en: "An espresso, please." }
    },
    {
      it: "vino",
      en: "wine",
      ipa: "/ˈvi.no/",
      say: "VEE-noh",
      pos: "noun (m.)",
      group: "food",
      example: { it: "Un bicchiere di vino rosso.", en: "A glass of red wine." }
    },
    {
      it: "pane",
      en: "bread",
      ipa: "/ˈpa.ne/",
      say: "PAH-neh",
      pos: "noun (m.)",
      group: "food",
      example: { it: "Il pane è fresco.", en: "The bread is fresh." }
    },
    {
      it: "pasta",
      en: "pasta",
      ipa: "/ˈpa.sta/",
      say: "PAH-stah",
      pos: "noun (f.)",
      group: "food",
      example: { it: "Vorrei la pasta.", en: "I’d like the pasta." }
    },
    {
      it: "pizza",
      en: "pizza",
      ipa: "/ˈpit.tsa/",
      say: "PEET-tsah",
      pos: "noun (f.)",
      group: "food",
      note: "zz is “ts”, not the English z.",
      example: { it: "Una pizza margherita.", en: "A margherita pizza." }
    },
    {
      it: "gelato",
      en: "ice cream",
      ipa: "/dʒeˈla.to/",
      say: "jeh-LAH-toh",
      pos: "noun (m.)",
      group: "food",
      note: "g before e is “j”.",
      example: { it: "Un gelato al limone.", en: "A lemon ice cream." }
    },
    {
      it: "colazione",
      en: "breakfast",
      ipa: "/ko.latˈtsjo.ne/",
      say: "koh-la-TSYOH-neh",
      pos: "noun (f.)",
      group: "food",
      example: { it: "La colazione è inclusa.", en: "Breakfast is included." }
    },
    {
      it: "pranzo",
      en: "lunch",
      ipa: "/ˈpran.dzo/",
      say: "PRAHN-dzoh",
      pos: "noun (m.)",
      group: "food",
      example: { it: "Pranziamo all’una.", en: "We have lunch at one." }
    },
    {
      it: "cena",
      en: "dinner / supper",
      ipa: "/ˈtʃe.na/",
      say: "CHEH-nah",
      pos: "noun (f.)",
      group: "food",
      example: { it: "La cena è alle otto.", en: "Dinner is at eight." }
    },

    {
      it: "ristorante",
      en: "restaurant",
      ipa: "/ri.stoˈran.te/",
      say: "ree-stoh-RAHN-teh",
      pos: "noun (m.)",
      group: "out",
      example: { it: "Un buon ristorante qui vicino?", en: "A good restaurant near here?" }
    },
    {
      it: "bar",
      en: "bar / café",
      ipa: "/bar/",
      say: "bar",
      pos: "noun (m.)",
      group: "out",
      note: "In Italy a bar is primarily a coffee bar.",
      example: { it: "Prendiamo un caffè al bar.", en: "Let’s have a coffee at the bar." }
    },
    {
      it: "conto",
      en: "bill / check",
      ipa: "/ˈkon.to/",
      say: "KON-toh",
      pos: "noun (m.)",
      group: "out",
      example: { it: "Il conto, per favore.", en: "The bill, please." }
    },
    {
      it: "mercato",
      en: "market",
      ipa: "/merˈka.to/",
      say: "mehr-KAH-toh",
      pos: "noun (m.)",
      group: "out",
      example: { it: "Il mercato chiude alle due.", en: "The market closes at two." }
    },
    {
      it: "bagno",
      en: "bathroom / toilet",
      ipa: "/ˈbaɲ.ɲo/",
      say: "BAH-nyoh",
      pos: "noun (m.)",
      group: "out",
      note: "gn is the “ny” sound, as in canyon.",
      example: { it: "Dov’è il bagno?", en: "Where is the bathroom?" }
    },
    {
      it: "stazione",
      en: "station",
      ipa: "/statˈtsjo.ne/",
      say: "stah-TSYOH-neh",
      pos: "noun (f.)",
      group: "out",
      example: { it: "La stazione è a dieci minuti.", en: "The station is ten minutes away." }
    },
    {
      it: "albergo",
      en: "hotel",
      ipa: "/alˈbɛr.ɡo/",
      say: "al-BEHR-goh",
      pos: "noun (m.)",
      group: "out",
      note: "gh keeps the g hard, as in “go”.",
      example: { it: "Il nostro albergo è in centro.", en: "Our hotel is in the centre." }
    },
    {
      it: "camera",
      en: "room",
      ipa: "/ˈka.me.ra/",
      say: "KAH-meh-rah",
      pos: "noun (f.)",
      group: "out",
      note: "Also “chamber”; camera da letto is a bedroom.",
      example: { it: "Ho prenotato una camera.", en: "I booked a room." }
    },
    {
      it: "biglietto",
      en: "ticket",
      ipa: "/biʎˈʎet.to/",
      say: "bee-LYET-toh",
      pos: "noun (m.)",
      group: "out",
      note: "gli is the “ly” sound.",
      example: { it: "Due biglietti per il museo.", en: "Two tickets for the museum." }
    },
    {
      it: "museo",
      en: "museum",
      ipa: "/muˈzɛ.o/",
      say: "moo-ZEH-oh",
      pos: "noun (m.)",
      group: "out",
      example: { it: "Il museo apre alle nove.", en: "The museum opens at nine." }
    },

    {
      it: "strada",
      en: "street / road",
      ipa: "/ˈstra.da/",
      say: "STRAH-dah",
      pos: "noun (f.)",
      group: "around",
      example: { it: "Questa strada porta al Colosseo.", en: "This street leads to the Colosseum." }
    },
    {
      it: "piazza",
      en: "square / piazza",
      ipa: "/ˈpjat.tsa/",
      say: "PYAHT-tsah",
      pos: "noun (f.)",
      group: "around",
      example: { it: "Ci vediamo in piazza.", en: "See you in the square." }
    },
    {
      it: "chiesa",
      en: "church",
      ipa: "/ˈkjɛ.za/",
      say: "KYEH-zah",
      pos: "noun (f.)",
      group: "around",
      note: "ie is “yeh”; s between vowels is soft.",
      example: { it: "La chiesa è aperta.", en: "The church is open." }
    },
    {
      it: "treno",
      en: "train",
      ipa: "/ˈtrɛ.no/",
      say: "TREH-noh",
      pos: "noun (m.)",
      group: "around",
      example: { it: "Il treno parte alle dieci.", en: "The train leaves at ten." }
    },
    {
      it: "autobus",
      en: "bus",
      ipa: "/ˈau.to.bus/",
      say: "OW-toh-boos",
      pos: "noun (m.)",
      group: "around",
      example: { it: "Quale autobus va al centro?", en: "Which bus goes to the centre?" }
    },
    {
      it: "destra",
      en: "right",
      ipa: "/ˈdɛ.stra/",
      say: "DEH-strah",
      pos: "noun (f.)",
      group: "around",
      note: "a destra = on the right, to the right.",
      example: { it: "Gira a destra.", en: "Turn right." }
    },
    {
      it: "sinistra",
      en: "left",
      ipa: "/siˈni.stra/",
      say: "see-NEE-strah",
      pos: "noun (f.)",
      group: "around",
      note: "a sinistra = on the left, to the left.",
      example: { it: "La farmacia è a sinistra.", en: "The pharmacy is on the left." }
    },
    {
      it: "vicino",
      en: "near / nearby",
      ipa: "/viˈtʃi.no/",
      say: "vee-CHEE-noh",
      pos: "adverb",
      group: "around",
      note: "Also a noun: “neighbour”.",
      example: { it: "C’è un bar qui vicino.", en: "There’s a bar nearby." }
    },
    {
      it: "lontano",
      en: "far",
      ipa: "/lonˈta.no/",
      say: "lon-TAH-noh",
      pos: "adverb",
      group: "around",
      example: { it: "Il Vaticano non è lontano.", en: "The Vatican isn’t far." }
    },

    {
      it: "oggi",
      en: "today",
      ipa: "/ˈɔd.dʒi/",
      say: "OD-jee",
      pos: "adverb",
      group: "time",
      note: "gg before i is “j”.",
      example: { it: "Oggi è chiuso.", en: "Today it’s closed." }
    },
    {
      it: "domani",
      en: "tomorrow",
      ipa: "/doˈma.ni/",
      say: "doh-MAH-nee",
      pos: "adverb",
      group: "time",
      example: { it: "A domani!", en: "See you tomorrow!" }
    },
    {
      it: "ieri",
      en: "yesterday",
      ipa: "/ˈjɛ.ri/",
      say: "YEH-ree",
      pos: "adverb",
      group: "time",
      example: { it: "Ieri siamo arrivati.", en: "Yesterday we arrived." }
    },
    {
      it: "adesso",
      en: "now",
      ipa: "/aˈdes.so/",
      say: "ah-DES-soh",
      pos: "adverb",
      group: "time",
      example: { it: "Adesso andiamo.", en: "Now let’s go." }
    },
    {
      it: "dopo",
      en: "after / later",
      ipa: "/ˈdo.po/",
      say: "DOH-poh",
      pos: "adverb",
      group: "time",
      example: { it: "Dopo il museo, pranziamo.", en: "After the museum, we’ll have lunch." }
    },
    {
      it: "prima",
      en: "before / first",
      ipa: "/ˈpri.ma/",
      say: "PREE-mah",
      pos: "adverb",
      group: "time",
      example: { it: "Prima delle nove.", en: "Before nine." }
    },
    {
      it: "giorno",
      en: "day",
      ipa: "/ˈdʒor.no/",
      say: "JOR-noh",
      pos: "noun (m.)",
      group: "time",
      example: { it: "Un giorno a Roma.", en: "A day in Rome." }
    },

    {
      it: "essere",
      en: "to be",
      ipa: "/ˈɛs.se.re/",
      say: "ES-seh-reh",
      pos: "verb",
      group: "verbs",
      note: "Irregular: sono, sei, è, siamo, siete, sono.",
      example: { it: "Voglio essere chiaro.", en: "I want to be clear." }
    },
    {
      it: "avere",
      en: "to have",
      ipa: "/aˈve.re/",
      say: "ah-VEH-reh",
      pos: "verb",
      group: "verbs",
      note: "Irregular: ho, hai, ha, abbiamo, avete, hanno.",
      example: { it: "Ho una domanda.", en: "I have a question." }
    },
    {
      it: "fare",
      en: "to do / to make",
      ipa: "/ˈfa.re/",
      say: "FAH-reh",
      pos: "verb",
      group: "verbs",
      note: "Irregular: faccio, fai, fa, facciamo, fate, fanno.",
      example: { it: "Cosa vuole fare oggi?", en: "What would you like to do today?" }
    },
    {
      it: "andare",
      en: "to go",
      ipa: "/anˈda.re/",
      say: "an-DAH-reh",
      pos: "verb",
      group: "verbs",
      note: "Irregular: vado, vai, va, andiamo, andate, vanno.",
      example: { it: "Andiamo al Colosseo.", en: "Let’s go to the Colosseum." }
    },
    {
      it: "venire",
      en: "to come",
      ipa: "/veˈni.re/",
      say: "veh-NEE-reh",
      pos: "verb",
      group: "verbs",
      note: "Irregular: vengo, vieni, viene, veniamo, venite, vengono.",
      example: { it: "Vieni con noi?", en: "Are you coming with us?" }
    },
    {
      it: "volere",
      en: "to want",
      ipa: "/voˈle.re/",
      say: "voh-LEH-reh",
      pos: "verb",
      group: "verbs",
      note: "Vorrei is the polite “I would like”.",
      example: { it: "Vorrei un caffè.", en: "I’d like a coffee." }
    },
    {
      it: "potere",
      en: "can / to be able",
      ipa: "/poˈte.re/",
      say: "poh-TEH-reh",
      pos: "verb",
      group: "verbs",
      note: "Posso? is “may I?”.",
      example: { it: "Posso pagare con la carta?", en: "Can I pay by card?" }
    },
    {
      it: "dovere",
      en: "must / to have to",
      ipa: "/doˈve.re/",
      say: "doh-VEH-reh",
      pos: "verb",
      group: "verbs",
      note: "Devo… is “I must…/I have to…”.",
      example: { it: "Devo andare.", en: "I have to go." }
    },
    {
      it: "mangiare",
      en: "to eat",
      ipa: "/manˈdʒa.re/",
      say: "man-JAH-reh",
      pos: "verb",
      group: "verbs",
      example: { it: "Vogliamo mangiare qualcosa.", en: "We want to eat something." }
    },
    {
      it: "bere",
      en: "to drink",
      ipa: "/ˈbe.re/",
      say: "BEH-reh",
      pos: "verb",
      group: "verbs",
      note: "Irregular: bevo, bevi, beve, beviamo, bevete, bevono.",
      example: { it: "Vorrei bere qualcosa.", en: "I’d like something to drink." }
    },

    {
      it: "bello",
      en: "beautiful / nice",
      ipa: "/ˈbɛl.lo/",
      say: "BEL-loh",
      pos: "adjective",
      group: "describe",
      note: "Before a noun it often becomes bel / bella.",
      example: { it: "Che bello!", en: "How beautiful!" }
    },
    {
      it: "buono",
      en: "good",
      ipa: "/ˈbwɔ.no/",
      say: "BWOH-noh",
      pos: "adjective",
      group: "describe",
      note: "Before a noun it often becomes buon / buona.",
      example: { it: "È molto buono.", en: "It’s very good." }
    },
    {
      it: "grande",
      en: "big / great",
      ipa: "/ˈɡran.de/",
      say: "GRAHN-deh",
      pos: "adjective",
      group: "describe",
      note: "The same form for masculine and feminine.",
      example: { it: "Una grande piazza.", en: "A large square." }
    }
  ]
};
