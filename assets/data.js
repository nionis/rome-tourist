/* Rome through time — eras, events, era reconstructions and image credits.
   Image files live in assets/img/; sources are Wikimedia Commons.
   Overlay geometry is schematic: wall lines, built-up extents and street
   schemes are approximated from standard historical maps, not survey data. */
window.ROME = {
  "eras": [
    {
      "id": "founding",
      "name": "Founding & Monarchy",
      "short": "Founding",
      "start": -753,
      "end": -509,
      "range": "753 – 509 BC",
      "color": "#8a5a2b",
      "blurb": "A ford on the Tiber, a hill with a view, and a founding myth. Rome begins as villages on the Palatine and becomes a city of kings — then throws them out.",
      "overlay": {
        "note": "Hilltop villages and the marshy Forum valley, before the hills were one city.",
        "marks": [
          {
            "name": "Palatine",
            "lat": 41.8892,
            "lng": 12.4868
          },
          {
            "name": "Capitoline",
            "lat": 41.8933,
            "lng": 12.4827
          },
          {
            "name": "Esquiline",
            "lat": 41.8945,
            "lng": 12.4945
          },
          {
            "name": "Caelian",
            "lat": 41.8855,
            "lng": 12.4942
          },
          {
            "name": "Aventine",
            "lat": 41.8839,
            "lng": 12.4788
          },
          {
            "name": "Quirinal",
            "lat": 41.9003,
            "lng": 12.4868
          },
          {
            "name": "Viminal",
            "lat": 41.8972,
            "lng": 12.4905
          }
        ],
        "extent": [
          {
            "name": "Palatine settlement",
            "tone": "urban",
            "coords": [
              [
                41.8881,
                12.4856
              ],
              [
                41.8883,
                12.4882
              ],
              [
                41.8901,
                12.4885
              ],
              [
                41.8906,
                12.4862
              ],
              [
                41.8895,
                12.485
              ]
            ]
          },
          {
            "name": "Marshy Forum valley",
            "tone": "sparse",
            "coords": [
              [
                41.8916,
                12.4838
              ],
              [
                41.8918,
                12.4868
              ],
              [
                41.8934,
                12.487
              ],
              [
                41.8936,
                12.484
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "republic",
      "name": "The Republic",
      "short": "Republic",
      "start": -509,
      "end": -27,
      "range": "509 – 27 BC",
      "color": "#a63c2a",
      "blurb": "Five centuries of expansion and internal strife. The Republic takes Italy, then the Mediterranean, and finally turns on itself.",
      "overlay": {
        "note": "The city inside the Servian Wall, with the Via Appia leaving by the Porta Capena.",
        "extent": [
          {
            "name": "City inside the Servian Wall",
            "tone": "urban",
            "coords": [
              [
                41.9046,
                12.4872
              ],
              [
                41.9018,
                12.4972
              ],
              [
                41.8977,
                12.501
              ],
              [
                41.894,
                12.5022
              ],
              [
                41.8892,
                12.5015
              ],
              [
                41.8843,
                12.5005
              ],
              [
                41.8789,
                12.4898
              ],
              [
                41.8795,
                12.4818
              ],
              [
                41.8832,
                12.4785
              ],
              [
                41.889,
                12.4783
              ],
              [
                41.893,
                12.4795
              ],
              [
                41.8975,
                12.4815
              ],
              [
                41.901,
                12.4828
              ]
            ]
          }
        ],
        "walls": [
          {
            "name": "Servian Wall (c. 378 BC)",
            "coords": [
              [
                41.9046,
                12.4872
              ],
              [
                41.9018,
                12.4972
              ],
              [
                41.8977,
                12.501
              ],
              [
                41.894,
                12.5022
              ],
              [
                41.8892,
                12.5015
              ],
              [
                41.8843,
                12.5005
              ],
              [
                41.8789,
                12.4898
              ],
              [
                41.8795,
                12.4818
              ],
              [
                41.8832,
                12.4785
              ],
              [
                41.889,
                12.4783
              ],
              [
                41.893,
                12.4795
              ],
              [
                41.8975,
                12.4815
              ],
              [
                41.901,
                12.4828
              ],
              [
                41.9046,
                12.4872
              ]
            ]
          }
        ],
        "lines": [
          {
            "name": "Via Appia",
            "kind": "road",
            "coords": [
              [
                41.8845,
                12.491
              ],
              [
                41.879,
                12.499
              ],
              [
                41.873,
                12.509
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "empire",
      "name": "Imperial Rome",
      "short": "Empire",
      "start": -27,
      "end": 193,
      "range": "27 BC – AD 193",
      "color": "#8f6a1c",
      "blurb": "Augustus invents the Principate and rebuilds the city in marble. The Flavians add the Colosseum; Trajan and Hadrian push monumentality to its limit.",
      "overlay": {
        "note": "The built-up city at its height, fed by the great aqueducts from the hills.",
        "extent": [
          {
            "name": "Built-up city",
            "tone": "urban",
            "coords": [
              [
                41.911,
                12.474
              ],
              [
                41.906,
                12.472
              ],
              [
                41.9,
                12.47
              ],
              [
                41.893,
                12.471
              ],
              [
                41.887,
                12.475
              ],
              [
                41.883,
                12.48
              ],
              [
                41.885,
                12.49
              ],
              [
                41.889,
                12.499
              ],
              [
                41.894,
                12.504
              ],
              [
                41.9,
                12.505
              ],
              [
                41.906,
                12.5
              ],
              [
                41.91,
                12.49
              ],
              [
                41.911,
                12.48
              ]
            ]
          },
          {
            "name": "Trastevere",
            "tone": "urban",
            "coords": [
              [
                41.889,
                12.47
              ],
              [
                41.885,
                12.462
              ],
              [
                41.88,
                12.468
              ],
              [
                41.878,
                12.474
              ],
              [
                41.883,
                12.476
              ],
              [
                41.888,
                12.472
              ]
            ]
          }
        ],
        "lines": [
          {
            "name": "Aqua Virgo",
            "kind": "aqueduct",
            "coords": [
              [
                41.927,
                12.478
              ],
              [
                41.918,
                12.479
              ],
              [
                41.91,
                12.48
              ],
              [
                41.905,
                12.481
              ],
              [
                41.9009,
                12.4833
              ]
            ]
          },
          {
            "name": "Aqua Claudia & Anio Novus",
            "kind": "aqueduct",
            "coords": [
              [
                41.9,
                12.548
              ],
              [
                41.896,
                12.53
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8895,
                12.505
              ],
              [
                41.889,
                12.497
              ]
            ]
          },
          {
            "name": "Aqua Marcia",
            "kind": "aqueduct",
            "coords": [
              [
                41.888,
                12.575
              ],
              [
                41.886,
                12.545
              ],
              [
                41.8916,
                12.515
              ]
            ]
          },
          {
            "name": "Aqua Traiana",
            "kind": "aqueduct",
            "coords": [
              [
                41.888,
                12.43
              ],
              [
                41.8885,
                12.45
              ],
              [
                41.888,
                12.464
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "late",
      "name": "Late Empire",
      "short": "Late Empire",
      "start": 193,
      "end": 476,
      "range": "AD 193 – 476",
      "color": "#6a7c3f",
      "blurb": "Crisis, reform and Christianity. Emperors build walls, split the empire and move its centre east; the western half collapses.",
      "overlay": {
        "note": "Aurelian's circuit encloses the city; the first great Christian basilicas appear outside the old centre.",
        "extent": [
          {
            "name": "City inside the Aurelian Walls",
            "tone": "urban",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ],
              [
                41.887,
                12.479
              ],
              [
                41.893,
                12.4792
              ],
              [
                41.9,
                12.4775
              ],
              [
                41.906,
                12.477
              ]
            ]
          },
          {
            "name": "Trastevere",
            "tone": "urban",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ],
              [
                41.899,
                12.468
              ],
              [
                41.893,
                12.47
              ],
              [
                41.886,
                12.472
              ]
            ]
          }
        ],
        "walls": [
          {
            "name": "Aurelian Wall, east bank",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ]
            ]
          },
          {
            "name": "Aurelian Wall, Trastevere",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "medieval",
      "name": "Medieval & Papal",
      "short": "Medieval",
      "start": 476,
      "end": 1400,
      "range": "AD 476 – 1400",
      "color": "#4d6b6a",
      "blurb": "The city shrinks to a few tens of thousands. The popes inherit Rome, and the medieval city is built out of its ruins.",
      "overlay": {
        "note": "The inhabited bend of the Tiber (abitato) inside a walled circuit that was mostly fields and ruins (disabitato).",
        "extent": [
          {
            "name": "Disabitato — abandoned within the walls",
            "tone": "abandoned",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ],
              [
                41.887,
                12.479
              ],
              [
                41.893,
                12.4792
              ],
              [
                41.9,
                12.4775
              ],
              [
                41.906,
                12.477
              ]
            ]
          },
          {
            "name": "Trastevere disabitato",
            "tone": "abandoned",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ],
              [
                41.899,
                12.468
              ],
              [
                41.893,
                12.47
              ],
              [
                41.886,
                12.472
              ]
            ]
          },
          {
            "name": "Abitato — the inhabited city",
            "tone": "urban",
            "coords": [
              [
                41.9107,
                12.4763
              ],
              [
                41.907,
                12.47
              ],
              [
                41.901,
                12.4685
              ],
              [
                41.896,
                12.4705
              ],
              [
                41.891,
                12.473
              ],
              [
                41.886,
                12.4755
              ],
              [
                41.884,
                12.479
              ],
              [
                41.885,
                12.4845
              ],
              [
                41.888,
                12.489
              ],
              [
                41.8915,
                12.49
              ],
              [
                41.8945,
                12.488
              ],
              [
                41.8975,
                12.4835
              ],
              [
                41.9005,
                12.4805
              ],
              [
                41.9045,
                12.4795
              ],
              [
                41.908,
                12.478
              ]
            ]
          },
          {
            "name": "Trastevere abitato",
            "tone": "urban",
            "coords": [
              [
                41.8895,
                12.4695
              ],
              [
                41.887,
                12.468
              ],
              [
                41.8835,
                12.47
              ],
              [
                41.8815,
                12.474
              ],
              [
                41.884,
                12.4765
              ],
              [
                41.8875,
                12.474
              ]
            ]
          }
        ],
        "walls": [
          {
            "name": "Aurelian Wall, east bank",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ]
            ]
          },
          {
            "name": "Aurelian Wall, Trastevere",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "renaissance",
      "name": "Renaissance & Baroque",
      "short": "Renaissance",
      "start": 1400,
      "end": 1798,
      "range": "1400 – 1798",
      "color": "#7d4f6d",
      "blurb": "Popes and cardinals turn Rome into a stage: St Peter's, the Sistine Chapel, fountains, staircases and the Baroque city we walk through today.",
      "overlay": {
        "note": "The inhabited city refills the Campus Martius; Sixtus V's straight streets cut through it.",
        "extent": [
          {
            "name": "Rebuilt Baroque city",
            "tone": "urban",
            "coords": [
              [
                41.912,
                12.474
              ],
              [
                41.907,
                12.469
              ],
              [
                41.901,
                12.4675
              ],
              [
                41.895,
                12.4695
              ],
              [
                41.889,
                12.471
              ],
              [
                41.884,
                12.475
              ],
              [
                41.881,
                12.48
              ],
              [
                41.883,
                12.489
              ],
              [
                41.887,
                12.497
              ],
              [
                41.891,
                12.503
              ],
              [
                41.896,
                12.503
              ],
              [
                41.901,
                12.499
              ],
              [
                41.906,
                12.493
              ],
              [
                41.91,
                12.486
              ],
              [
                41.912,
                12.48
              ]
            ]
          },
          {
            "name": "Trastevere",
            "tone": "urban",
            "coords": [
              [
                41.8895,
                12.4695
              ],
              [
                41.887,
                12.468
              ],
              [
                41.8835,
                12.47
              ],
              [
                41.8815,
                12.474
              ],
              [
                41.884,
                12.4765
              ],
              [
                41.8875,
                12.474
              ]
            ]
          }
        ],
        "walls": [
          {
            "name": "Aurelian Wall, east bank",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ]
            ]
          },
          {
            "name": "Aurelian Wall, Trastevere",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ]
            ]
          }
        ],
        "lines": [
          {
            "name": "Via del Corso",
            "kind": "street",
            "coords": [
              [
                41.9107,
                12.4763
              ],
              [
                41.906,
                12.4785
              ],
              [
                41.9008,
                12.482
              ],
              [
                41.8959,
                12.4826
              ]
            ]
          },
          {
            "name": "Strada Felice",
            "kind": "street",
            "coords": [
              [
                41.906,
                12.4827
              ],
              [
                41.903,
                12.488
              ],
              [
                41.9,
                12.493
              ],
              [
                41.8976,
                12.498
              ],
              [
                41.897,
                12.504
              ]
            ]
          },
          {
            "name": "Strada Pia",
            "kind": "street",
            "coords": [
              [
                41.9091,
                12.5016
              ],
              [
                41.906,
                12.495
              ],
              [
                41.902,
                12.4895
              ],
              [
                41.899,
                12.486
              ]
            ]
          }
        ]
      }
    },
    {
      "id": "modern",
      "name": "Modern Rome",
      "short": "Modern",
      "start": 1798,
      "end": 2026,
      "range": "1798 – today",
      "color": "#3f5f8a",
      "blurb": "Rome becomes the capital of Italy, the papacy retreats behind the Vatican walls, and a modern city grows around the ancient core.",
      "overlay": {
        "note": "The walled city plus the new districts built after 1870: Prati, Esquilino and San Lorenzo, Testaccio.",
        "extent": [
          {
            "name": "Historic centre",
            "tone": "urban",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ],
              [
                41.887,
                12.479
              ],
              [
                41.893,
                12.4792
              ],
              [
                41.9,
                12.4775
              ],
              [
                41.906,
                12.477
              ]
            ]
          },
          {
            "name": "Trastevere",
            "tone": "urban",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ],
              [
                41.899,
                12.468
              ],
              [
                41.893,
                12.47
              ],
              [
                41.886,
                12.472
              ]
            ]
          },
          {
            "name": "Prati (after 1870)",
            "tone": "new",
            "coords": [
              [
                41.9125,
                12.4745
              ],
              [
                41.9135,
                12.466
              ],
              [
                41.908,
                12.4585
              ],
              [
                41.9025,
                12.4595
              ],
              [
                41.9015,
                12.4675
              ],
              [
                41.906,
                12.472
              ]
            ]
          },
          {
            "name": "Esquilino & San Lorenzo",
            "tone": "new",
            "coords": [
              [
                41.907,
                12.5
              ],
              [
                41.902,
                12.5085
              ],
              [
                41.899,
                12.5145
              ],
              [
                41.893,
                12.514
              ],
              [
                41.891,
                12.505
              ],
              [
                41.896,
                12.498
              ]
            ]
          },
          {
            "name": "Testaccio",
            "tone": "new",
            "coords": [
              [
                41.88,
                12.4775
              ],
              [
                41.879,
                12.4715
              ],
              [
                41.8745,
                12.4725
              ],
              [
                41.8735,
                12.478
              ],
              [
                41.8775,
                12.4795
              ]
            ]
          }
        ],
        "walls": [
          {
            "name": "Aurelian Wall, east bank",
            "coords": [
              [
                41.9113,
                12.4759
              ],
              [
                41.9067,
                12.4874
              ],
              [
                41.9106,
                12.4978
              ],
              [
                41.9091,
                12.5016
              ],
              [
                41.904,
                12.502
              ],
              [
                41.8977,
                12.5093
              ],
              [
                41.8916,
                12.515
              ],
              [
                41.8855,
                12.51
              ],
              [
                41.8734,
                12.5014
              ],
              [
                41.875,
                12.493
              ],
              [
                41.8765,
                12.4815
              ],
              [
                41.877,
                12.479
              ]
            ]
          },
          {
            "name": "Aurelian Wall, Trastevere",
            "coords": [
              [
                41.8785,
                12.4745
              ],
              [
                41.883,
                12.47
              ],
              [
                41.8892,
                12.4693
              ],
              [
                41.8875,
                12.462
              ],
              [
                41.8852,
                12.4515
              ],
              [
                41.895,
                12.458
              ],
              [
                41.901,
                12.462
              ]
            ]
          }
        ]
      }
    }
  ],
  "events": [
    {
      "id": "founding-of-rome",
      "era": "founding",
      "kind": "history",
      "year": -753,
      "label": "753 BC",
      "title": "The founding of Rome",
      "place": "Palatine Hill",
      "lat": 41.8891,
      "lng": 12.487,
      "blurb": "Tradition says Romulus traced the city's boundary on the Palatine on 21 April 753 BC, then killed his twin Remus in the quarrel that followed. Archaeology tells a quieter story: huts on the Palatine from about the 10th century BC, and separate hill villages slowly merging into one city.",
      "images": [
        {
          "img": "founding-of-rome",
          "alt": "The Capitoline Wolf, the bronze she-wolf suckling Romulus and Remus",
          "credit": {
            "name": "Rabax63",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Kapitolinische_W%C3%B6lfin_Museum_Capitolini.jpg"
          }
        },
        {
          "img": "founding-of-rome-2",
          "alt": "The ruins of the imperial palaces on the Palatine Hill, seen from the Circus Maximus",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Palatine_Hill_from_Circus_Maximus_Rome.jpg"
          }
        }
      ]
    },
    {
      "id": "seven-hills",
      "era": "founding",
      "kind": "history",
      "year": -700,
      "label": "c. 700 BC",
      "title": "The hills become one city",
      "place": "Palatine Hill",
      "lat": 41.8893,
      "lng": 12.4871,
      "blurb": "Separate villages on the Palatine, Esquiline, Caelian and neighbouring hills grew together through the 8th and 7th centuries BC. The Forum valley between them was still marshland when the first huts were built; draining it made a common square possible.",
      "images": [
        {
          "img": "seven-hills",
          "alt": "The Palatine Hill above the Forum valley",
          "credit": {
            "name": "BIG ALBERT",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:2017-03-23_On_the_Palatine_Hill.jpg"
          }
        },
        {
          "img": "seven-hills-2",
          "alt": "A line map of ancient Rome labelling its seven hills and the Tiber",
          "credit": {
            "name": "Jan Goeree",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Map_of_Ancient_Rome_Illustrating_Major_Monuments_and_the_Seven_Hills_MET_DP800332.jpg"
          }
        }
      ]
    },
    {
      "id": "forum-drained",
      "era": "founding",
      "kind": "city",
      "year": -600,
      "label": "c. 600 BC",
      "title": "The Forum is drained and paved",
      "place": "Roman Forum",
      "lat": 41.8925,
      "lng": 12.4853,
      "blurb": "The marshy valley between the Palatine and the Capitoline was drained by the Cloaca Maxima and paved, turning it into the political and commercial square of the city. The Regia and the earliest temples belong to this first monumental phase.",
      "images": [
        {
          "img": "roman-forum",
          "alt": "Ruins of the Roman Forum seen from the Capitoline Hill",
          "credit": {
            "name": "Wolfgang Moroder",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Foro_Romano_Musei_Capitolini_Roma.jpg"
          }
        },
        {
          "img": "forum-drained-2",
          "alt": "A nineteenth-century painting of the Cloaca Maxima's stone outlet on the Tiber",
          "credit": {
            "name": "Christoffer Wilhelm Eckersberg",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:View_of_the_Cloaca_Maxima_Rome_1814.jpg"
          }
        }
      ]
    },
    {
      "id": "republic-founded",
      "era": "republic",
      "kind": "history",
      "year": -509,
      "label": "509 BC",
      "title": "The Republic begins",
      "place": "Capitoline Hill",
      "lat": 41.8931,
      "lng": 12.4828,
      "blurb": "Tarquinius Superbus, the last king, was expelled and Rome replaced monarchy with two annually elected consuls and a Senate. The fiction of shared power held for nearly five centuries.",
      "images": [
        {
          "img": "republic-founded",
          "alt": "Denarius of Lucius Junius Brutus, the Republic's first consul",
          "credit": {
            "name": "CNG",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:M._Junius_Brutus%2C_denarius%2C_54_BC%2C_RRC_433-2_%28obverse_L._Junius%29.jpg"
          }
        },
        {
          "img": "republic-founded-2",
          "alt": "The Capitoline Brutus, a bronze bust of a bearded man",
          "credit": {
            "name": "C.Salviani",
            "license": "CC BY 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Brutus_Capitolin_-_d%C3%A9tour%C3%A9_03.jpg"
          }
        }
      ]
    },
    {
      "id": "temple-jupiter-optimus",
      "era": "republic",
      "kind": "monument",
      "year": -509,
      "label": "509 BC",
      "title": "The temple on the Capitoline",
      "place": "Capitoline Hill",
      "lat": 41.8926,
      "lng": 12.4825,
      "blurb": "The great temple of Jupiter Optimus Maximus was dedicated in the first year of the Republic, traditionally on 13 September. It was vowed by the last king and built by the new regime: the gods, and the city, belonged to the Republic now.",
      "images": [
        {
          "img": "temple-jupiter-optimus",
          "alt": "Foundations attributed to the Temple of Jupiter Optimus Maximus",
          "credit": {
            "name": "Torquatus",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Temple_of_Jupiter_Optimus_Maximus.jpg"
          }
        },
        {
          "img": "temple-jupiter-optimus-2",
          "alt": "A scale model of the Temple of Jupiter Optimus Maximus in a museum case",
          "credit": {
            "name": "Joris",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Temple_Jupiter_Optimus_Maximus2.JPG"
          }
        }
      ]
    },
    {
      "id": "twelve-tables",
      "era": "republic",
      "kind": "history",
      "year": -451,
      "label": "451 BC",
      "title": "The Twelve Tables",
      "place": "Roman Forum",
      "lat": 41.8925,
      "lng": 12.4854,
      "blurb": "After a plebeian campaign for written law, a commission of ten patricians published the first Roman code on bronze tablets in the Forum. The Twelve Tables remained the foundation of Roman legal education for centuries.",
      "images": [
        {
          "img": "twelve-tables",
          "alt": "A reconstruction of the Twelve Tables of Roman law",
          "credit": {
            "name": "Sebastian Sapia",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Xii_leges.jpg"
          }
        },
        {
          "img": "twelve-tables-2",
          "alt": "A nineteenth-century illustration of the Comitium in the Roman Forum",
          "credit": {
            "name": "Amadscientist from unknown 19th century artist",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Forum_Comitium.jpg"
          }
        }
      ]
    },
    {
      "id": "gallic-sack",
      "era": "republic",
      "kind": "history",
      "year": -390,
      "label": "390 BC",
      "title": "The Gauls sack Rome",
      "place": "Capitoline Hill",
      "lat": 41.8929,
      "lng": 12.4841,
      "blurb": "After a Roman defeat at the river Allia, Brennus' Gauls occupied and plundered the city. The shock led Rome to rebuild its walls — the Servian Wall — and never again to trust its northern neighbours.",
      "images": [
        {
          "img": "gallic-sack",
          "alt": "A stretch of the Servian Wall beside Termini station",
          "credit": {
            "name": "Lalupa",
            "license": "CC BY-SA 1.0",
            "url": "https://commons.wikimedia.org/wiki/File:Servian_Wall-Termini_Station.jpg"
          }
        },
        {
          "img": "gallic-sack-2",
          "alt": "A fifteenth-century panel painting of Brennus, the Gallic leader, among his warriors",
          "credit": {
            "name": "Giovanni di ser Giovanni Guidi",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Giovanni_di_Ser_Giovanni_Guidi_(called_Scheggia)_-_King_Brennus_of_Gaul_captures_the_city_of_Rome,_Marcus_Furius_Camillus_expels_King_Brennus_from_Rome_-_1942.324_-_Yale_University_Art_Gallery.jpg"
          }
        }
      ]
    },
    {
      "id": "servian-wall",
      "era": "republic",
      "kind": "city",
      "year": -378,
      "label": "c. 378 BC",
      "title": "The Servian Wall",
      "place": "Servian Wall, Termini",
      "lat": 41.9018,
      "lng": 12.5005,
      "blurb": "After the Gallic sack the Romans built a wall of tufa blocks around the city, enclosing roughly 426 hectares. Long stretches survive near Termini and on the Aventine; the 'Servian' name is traditional and the surviving circuit is later than Servius Tullius.",
      "images": [
        {
          "img": "servian-wall",
          "alt": "A surviving stretch of the Servian Wall",
          "credit": {
            "name": "Joris",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Servian_Wall.JPG"
          }
        },
        {
          "img": "servian-wall-2",
          "alt": "A map of ancient Rome with the Servian Wall traced in red",
          "credit": {
            "name": "fr:User:ColdEel & edited by nl:Gebruiker:Joris",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Plan_Rome-_Servische_Muur.png"
          }
        }
      ]
    },
    {
      "id": "appian-way",
      "era": "republic",
      "kind": "city",
      "year": -312,
      "label": "312 BC",
      "title": "The Appian Way and the first aqueduct",
      "place": "Porta Capena, Via Appia",
      "lat": 41.8845,
      "lng": 12.491,
      "blurb": "Appius Claudius Caecus built Rome's first aqueduct and its first great road, the Via Appia, running south to Capua and later to Brindisi. Water and roads were the infrastructure of empire.",
      "images": [
        {
          "img": "appian-way",
          "alt": "The Appian Way running through the Roman countryside",
          "credit": {
            "name": "LuisaV72",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Paesaggio_dell%27Appia_antica.jpg"
          }
        },
        {
          "img": "appian-way-2",
          "alt": "The basalt-paved Via Appia running between pine trees and ruins",
          "credit": {
            "name": "Piotr Kłos",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Via_Appia_(Porta_San_Sebastiano).jpg"
          }
        }
      ]
    },
    {
      "id": "punic-wars",
      "era": "republic",
      "kind": "history",
      "year": -264,
      "label": "264–146 BC",
      "title": "The Punic Wars",
      "place": "Temple of Saturn, Forum",
      "lat": 41.8925,
      "lng": 12.4842,
      "blurb": "Three wars against Carthage decided the western Mediterranean. Rome lost battles — Cannae in 216 BC was catastrophic — but won the war, destroyed Carthage in 146 BC, and became an overseas power.",
      "images": [
        {
          "img": "punic-wars",
          "alt": "Bust of Hannibal Barca",
          "credit": {
            "name": "Fratelli Alinari",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Hannibal_Barca_bust_from_Capua_photo.jpg"
          }
        },
        {
          "img": "punic-wars-2",
          "alt": "An engraving of the Battle of Zama, with cavalry and elephants",
          "credit": {
            "name": "anonymous",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Cornelis_Cort_-_The_Battle_of_Zama_-_1990.563_-_Art_Institute_of_Chicago.jpg"
          }
        }
      ]
    },
    {
      "id": "gracchus",
      "era": "republic",
      "kind": "history",
      "year": -133,
      "label": "133 BC",
      "title": "Tiberius Gracchus is killed",
      "place": "Capitoline Hill",
      "lat": 41.8934,
      "lng": 12.483,
      "blurb": "Tiberius Gracchus proposed handing public land to the poor and was clubbed to death with his supporters in a riot. His brother Gaius followed twelve years later; political murder had become an instrument of politics.",
      "images": [
        {
          "img": "gracchus",
          "alt": "The Gracchi brothers, sculpture by Eugène Guillaume",
          "credit": {
            "name": "Jean-Baptiste Claude Eugène Guillaume",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Eugene_Guillaume_-_the_Gracchi_%28cropped%29.jpg"
          }
        },
        {
          "img": "gracchus-2",
          "alt": "A marble sculpture of the Gracchi brothers standing together",
          "credit": {
            "name": "Sailko",
            "license": "CC BY 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Eug%C3%A9ne_guillaume,_i_gracchi,_1853.JPG"
          }
        }
      ]
    },
    {
      "id": "sulla-march",
      "era": "republic",
      "kind": "history",
      "year": -88,
      "label": "88 BC",
      "title": "Sulla marches on Rome",
      "place": "Esquiline Hill",
      "lat": 41.898,
      "lng": 12.497,
      "blurb": "Sulla led his legions into Rome to overturn a political decision, the first general to do so. The precedent — an army loyal to a man rather than to the state — haunted the Republic until it fell.",
      "images": [
        {
          "img": "sulla-march",
          "alt": "Sulla's soldiers entering Rome, painting by Conrad Ermisch",
          "credit": {
            "name": "Conrad Ermisch",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Conrad_Ermisch_-_Sulla_is_sacking_Rome,_88_BC.jpg"
          }
        },
        {
          "img": "sulla-march-2",
          "alt": "A painting of Sulla seated in judgement before the Praenestines",
          "credit": {
            "name": "Lodovico Pogliaghi",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Lodovico_Pogliaghi_-_The_Praenestines_before_the_tribunal_of_Sulla,_82_BC.png"
          }
        }
      ]
    },
    {
      "id": "theatre-of-pompey",
      "era": "republic",
      "kind": "monument",
      "year": -55,
      "label": "55 BC",
      "title": "The Theatre of Pompey",
      "place": "Theatre of Pompey",
      "lat": 41.8951,
      "lng": 12.4729,
      "blurb": "Pompey built the first permanent stone theatre in Rome, with a temple of Venus Victrix at the top of the seating. Behind the stage stood a portico and the hall where Caesar was killed in 44 BC.",
      "images": [
        {
          "img": "theatre-of-pompey",
          "alt": "A reconstruction of the Theatre of Pompey",
          "credit": {
            "name": "Jan Goeree",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:A_Reconstruction_of_the_Theatre_of_Pompey_MET_DP800272.jpg"
          }
        },
        {
          "img": "theatre-of-pompey-2",
          "alt": "A 3D reconstruction of the Theatre of Pompey and its surrounding portico",
          "credit": {
            "name": "Lasha Tskhondia - L.VII.C.",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Theatre_of_Pompey_3D_cut_out.png"
          }
        }
      ]
    },
    {
      "id": "forum-of-caesar",
      "era": "republic",
      "kind": "monument",
      "year": -46,
      "label": "46 BC",
      "title": "Caesar's forum",
      "place": "Forum of Caesar",
      "lat": 41.8941,
      "lng": 12.485,
      "blurb": "Caesar cleared a new forum beside the old one and dedicated a temple to Venus Genetrix, his family's legendary ancestor. The space was unfinished when he was assassinated and completed by Augustus.",
      "images": [
        {
          "img": "forum-of-caesar",
          "alt": "The Forum of Caesar and the Temple of Venus Genetrix",
          "credit": {
            "name": "Wolfgang Moroder",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Foro_di_Cesare_a_Roma.jpg"
          }
        },
        {
          "img": "forum-of-caesar-2",
          "alt": "Excavated columns and the podium of the Forum of Caesar",
          "credit": {
            "name": "Jensens",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Forum_of_Caesar_Rome.jpg"
          }
        }
      ]
    },
    {
      "id": "caesar",
      "era": "republic",
      "kind": "history",
      "year": -44,
      "label": "44 BC",
      "title": "Caesar is assassinated",
      "place": "Largo di Torre Argentina",
      "lat": 41.8956,
      "lng": 12.4765,
      "blurb": "A conspiracy of senators stabbed Caesar in the Curia of Pompey on 15 March 44 BC, intending to save the Republic. Instead they got another civil war and, in the end, the monarchy they had feared.",
      "images": [
        {
          "img": "caesar",
          "alt": "The Death of Caesar, painting by Vincenzo Camuccini",
          "credit": {
            "name": "Vincenzo Camuccini",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Vincenzo_Camuccini_-_La_morte_di_Cesare_%28cropped_3-2%29.jpg"
          }
        },
        {
          "img": "caesar-2",
          "alt": "A painting of Caesar's assassination, senators crowded around him in the Theatre of Pompey",
          "credit": {
            "name": "Heinrich Füger",
            "license": "CC BY 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:The_Assassination_of_Julius_Caesar_(by_Heinrich_F%C3%BCger)_%E2%80%93_Vienna_Museum.jpg"
          }
        }
      ]
    },
    {
      "id": "augustus",
      "era": "empire",
      "kind": "history",
      "year": -27,
      "label": "27 BC",
      "title": "Augustus becomes princeps",
      "place": "Mausoleum of Augustus",
      "lat": 41.906,
      "lng": 12.4765,
      "blurb": "Octavian, Caesar's adopted heir, defeated Antony and Cleopatra and took the name Augustus in 27 BC. He kept the republican offices but held the army and the provinces: monarchy dressed as restoration.",
      "images": [
        {
          "img": "augustus",
          "alt": "The Mausoleum of Augustus",
          "credit": {
            "name": "MumblerJamie",
            "license": "CC BY-SA 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Photographs_of_the_Mausoleum_of_Augustus_24_%28cropped%29.jpg"
          }
        },
        {
          "img": "augustus-2",
          "alt": "The Augustus of Prima Porta, a white marble statue of the emperor in armour",
          "credit": {
            "name": "PierreSelim",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Mus%C3%A9e_du_Louvre_-_Auguste_-_Prima_Porta_01.jpg"
          }
        }
      ]
    },
    {
      "id": "ara-pacis",
      "era": "empire",
      "kind": "monument",
      "year": -9,
      "label": "9 BC",
      "title": "The Ara Pacis",
      "place": "Ara Pacis",
      "lat": 41.9063,
      "lng": 12.4756,
      "blurb": "The Altar of Peace was dedicated on Augustus' return from Spain and Gaul, its frieze carved with a procession of the imperial family. It is the classic statement of Augustan propaganda in marble.",
      "images": [
        {
          "img": "ara-pacis",
          "alt": "The Ara Pacis",
          "credit": {
            "name": "Rabax63",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Ara_Pacis_%28SW%29.jpg"
          }
        },
        {
          "img": "ara-pacis-2",
          "alt": "A carved marble swag of fruit and leaves on the Ara Pacis",
          "credit": {
            "name": "Nicholas Hartmann",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Rome_Ara_Pacis_swag_relief.jpg"
          }
        }
      ]
    },
    {
      "id": "forum-of-augustus",
      "era": "empire",
      "kind": "monument",
      "year": -2,
      "label": "2 BC",
      "title": "The Forum of Augustus",
      "place": "Forum of Augustus",
      "lat": 41.8944,
      "lng": 12.4863,
      "blurb": "Augustus built the forum around the Temple of Mars Ultor, vowed at Philippi. Its high fire-proof wall separated it from the crowded Suburra, and its porticoes held statues of the Julian family.",
      "images": [
        {
          "img": "forum-of-augustus",
          "alt": "The Forum of Augustus at night",
          "credit": {
            "name": "Jakub Hałun",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:20140804_Forum_of_Augustus_Rome_0679.jpg"
          }
        },
        {
          "img": "forum-of-augustus-2",
          "alt": "The tall columns of the Temple of Mars Ultor in the Forum of Augustus",
          "credit": {
            "name": "NikonZ7II",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Tempio_di_Marte_Ultore_(Roma)_-_Laterale.jpg"
          }
        }
      ]
    },
    {
      "id": "aqua-claudia",
      "era": "empire",
      "kind": "city",
      "year": 52,
      "label": "AD 52",
      "title": "The Aqua Claudia",
      "place": "Porta Maggiore",
      "lat": 41.8916,
      "lng": 12.515,
      "blurb": "Claudius completed the Aqua Claudia and the Anio Novus, two aqueducts that met at Porta Maggiore. Their arches still cross the Roman campagna east of the city.",
      "images": [
        {
          "img": "aqua-claudia",
          "alt": "The Aqua Claudia crossing at Porta Maggiore",
          "credit": {
            "name": "Falk2",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:14_587e_Porta_Maggiore,_ET_7081.jpg"
          }
        },
        {
          "img": "aqua-claudia-2",
          "alt": "The brick arches of the Claudian aqueduct crossing the Roman countryside",
          "credit": {
            "name": "Maurizio Moro5153",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Parco_degli_Acquedotti_Roma.jpg"
          }
        }
      ]
    },
    {
      "id": "great-fire",
      "era": "empire",
      "kind": "history",
      "year": 64,
      "label": "AD 64",
      "title": "The Great Fire and Nero's palace",
      "place": "Domus Aurea",
      "lat": 41.8915,
      "lng": 12.4955,
      "blurb": "Fire destroyed much of the city in AD 64, and Nero built an enormous palace, the Domus Aurea, on the cleared land. Its painted rooms were rediscovered in the Renaissance and influenced Raphael.",
      "images": [
        {
          "img": "great-fire",
          "alt": "Bust of Nero",
          "credit": {
            "name": "Unknown",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Nero_Glyptothek_Munich_321.jpg"
          }
        },
        {
          "img": "great-fire-2",
          "alt": "The domed octagonal hall of Nero's Domus Aurea, lit from its oculus",
          "credit": {
            "name": "Tyler Bell",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Panorama_of_Octagonal_Room,_Domus_Aurea_(42152270155).jpg"
          }
        }
      ]
    },
    {
      "id": "colosseum",
      "era": "empire",
      "kind": "monument",
      "year": 80,
      "label": "AD 80",
      "title": "The Colosseum opens",
      "place": "Colosseum",
      "lat": 41.8902,
      "lng": 12.4922,
      "blurb": "Vespasian began the Flavian Amphitheatre and Titus opened it in AD 80 with a hundred days of games. It held about 50,000 spectators and, according to Josephus, was paid for from the spoils of Jerusalem.",
      "images": [
        {
          "img": "colosseum",
          "alt": "The Colosseum",
          "credit": {
            "name": "FeaturedPics",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg"
          }
        },
        {
          "img": "colosseum-2",
          "alt": "An engraving of the Colosseum's interior, with its tiers of seating around the arena",
          "credit": {
            "name": "anonymous",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Anonymous_-_Colosseum,_Interior_-_B1974.12.1454_-_Yale_Center_for_British_Art.jpg"
          }
        }
      ],
      "guide": {
        "href": "colosseum.html",
        "name": "the Colosseum"
      }
    },
    {
      "id": "arch-of-titus",
      "era": "empire",
      "kind": "monument",
      "year": 81,
      "label": "AD 81",
      "title": "The Arch of Titus",
      "place": "Arch of Titus",
      "lat": 41.8905,
      "lng": 12.4885,
      "blurb": "The arch commemorates Titus' conquest of Jerusalem in AD 70, showing the Temple's menorah and treasure carried in triumph. It still stands at the entrance to the Forum.",
      "images": [
        {
          "img": "arch-of-titus",
          "alt": "The Arch of Titus",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Arch_Titus%2C_Forum_Romanum%2C_Rome%2C_Italy.jpg"
          }
        },
        {
          "img": "arch-of-titus-2",
          "alt": "The spoils relief on the Arch of Titus, showing the menorah and temple treasures",
          "credit": {
            "name": "José Luiz",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Spoils_from_Jerusalem_-_Arch_of_Titus_-_Rome_2008.jpg"
          }
        }
      ]
    },
    {
      "id": "stadium-of-domitian",
      "era": "empire",
      "kind": "monument",
      "year": 86,
      "label": "AD 86",
      "title": "Domitian's stadium",
      "place": "Piazza Navona",
      "lat": 41.8989,
      "lng": 12.4736,
      "blurb": "Domitian built a stadium for Greek-style athletic games in the Campus Martius. Its outline survives in Piazza Navona, which sits directly on the stadium's foundations.",
      "images": [
        {
          "img": "stadium-of-domitian",
          "alt": "Ruins of the Stadium of Domitian beneath Piazza Navona",
          "credit": {
            "name": "Gary Todd",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Piazza_Navona_Underground_Ruins_of_Stadium_of_Domitian_%2848493100687%29.jpg"
          }
        },
        {
          "img": "stadium-of-domitian-2",
          "alt": "Piazza Navona, whose long oval follows the course of Domitian's stadium",
          "credit": {
            "name": "Myrabella",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Piazza_Navona_1.jpg"
          }
        }
      ]
    },
    {
      "id": "markets-of-trajan",
      "era": "empire",
      "kind": "monument",
      "year": 110,
      "label": "c. AD 110",
      "title": "Trajan's Market",
      "place": "Trajan's Market",
      "lat": 41.8954,
      "lng": 12.4867,
      "blurb": "Cut into the Quirinal hill behind Trajan's forum, this brick complex of halls, shops and streets was long read as a market. It was probably also an administrative centre for the emperor's largesse.",
      "images": [
        {
          "img": "markets-of-trajan",
          "alt": "The Markets of Trajan",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Trajan%27s_Market,_Rome,_Italy.jpg"
          }
        },
        {
          "img": "markets-of-trajan-2",
          "alt": "Brick arches and vaulted halls inside Trajan's Market",
          "credit": {
            "name": "Bradley Weber",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Markets_of_Trajan_(33189493088).jpg"
          }
        }
      ]
    },
    {
      "id": "trajan",
      "era": "empire",
      "kind": "monument",
      "year": 113,
      "label": "AD 113",
      "title": "Trajan's Forum and Column",
      "place": "Trajan's Column",
      "lat": 41.8958,
      "lng": 12.4844,
      "blurb": "Trajan's forum, basilica and column celebrated the conquest of Dacia; the column's spiral relief tells the campaigns in 155 scenes. The markets behind it were the commercial heart of the city.",
      "images": [
        {
          "img": "trajan",
          "alt": "Trajan's Column",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Trajan%27s_Column_HD.jpg"
          }
        },
        {
          "img": "trajan-2",
          "alt": "A spiral relief panel on Trajan's Column showing Roman soldiers",
          "credit": {
            "name": "Wknight94",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Trajan%27s_Column_reliefs.jpg"
          }
        }
      ]
    },
    {
      "id": "pantheon",
      "era": "empire",
      "kind": "monument",
      "year": 125,
      "label": "c. AD 125",
      "title": "The Pantheon is rebuilt",
      "place": "Pantheon",
      "lat": 41.8986,
      "lng": 12.4769,
      "blurb": "Hadrian rebuilt Agrippa's Pantheon with a concrete dome 43.3 m across, open at the oculus. It is the best-preserved building of ancient Rome and still the model for domed architecture.",
      "images": [
        {
          "img": "pantheon",
          "alt": "The Pantheon",
          "credit": {
            "name": "NikonZ7II",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Pantheon_%28Rome%29_-_Right_side_and_front.jpg"
          }
        },
        {
          "img": "pantheon-2",
          "alt": "The coffered concrete dome of the Pantheon, open at the oculus",
          "credit": {
            "name": "Wilfredor",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Pantheon_(Rome),_Dome_interior.jpg"
          }
        }
      ],
      "guide": {
        "href": "pantheon.html",
        "name": "the Pantheon"
      }
    },
    {
      "id": "castel-sant-angelo",
      "era": "empire",
      "kind": "monument",
      "year": 139,
      "label": "AD 139",
      "title": "Hadrian's mausoleum",
      "place": "Castel Sant'Angelo",
      "lat": 41.9031,
      "lng": 12.4663,
      "blurb": "Hadrian built his mausoleum on the right bank; later popes turned it into a fortress, a prison, and a refuge reached from the Vatican by a covered corridor.",
      "images": [
        {
          "img": "castel-sant-angelo",
          "alt": "Castel Sant'Angelo at night",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Castel_Sant%27Angelo_at_Night.jpg"
          }
        },
        {
          "img": "castel-sant-angelo-2",
          "alt": "Castel Sant'Angelo lit at dusk, reflected in the Tiber",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Castel_Sant%27Angelo_at_dusk,_Rome,_Italy.jpg"
          }
        }
      ]
    },
    {
      "id": "marcus-column",
      "era": "empire",
      "kind": "monument",
      "year": 180,
      "label": "AD 180",
      "title": "The Column of Marcus Aurelius",
      "place": "Column of Marcus Aurelius",
      "lat": 41.9009,
      "lng": 12.4802,
      "blurb": "The column commemorates the Marcomannic wars, carved with rain miracles and beheadings. Its bronze statue of Marcus was replaced by St Paul in the 16th century.",
      "images": [
        {
          "img": "marcus-column",
          "alt": "The Column of Marcus Aurelius",
          "credit": {
            "name": "WikiRomaWiki",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Colonna_di_Marco_aurelio_-_Frontale.jpg"
          }
        },
        {
          "img": "marcus-column-2",
          "alt": "Relief panels from the Column of Marcus Aurelius showing soldiers and prisoners",
          "credit": {
            "name": "Morgan Barrett",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Eugen_Petersen_-_Column_of_Marcus_Aurelius_-_017_-_scene_011.jpg"
          }
        }
      ]
    },
    {
      "id": "caracalla",
      "era": "late",
      "kind": "monument",
      "year": 216,
      "label": "AD 216",
      "title": "The Baths of Caracalla",
      "place": "Baths of Caracalla",
      "lat": 41.879,
      "lng": 12.4924,
      "blurb": "The baths of Caracalla held thousands and included libraries, shops and gardens — a public palace. Their brick shell still shows how Roman concrete worked.",
      "images": [
        {
          "img": "caracalla",
          "alt": "The Baths of Caracalla",
          "credit": {
            "name": "Ethan Doyle White",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Baths_of_Caracalla%2C_facing_Caldarium.jpg"
          }
        },
        {
          "img": "caracalla-2",
          "alt": "A nineteenth-century painting of the ruined Baths of Caracalla",
          "credit": {
            "name": "Carlo Labruzzo",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Carlo_Labruzzo_-_The_Baths_of_Caracalla,_Rome_-_B2012.24.3_-_Yale_Center_for_British_Art.jpg"
          }
        }
      ]
    },
    {
      "id": "aurelian-walls",
      "era": "late",
      "kind": "city",
      "year": 275,
      "label": "AD 275",
      "title": "The Aurelian Walls",
      "place": "Porta San Paolo",
      "lat": 41.8765,
      "lng": 12.4815,
      "blurb": "Faced with raids across the frontier, Aurelian enclosed the city in 19 km of walls. They defined Rome until the 19th century.",
      "images": [
        {
          "img": "aurelian-walls",
          "alt": "The Aurelian Walls near Porta San Sebastiano",
          "credit": {
            "name": "user:Lalupa",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Celio_-_le_mura_tra_porta_san_Sebastiano_e_porta_Ardeatina_1974.JPG"
          }
        },
        {
          "img": "aurelian-walls-2",
          "alt": "A stretch of the Aurelian Walls in brick beside a modern road",
          "credit": {
            "name": "Karelj",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Aurelian_Walls_Rome_2011_1.jpg"
          }
        }
      ]
    },
    {
      "id": "diocletian",
      "era": "late",
      "kind": "monument",
      "year": 306,
      "label": "AD 306",
      "title": "The Baths of Diocletian",
      "place": "Baths of Diocletian",
      "lat": 41.9033,
      "lng": 12.4983,
      "blurb": "Diocletian's baths were the largest in Rome; part of them later became a church and today a museum. His reforms split the empire into four administrative parts, the tetrarchy.",
      "images": [
        {
          "img": "diocletian",
          "alt": "The Baths of Diocletian",
          "credit": {
            "name": "Antmoose",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Baths_of_Diocletian-Antmoose1.jpg"
          }
        },
        {
          "img": "diocletian-2",
          "alt": "The brick exterior of the Aula Ottagona, part of the Baths of Diocletian",
          "credit": {
            "name": "Falk2",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:L06_960_Aula_Ottagona.jpg"
          }
        }
      ]
    },
    {
      "id": "basilica-of-maxentius",
      "era": "late",
      "kind": "monument",
      "year": 308,
      "label": "AD 308",
      "title": "The Basilica of Maxentius",
      "place": "Basilica of Maxentius",
      "lat": 41.8919,
      "lng": 12.4905,
      "blurb": "Maxentius began the last great basilica of the Forum; Constantine finished it after defeating him at the Milvian Bridge. Three vast coffered vaults survive, the largest of their kind in Rome.",
      "images": [
        {
          "img": "basilica-of-maxentius",
          "alt": "The Basilica of Maxentius and Constantine",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Basilica_Constantine_Maxentius_Forum_Romanum_Rome.jpg"
          }
        },
        {
          "img": "basilica-of-maxentius-2",
          "alt": "The surviving vaulted bays of the Basilica of Maxentius",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Basilica_Maxentius_Constantine_Rome.jpg"
          }
        }
      ]
    },
    {
      "id": "edict-of-milan",
      "era": "late",
      "kind": "history",
      "year": 313,
      "label": "AD 313",
      "title": "Christianity is tolerated",
      "place": "Lateran",
      "lat": 41.8859,
      "lng": 12.506,
      "blurb": "The Edict of Milan granted toleration to Christianity and restored confiscated property. Constantine's patronage transformed the church's place in the empire.",
      "images": [
        {
          "img": "edict-of-milan",
          "alt": "Bust of Constantine",
          "credit": {
            "name": "Marie-Lan Nguyen",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Constantine_Chiaramonti_Inv1749.jpg"
          }
        },
        {
          "img": "edict-of-milan-2",
          "alt": "A statue of Constantine the Great holding a cross",
          "credit": {
            "name": "Intermedichbo - Dr Milorad Dimić, Serbia",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Constantine_the_Great_monument.P4170125.jpg"
          }
        }
      ]
    },
    {
      "id": "arch-of-constantine",
      "era": "late",
      "kind": "monument",
      "year": 315,
      "label": "AD 315",
      "title": "The Arch of Constantine",
      "place": "Arch of Constantine",
      "lat": 41.8896,
      "lng": 12.4907,
      "blurb": "The Senate dedicated this arch to Constantine after his victory at the Milvian Bridge in AD 312. Its reused reliefs mark the end of one sculptural tradition and the beginning of another.",
      "images": [
        {
          "img": "arch-of-constantine",
          "alt": "The Arch of Constantine",
          "credit": {
            "name": "NikonZ7II (Paris Orlando)",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Arch_of_Constantine_%28Rome%29_-_South_side%2C_from_Via_triumphalis.jpg"
          }
        },
        {
          "img": "arch-of-constantine-2",
          "alt": "The Arch of Constantine seen from the Palatine, with the Colosseum behind",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Colosseum_and_Arch_of_Constantine_seen_from_Palatine.jpg"
          }
        }
      ]
    },
    {
      "id": "old-st-peters",
      "era": "late",
      "kind": "church",
      "year": 320,
      "label": "c. AD 320",
      "title": "Old St Peter's",
      "place": "St Peter's Basilica",
      "lat": 41.902,
      "lng": 12.4544,
      "blurb": "Constantine built a basilica over the traditional tomb of Peter on the Vatican hill. It stood for twelve centuries before Bramante's rebuilding replaced it.",
      "images": [
        {
          "img": "old-st-peters",
          "alt": "A model of the Constantinian basilica of St Peter",
          "credit": {
            "name": "Riccardov",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Model_of_costantinean_basilica_of_saint_Peter_in_the_vatican.jpg"
          }
        },
        {
          "img": "old-st-peters-2",
          "alt": "An engraving reconstructing Old St Peter's Basilica and its atrium",
          "credit": {
            "name": "H.W. Brewer (1836 – 1903)[1]",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Basilica_di_San_Pietro_1450.jpg"
          }
        }
      ],
      "guide": {
        "href": "st-peters.html",
        "name": "St Peter’s Basilica"
      }
    },
    {
      "id": "lateran-basilica",
      "era": "late",
      "kind": "church",
      "year": 324,
      "label": "AD 324",
      "title": "The Lateran basilica",
      "place": "St John Lateran",
      "lat": 41.8859,
      "lng": 12.506,
      "blurb": "The Lateran basilica, founded by Constantine and dedicated to the Saviour, became the cathedral of Rome and the mother church of the world. The popes lived beside it until the move to Avignon.",
      "images": [
        {
          "img": "lateran-basilica",
          "alt": "The façade of the Archbasilica of St John Lateran",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Archbasilica_of_St._John_Lateran.jpg"
          }
        },
        {
          "img": "lateran-basilica-2",
          "alt": "The colossal statues of Christ and the apostles on the Lateran basilica",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Statues_of_Jesus_in_San_Giovanni_in_Laterano_(Rome).jpg"
          }
        }
      ]
    },
    {
      "id": "alaric",
      "era": "late",
      "kind": "history",
      "year": 410,
      "label": "AD 410",
      "title": "Alaric sacks Rome",
      "place": "Porta Salaria",
      "lat": 41.9114,
      "lng": 12.4989,
      "blurb": "Alaric's Visigoths entered through the Salarian Gate and plundered the city for three days. The shock prompted Augustine to write The City of God.",
      "images": [
        {
          "img": "alaric",
          "alt": "The Visigoths sack Rome, painting by Joseph-Noël Sylvestre",
          "credit": {
            "name": "Joseph-Noël Sylvestre",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Visigoths_sack_Rome.jpg"
          }
        },
        {
          "img": "alaric-2",
          "alt": "An engraving of Alaric deposing the usurper Attalus in 410",
          "credit": {
            "name": "Eduard Bendemann",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Alaric_deposed_Attalus_from_the_throne,_410_(E._Bendemann).jpg"
          }
        }
      ]
    },
    {
      "id": "sack-455",
      "era": "late",
      "kind": "history",
      "year": 455,
      "label": "AD 455",
      "title": "The Vandals sack Rome",
      "place": "Porta Portuensis",
      "lat": 41.878,
      "lng": 12.4745,
      "blurb": "Genseric's Vandals entered Rome from the right bank through the Portuensis Gate and plundered it for two weeks. Leo I persuaded them to spare the lives of the inhabitants and most public buildings.",
      "images": [
        {
          "img": "sack-455",
          "alt": "Genseric sacking Rome, painting by Karl Bryullov",
          "credit": {
            "name": "Karl Bryullov",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Genseric_sacking_rome_456.jpg"
          }
        },
        {
          "img": "sack-455-2",
          "alt": "Both sides of a silver siliqua of the Vandal king Gaiseric",
          "credit": {
            "name": "Unknown authorUnknown author",
            "license": "CC BY-SA 2.5",
            "url": "https://commons.wikimedia.org/wiki/File:Siliqua_of_Gaiseric,_ca._455-476.jpg"
          }
        }
      ]
    },
    {
      "id": "fall-of-west",
      "era": "medieval",
      "kind": "history",
      "year": 476,
      "label": "AD 476",
      "title": "The western empire ends",
      "place": "Palatine Hill",
      "lat": 41.8891,
      "lng": 12.487,
      "blurb": "Odoacer deposed the boy emperor Romulus Augustulus and sent the imperial regalia to Constantinople. No western emperor ruled again, though Roman law and the papacy endured.",
      "images": [
        {
          "img": "fall-of-west",
          "alt": "Gold solidus of Romulus Augustulus",
          "credit": {
            "name": "ANS",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Gold_Solidus_of_Romulus_Augustulus.jpg"
          }
        },
        {
          "img": "fall-of-west-2",
          "alt": "Obverse and reverse of a coin of Odoacer",
          "credit": {
            "name": "British Museum (photo)",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Coin_of_Odoacer_at_the_British_Museum.png"
          }
        }
      ]
    },
    {
      "id": "gregory-great",
      "era": "medieval",
      "kind": "history",
      "year": 590,
      "label": "AD 590",
      "title": "Gregory the Great",
      "place": "Lateran",
      "lat": 41.8857,
      "lng": 12.5055,
      "blurb": "Gregory I became pope in a city reduced by plague and famine, and made the papacy the practical government of Rome. He fed the poor, negotiated with the Lombards, and sent missionaries to England.",
      "images": [
        {
          "img": "gregory-great",
          "alt": "Saint Gregory the Great, painting by Francisco de Goya",
          "credit": {
            "name": "Francisco de Goya",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Francisco_de_Goya_-_Saint_Gregory_the_Great,_Pope_-_Google_Art_Project.jpg"
          }
        },
        {
          "img": "gregory-great-2",
          "alt": "A mosaic of Gregory the Great in the chapel of Santa Giustina, Padua",
          "credit": {
            "name": "Didier Descouens",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Santa_Giustina_(Padua)_-_Left_nave_%E2%80%93_Chapel_of_St._Gregory_the_Great_%E2%80%93_Altar_in_polychrome_stones.jpg"
          }
        }
      ]
    },
    {
      "id": "pantheon-church",
      "era": "medieval",
      "kind": "church",
      "year": 609,
      "label": "AD 609",
      "title": "The Pantheon becomes a church",
      "place": "Pantheon",
      "lat": 41.8986,
      "lng": 12.4769,
      "blurb": "Pope Boniface IV consecrated the Pantheon as Santa Maria ad Martyres, saving it from the fate of most ancient temples. It has been a church ever since.",
      "images": [
        {
          "img": "pantheon-church",
          "alt": "The Pantheon",
          "credit": {
            "name": "NikonZ7II",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Pantheon_%28Rome%29_-_Right_side_and_front.jpg"
          }
        },
        {
          "img": "pantheon-church-2",
          "alt": "The high altar and apse of the Pantheon",
          "credit": {
            "name": "John Samuel",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Pantheon_(Rome)_-_Interior_07.jpg"
          }
        }
      ],
      "guide": {
        "href": "pantheon.html",
        "name": "the Pantheon"
      }
    },
    {
      "id": "charlemagne",
      "era": "medieval",
      "kind": "history",
      "year": 800,
      "label": "AD 800",
      "title": "Charlemagne is crowned emperor",
      "place": "St Peter's Basilica",
      "lat": 41.9018,
      "lng": 12.4533,
      "blurb": "Leo III crowned Charlemagne emperor in St Peter's on Christmas Day 800, reviving the imperial title in the West in alliance with the papacy.",
      "images": [
        {
          "img": "charlemagne",
          "alt": "A silver denier of Charlemagne",
          "credit": {
            "name": "Unknown (coin)",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Charlemagne_denier_Mayence_812_814.jpg"
          }
        },
        {
          "img": "charlemagne-2",
          "alt": "Raphael's fresco of Charlemagne's coronation by Pope Leo III",
          "credit": {
            "name": "Raphael",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Raphael-_Coronation_of_Charlemagne_2.jpg"
          }
        }
      ]
    },
    {
      "id": "san-clemente",
      "era": "medieval",
      "kind": "church",
      "year": 1100,
      "label": "c. 1100",
      "title": "San Clemente rebuilt",
      "place": "San Clemente",
      "lat": 41.8864,
      "lng": 12.4971,
      "blurb": "The present basilica was rebuilt around 1100 over a 4th-century church, itself built over Roman buildings. Excavations descend through three levels to a pagan shrine and a street.",
      "images": [
        {
          "img": "san-clemente",
          "alt": "The interior of the Basilica of San Clemente",
          "credit": {
            "name": "Ninfamania",
            "license": "CC BY 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Basilica_di_San_Clemente_al_Laterano_-_interno.jpg"
          }
        },
        {
          "img": "san-clemente-2",
          "alt": "The arcaded cloister of San Clemente",
          "credit": {
            "name": "Gryffindor",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:San_Clemente_Rome_2018_(001).jpg"
          }
        }
      ]
    },
    {
      "id": "trastevere",
      "era": "medieval",
      "kind": "church",
      "year": 1140,
      "label": "AD 1140",
      "title": "Santa Maria in Trastevere",
      "place": "Trastevere",
      "lat": 41.8894,
      "lng": 12.4695,
      "blurb": "The basilica was rebuilt in the 1140s; its apse mosaic, attributed to Pietro Cavallini, is among the finest medieval mosaics in Rome.",
      "images": [
        {
          "img": "trastevere",
          "alt": "The façade of Santa Maria in Trastevere",
          "credit": {
            "name": "NateBergin",
            "license": "CC BY 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:01_Santa_Maria_in_Trastevere_Facade.jpg"
          }
        },
        {
          "img": "trastevere-2",
          "alt": "The apse mosaic of Santa Maria in Trastevere, with Christ and saints",
          "credit": {
            "name": "Krzysztof Golik",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Santa_Maria_in_Trastevere_church_in_Rome_(13).jpg"
          }
        }
      ]
    },
    {
      "id": "commune",
      "era": "medieval",
      "kind": "history",
      "year": 1143,
      "label": "1143",
      "title": "The commune revives the Senate",
      "place": "Capitoline Hill",
      "lat": 41.8931,
      "lng": 12.4828,
      "blurb": "Rome's citizens revived the Senate and claimed authority over the city against popes and nobles. The commune was short-lived, but the Capitoline became the seat of civic government.",
      "images": [
        {
          "img": "commune",
          "alt": "A model of ancient Rome",
          "credit": {
            "name": "Jean-Pierre Dalbéra",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Maquette_de_Rome_%28mus%C3%A9e_de_la_civilisation_romaine%2C_Rome%29_%285911810278%29.jpg"
          }
        },
        {
          "img": "commune-2",
          "alt": "A nineteenth-century view of the Capitoline Hill from the east",
          "credit": {
            "name": "Israel Silvestre",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:View_of_the_Capitoline_Hill_in_Rome_from_the_East_MET_DP836159.jpg"
          }
        }
      ]
    },
    {
      "id": "santa-maria-aracoeli",
      "era": "medieval",
      "kind": "church",
      "year": 1250,
      "label": "13th century",
      "title": "Santa Maria in Aracoeli",
      "place": "Capitoline Hill",
      "lat": 41.8937,
      "lng": 12.4832,
      "blurb": "The Franciscan church on the Capitoline was built over the site of the temple of Juno Moneta. Its steep staircase and its 'Altar of Heaven' made it the civic church of the Roman people.",
      "images": [
        {
          "img": "santa-maria-aracoeli",
          "alt": "The bell tower of Santa Maria in Aracoeli",
          "credit": {
            "name": "Jastrow",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Belltower_Santa_Maria_in_Aracoeli.jpg"
          }
        },
        {
          "img": "santa-maria-aracoeli-2",
          "alt": "The nave and steps of Santa Maria in Aracoeli",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Sacristy_of_Santa_Maria_in_Aracoeli_(Rome).jpg"
          }
        }
      ]
    },
    {
      "id": "first-jubilee",
      "era": "medieval",
      "kind": "history",
      "year": 1300,
      "label": "1300",
      "title": "The first Jubilee",
      "place": "St Peter's Basilica",
      "lat": 41.9022,
      "lng": 12.4542,
      "blurb": "Boniface VIII declared 1300 a year of jubilee and promised full remission of sins to pilgrims who came to Rome. Crowds filled the basilicas, and the model of periodic holy years was fixed.",
      "images": [
        {
          "img": "first-jubilee",
          "alt": "Boniface VIII proclaiming the Jubilee of 1300, fresco attributed to Giotto",
          "credit": {
            "name": "Giotto",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Giotto,_bonifacio_VIII_proclama_il_giubileo_del_1300,_frammento_02.jpg"
          }
        },
        {
          "img": "first-jubilee-2",
          "alt": "Giotto's fresco of Boniface VIII proclaiming the first Jubilee",
          "credit": {
            "name": "Giotto",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Bonifacius_VIII_-_Fresco_in_Lateran.jpg"
          }
        }
      ]
    },
    {
      "id": "avignon",
      "era": "medieval",
      "kind": "history",
      "year": 1309,
      "label": "1309",
      "title": "The popes leave for Avignon",
      "place": "Vatican Palace",
      "lat": 41.9037,
      "lng": 12.4568,
      "blurb": "The popes moved to Avignon in 1309, leaving Rome to factional violence and neglect. Gregory XI returned in 1377, and the Great Schism followed.",
      "images": [
        {
          "img": "avignon",
          "alt": "The Palais des Papes in Avignon",
          "credit": {
            "name": "François de Dijon",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Avignon_Palais_des_Papes_2013.jpg"
          }
        },
        {
          "img": "avignon-2",
          "alt": "An engraving of the Palais des Papes at Avignon",
          "credit": {
            "name": "Jean-Marc Rosier (de/from http://www.cjrosier.com + http://www.gordes-immobilier.com)",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Avignon,_Palais_des_Papes_by_JM_Rosier.jpg"
          }
        }
      ]
    },
    {
      "id": "cola-di-rienzo",
      "era": "medieval",
      "kind": "history",
      "year": 1347,
      "label": "1347",
      "title": "Cola di Rienzo seizes the Capitoline",
      "place": "Capitoline Hill",
      "lat": 41.8934,
      "lng": 12.4828,
      "blurb": "Cola di Rienzo seized the Capitoline and proclaimed a republic in the name of the Roman people, promising reform and the revival of ancient glory. He was killed by a mob in 1354.",
      "images": [
        {
          "img": "cola-di-rienzo",
          "alt": "The statue of Cola di Rienzo on the Capitoline",
          "credit": {
            "name": "Liska64",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Monumento_Cola_di_Rienzo_Roma.jpg"
          }
        },
        {
          "img": "cola-di-rienzo-2",
          "alt": "The bronze statue of Cola di Rienzo on the Capitoline",
          "credit": {
            "name": "Wilfredor",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Monument_to_Cola_di_Rienzo,_Rome.jpg"
          }
        }
      ]
    },
    {
      "id": "capitoline-museums",
      "era": "renaissance",
      "kind": "monument",
      "year": 1471,
      "label": "1471",
      "title": "The Capitoline Museums",
      "place": "Capitoline Hill",
      "lat": 41.8933,
      "lng": 12.4825,
      "blurb": "Sixtus IV donated ancient bronzes to the city in 1471, founding what is often called the world's oldest public museum. The Capitoline Wolf and the Marcus Aurelius statue are its emblems.",
      "images": [
        {
          "img": "capitoline-museums",
          "alt": "The cordonata and Palazzo Senatorio on the Capitoline",
          "credit": {
            "name": "Jean-Pol GRANDMONT",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:0_Cordonata_-_Dioscuri_-_Palazzo_Senatorio.JPG"
          }
        },
        {
          "img": "capitoline-museums-2",
          "alt": "The Cordonata ramp leading up to the Capitoline Museums",
          "credit": {
            "name": "Wilfredor",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Entrance_to_Capitoline_Museums_via_the_Cordonata,_Rome.jpg"
          }
        }
      ]
    },
    {
      "id": "tempietto",
      "era": "renaissance",
      "kind": "church",
      "year": 1502,
      "label": "1502",
      "title": "Bramante's Tempietto",
      "place": "San Pietro in Montorio",
      "lat": 41.8891,
      "lng": 12.4663,
      "blurb": "Bramante built the small round chapel of San Pietro in Montorio to mark the supposed site of Peter's crucifixion. It is the first fully classical building of the High Renaissance.",
      "images": [
        {
          "img": "tempietto",
          "alt": "The Tempietto of San Pietro in Montorio",
          "credit": {
            "name": "Labicanense",
            "license": "CC BY 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Tempietto_di_San_Pietro_in_Montorio.jpg"
          }
        },
        {
          "img": "tempietto-2",
          "alt": "The circular colonnade of Bramante's Tempietto",
          "credit": {
            "name": "Palickap",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Roma,_Tempietto_del_Bramante,_colonne.jpg"
          }
        }
      ]
    },
    {
      "id": "st-peters",
      "era": "renaissance",
      "kind": "church",
      "year": 1506,
      "label": "1506",
      "title": "A new St Peter's",
      "place": "St Peter's Basilica",
      "lat": 41.9019,
      "lng": 12.4535,
      "blurb": "Julius II had Bramante demolish the old basilica and begin a new one; Michelangelo designed the dome, and the church was consecrated in 1626. It is the largest church in the world.",
      "images": [
        {
          "img": "st-peters",
          "alt": "St Peter's Basilica",
          "credit": {
            "name": "Alvesgaspar",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg"
          }
        },
        {
          "img": "st-peters-2",
          "alt": "The mosaic-covered interior of Michelangelo's dome in St Peter's",
          "credit": {
            "name": "Emiliovillegas24",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:St_Peters_Basilica_Dome.jpg"
          }
        }
      ],
      "guide": {
        "href": "st-peters.html",
        "name": "St Peter’s Basilica"
      }
    },
    {
      "id": "sistine",
      "era": "renaissance",
      "kind": "church",
      "year": 1512,
      "label": "1512",
      "title": "The Sistine Chapel ceiling",
      "place": "Sistine Chapel",
      "lat": 41.903,
      "lng": 12.4548,
      "blurb": "Michelangelo painted the ceiling between 1508 and 1512, and the Last Judgment on the altar wall between 1536 and 1541. Conclaves still elect popes in this chapel.",
      "images": [
        {
          "img": "sistine",
          "alt": "Michelangelo's ceiling of the Sistine Chapel",
          "credit": {
            "name": "Antoine Taveneaux",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Sistine_Chapel_ceiling_02_%28brightened%29.jpg"
          }
        },
        {
          "img": "sistine-2",
          "alt": "The painted ceiling of the Sistine Chapel, photographed straight on",
          "credit": {
            "name": "Lightmatter",
            "license": "CC BY 2.5",
            "url": "https://commons.wikimedia.org/wiki/File:Lightmatter_Sistine_Chapel_ceiling.jpg"
          }
        }
      ]
    },
    {
      "id": "sack-1527",
      "era": "renaissance",
      "kind": "history",
      "year": 1527,
      "label": "1527",
      "title": "The Sack of Rome",
      "place": "Piazza del Popolo",
      "lat": 41.9107,
      "lng": 12.4764,
      "blurb": "Mutinous troops of Charles V sacked the city for months, killing thousands and ending the golden age of the Renaissance papacy. Clement VII took refuge in Castel Sant'Angelo.",
      "images": [
        {
          "img": "sack-1527",
          "alt": "The Sack of Rome in 1527, painting by Johannes Lingelbach",
          "credit": {
            "name": "Johannes Lingelbach",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Sack_of_Rome_of_1527_by_Johannes_Lingelbach_17th_century.jpg"
          }
        },
        {
          "img": "sack-1527-2",
          "alt": "A sixteenth-century engraving of the Sack of Rome in 1527, soldiers fighting in a street",
          "credit": {
            "name": "Wellcome Collection",
            "license": "CC BY 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:The_Sack_of_Rome,_1527._Wellcome_L0003868.jpg"
          }
        }
      ]
    },
    {
      "id": "piazza-del-popolo",
      "era": "renaissance",
      "kind": "city",
      "year": 1589,
      "label": "1589",
      "title": "Piazza del Popolo and the tridente",
      "place": "Piazza del Popolo",
      "lat": 41.9107,
      "lng": 12.4763,
      "blurb": "Sixtus V set the obelisk of Ramses II in the square where the Via Flaminia entered Rome, and three straight streets opened from it. The tridente fixed the northern gate of the Baroque city.",
      "images": [
        {
          "img": "piazza-del-popolo",
          "alt": "Piazza del Popolo and its obelisk",
          "credit": {
            "name": "Krzysztof Golik",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Piazza_del_Popolo_in_Rome_%281%29.jpg"
          }
        },
        {
          "img": "piazza-del-popolo-2",
          "alt": "The Neptune fountain at the foot of the Pincio in Piazza del Popolo",
          "credit": {
            "name": "Jebulon",
            "license": "CC0",
            "url": "https://commons.wikimedia.org/wiki/File:Fontana_del_Nettuno,_Piazza_del_Popolo,_Rome,_Italie.jpg"
          }
        }
      ]
    },
    {
      "id": "four-rivers",
      "era": "renaissance",
      "kind": "monument",
      "year": 1651,
      "label": "1651",
      "title": "Bernini's Four Rivers",
      "place": "Piazza Navona",
      "lat": 41.8992,
      "lng": 12.473,
      "blurb": "Bernini's fountain stands on the footprint of Domitian's stadium and represents four rivers of the known world. It is the centrepiece of Baroque Rome.",
      "images": [
        {
          "img": "four-rivers",
          "alt": "Piazza Navona at night",
          "credit": {
            "name": "NikonZ7II",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Piazza_Navona_%28Rome%29_at_night.jpg"
          }
        },
        {
          "img": "four-rivers-2",
          "alt": "Bernini's Fountain of the Four Rivers in Piazza Navona, with Sant'Agnese behind",
          "credit": {
            "name": "Ank Kumar",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Fountain_of_the_Four_Rivers(Fontana_dei_Quattro_Fiumi)_at_Piazza_Navona_in_Rome,_Italy_(Ank_Kumar,_Infosys_Limited)_04.jpg"
          }
        }
      ]
    },
    {
      "id": "sant-ivo",
      "era": "renaissance",
      "kind": "church",
      "year": 1660,
      "label": "1660",
      "title": "Sant'Ivo alla Sapienza",
      "place": "Sant'Ivo alla Sapienza",
      "lat": 41.8981,
      "lng": 12.4741,
      "blurb": "Borromini's chapel for the Sapienza university is a hexagonal star topped by a spiral lantern. The dome's geometry carries his argument with Bernini into the skyline.",
      "images": [
        {
          "img": "sant-ivo",
          "alt": "The dome of Sant'Ivo alla Sapienza",
          "credit": {
            "name": "Architas",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Sant%27Ivo_alla_Sapienza_%28Rome%29_-_Dome.jpg"
          }
        },
        {
          "img": "sant-ivo-2",
          "alt": "The ribbed interior of Borromini's dome at Sant'Ivo alla Sapienza",
          "credit": {
            "name": "Jastrow",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Interior_sant_Ivo_alla_Sapienza_2006.jpg"
          }
        }
      ]
    },
    {
      "id": "st-peters-colonnade",
      "era": "renaissance",
      "kind": "monument",
      "year": 1667,
      "label": "1667",
      "title": "Bernini's colonnade",
      "place": "St Peter's Square",
      "lat": 41.9022,
      "lng": 12.4572,
      "blurb": "Bernini surrounded St Peter's Square with four rows of columns, 284 in total, so that the church could embrace the crowd. The colonnade frames the basilica and defines the square.",
      "images": [
        {
          "img": "st-peters-colonnade",
          "alt": "The colonnade of St Peter's Square",
          "credit": {
            "name": "Livioandronico2013",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Colonnade_of_St._Peter_and_sky.jpg"
          }
        },
        {
          "img": "st-peters-colonnade-2",
          "alt": "A row of colossal columns from Bernini's colonnade",
          "credit": {
            "name": "Acediscovery",
            "license": "CC BY 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Columns-Saint-Peters-Square-Rome-May-2009.jpg"
          }
        }
      ]
    },
    {
      "id": "spanish-steps",
      "era": "renaissance",
      "kind": "city",
      "year": 1725,
      "label": "1725",
      "title": "The Spanish Steps",
      "place": "Piazza di Spagna",
      "lat": 41.906,
      "lng": 12.4823,
      "blurb": "The staircase linked the Spanish embassy's square to the French church of Trinità dei Monti — a diplomatic compromise. It became the city's drawing room.",
      "images": [
        {
          "img": "spanish-steps",
          "alt": "The Spanish Steps",
          "credit": {
            "name": "Arnaud 25",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Piazza_di_Spagna_%28Rome%29_0004.jpg"
          }
        },
        {
          "img": "spanish-steps-2",
          "alt": "Crowds on the Spanish Steps at night, lit by street lamps",
          "credit": {
            "name": "Ank Kumar",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Spanish_Steps,_Rome_(Ank_Kumar)_03.jpg"
          }
        }
      ]
    },
    {
      "id": "trevi",
      "era": "renaissance",
      "kind": "monument",
      "year": 1762,
      "label": "1762",
      "title": "The Trevi Fountain",
      "place": "Trevi Fountain",
      "lat": 41.9009,
      "lng": 12.4833,
      "blurb": "Nicola Salvi's fountain, completed in 1762, is the terminus of the Aqua Virgo, an aqueduct of 19 BC restored in the 15th century. The coins thrown into it fund charity.",
      "images": [
        {
          "img": "trevi",
          "alt": "The Trevi Fountain",
          "credit": {
            "name": "NikonZ7II",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Trevi_Fountain_-_Roma.jpg"
          }
        },
        {
          "img": "trevi-2",
          "alt": "The Trevi Fountain, with Oceanus standing above the cascade",
          "credit": {
            "name": "Diliff",
            "license": "CC BY 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Trevi_Fountain,_Rome,_Italy_2_-_May_2007.jpg"
          }
        }
      ]
    },
    {
      "id": "republic-1798",
      "era": "modern",
      "kind": "history",
      "year": 1798,
      "label": "1798",
      "title": "The first Roman Republic",
      "place": "Capitoline Hill",
      "lat": 41.8931,
      "lng": 12.4828,
      "blurb": "French troops occupied Rome and proclaimed a Roman Republic, briefly ending papal rule. The experiment collapsed the next year and the papacy returned.",
      "images": [
        {
          "img": "republic-1798",
          "alt": "Flag of the Roman Republic of 1798",
          "credit": {
            "name": "Unknown",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Flag_of_the_Repubblica_Romana_%281798%29.svg"
          }
        },
        {
          "img": "republic-1798-2",
          "alt": "A nine-paoli note issued by the short-lived Roman Republic of 1798",
          "credit": {
            "name": "The government of the Roman Republic.",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:9_Paoli_-_Roman_Republic_(1798)_Confucians_01.jpg"
          }
        }
      ]
    },
    {
      "id": "porta-pia",
      "era": "modern",
      "kind": "history",
      "year": 1870,
      "label": "1870",
      "title": "Porta Pia and the capital",
      "place": "Porta Pia",
      "lat": 41.9091,
      "lng": 12.5016,
      "blurb": "Italian troops breached the Aurelian Walls at Porta Pia on 20 September 1870. Rome was annexed to Italy and became the capital in 1871.",
      "images": [
        {
          "img": "porta-pia",
          "alt": "Porta Pia",
          "credit": {
            "name": "Monticiano",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Porta_Pia_-_internal_side.jpg"
          }
        },
        {
          "img": "porta-pia-2",
          "alt": "The Porta Pia gate in Michelangelo's city wall",
          "credit": {
            "name": "Dietmar Rabich",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Rome_(IT),_Porta_Pia_--_2013_--_3336.jpg"
          }
        }
      ]
    },
    {
      "id": "testaccio",
      "era": "modern",
      "kind": "city",
      "year": 1880,
      "label": "1880s",
      "title": "Testaccio",
      "place": "Testaccio",
      "lat": 41.8767,
      "lng": 12.474,
      "blurb": "Testaccio grew south of the Aventine on the site of the ancient river port, around a hill of broken amphorae. Its plain tenements and the municipal slaughterhouse made it a working-class quarter.",
      "images": [
        {
          "img": "testaccio",
          "alt": "The Testaccio skyline",
          "credit": {
            "name": "Nicola",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Testaccio_Skyline_-_ND0_7117_%2810387101306%29.jpg"
          }
        },
        {
          "img": "testaccio-2",
          "alt": "The grass-covered Monte Testaccio rising above the Testaccio district",
          "credit": {
            "name": "Lalupa",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Testaccio_-_dal_monte_dei_cocci_1120506-7.JPG"
          }
        }
      ]
    },
    {
      "id": "prati-district",
      "era": "modern",
      "kind": "city",
      "year": 1885,
      "label": "1880s",
      "title": "Prati",
      "place": "Prati",
      "lat": 41.9065,
      "lng": 12.4613,
      "blurb": "After 1870 the new Italian state laid out a grid of streets on the right bank, between the Vatican and Monte Mario. Prati became a district of apartment blocks, offices and boulevards such as Via Cola di Rienzo.",
      "images": [
        {
          "img": "prati-district",
          "alt": "Via Cola di Rienzo in Prati",
          "credit": {
            "name": "Unknown",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Via_cola_di_rienzo.jpg"
          }
        },
        {
          "img": "prati-district-2",
          "alt": "The church of San Gioacchino in Prati",
          "credit": {
            "name": "Chabe01",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:%C3%89glise_San_Gioacchino_Prati_-_Rome_(IT62)_-_2021-08-25_-_1.jpg"
          }
        }
      ]
    },
    {
      "id": "lateran-treaty",
      "era": "modern",
      "kind": "history",
      "year": 1929,
      "label": "1929",
      "title": "The Lateran Treaty",
      "place": "St John Lateran",
      "lat": 41.8859,
      "lng": 12.506,
      "blurb": "The Lateran Treaty settled the dispute between Italy and the papacy, creating the Vatican City State and recognising the pope's sovereignty.",
      "images": [
        {
          "img": "lateran-treaty",
          "alt": "Notables at the Lateran Palace before the signing of the treaty",
          "credit": {
            "name": "Unknown",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Group_of_Vatican_and_Italian_government_notables_posing_at_the_Lateran_Palace_before_the_signing_of_the_treaty.jpg"
          }
        },
        {
          "img": "lateran-treaty-2",
          "alt": "Mussolini and Cardinal Gasparri signing the Lateran Treaty in 1929",
          "credit": {
            "name": "Istituto Luce",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Firma_dei_Patti_Lateranensi_1929.jpg"
          }
        }
      ]
    },
    {
      "id": "via-della-conciliazione",
      "era": "modern",
      "kind": "city",
      "year": 1936,
      "label": "1936–1950",
      "title": "Via della Conciliazione",
      "place": "Via della Conciliazione",
      "lat": 41.9025,
      "lng": 12.458,
      "blurb": "Mussolini's engineers demolished the Borgo and opened a wide avenue from Castel Sant'Angelo to St Peter's. The 1936 plan was completed for the Jubilee of 1950.",
      "images": [
        {
          "img": "via-della-conciliazione",
          "alt": "Via della Conciliazione at dawn",
          "credit": {
            "name": "Martin Falbisoner",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Via_della_Conciliazione_at_dawn.JPG"
          }
        },
        {
          "img": "via-della-conciliazione-2",
          "alt": "Via della Conciliazione looking towards St Peter's",
          "credit": {
            "name": "El fosilmaníaco",
            "license": "CC BY-SA 3.0",
            "url": "https://commons.wikimedia.org/wiki/File:Via_della_Conciliazione_Roma.jpg"
          }
        }
      ]
    },
    {
      "id": "liberation",
      "era": "modern",
      "kind": "history",
      "year": 1944,
      "label": "1944",
      "title": "The liberation of Rome",
      "place": "Porta San Paolo",
      "lat": 41.8765,
      "lng": 12.4815,
      "blurb": "Allied troops entered Rome on 4 June 1944, the first Axis capital to fall. The city had been declared open and escaped destruction.",
      "images": [
        {
          "img": "liberation",
          "alt": "Allied troops at the Colosseum in 1944",
          "credit": {
            "name": "US Army",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:TD_al_Colosseo_1944.jpg"
          }
        },
        {
          "img": "liberation-2",
          "alt": "Allied troops passing the Vittoriano during the liberation of Rome in June 1944",
          "credit": {
            "name": "Tanner (Capt), War Office official photographer",
            "license": "Public domain",
            "url": "https://commons.wikimedia.org/wiki/File:Allied_Forces_in_Rome,_June_1944_TR1851.jpg"
          }
        }
      ]
    },
    {
      "id": "olympics",
      "era": "modern",
      "kind": "history",
      "year": 1960,
      "label": "1960",
      "title": "The Olympic Games",
      "place": "Stadio Olimpico",
      "lat": 41.9339,
      "lng": 12.4547,
      "blurb": "The 1960 Games used ancient sites as venues — wrestling in the Basilica of Maxentius, gymnastics at the Baths of Caracalla — and projected postwar Italy to the world.",
      "images": [
        {
          "img": "olympics",
          "alt": "Stadio Olimpico",
          "credit": {
            "name": "Messapi, cropped by Blackcat",
            "license": "CC BY-SA 4.0",
            "url": "https://commons.wikimedia.org/wiki/File:Stadio_Olimpico_2024.jpg"
          }
        },
        {
          "img": "olympics-2",
          "alt": "A packed Stadio Olimpico during a football match",
          "credit": {
            "name": "romazone",
            "license": "CC BY 2.0",
            "url": "https://commons.wikimedia.org/wiki/File:Stadio_Olimpico_(Rome)_-_2014_-_AS_Roma_v_Juventus_FC.jpg"
          }
        }
      ]
    }
  ]
};
