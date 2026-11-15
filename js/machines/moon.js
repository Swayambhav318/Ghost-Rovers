// ===== Moon machines =====
// quiz: [question, [CORRECT answer FIRST, wrong, wrong, wrong], explanation]
// Every answer must be stated somewhere on the machine's own page (logs, tech, facts, science, stats).
MACHINES.push(
  {
    id: "surveyor3", world: "moon", name: "Surveyor 3", short: "Surveyor 3", year: "1967",
    kind: "Robot lander · Ocean of Storms", status: "silent", statusText: "Silent", x: 31.7, y: 52.4,
    q: "Surveyor 3 lunar surface", must: "Surveyor",
    teaser: "My engines didn’t switch off in time, so I bounced on landing! Years later, Apollo 12 astronauts walked over to visit me.",
    logs: [
      { when: "April 17, 1967", title: "Launch day", text: "I launched from Cape Canaveral on an Atlas-Centaur rocket. My mission: land softly on the Moon and find out whether its ground could hold up a spacecraft." },
      { when: "April 20, 1967", title: "A bouncy arrival", text: "Three days later I came down in the Ocean of Storms. My engines didn’t switch off in time, so I bounced twice before settling on my three legs. Oops, but I was fine!" },
      { when: "1967", title: "Digging in", text: "I was the first Surveyor with a robot claw, called the surface sampler. Engineers on Earth used it to dig trenches and to scrape and squeeze the soil. Their verdict: the ground was firm enough for astronauts to land." },
      { when: "May 1967", title: "Lights out", text: "I took more than 6,000 pictures before the long, freezing lunar night arrived. When the Sun set, I shut down and never woke up again." },
      { when: "November 1969", title: "Visitors!", text: "Apollo 12 landed so close to me that astronauts Pete Conrad and Alan Bean could walk over. They took my TV camera and other parts back to Earth, so scientists could study how two and a half years on the Moon had changed them." }
    ],
    tech: [
      ["TV camera", "Looked at the landscape through a mirror that could turn and tilt, and sent the pictures to Earth."],
      ["Surface sampler", "A claw on an arm that stretched out to dig trenches and test the soil."],
      ["Landing radar", "Measured my height and speed so my computer could slow me down."],
      ["Three landing legs", "Shock absorbers in the legs soaked up the bump of touchdown."],
      ["Solar panel + batteries", "Made power during the lunar day, which lasts about two Earth weeks."]
    ],
    facts: [
      "A day on the Moon lasts about two Earth weeks, and so does a night.",
      "Surveyor 3 was one of five Surveyor landers that successfully scouted the Moon before Apollo.",
      "Surveyor 3 launched on an Atlas-Centaur rocket and took three days to reach the Moon."
    ],
    science: "Surveyor 3 showed the lunar soil could hold up a lander, helping engineers plan the Apollo landings. The parts brought back taught us how materials age on the Moon.",
    stats: [["Landed", "1967"], ["Photos sent", "6,000+"], ["Visited by", "Apollo 12"], ["Status", "Silent"]],
    quiz: [
      ["What happened when Surveyor 3 landed on the Moon?", ["It bounced twice before settling", "It tipped over", "It sank deep into the dust", "It landed upside down"], "Its engines didn’t switch off in time."],
      ["Where on the Moon did Surveyor 3 land?", ["The Ocean of Storms", "The Sea of Tranquility", "The far side of the Moon", "The south pole"], "Log 2 tells you where it came down."],
      ["Which Apollo crew walked over to visit Surveyor 3?", ["Apollo 12", "Apollo 11", "Apollo 13", "Apollo 17"], "Pete Conrad and Alan Bean landed close enough to walk over."],
      ["Which part of Surveyor 3 did the Apollo 12 astronauts take back to Earth?", ["Its TV camera", "All three legs", "The whole lander", "Its rocket engines"], "Scientists wanted to study how the Moon had changed it."],
      ["What did Surveyor 3’s surface sampler test?", ["Whether the soil was firm enough for astronauts to land", "Whether the Moon had lakes", "How hot the Sun is", "Whether the Moon had air"], "The answer was yes: the ground was firm enough."],
      ["About how many pictures did Surveyor 3 take?", ["More than 6,000", "About 10", "Exactly 1", "About 60 million"], "Its TV camera photographed its landing site again and again."],
      ["Why did Surveyor 3 stop working in 1967?", ["The freezing lunar night came and it never woke up", "It ran out of fuel", "A meteor hit it", "Astronauts switched it off"], "When the Sun set, it shut down for good."],
      ["How long does a day on the Moon last?", ["About two Earth weeks", "About 24 hours", "About one hour", "About one year"], "And a lunar night is just as long."],
      ["Which rocket launched Surveyor 3?", ["Atlas-Centaur", "Saturn V", "Falcon 9", "Ariane 5"], "It launched from Cape Canaveral in April 1967."],
      ["How many Surveyor landers successfully scouted the Moon before Apollo?", ["Five", "One", "Twenty", "None"], "Surveyor 3 was one of them."]
    ]
  },
  {
    id: "apollo11", world: "moon", name: "Eagle’s descent stage (Apollo 11)", short: "Eagle", year: "1969",
    kind: "Lunar module base · Sea of Tranquility", status: "active", statusText: "Mirror still in use", x: 68.3, y: 49.5,
    q: "Apollo 11 lunar module Eagle on the Moon", must: "Apollo 11",
    teaser: "Neil and Buzz launched home from my roof. The mirror they left beside me still bounces lasers back to Earth.",
    logs: [
      { when: "July 16, 1969", title: "Riding a giant", text: "A Saturn V rocket launched Apollo 11 with Neil Armstrong, Buzz Aldrin and Michael Collins. Collins stayed in orbit in the command module Columbia, while Neil and Buzz rode me, the lunar module Eagle, down to the surface." },
      { when: "July 20, 1969", title: "The Eagle has landed", text: "Neil steered us past a crater full of boulders and landed with fuel running low in the Sea of Tranquility. Then he radioed: ‘The Eagle has landed.’" },
      { when: "July 20–21, 1969", title: "First footsteps", text: "Neil climbed down my ladder and became the first person to walk on the Moon. Buzz joined him. Together they collected about 22 kg of rocks and soil and set up experiments." },
      { when: "July 21, 1969", title: "A launch pad on the Moon", text: "After about 21 hours on the surface, the top half of Eagle blasted off and I stayed behind as its launch pad. A plaque on my leg says the astronauts ‘came in peace for all mankind’." },
      { when: "Today", title: "A mirror that still works", text: "Next to me sits a laser retroreflector the crew set up. Observatories on Earth still fire lasers at it and time the light’s round trip, which takes about 2.5 seconds." }
    ],
    tech: [
      ["Two-stage lander", "The lunar module had a descent stage (me) for landing and an ascent stage for leaving."],
      ["Descent engine", "A rocket engine that could be throttled up and down, so the pilot could slow down gently."],
      ["Landing legs", "Four legs with crushable honeycomb inside to soak up the bump of landing."],
      ["Laser retroreflector", "100 glass corner-cubes that send light straight back the way it came."],
      ["Seismometer", "The crew also set up an instrument to feel moonquakes."]
    ],
    facts: [
      "Michael Collins never landed. He orbited the Moon alone in Columbia, waiting for his crewmates.",
      "Apollo 11 was the first of six Apollo missions to land astronauts on the Moon.",
      "Laser ranging shows the Moon is drifting away from Earth by about 3.8 cm every year."
    ],
    science: "Apollo 11’s rocks showed the Moon is very old and was once covered in molten rock. Laser ranging to its mirror measures the Earth–Moon distance to within centimetres.",
    stats: [["Landed", "1969"], ["Crew on the Moon", "Armstrong & Aldrin"], ["Time on Moon", "~21.5 hours"], ["Samples", "~22 kg"]],
    quiz: [
      ["What was the name of Apollo 11’s lunar module?", ["Eagle", "Falcon", "Columbia", "Snoopy"], "Columbia was the command module that stayed in orbit."],
      ["Which Apollo 11 astronaut stayed in orbit and never landed?", ["Michael Collins", "Neil Armstrong", "Buzz Aldrin", "Gene Cernan"], "He waited for his crewmates in Columbia."],
      ["What did Eagle’s descent stage become when the astronauts left the Moon?", ["A launch pad", "A garage", "A radio tower", "A shelter for the night"], "The top half blasted off from the bottom half."],
      ["What do scientists still bounce off the mirror Apollo 11 left behind?", ["Laser light", "Sound waves", "Phone signals", "Sunlight from Mars"], "They time how long the light takes to come back."],
      ["About how long does laser light take to travel to the Moon’s mirror and back?", ["About 2.5 seconds", "About 2.5 hours", "About 2.5 days", "It never comes back"], "That timing tells scientists the Moon’s distance."],
      ["Laser measurements show the Moon is…", ["Drifting away from Earth by about 3.8 cm a year", "Moving closer to Earth", "Standing perfectly still", "Shrinking quickly"], "Very slowly, the Moon moves farther away."],
      ["The plaque on Eagle’s leg says the astronauts came…", ["In peace for all mankind", "To claim the Moon", "To build a base", "To look for gold"], "The plaque was left on the descent stage."],
      ["Which rocket launched Apollo 11?", ["Saturn V", "Atlas-Centaur", "Falcon 9", "Ariane 5"], "It launched on July 16, 1969."],
      ["About how much rock and soil did Armstrong and Aldrin collect?", ["About 22 kg", "About 2 g", "About 2 tonnes", "None"], "These samples showed the Moon is very old."],
      ["What was inside Eagle’s landing legs to soak up the bump of landing?", ["Crushable honeycomb", "Air-filled balloons", "Water", "Springs made of rubber bands"], "The honeycomb squashed to cushion the landing."]
    ]
  },
  {
    id: "apollo15lrv", world: "moon", name: "Apollo 15 Moon buggy", short: "Apollo 15 buggy", year: "1971",
    kind: "Lunar Roving Vehicle · Hadley–Apennine", status: "silent", statusText: "Parked", x: 52.6, y: 29.8,
    q: "Apollo 15 lunar roving vehicle", must: "Apollo 15",
    teaser: "I’m the first car ever driven on the Moon. I folded up like origami to ride there!",
    logs: [
      { when: "July 1971", title: "Folded like origami", text: "I rode to the Moon folded flat against the side of the lunar module Falcon. Astronauts Dave Scott and Jim Irwin pulled on straps and I unfolded, wheels and all." },
      { when: "1971", title: "First drive on another world", text: "I was the first car ever driven on the Moon. Both my front and rear wheels could steer, so I could turn tightly around craters." },
      { when: "1971", title: "Along Hadley Rille", text: "We drove along Hadley Rille, a long, winding valley, and up the slopes of the Apennine mountains. Over three trips we covered about 28 km." },
      { when: "1971", title: "The Genesis Rock", text: "At one stop, Dave and Jim found a white rock nicknamed the Genesis Rock: a piece of the Moon’s ancient crust, around 4 billion years old." },
      { when: "1971", title: "Parked for good", text: "Before leaving, the crew parked me where my TV camera could film their lunar module blasting off. Then I was left behind, and I’m still parked there today." }
    ],
    tech: [
      ["Electric motors", "Each of my 4 wheels had its own small electric motor powered by batteries."],
      ["Wire-mesh wheels", "Tyres made of woven zinc-coated piano wire, because air-filled rubber tyres would not work well in the Moon’s vacuum."],
      ["Four-wheel steering", "Front and rear wheels could both turn for tight steering."],
      ["Navigation system", "Tracked direction and distance so the crew always knew the way back."],
      ["TV camera", "Sent live colour video to Earth and could be aimed by engineers on the ground."]
    ],
    facts: [
      "On Apollo 15, Dave Scott dropped a hammer and a feather at the same time. With no air to slow the feather, they hit the ground together.",
      "The Moon buggy weighed about 210 kg on Earth. The Moon’s gravity is about one-sixth of Earth’s.",
      "Apollo 15 was the first of three Apollo missions to carry a Moon buggy. All three buggies were left on the Moon."
    ],
    science: "Driving farther let astronauts collect rocks from many different places, including the Genesis Rock. That helped scientists piece together how the Moon formed and changed.",
    stats: [["Landed", "1971"], ["Distance driven", "~28 km"], ["Crew", "Scott & Irwin"], ["Status", "Parked"]],
    quiz: [
      ["How did the first Moon buggy travel to the Moon?", ["Folded flat on the side of the lunar module", "In pieces inside a box", "Inside the command module", "On its own separate rocket"], "Astronauts pulled straps to unfold it."],
      ["What were the Moon buggy’s tyres made of?", ["Woven wire mesh", "Rubber filled with air", "Solid wood", "Inflatable plastic"], "Air-filled rubber tyres would not work well in a vacuum."],
      ["What powered the Moon buggy’s wheels?", ["Battery-powered electric motors", "A petrol engine", "Solar sails", "Pedals"], "Each wheel had its own motor."],
      ["What is the Genesis Rock?", ["A piece of the Moon’s ancient crust", "A meteorite from Mars", "A rock with fossils", "A giant diamond"], "It’s around 4 billion years old."],
      ["Dave Scott dropped a hammer and a feather together. What happened?", ["They hit the ground at the same time", "The feather floated away", "The hammer fell much faster", "Both floated in the air"], "There’s no air on the Moon to slow the feather."],
      ["Which astronauts drove the first Moon buggy?", ["Dave Scott and Jim Irwin", "Neil Armstrong and Buzz Aldrin", "Gene Cernan and Harrison Schmitt", "Pete Conrad and Alan Bean"], "They flew on Apollo 15 in 1971."],
      ["About how far did the Apollo 15 crew drive in total?", ["About 28 km", "About 28 m", "About 280 km", "About 2,800 km"], "Over three trips."],
      ["Which of the Moon buggy’s wheels could steer?", ["Both the front and rear wheels", "Only the front wheels", "Only the rear wheels", "None, it went straight only"], "Four-wheel steering helped it turn around craters."],
      ["What was the name of Apollo 15’s lunar module?", ["Falcon", "Eagle", "Columbia", "Snoopy"], "The buggy rode on its side."],
      ["How strong is the Moon’s gravity compared with Earth’s?", ["About one-sixth", "About the same", "Twice as strong", "There is no gravity"], "That’s why astronauts could bounce around."]
    ]
  },
  {
    id: "apollo17lrv", world: "moon", name: "Apollo 17 Moon buggy", short: "Apollo 17 buggy", year: "1972",
    kind: "Lunar Roving Vehicle · Taurus–Littrow", status: "silent", statusText: "Parked", x: 72.1, y: 34.1,
    q: "Apollo 17 lunar roving vehicle", must: "Apollo 17",
    teaser: "My fender broke, so the astronauts fixed it with duct tape and maps. I’m the last rover humans have driven on the Moon.",
    logs: [
      { when: "December 1972", title: "The last Apollo", text: "Apollo 17 was the final Apollo Moon landing. Gene Cernan and Harrison Schmitt landed in a deep valley called Taurus–Littrow and drove me around it." },
      { when: "1972", title: "A scientist on the Moon", text: "Harrison Schmitt was a geologist, the first scientist to walk on the Moon. His rock knowledge helped the crew pick the best samples." },
      { when: "1972", title: "The duct tape fix", text: "My fender got knocked off, and without it I sprayed the astronauts with scratchy Moon dust. So they built a new fender from laminated maps, duct tape and clamps. It worked!" },
      { when: "1972", title: "Orange soil!", text: "Near a crater called Shorty, Harrison spotted orange soil. It turned out to be tiny glass beads from ancient volcanic eruptions." },
      { when: "December 14, 1972", title: "Last footsteps", text: "Gene Cernan was the last to climb back into the lander, so he is still the last person to have walked on the Moon. And I’m the last rover humans have driven there." }
    ],
    tech: [
      ["Fender", "Kept Moon dust from spraying everywhere."],
      ["Hand controller", "A T-shaped stick between the seats that steered, sped up and braked."],
      ["Batteries", "Two batteries powered my motors for the whole mission."],
      ["TV camera", "Sent live video to Earth, including the lunar module launching away."],
      ["Tool carriers", "Racks for scoops, rakes and sample bags so the crew could grab rocks on the go."]
    ],
    facts: [
      "Apollo 17 brought back about 110 kg of rocks and soil, the most of any Apollo mission.",
      "The Apollo 17 crew drove about 36 km, the farthest of any Moon buggy.",
      "Moon dust is sharp and clingy because there is no wind or water to wear it smooth."
    ],
    science: "Apollo 17’s orange soil showed the Moon once had fiery volcanic fountains, and its record haul of samples is still being studied today.",
    stats: [["Landed", "1972"], ["Distance driven", "~36 km"], ["Crew", "Cernan & Schmitt"], ["Samples", "~110 kg"]],
    quiz: [
      ["How did Apollo 17 astronauts fix their buggy’s broken fender?", ["With laminated maps, duct tape and clamps", "With glue from a spare suit", "With a piece of the lunar module", "They never fixed it"], "A quick, clever repair."],
      ["Why did the broken fender matter?", ["Without it, scratchy Moon dust sprayed the astronauts", "The buggy couldn’t steer", "The battery overheated", "It made too much noise"], "The fender kept dust from spraying everywhere."],
      ["What was special about Harrison Schmitt?", ["He was a geologist, the first scientist to walk on the Moon", "He was the first person on the Moon", "He stayed in orbit", "He designed the buggy"], "His rock knowledge helped choose samples."],
      ["What was Apollo 17’s orange soil made of?", ["Tiny glass beads from ancient volcanic eruptions", "Rust from metal", "Orange paint from the lander", "Crushed Mars rocks"], "It showed the Moon once had volcanic fountains."],
      ["About how much rock and soil did Apollo 17 bring back?", ["About 110 kg", "About 1 kg", "About 10 tonnes", "About 500 g"], "The most of any Apollo mission."],
      ["Who is the last person to have walked on the Moon?", ["Gene Cernan", "Neil Armstrong", "Michael Collins", "Dave Scott"], "He was last to climb back into the lander on Apollo 17."],
      ["In which valley did Apollo 17 land?", ["Taurus–Littrow", "Hadley Rille", "Ocean of Storms", "Valles Marineris"], "A deep valley the crew explored by buggy."],
      ["Near which crater did Harrison Schmitt spot the orange soil?", ["Shorty", "Tycho", "Gale", "Jezero"], "Log 4 names the crater."],
      ["How did astronauts steer the Moon buggy?", ["With a T-shaped hand controller between the seats", "With a round steering wheel", "With foot pedals", "By leaning left and right"], "The same stick also sped up and braked."],
      ["Why is Moon dust so sharp and clingy?", ["There is no wind or water to wear it smooth", "It is made of glass shards from Earth", "It is magnetic", "It is always wet"], "On Earth, wind and water round off grains of dust."]
    ]
  }
);
