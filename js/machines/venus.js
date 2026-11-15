// ===== Venus machines =====
MACHINES.push(
  {
    id: "mariner1", world: "venus", name: "Mariner 1", short: "Mariner 1", year: "1962",
    kind: "Venus flyby probe · lost at launch", status: "lost", statusText: "Lost at launch", x: 12, y: 13,
    q: "Mariner 2 spacecraft", must: "Mariner",
    photoNote: "Photos show Mariner 2, Mariner 1’s identical twin.",
    teaser: "I was NASA’s first try at Venus. My flight lasted under 5 minutes, but my twin made history.",
    logs: [
      { when: "1962", title: "The race to Venus", text: "NASA built twin spacecraft, Mariner 1 and Mariner 2, to fly past Venus. I was first in line. ‘Mariner’ means sailor." },
      { when: "July 22, 1962", title: "Launch day", text: "My Atlas-Agena rocket lifted off from Cape Canaveral, Florida. Within minutes it began swerving off course." },
      { when: "1962", title: "A tough decision", text: "To keep people safe, the range safety officer destroyed the rocket about 293 seconds after launch. I fell into the Atlantic Ocean." },
      { when: "1962", title: "The most expensive hyphen?", text: "Investigators traced the problem to a missing bar symbol in a guidance equation, together with a faulty radio signal. The writer Arthur C. Clarke called it ‘the most expensive hyphen in history’." },
      { when: "December 14, 1962", title: "My twin succeeds", text: "Mariner 2 launched about a month after me and flew past Venus: the first spacecraft to successfully visit another planet. It found Venus is scorching hot." }
    ],
    tech: [
      ["Solar panels", "Two wing-like panels for power on the long trip."],
      ["Radio antenna", "A dish to send data across millions of kilometres."],
      ["Microwave radiometer", "Measured how hot Venus is."],
      ["Infrared radiometer", "Measured the temperature of Venus’s clouds."],
      ["Magnetometer", "Searched for a magnetic field around Venus. Mariner 2 found none it could detect."]
    ],
    facts: [
      "On its way to Venus, Mariner 2 measured the solar wind, a stream of particles flowing out from the Sun.",
      "Venus is the hottest planet in our solar system, even hotter than Mercury.",
      "Mariner 1 and Mariner 2 were identical twins."
    ],
    science: "Mariner 1’s failure showed how carefully software must be checked. Its twin, Mariner 2, discovered Venus is far too hot for life as we know it.",
    stats: [["Launched", "1962"], ["Flight time", "~293 s"], ["Destination", "Venus"], ["Status", "Lost"]],
    quiz: [
      ["How long did Mariner 1’s flight last?", ["Less than 5 minutes", "5 days", "1 year", "6 months"], "The rocket was destroyed about 293 seconds after launch."],
      ["Where did Mariner 1 end up?", ["In the Atlantic Ocean", "On Venus", "Orbiting the Sun", "On the Moon"], "It fell into the ocean."],
      ["Mariner 1’s failure was traced to…", ["A missing bar symbol in a guidance equation, plus a faulty radio signal", "A bird hitting the rocket", "Bad weather", "An empty fuel tank"], "A tiny mistake with huge results."],
      ["Why was Mariner 1’s rocket destroyed on purpose?", ["It swerved off course, so it was destroyed to keep people safe", "It was too slow", "Venus was too far", "It ran out of batteries"], "That was the range safety officer’s job."],
      ["What did Mariner 2 achieve in December 1962?", ["The first successful visit to another planet", "The first landing on Venus", "The first photo of Venus’s surface", "The first astronaut to Venus"], "It flew past Venus on December 14."],
      ["What did Mariner 2 discover about Venus?", ["It is scorching hot", "It is freezing cold", "It is covered in oceans", "It has rings"], "Far too hot for life as we know it."],
      ["From where did Mariner 1 launch?", ["Cape Canaveral, Florida", "French Guiana", "Sriharikota, India", "The Moon"], "On an Atlas-Agena rocket."],
      ["Who called the mistake ‘the most expensive hyphen in history’?", ["Writer Arthur C. Clarke", "Neil Armstrong", "Carl Sagan", "Edwin Hubble"], "A famous science-fiction writer."],
      ["What did Mariner 2 measure on its way to Venus?", ["The solar wind, a stream of particles from the Sun", "Rain on Venus", "Earth’s ocean tides", "Sounds from space"], "One of its important discoveries."],
      ["What does ‘Mariner’ mean?", ["Sailor", "Explorer of fire", "Star", "Messenger"], "These spacecraft sailed between the planets."]
    ]
  },
  {
    id: "pioneervenus", world: "venus", name: "Pioneer Venus Multiprobe", short: "Pioneer Venus", year: "1978",
    kind: "4 atmosphere probes · Venus surface", status: "silent", statusText: "Silent", x: 42, y: 70,
    q: "Pioneer Venus multiprobe", must: "Pioneer Venus",
    teaser: "I split into 4 probes that dived into Venus’s clouds. One survived hitting the ground and kept talking for over an hour!",
    logs: [
      { when: "August 1978", title: "A bus full of probes", text: "I launched carrying four probes on a carrier called the ‘bus’. My partner, the Pioneer Venus Orbiter, launched separately to study Venus from orbit." },
      { when: "November 1978", title: "Splitting up", text: "Weeks before arriving, I released one large probe and three small ones nicknamed North, Day and Night. Each headed for a different part of Venus." },
      { when: "December 9, 1978", title: "Diving through acid clouds", text: "The probes fell through thick clouds of sulfuric acid, measuring the air on the way down. The large probe used a parachute; the small ones simply fell." },
      { when: "December 9, 1978", title: "The bus burns up", text: "My empty bus dived in too. It measured the very top of the atmosphere before burning up." },
      { when: "December 9, 1978", title: "The tough little Day probe", text: "None of the probes were built to survive hitting the ground. But the Day probe did, and it kept sending signals from the surface for 67 minutes!" }
    ],
    tech: [
      ["Heat shields", "Protected each probe on its plunge into the scorching atmosphere."],
      ["Titanium shells", "Strong pressure vessels to resist the crushing air."],
      ["Atmosphere sensors", "Measured temperature, pressure and clouds on the way down."],
      ["Parachute", "Slowed the large probe so it could take more measurements."],
      ["Radio tracking", "Following each probe’s radio signal from Earth showed how strong Venus’s winds are."]
    ],
    facts: [
      "Venus’s surface is about 465 °C, hot enough to melt lead.",
      "The air pressure on Venus’s surface is about 90 times Earth’s.",
      "Venus is hotter than Mercury because its thick carbon dioxide air traps heat, a runaway greenhouse effect."
    ],
    science: "The probes helped show how Venus’s thick carbon dioxide air traps heat, making it the hottest planet in our solar system.",
    stats: [["Arrived", "1978"], ["Probes", "4"], ["Surface signal", "67 min"], ["Status", "Silent"]],
    quiz: [
      ["How many probes did Pioneer Venus Multiprobe send into Venus’s atmosphere?", ["4", "1", "2", "10"], "One large and three small."],
      ["What were the three small probes nicknamed?", ["North, Day and Night", "Red, Green and Blue", "Alpha, Beta and Gamma", "Huey, Dewey and Louie"], "Each went to a different part of Venus."],
      ["How long did the Day probe keep sending signals from the surface?", ["67 minutes", "3 seconds", "2 days", "A whole year"], "It wasn’t built to survive landing at all!"],
      ["What are Venus’s thick clouds made of?", ["Sulfuric acid", "Water, like Earth’s clouds", "Sand", "Ice crystals"], "The probes fell right through them."],
      ["Why is Venus hotter than Mercury?", ["Its thick carbon dioxide air traps heat", "It is closer to the Sun", "It spins very fast", "It is made of metal"], "A runaway greenhouse effect."],
      ["About how hot is Venus’s surface?", ["About 465 °C", "About 25 °C", "About −100 °C", "About 1,000,000 °C"], "Hot enough to melt lead."],
      ["How strong is the air pressure on Venus’s surface?", ["About 90 times Earth’s", "The same as Earth’s", "Half of Earth’s", "There is no air"], "That’s why the probes needed strong shells."],
      ["What were the probes’ pressure shells made of?", ["Titanium", "Glass", "Wood", "Plastic"], "Strong enough to resist crushing."],
      ["Which probe used a parachute?", ["The large probe", "All four", "None of them", "Only the Day probe"], "The small ones simply fell."],
      ["What happened to the empty bus that carried the probes?", ["It measured the top of the atmosphere, then burned up", "It landed softly", "It flew back to Earth", "It became a moon of Venus"], "It dived in too."]
    ]
  },
  {
    id: "magellan", world: "venus", name: "Magellan", short: "Magellan", year: "1989",
    kind: "Radar mapper · Venus orbit", status: "silent", statusText: "Burned up 1994", x: 81, y: 40,
    q: "Magellan spacecraft Venus", must: "Magellan",
    teaser: "I used radar to see through Venus’s clouds and mapped almost the whole planet.",
    logs: [
      { when: "May 4, 1989", title: "A ride on the Space Shuttle", text: "I was the first planetary spacecraft launched from a Space Shuttle: Atlantis." },
      { when: "August 1990", title: "Arriving at Venus", text: "After a long loop around the Sun, I went into orbit around Venus." },
      { when: "1990–1992", title: "Seeing through clouds", text: "Venus is wrapped in thick clouds, so normal cameras can’t see the ground. My radar could! I mapped about 98% of the surface: volcanoes, lava plains and craters." },
      { when: "1993", title: "Surfing the air", text: "Engineers dipped me into the top of the atmosphere again and again to lower my orbit. This trick, called aerobraking, saved fuel. I was the first planetary spacecraft to try it." },
      { when: "October 1994", title: "A final dive", text: "Scientists flew me lower and lower to study the atmosphere. Then I plunged into Venus’s clouds and burned up, but my maps are still used today." }
    ],
    tech: [
      ["Imaging radar", "Bounced radio waves off the surface to build pictures through the clouds."],
      ["Big dish antenna", "The same 3.7 m dish did radar imaging and talked to Earth."],
      ["Aerobraking", "Used air drag instead of fuel to change my orbit."],
      ["Spare parts", "Some of my parts were spares from the Voyager and Galileo missions, which saved money."],
      ["Gravity mapping", "Tracking my orbit showed small changes in Venus’s gravity."]
    ],
    facts: [
      "Venus spins backwards compared with most planets, so the Sun rises in the west there.",
      "One spin of Venus takes 243 Earth days, longer than its 225-day year.",
      "Venus has more volcanoes than any other planet in our solar system."
    ],
    science: "Magellan showed Venus is covered in volcanoes and lava plains, with a fairly young surface reshaped by eruptions.",
    stats: [["Launched", "1989"], ["Mapped", "~98%"], ["Ended", "1994"], ["Status", "Burned up"]],
    quiz: [
      ["How did Magellan see through Venus’s clouds?", ["Using radar", "Using X-rays", "Using a giant flashlight", "Using a normal camera"], "Radio waves pass through clouds."],
      ["About how much of Venus’s surface did Magellan map?", ["About 98%", "About 5%", "About half", "Only the poles"], "Its maps are still used today."],
      ["Which Space Shuttle launched Magellan?", ["Atlantis", "Discovery", "Columbia", "Endeavour"], "The first planetary spacecraft launched from a Shuttle."],
      ["What happened to Magellan in October 1994?", ["It plunged into Venus’s clouds and burned up", "It returned to Earth", "It landed softly", "It flew on to Mars"], "Its final dive studied the atmosphere."],
      ["What is aerobraking?", ["Using air drag instead of fuel to change orbit", "Braking with a parachute on land", "Firing rockets backwards", "Bouncing off clouds"], "Magellan was the first planetary spacecraft to try it."],
      ["What did Magellan find covering Venus?", ["Volcanoes, lava plains and craters", "Oceans", "Forests", "Ice sheets"], "Venus has more volcanoes than any other planet."],
      ["One spin of Venus takes 243 Earth days. How does that compare with its year?", ["It’s longer than its 225-day year", "It’s exactly the same", "It’s one hour", "It’s shorter than a week"], "A day on Venus is longer than its year!"],
      ["On Venus, where does the Sun rise?", ["In the west", "In the east", "In the north", "It never rises"], "Venus spins backwards."],
      ["Where did some of Magellan’s parts come from?", ["Spares from Voyager and Galileo", "A crashed plane", "The Moon", "A Mars rover"], "Reusing spares saved money."],
      ["How wide was Magellan’s dish antenna?", ["3.7 m", "3.7 cm", "37 m", "370 m"], "It did radar imaging and talked to Earth."]
    ]
  }
);
