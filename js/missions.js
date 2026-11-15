// ===== Wake-up missions =====
// Each machine has a list of steps the player must clear to wake it up.
// Decision step: { real, title, setup, choices: [[text, correct?, why] x3], outcome }
//   real: true = based on a real event, false = training simulation.
// Drive step (rovers): { drive: true, intro, map }
// Map key: S = start (facing east), F = target rock, R = boulder (blocks), s = soft sand (stuck), . = open ground
const MISSIONS = {
  // ---------- MOON ----------
  surveyor3: [
    { real: false, title: "Falling too fast!",
      setup: "Your robot lander is a few metres above the Moon and the radar says you’re still falling fast. What do you do?",
      choices: [
        ["Fire the engines to slow down", true, "Right! Rocket engines are the only way to slow down on the Moon."],
        ["Open a parachute", false, "The Moon has no air, so a parachute would do nothing."],
        ["Spread wings and glide", false, "Wings need air to work, and the Moon has none."]],
      outcome: "Surveyor 3 used its radar and engines just like this. Its engines didn’t switch off at the right moment, so it bounced twice before settling." },
    { real: true, title: "Is the ground firm enough?",
      setup: "Astronauts will land on the Moon soon. Engineers need to know if the soil is soft powder or firm enough to walk on. How do you find out?",
      choices: [
        ["Dig and press the soil with the scoop on the robotic arm", true, "Testing the soil directly gives real answers."],
        ["Guess from photos taken by telescopes on Earth", false, "Telescopes can’t show how soft the soil is."],
        ["Wait for the astronauts to find out", false, "Engineers needed to know before sending people."]],
      outcome: "Surveyor 3 dug trenches with its scoop. The soil was firm enough to land and walk on, which helped plan the Apollo landings." },
    { real: true, title: "Visitors from Earth",
      setup: "It’s 1969. Apollo 12 astronauts land just 180 metres from Surveyor 3, which has sat on the Moon for two and a half years. What should they bring home?",
      choices: [
        ["Parts of Surveyor 3, like its camera, to see how the Moon changed them", true, "Studying the parts shows how metal, glass and paint survive on the Moon."],
        ["Nothing. Just take a photo and leave", false, "A chance to study old Moon hardware was too good to miss."],
        ["The whole lander", false, "It was far too big and heavy to fit in the spacecraft."]],
      outcome: "Pete Conrad and Alan Bean cut off Surveyor 3’s camera and other parts. Today the camera is in a museum in Washington, D.C." }
  ],
  apollo11: [
    { real: true, title: "Alarm 1202!",
      setup: "Eagle is dropping toward the Moon when the computer flashes ‘1202’, an alarm nobody expected. The computer is overloaded but still steering. Mission Control, it’s your call.",
      choices: [
        ["Keep going. The computer is dropping small jobs and still doing the important ones", true, "Correct! The computer was built to put the important jobs first."],
        ["Abort the landing and fly back to orbit", false, "That would have ended the first Moon landing for no good reason."],
        ["Switch the computer off", false, "Without the computer, landing would be far harder."]],
      outcome: "A young engineer, Steve Bales, said ‘We’re go on that alarm!’ and the landing carried on." },
    { real: true, title: "Boulders ahead!",
      setup: "Eagle’s computer is steering toward a crater full of boulders, and fuel is running low. You’re the pilot. What’s your call?",
      choices: [
        ["Take manual control and fly past to a flat spot", true, "That’s exactly what Neil Armstrong did."],
        ["Let the computer land among the boulders", false, "A boulder could tip the lander over. Too risky!"],
        ["Turn off the engine and drop", false, "Dropping from that height would crash the lander."]],
      outcome: "Neil Armstrong flew Eagle past the boulder field and landed safely with fuel running low. Then he radioed: ‘The Eagle has landed.’" },
    { real: true, title: "A broken switch",
      setup: "After the moonwalk, Buzz Aldrin spots that a switch-like circuit breaker for the engine has snapped off. Without it, they can’t get the engine ready to leave. What do you use to push it in?",
      choices: [
        ["A felt-tip pen, because it doesn’t conduct electricity", true, "Smart! Plastic won’t cause a spark or short circuit."],
        ["A metal screwdriver", false, "Metal could cause a short circuit in the wiring."],
        ["Your gloved finger", false, "The hole was too small for a thick spacesuit glove."]],
      outcome: "Buzz Aldrin pushed the breaker in with a felt-tip pen, and Eagle lifted off safely. He kept the pen as a souvenir." }
  ],
  apollo15lrv: [
    { real: true, title: "Too big to fit",
      setup: "The Moon buggy is about 3 metres long, much too big to fit inside the lunar module. How do you bring it to the Moon?",
      choices: [
        ["Fold it up and strap it to the outside of the lander", true, "Its wheels and frame folded up like a fold-away chair."],
        ["Send it on its own rocket", false, "It would need its own lander. Far too costly."],
        ["Let the astronauts build it from hundreds of parts", false, "That would take hours in bulky spacesuits."]],
      outcome: "The buggy rode folded on the side of the lander. Astronauts pulled straps and it unfolded itself onto the ground." },
    { real: true, title: "The steering won’t work",
      setup: "On your first drive, the front-wheel steering doesn’t work at all. The back wheels still steer. What do you do?",
      choices: [
        ["Drive carefully using just the back-wheel steering", true, "The buggy was built so either end could steer."],
        ["Cancel all the drives", false, "That would waste a huge part of the mission."],
        ["Take it apart to fix it", false, "Taking a buggy apart on the Moon would be very risky."]],
      outcome: "Dave Scott drove with back-wheel steering. On the next drive, the front steering mysteriously started working again!" },
    { real: false, title: "Which way home?",
      setup: "You’ve driven kilometres away from the lunar module. How do you find your way back?",
      choices: [
        ["Follow the buggy’s navigation system", true, "Its gyroscope and wheel counters track direction and distance back to the lander."],
        ["Use a magnetic compass", false, "A compass doesn’t work on the Moon."],
        ["Follow your tyre tracks backwards", false, "That works, but it’s slow, and tracks can be hard to see in harsh sunlight. The navigation system is faster and safer."]],
      outcome: "Apollo Moon buggies had a navigation system that always showed the way and distance back to the lander." }
  ],
  apollo17lrv: [
    { real: true, title: "The fender fell off!",
      setup: "Your Moon buggy’s fender has broken off, and the wheels are spraying scratchy Moon dust all over you. What do you do?",
      choices: [
        ["Build a new fender from laminated maps, duct tape and clamps", true, "Smart thinking! A clever, quick repair."],
        ["Ignore it and keep driving", false, "The dust would coat you, your cameras and your batteries."],
        ["Drive backwards the whole time", false, "That would be slow and wouldn’t stop the dust."]],
      outcome: "Gene Cernan and Harrison Schmitt really did build a new fender from laminated maps, duct tape and clamps. It worked!" },
    { real: false, title: "Batteries getting hot",
      setup: "Moon dust has coated the buggy’s battery radiators, so the batteries are heating up. What do you do?",
      choices: [
        ["Brush the dust off the radiators", true, "Clean radiators can get rid of heat again."],
        ["Drive faster so the wind cools them", false, "There’s no air on the Moon, so there’s no cooling wind."],
        ["Pour water on them", false, "Water would boil away in the vacuum and could damage the electronics."]],
      outcome: "Apollo astronauts carried a brush to dust off the buggy’s radiators so the batteries stayed cool." },
    { real: true, title: "Orange soil!",
      setup: "Harrison Schmitt, a geologist, spots bright orange soil near a small crater. You’re short on time. What do you do?",
      choices: [
        ["Quickly collect a sample to take back to Earth", true, "A surprise discovery is worth a few extra minutes."],
        ["Ignore it. It’s probably just a reflection", false, "It was real, and very important."],
        ["Leave it for a future mission", false, "Nobody has been back since 1972!"]],
      outcome: "The orange soil turned out to be tiny glass beads from volcanic fountains on the Moon billions of years ago." }
  ],

  // ---------- MARS ----------
  viking1: [
    { real: true, title: "Rough landing site",
      setup: "Viking 1 is in orbit, ready to land on July 4, 1976. But new photos show the landing site is much rougher than expected. What do you do?",
      choices: [
        ["Wait in orbit and search for a safer spot", true, "Patience saves missions."],
        ["Land on schedule anyway", false, "A rocky site could wreck the lander."],
        ["Land at night when it’s calmer", false, "The cameras couldn’t check the ground, and night doesn’t make rocks smaller."]],
      outcome: "The team searched for weeks. Viking 1 landed safely on July 20, 1976, the first successful landing on Mars by the United States." },
    { real: true, title: "How do you look for life?",
      setup: "Your big question: is there life in the Martian soil? How do you test it?",
      choices: [
        ["Scoop soil into small labs, add nutrients and check for gases that living things give off", true, "Living things eat and breathe, so you look for signs of that."],
        ["Point the camera and wait for animals to walk by", false, "Any life on Mars would most likely be tiny microbes."],
        ["Drill a kilometre down to find water", false, "A drill that big could never fit on a lander."]],
      outcome: "Viking’s results were puzzling: some tests reacted, but no living things were confirmed. Scientists still debate them today!" },
    { real: false, title: "Dust storm coming",
      setup: "A dust storm is heading for your lander. Your power comes from nuclear generators. What happens to your power?",
      choices: [
        ["It keeps working, day and night", true, "Nuclear generators don’t need sunlight."],
        ["It stops until the storm clears", false, "That would be true for solar panels, but not for nuclear power."],
        ["Someone must clean the panels", false, "Viking 1 had nuclear generators, not solar panels."]],
      outcome: "Viking 1’s nuclear power kept it working for more than six years, through winters and dust storms." }
  ],
  sojourner: [
    { real: true, title: "A cheaper way to land",
      setup: "Mars Pathfinder must land Sojourner on Mars cheaply and simply. How do you soften the final hit?",
      choices: [
        ["Wrap the lander in giant airbags and let it bounce", true, "A brand-new trick for Mars!"],
        ["Land on a runway like a plane", false, "There are no runways on Mars."],
        ["Use only a parachute, all the way to the ground", false, "Mars’s air is too thin. You’d still hit far too fast."]],
      outcome: "Pathfinder bounced about 15 times on its airbags before rolling to a stop in 1997." },
    { real: true, title: "An airbag in the way",
      setup: "Pathfinder has landed, but a deflated airbag is bunched up where Sojourner needs to drive off. What do you do?",
      choices: [
        ["Pull the airbag in more and lift a panel to move it out of the way", true, "Clear the path before driving."],
        ["Drive over it", false, "The wheels could snag in the fabric."],
        ["Leave Sojourner on the lander", false, "Then the rover would never explore."]],
      outcome: "Engineers reeled in the airbag and lifted a lander panel. Sojourner rolled down its ramp onto Mars." },
    { real: false, title: "How far can you go?",
      setup: "Sojourner sends its messages through the lander’s radio, which talks to Earth. How far should you drive?",
      choices: [
        ["Stay close enough for the lander to hear you", true, "No lander, no link to Earth."],
        ["As far as you like. Earth can hear you", false, "Sojourner’s tiny radio could only reach the lander."],
        ["Drive away and come back once a month", false, "Without the lander you’d get no commands at all."]],
      outcome: "Sojourner always stayed within about 12 metres of the lander, its link to Earth." },
    { drive: true, intro: "Now drive me around the boulders to the target rock. Watch out for soft sand!",
      map: [".......", ".R...R.", "S..R..F", ".....R.", "..s....", "......."] }
  ],
  spirit: [
    { real: true, title: "Spirit keeps restarting",
      setup: "Just 18 days after landing, Spirit keeps rebooting again and again. Its memory is too full of files. What do you do?",
      choices: [
        ["Restart it without using the full memory, then delete old files", true, "Free up space and it can think clearly again."],
        ["Turn it off for a month and hope", false, "That wouldn’t fix the full memory."],
        ["Keep driving as normal", false, "A rover that keeps restarting can’t drive safely."]],
      outcome: "Engineers cleared out Spirit’s memory from Earth. Within weeks it was driving again." },
    { real: true, title: "A broken wheel",
      setup: "In 2006, Spirit’s right front wheel stops turning. You still have five good wheels. What do you do?",
      choices: [
        ["Drive backwards, dragging the broken wheel", true, "Pulling it is easier than pushing it."],
        ["Stop driving forever", false, "Spirit still had lots to explore."],
        ["Spin the broken wheel harder", false, "Its motor was failing. Forcing it wouldn’t help."]],
      outcome: "Spirit drove backwards for years. In 2007, the dragging wheel scraped up bright soil full of silica, a sign of ancient hot springs!" },
    { real: true, title: "Stuck in the sand",
      setup: "In 2009, Spirit breaks through a crust into soft sand at a place called Troy. After months of trying, it can’t get out, and winter is coming. What now?",
      choices: [
        ["Use it as a science station and tilt it toward the Sun", true, "A stuck rover can still do science."],
        ["Spin the wheels at full power all winter", false, "That would drain the batteries and dig it in deeper."],
        ["Give up on it immediately", false, "There was still science to do where it stood."]],
      outcome: "Spirit studied the soil around it, but the winter was too harsh. Its last message came in March 2010." },
    { drive: true, intro: "Training time! Gusev crater is full of soft sand. Find a safe route to the rock I need to study.",
      map: ["S.ss...", "..s..R.", "R....s.", "..R....", ".ss.R.F", "......."] }
  ],
  opportunity: [
    { real: true, title: "Into the crater?",
      setup: "In 2004, Opportunity reaches Endurance crater. Its walls show layers of rock from long ago, but the slopes are steep. What do you do?",
      choices: [
        ["Test the slope, then drive carefully inside to study the layers", true, "Careful steps, big discoveries."],
        ["Skip it. Too risky", false, "The layers held clues about ancient water."],
        ["Drive straight down at full speed", false, "The rover could slide or tip over."]],
      outcome: "Opportunity spent six months inside Endurance crater and found more signs that water once soaked the rocks." },
    { real: true, title: "Stuck in a dune",
      setup: "In 2005, Opportunity drives into a sand ripple and its wheels sink. It’s stuck! What do you do?",
      choices: [
        ["Test on Earth first, then back out a tiny bit at a time", true, "Slow and steady wins."],
        ["Spin the wheels at full power", false, "That would dig it in deeper."],
        ["Wait for the wind to blow the sand away", false, "That could take years."]],
      outcome: "Engineers tested in a sandbox on Earth. Opportunity escaped after five weeks, driving just centimetres at a time." },
    { real: true, title: "A planet-wide dust storm",
      setup: "In 2018, a dust storm covers the whole of Mars and blocks the Sun. Opportunity runs on solar power. What should it do?",
      choices: [
        ["Go into low-power sleep and wait for the sky to clear", true, "Save energy and wait it out."],
        ["Drive out of the storm", false, "The storm covered the whole planet."],
        ["Turn on all its heaters to stay warm", false, "That would empty the batteries even faster."]],
      outcome: "Opportunity went to sleep and was last heard in June 2018. NASA sent more than 1,000 commands to wake it before ending the mission in 2019." },
    { drive: true, intro: "Training time! A ridge of boulders and a sand patch block the way. Plan a careful route to the target rock.",
      map: ["...R...", ".S.R.F.", "...R...", "..sss..", ".......", "R.....R"] }
  ],
  phoenix: [
    { real: true, title: "Sticky soil",
      setup: "Phoenix scoops soil to bake in its tiny oven, but the clumpy soil sticks on the screen over the opening. What do you do?",
      choices: [
        ["Shake the screen to help the soil fall through", true, "A few good shakes did it."],
        ["Give up on the oven", false, "The oven was one of Phoenix’s most important tools."],
        ["Wait for rain to wash it in", false, "It doesn’t rain on Mars."]],
      outcome: "The team shook the screen over several days and enough soil finally dropped into the oven." },
    { real: true, title: "Ice or salt?",
      setup: "Phoenix’s scoop uncovers bright white chunks in a trench. Are they ice or salt? How can you tell?",
      choices: [
        ["Watch them for a few days. Ice slowly vanishes into the thin air, salt doesn’t", true, "A simple test with time."],
        ["Lick them", false, "Robots can’t lick, and you should never lick space samples!"],
        ["Throw them away", false, "That would lose the evidence."]],
      outcome: "Days later, some chunks had disappeared. They were water ice!" },
    { real: false, title: "Winter is coming",
      setup: "You’re a solar-powered lander near Mars’s north pole, and sunlight is fading as winter arrives. What’s the best plan?",
      choices: [
        ["Do as much science as possible before the power runs out", true, "Exactly. Every sunny day counts."],
        ["Drive south to find more sunlight", false, "Phoenix was a lander. It couldn’t move."],
        ["Fold up the solar panels and wait for spring", false, "Folding the panels would stop all power, and the long dark winter is too harsh."]],
      outcome: "Phoenix worked for about five months, longer than planned, before winter darkness and frost ended its mission." }
  ],
  curiosity: [
    { real: true, title: "Too heavy for airbags",
      setup: "Curiosity is the size of a car, far too heavy to bounce down on airbags. How do you land it gently?",
      choices: [
        ["Lower it on cables from a hovering rocket-powered ‘sky crane’", true, "Wild, but it worked!"],
        ["Use bigger airbags", false, "Airbags that big would be too heavy and could burst."],
        ["Drop it from a parachute onto its wheels", false, "It would hit the ground far too fast."]],
      outcome: "In 2012, a sky crane gently lowered Curiosity onto Mars, then flew off to crash a safe distance away." },
    { real: true, title: "Could life have lived here?",
      setup: "You want to know if Gale crater could once have supported tiny life. What do you do?",
      choices: [
        ["Drill into rock and test the powder in your onboard labs", true, "Rock chemistry tells the story."],
        ["Look for fossils with the naked eye from orbit", false, "Orbiters can’t see anything that small."],
        ["Measure the temperature only", false, "Temperature alone doesn’t tell you about ancient water and chemistry."]],
      outcome: "Curiosity’s first drill samples showed an ancient lake with the right chemistry for microbes to live." },
    { real: true, title: "Holes in the wheels",
      setup: "In 2013, sharp rocks start poking holes in Curiosity’s aluminium wheels. What do you do?",
      choices: [
        ["Plan routes around sharp rocks and over smoother ground", true, "Careful route planning protects the wheels."],
        ["Keep driving the same way", false, "The wheels would wear out much faster."],
        ["Stop driving forever", false, "Curiosity still had a mountain to climb!"]],
      outcome: "Rover drivers changed routes and later updated the software to ease pressure on the wheels. Curiosity is still driving." },
    { drive: true, intro: "Training time! Boulders are scattered across Gale crater. Plan a route to the target rock.",
      map: ["..R....", "S.R.s..", "..R.R..", "....R.F", ".s....R", "..R...."] }
  ],
  insight: [
    { real: true, title: "Listening for marsquakes",
      setup: "Your seismometer must feel tiny marsquakes. Where do you put it?",
      choices: [
        ["Lift it onto the ground with the robotic arm, under a cover", true, "On the ground and shielded from wind, it can feel the planet shake."],
        ["Leave it on the lander’s deck", false, "The wind would shake the lander and drown out quakes."],
        ["Bury it deep underground", false, "InSight had no way to dig that deep."]],
      outcome: "InSight placed its seismometer on Mars under a dome-shaped shield. It recorded more than 1,300 marsquakes!" },
    { real: true, title: "The mole is stuck",
      setup: "Your heat probe, ‘the mole’, can’t dig deeper because the soil is too clumpy to grip. What do you try?",
      choices: [
        ["Use the robotic arm to press on it and help it grip", true, "That’s what the team tried."],
        ["Keep hammering forever", false, "Hammering in place just bounced it around."],
        ["Pull it out and throw it away", false, "Giving up straight away means learning nothing."]],
      outcome: "The team pressed on the mole with InSight’s robotic arm. It helped a little, but the soil was too tough and the mole never got deep enough. Engineers learned a lot for future missions." },
    { real: true, title: "Dusty solar panels",
      setup: "Dust is covering InSight’s solar panels and power is dropping. The arm can’t reach the panels. What do you try?",
      choices: [
        ["Drop sand next to a panel on a windy day so the grains blow across and knock dust off", true, "A clever trick with wind and sand!"],
        ["Shake the whole lander", false, "The lander wasn’t built to shake itself."],
        ["Wait for rain", false, "It doesn’t rain on Mars."]],
      outcome: "The sand trick gave InSight a little extra power, helping it work until late 2022." }
  ],
  perseverance: [
    { real: true, title: "Picking a safe spot",
      setup: "Jezero crater has cliffs, boulders and sand. How does Perseverance avoid them while landing?",
      choices: [
        ["Take photos while falling and match them to a map to steer to a safe spot", true, "It found its own way to safety."],
        ["Land wherever the parachute drifts", false, "It could land on a cliff."],
        ["Have someone on Earth steer it live", false, "Signals take minutes, but landing takes about 7 minutes in total. Far too slow!"]],
      outcome: "Perseverance used ‘Terrain-Relative Navigation’ and landed safely in February 2021." },
    { real: true, title: "An empty sample tube",
      setup: "Your first rock sample tube comes back empty! The rock crumbled into powder. What do you do?",
      choices: [
        ["Find a harder rock and try again", true, "Learn and adjust."],
        ["Stop collecting samples", false, "Samples are the main reason Perseverance went to Mars."],
        ["Send the empty tube back to Earth", false, "That wouldn’t help anyone."]],
      outcome: "Weeks later, Perseverance drilled a tougher rock and collected its first sample." },
    { real: true, title: "Pebbles in the works",
      setup: "Pebbles have fallen into the part that stores the drill bits and tubes. What do you do?",
      choices: [
        ["Carefully tip and turn the parts to shake the pebbles out", true, "Patience and careful moves."],
        ["Keep going and ignore them", false, "They could jam the machinery."],
        ["Blow them out with air", false, "Perseverance has no air blower."]],
      outcome: "Engineers slowly cleared the pebbles over a few weeks, and sampling started again." },
    { drive: true, intro: "Training time! Jezero’s old river delta has boulders and sand. Reach the target rock to collect a sample.",
      map: ["S..s...", ".R.s.R.", ".R...R.", ".R.s.R.", "...s..F", "RRR...."] }
  ],
  ingenuity: [
    { real: false, title: "Air too thin to fly?",
      setup: "Mars’s air is very thin, so a normal helicopter couldn’t lift off. How do you make Ingenuity fly?",
      choices: [
        ["Make it very light and spin the blades very fast", true, "About 2,400 times a minute, on a body of only about 1.8 kg."],
        ["Make it heavier so it’s more stable", false, "A heavier helicopter needs even more lift."],
        ["Spin the blades slowly to save power", false, "Slow blades wouldn’t make enough lift in thin air."]],
      outcome: "Ingenuity was super light and its blades spun about 2,400 times a minute." },
    { real: true, title: "A freezing night",
      setup: "Martian nights can drop to about −90 °C, cold enough to break Ingenuity’s electronics. How does it survive?",
      choices: [
        ["Charge its batteries with its solar panel by day and run heaters at night", true, "Sunshine by day keeps it cozy at night."],
        ["Fly around all night to stay warm", false, "Flying would drain the batteries in minutes."],
        ["Hide under Perseverance", false, "Perseverance drives away, so it can’t be a shelter."]],
      outcome: "Ingenuity survived its first night alone on Mars in April 2021, a big milestone." },
    { real: true, title: "First flight cancelled",
      setup: "Just before the first flight, a safety check stops the rotors from spinning up. What do you do?",
      choices: [
        ["Fix the software and try again a few days later", true, "Better safe than sorry."],
        ["Force the rotors to spin anyway", false, "Ignoring a safety check could destroy the helicopter."],
        ["Cancel the whole mission", false, "The problem could be fixed."]],
      outcome: "Engineers updated the software, and on April 19, 2021, Ingenuity made the first powered flight on another planet. It went on to fly 72 times!" }
  ],

  // ---------- VENUS ----------
  mariner1: [
    { real: true, title: "Off course!",
      setup: "Minutes after launch, your rocket starts swerving off course and could fall where people are. You’re the range safety officer.",
      choices: [
        ["Destroy the rocket to keep people safe", true, "Safety comes first. It’s a hard decision, but the right one."],
        ["Let it keep flying and hope it corrects itself", false, "If it fell on people or ships, the result could be terrible."],
        ["Try to fly it back to the launch pad", false, "Rockets can’t turn around and land like that."]],
      outcome: "The range safety officer destroyed Mariner 1 about 293 seconds after launch." },
    { real: true, title: "What went wrong?",
      setup: "Investigators find a tiny mistake in the guidance maths, plus a faulty antenna on the rocket. How do you stop this happening again?",
      choices: [
        ["Check every line of the code and maths very carefully before launch", true, "One tiny symbol can make a huge difference."],
        ["Blame the rocket and change nothing", false, "Then the same mistake could happen again."],
        ["Stop launching to Venus", false, "There was a lot to learn about Venus."]],
      outcome: "Mariner 1 taught NASA that even one missing symbol in a program can be a very costly mistake." },
    { real: true, title: "Try again?",
      setup: "Mariner 1 had a twin spacecraft, Mariner 2, ready on the ground. What do you do?",
      choices: [
        ["Launch Mariner 2 with the problem fixed", true, "Learn, fix and fly again."],
        ["Keep it in storage forever", false, "A ready spacecraft can still make history."],
        ["Take it apart for spare parts", false, "It was ready to fly!"]],
      outcome: "Mariner 2 launched a month later and flew past Venus in December 1962, the first spacecraft to visit another planet successfully." }
  ],
  pioneervenus: [
    { real: false, title: "Built for crushing air",
      setup: "Your probes will plunge into scorching air about 90 times thicker than Earth’s. What do you build their shells from?",
      choices: [
        ["Strong titanium", true, "Titanium is strong and light."],
        ["Glass", false, "Glass could shatter under that pressure."],
        ["Plastic", false, "Plastic would melt and crush on Venus."]],
      outcome: "The Pioneer Venus probes had tough titanium shells." },
    { real: true, title: "One probe or four?",
      setup: "You want to study Venus’s air in many places at once: day side, night side, north and south. How?",
      choices: [
        ["Send one large probe and three small probes to different spots at the same time", true, "More probes, more places, one go."],
        ["Send one probe and move it around", false, "A probe falling through the air can’t move to other places."],
        ["Look from Earth with a telescope", false, "Telescopes can’t see inside Venus’s thick clouds."]],
      outcome: "In December 1978, four probes dived into Venus. The tough little Day probe even survived hitting the ground!" },
    { real: true, title: "Mapping through clouds",
      setup: "Venus is always covered by thick clouds. How does the Pioneer Venus Orbiter map the ground underneath?",
      choices: [
        ["Use radar, which sends radio waves through the clouds", true, "Radar sees through clouds."],
        ["Wait for a clear day", false, "Venus never has clear days."],
        ["Use a bright flashlight", false, "Light can’t get through the thick clouds."]],
      outcome: "The orbiter made the first map of almost all of Venus’s surface, revealing mountains and huge plains." }
  ],
  magellan: [
    { real: true, title: "Map the whole planet",
      setup: "Magellan’s radar can only map a thin strip of Venus on each orbit. How do you map the whole planet?",
      choices: [
        ["Map strip after strip while Venus slowly turns underneath", true, "Patience: strip by strip, like mowing a lawn."],
        ["Take one giant photo", false, "Radar can only image a narrow strip at a time."],
        ["Fly much closer and crash into it", false, "That would end the mission!"]],
      outcome: "Magellan mapped 98% of Venus’s surface in amazing detail." },
    { real: true, title: "Running low on fuel",
      setup: "You need to lower Magellan’s orbit around Venus, but there isn’t much fuel left. What’s your plan?",
      choices: [
        ["Dip into the top of the atmosphere again and again (aerobraking)", true, "Air drag slows it down without fuel."],
        ["Burn all the remaining fuel at once", false, "Then there’d be none left for anything else."],
        ["Wait for gravity to do it", false, "The orbit wouldn’t change by itself."]],
      outcome: "Magellan was the first planetary spacecraft to use aerobraking, in 1993." },
    { real: true, title: "One last experiment",
      setup: "Magellan’s mission is ending. Can it do one more useful thing?",
      choices: [
        ["Tilt its solar panels like a windmill and measure how the air pushes on it", true, "Even an ending can teach us something."],
        ["Switch it off straight away", false, "There was still a chance to learn."],
        ["Fly it home to Earth", false, "It didn’t have nearly enough fuel."]],
      outcome: "In 1994, Magellan’s ‘windmill experiment’ measured Venus’s upper air. Then it dived in and burned up." }
  ],

  // ---------- SPACE TELESCOPES ----------
  hubble: [
    { real: true, title: "Getting a bus into space",
      setup: "Hubble is about the size of a school bus. How do you get it into orbit?",
      choices: [
        ["Carry it in the Space Shuttle’s cargo bay and let it go with the robotic arm", true, "Gently placed in space by hand!"],
        ["Fold it into a small rocket", false, "Hubble’s big mirror can’t fold."],
        ["Build it in space from tiny parts", false, "That would take years of spacewalks."]],
      outcome: "Space Shuttle Discovery released Hubble into orbit in April 1990." },
    { real: true, title: "Blurry pictures!",
      setup: "Your brand-new space telescope sends back blurry pictures. Its main mirror was ground to the wrong shape. What do you do?",
      choices: [
        ["Send astronauts to fit corrective optics, like glasses", true, "That’s exactly what NASA did."],
        ["Build and launch a whole new telescope", false, "That would cost a huge amount and take many years."],
        ["Give up on the telescope", false, "Hubble was designed to be fixed, so there was a better option."]],
      outcome: "In December 1993, astronauts fitted Hubble with corrective optics. Its pictures became crystal clear." },
    { real: true, title: "Gyroscope trouble",
      setup: "In 2024, one of Hubble’s last gyroscopes, which help it point steadily, keeps acting up. Astronauts can’t visit any more. What do you do?",
      choices: [
        ["Switch to pointing with just one gyroscope and keep observing", true, "Clever: save the others as backups."],
        ["Shut Hubble down", false, "It could still do great science."],
        ["Let it point randomly", false, "Random pointing would give useless pictures."]],
      outcome: "Since June 2024, Hubble has worked in ‘one-gyro mode’. It’s a little slower, but still making discoveries." }
  ],
  chandra: [
    { real: false, title: "Where to put an X-ray telescope?",
      setup: "Earth’s air blocks X-rays. Where should you put your X-ray telescope?",
      choices: [
        ["In space, above the atmosphere", true, "Above the air, X-rays can reach the telescope."],
        ["On top of a tall mountain", false, "Even mountain air blocks X-rays."],
        ["Deep underwater", false, "Water blocks X-rays even more."]],
      outcome: "Chandra orbits far above the atmosphere, swinging out about a third of the way to the Moon." },
    { real: true, title: "Mirrors for X-rays",
      setup: "X-rays fly straight through ordinary mirrors. How do you focus them?",
      choices: [
        ["Use barrel-shaped mirrors nested inside each other, so X-rays just skim off them", true, "Like a stone skipping on water!"],
        ["Use a really big ordinary mirror", false, "X-rays would pass straight into it."],
        ["Use a glass lens", false, "Glass absorbs X-rays."]],
      outcome: "Chandra’s nested mirrors are some of the smoothest ever made." },
    { real: true, title: "Getting high enough",
      setup: "Chandra needs a very high orbit, but the Space Shuttle only reaches low orbits. What do you do?",
      choices: [
        ["Release it from the Shuttle, then fire extra rocket boosters to climb higher", true, "Shuttle first, then its own rockets."],
        ["Keep it in low orbit", false, "Earth would block its view too often."],
        ["Wait for a bigger Shuttle", false, "There wasn’t one."]],
      outcome: "Space Shuttle Columbia launched Chandra in 1999, commanded by Eileen Collins, the first woman to command a Shuttle." }
  ],
  spitzer: [
    { real: true, title: "Too much heat from Earth",
      setup: "Earth gives off heat that would warm up your infrared telescope. Where should it orbit?",
      choices: [
        ["Around the Sun, slowly drifting behind Earth", true, "Far from Earth’s heat."],
        ["Close to Earth like Hubble", false, "Earth’s heat would blur its view."],
        ["Close to the Sun", false, "Much too hot!"]],
      outcome: "Spitzer followed Earth around the Sun, drifting a little farther behind every year." },
    { real: true, title: "Out of coolant",
      setup: "Your infrared telescope’s liquid helium coolant has run out, but some cameras still work. What do you do?",
      choices: [
        ["Keep observing with the cameras that still work", true, "Make the most of what still works!"],
        ["Switch the telescope off forever", false, "That would waste years of possible science."],
        ["Send a refill rocket", false, "Spitzer was far behind Earth. There was no way to refill it."]],
      outcome: "Spitzer kept working in a ‘warm mission’ for more than 10 more years." },
    { real: true, title: "Hunting for planets",
      setup: "A small, cool star called TRAPPIST-1 might have planets. How can Spitzer find them?",
      choices: [
        ["Watch the star for days and measure tiny dips as planets pass in front", true, "Each dip is a planet crossing the star."],
        ["Take a close-up photo of each planet", false, "They’re far too small and far away to photograph."],
        ["Listen for radio signals", false, "Planets don’t usually send radio signals."]],
      outcome: "In 2017, Spitzer helped show that TRAPPIST-1 has seven Earth-sized planets." }
  ],
  kepler: [
    { real: true, title: "How to catch a planet",
      setup: "Planets passing in front of their stars cause tiny dips in starlight. How should Kepler watch?",
      choices: [
        ["Stare at the same patch of sky with about 150,000 stars, nonstop, for years", true, "Keep watching and you won’t miss a dip."],
        ["Look at a different star every night", false, "You’d miss most of the dips."],
        ["Only look at the brightest star", false, "One star wouldn’t find many planets."]],
      outcome: "Kepler stared at one patch of sky for four years and found thousands of planets." },
    { real: true, title: "Broken wheels",
      setup: "Two of Kepler’s four reaction wheels have broken, so it can’t point steadily any more. What’s your plan?",
      choices: [
        ["Use the gentle push of sunlight to balance it", true, "A brilliant fix!"],
        ["Send astronauts to repair it", false, "Kepler was much too far from Earth for astronauts to reach."],
        ["Shut it down", false, "Engineers found a clever way to keep it working."]],
      outcome: "Engineers used sunlight pressure to balance Kepler and began a new mission called K2." },
    { real: true, title: "Running out of fuel",
      setup: "In 2018, Kepler is almost out of fuel. What do you do first?",
      choices: [
        ["Send the last data home, then switch it off safely", true, "Save the science first."],
        ["Keep observing until it stops by itself", false, "You might lose data still on board."],
        ["Fly it back to Earth", false, "It didn’t have the fuel."]],
      outcome: "Kepler’s last data came home, and it was switched off in October 2018." }
  ],
  webb: [
    { real: true, title: "Too big for any rocket",
      setup: "Webb’s mirror is 6.5 metres wide and its sunshield is as big as a tennis court. No rocket is that wide. What do you do?",
      choices: [
        ["Fold them up like origami and unfold them in space", true, "Folded to fit, unfolded in space."],
        ["Make a smaller telescope", false, "A smaller mirror can’t see as far back in time."],
        ["Launch it in pieces and glue them together", false, "There’s nobody out there to glue it!"]],
      outcome: "After launch on Christmas Day 2021, Webb unfolded itself step by step over two weeks." },
    { real: false, title: "Keep it cold",
      setup: "Webb’s infrared camera must stay super cold. Where does the sunshield go?",
      choices: [
        ["Between the telescope and the Sun", true, "It blocks the Sun’s heat, and Earth’s and the Moon’s too."],
        ["On the side facing away from the Sun", false, "Then the Sun would heat the telescope directly."],
        ["No sunshield needed in cold space", false, "Sunlight would still heat it up too much."]],
      outcome: "Webb’s five-layer sunshield keeps the telescope colder than −220 °C." },
    { real: true, title: "18 mirrors, one view",
      setup: "Webb’s mirror is made of 18 gold-covered hexagons. After unfolding, they show 18 blurry copies of one star. What now?",
      choices: [
        ["Move each hexagon with tiny motors until they all act like one big mirror", true, "Line them up perfectly, a tiny step at a time."],
        ["Use just one hexagon", false, "That would waste most of the mirror."],
        ["Shake the telescope until they line up", false, "Shaking would make things worse!"]],
      outcome: "Over a few months in 2022, the team lined up all 18 mirrors to work as one." }
  ],

  // ---------- DEEP SPACE ----------
  pioneer10: [
    { real: true, title: "Too far for sunlight",
      setup: "At Jupiter, sunlight is about 25 times weaker than at Earth. How do you power Pioneer 10?",
      choices: [
        ["Use nuclear power generators (RTGs)", true, "They make electricity from heat, not sunlight."],
        ["Use extra-big solar panels", false, "In the 1970s, panels that big would have been far too heavy."],
        ["Use batteries charged on Earth", false, "They would run out within days."]],
      outcome: "Pioneer 10’s nuclear generators powered it for about 30 years." },
    { real: true, title: "A message for aliens",
      setup: "Pioneer 10 will one day leave our solar system. What do you add, just in case someone finds it?",
      choices: [
        ["A metal plaque showing humans and where Earth is", true, "A greeting card from Earth!"],
        ["A big flag", false, "A flag wouldn’t explain much to aliens."],
        ["Nothing. No one will find it", false, "It doesn’t hurt to say hello!"]],
      outcome: "Pioneer 10 carries a gold-coated plaque with a drawing of a man and a woman, and a map to find the Sun." },
    { real: false, title: "Into the asteroid belt",
      setup: "Nobody knows if a spacecraft can survive the asteroid belt. You’re heading there now. What do you do?",
      choices: [
        ["Fly through carefully and measure the dust as you go", true, "That’s how scientists found out it was safe."],
        ["Turn back to Earth", false, "Then nobody would ever find out."],
        ["Wait 50 years for a better spacecraft", false, "Someone had to go first!"]],
      outcome: "Pioneer 10 crossed the asteroid belt safely, the first spacecraft ever to do so, and went on to visit Jupiter." }
  ],
  voyager1: [
    { real: true, title: "A cosmic slingshot",
      setup: "The outer planets are very far away. How do you get there faster without carrying loads of fuel?",
      choices: [
        ["Swing past Jupiter and Saturn and use their gravity to speed up", true, "A gravity slingshot!"],
        ["Carry a giant fuel tank", false, "It would be far too heavy to launch."],
        ["Fly in a straight line from Earth", false, "That would take much longer."]],
      outcome: "Voyager 1 got gravity boosts at Jupiter (1979) and Saturn (1980), sending it out of the solar system." },
    { real: true, title: "One last picture",
      setup: "In 1990, Voyager 1’s cameras are about to be switched off forever to save power. What should its last pictures be?",
      choices: [
        ["Turn around and photograph the planets, including tiny Earth", true, "A family portrait of the solar system."],
        ["Take a picture of empty space", false, "Not very exciting!"],
        ["Don’t bother", false, "That photo became one of the most famous ever."]],
      outcome: "The photo of Earth as a tiny dot became famous as the ‘Pale Blue Dot’." },
    { real: true, title: "Garbled messages",
      setup: "In 2023, Voyager 1 starts sending back nonsense data. One of its memory chips has failed, and it’s more than 24 billion km away. What do you do?",
      choices: [
        ["Move its code into other parts of its memory", true, "Engineers rewrote and moved the code from billions of kilometres away."],
        ["Give up on Voyager 1", false, "It was still worth saving."],
        ["Launch a repair mission", false, "It would take decades to catch up with Voyager 1."]],
      outcome: "NASA engineers moved Voyager 1’s code around the broken chip, and by 2024 it was sending science data again." }
  ],
  voyager2: [
    { real: true, title: "A rare line-up",
      setup: "In the late 1970s, Jupiter, Saturn, Uranus and Neptune line up in a way that happens only about once every 175 years. What do you do?",
      choices: [
        ["Send one spacecraft past all four planets in one trip", true, "A once-in-a-lifetime grand tour!"],
        ["Visit only Jupiter, then come home", false, "Spacecraft that far out can’t easily come home, and you’d miss three planets."],
        ["Wait for the next line-up", false, "That would be in the 2150s!"]],
      outcome: "Voyager 2 is still the only spacecraft to visit Uranus (1986) and Neptune (1989)." },
    { real: true, title: "Antenna pointing the wrong way",
      setup: "In 2023, a wrong command tilts Voyager 2’s antenna slightly away from Earth, and contact is lost. What do you try?",
      choices: [
        ["Send a powerful ‘shout’ command telling it to turn back", true, "NASA used a big dish antenna to send a strong signal."],
        ["Wait for Voyager 2 to call home by itself", false, "It was scheduled to reset its pointing months later, but NASA didn’t want to wait."],
        ["Build a bigger antenna on Earth first", false, "That would take far too long."]],
      outcome: "In August 2023, NASA sent a powerful ‘shout’ command. Voyager 2 turned back toward Earth and contact was restored." },
    { real: true, title: "Power running low",
      setup: "Voyager 2’s nuclear power gets a little weaker every year. How do you keep it going as long as possible?",
      choices: [
        ["Switch off heaters and instruments one at a time to save power", true, "Careful choices keep it talking."],
        ["Keep everything on until it all stops", false, "Then the whole mission would end sooner."],
        ["Turn it all off and on again", false, "That wouldn’t make more power."]],
      outcome: "NASA has been switching off Voyager 2’s instruments one by one so it can keep talking to Earth." }
  ],
  newhorizons: [
    { real: false, title: "A very long trip",
      setup: "Your trip to Pluto will take about nine and a half years. How do you save power and wear on the spacecraft?",
      choices: [
        ["Put the spacecraft into hibernation for much of the trip", true, "It sleeps and checks in once a week."],
        ["Keep every instrument switched on the whole way", false, "That would waste power and wear parts out."],
        ["Fly slower to save fuel", false, "Slowing down would make the trip even longer."]],
      outcome: "New Horizons spent much of its journey in hibernation." },
    { real: true, title: "Trouble 10 days out",
      setup: "On July 4, 2015, just 10 days before reaching Pluto, New Horizons stops talking normally. Its computer was overloaded. What do you do?",
      choices: [
        ["Find the problem fast, then reload the flyby plan", true, "Quick, careful teamwork."],
        ["Cancel the Pluto flyby", false, "After nine and a half years? No way!"],
        ["Wait and hope it fixes itself", false, "There was no time to wait."]],
      outcome: "The team worked around the clock and had New Horizons back on track in about three days." },
    { real: true, title: "Camera or antenna?",
      setup: "During the flyby, New Horizons can’t point its cameras at Pluto and its antenna at Earth at the same time. What’s the plan?",
      choices: [
        ["Take all the pictures first, then send them home slowly over many months", true, "Science first, sending later."],
        ["Send each picture home right after taking it", false, "You’d miss most of the flyby while turning."],
        ["Take just one picture", false, "That would waste a once-in-a-lifetime visit."]],
      outcome: "It took about 16 months for all the flyby data to reach Earth." }
  ]
};

// Which log a machine calls its "best day" in message replies (index into its logs; default 1)
const BEST_LOG = { insight: 2, hubble: 3, magellan: 2, chandra: 3, spitzer: 3, kepler: 2, newhorizons: 3, mariner1: 4, apollo11: 2, surveyor3: 1 };
