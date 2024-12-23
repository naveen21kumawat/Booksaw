const express = require("express");
const app = express();
const port = 3000;
// const { Novels } = require("./conn.js");

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      id: 21,
      title: "Life of the Wild",
      description: `

Chapter 1: The Call of the Forest
Aryan, a young wildlife biologist, embarks on a journey to the Western Ghats to study an unusual pattern in animal migrations. His arrival at the forest is met with awe and unease, as the air feels charged with mystery.

Key Scene: Aryan spots a lone tiger near a riverbank at sunrise. The tiger stares at him briefly before vanishing into the dense foliage, leaving Aryan deeply moved and curious about the forest’s secrets.
Chapter 2: A New World
Aryan adjusts to life at the research station, meeting his diverse team. Tara, a local tracker, teaches him how to read the forest like a living book, using ancient knowledge passed down through generations.

Key Scene: Tara shows Aryan how to identify animal tracks and explains the "language" of the forest, such as the warning calls of birds and the shifting scent of the wind.
Chapter 3: Shadows in the Canopy
Strange phenomena begin to emerge—predators hunting during the day, unusual bird migrations, and unsettling noises at night. Aryan and Tara investigate and find signs of human interference.

Key Scene: The discovery of an abandoned campsite, where they find heavy tools, maps, and cryptic notes indicating illegal activities in the forest.
Chapter 4: Bonds of Survival
During an expedition, Aryan and Tara rescue an injured baby elephant caught in a poacher’s trap. They take it back to the station and care for it, forming a bond with the creature.

Key Scene: A heartfelt moment when the baby elephant playfully wraps its trunk around Aryan, signaling trust and connection.
Chapter 5: The Hidden Path
While tracking the elephant’s herd, Aryan and Tara stumble upon an untouched section of the forest filled with rare species and breathtaking sights.

Key Scene: They find a glowing river illuminated by bioluminescent algae under the moonlight, symbolizing the untouched beauty and resilience of nature.
Chapter 6: The Threat Within
Aryan learns of a corporation planning to exploit the forest for rare minerals. He uncovers evidence linking the abandoned campsite to the corporation and realizes the scale of the threat.

Key Scene: A tense confrontation with the company’s representative, who tries to bribe Aryan to stay silent, but Aryan refuses, determined to protect the forest.
Chapter 7: Echoes of the Wild
Natural disasters, including landslides and floods, devastate parts of the forest, highlighting the consequences of ecological disruption. Amid the chaos, Aryan is led by the baby elephant to a sacred grove.

Key Scene: In the sacred grove, Aryan has a spiritual experience, feeling the heartbeat of the forest and its plea for survival.
Chapter 8: The Final Stand
Aryan and Tara rally local villagers, environmental activists, and researchers to confront the corporation. The villagers’ knowledge and Aryan’s scientific evidence combine to form a powerful resistance.

Key Scene: A dramatic standoff as the corporation’s bulldozers approach, only to be halted when Aryan presents incriminating evidence to the media, forcing the company to withdraw.
Chapter 9: Harmony Restored
The forest begins to heal, and Aryan decides to stay, dedicating his life to its conservation. Tara emerges as a community leader, advocating for sustainable practices.

Key Scene: The baby elephant, now strong and healed, reunites with its herd, symbolizing hope and renewal.
Epilogue: The Wild Lives On
Years later, Aryan publishes a book about his journey, inspiring others to protect nature. The forest is now a thriving sanctuary, and Aryan reflects on its resilience.

Key Scene: The final scene shows Aryan sitting by the glowing river, watching the sunrise, feeling at peace with the wild.
      
      
      
      
      
      
      `,
      image: "images/main-banner1.jpg",
    },
    {
      id: 22,
      title: "Birds gonna be Happy",
      description: `Chapter 1: The Gift of Flight
Key Scene:
Lily, a 12-year-old girl, discovers that she can communicate with birds after a strange encounter with a crow. One morning, as she walks through the woods near her home, a crow lands on her shoulder and speaks to her in a voice only she can understand. The crow tells her that she is "the one chosen to listen." Lily's heart races with both excitement and fear, unsure of what this gift truly means.

Chapter 2: The Vanishing Birds
Key Scene:
Lily notices that the birds are slowly disappearing from her town. The once lively forests, full of chattering birds, are eerily silent. The weather turns unpredictable, and strange phenomena begin to occur—flowers start wilting, and the air feels heavy. Lily sees a flock of sparrows flying in a disorganized pattern, seemingly lost. She tries to communicate with them but gets no response, making her fear something is terribly wrong.

Chapter 3: The Curse of the Silent Skies
Key Scene:
Lily visits an old woman named Mabel who lives at the edge of the forest. Mabel reveals the ancient curse placed on the birds by an imbalance between nature and humankind. She tells Lily that the birds' disappearance is linked to the greed of humans, who have been taking too much from the earth without giving anything back. Mabel tells Lily that only someone with the "heart of the forest" can restore the balance, but it comes with a great sacrifice.

Chapter 4: The Journey Begins
Key Scene:
Lily, determined to find the birds and restore balance, sets off on a journey with her childhood friend, Marco. Marco, an eco-conscious boy, joins her on this quest, knowing that it’s the only way to save their town. They set out into the wilderness, leaving behind the familiar roads, and head toward the mountains where the last flock of magical birds might be hiding. Along the way, they meet Sarah, a quirky bird-watcher, who shares her knowledge of the birds' ancient ways.

Chapter 5: The Whispering Trees
Key Scene:
The group arrives at an ancient forest known as the Whispering Trees, where Lily feels a deep connection to the land. She realizes that the forest itself is alive, breathing, and communicating with her. The trees whisper secrets of the earth, and through them, Lily learns that the birds' disappearance is tied to the disruption of the forest's natural rhythm. As Lily sits under a massive oak tree, she has a vision of a great battle between nature and human greed that caused the curse.

Chapter 6: The Crow's Secret
Key Scene:
The mysterious crow from the beginning of Lily’s journey appears again, this time guiding her deeper into the forest. The crow reveals its true identity as a magical creature who was once a guardian of the forest. It shares that the birds’ magic can only be restored if Lily confronts a powerful figure—one of the humans who caused the imbalance by exploiting the land. The crow hints that the person Lily seeks may be someone she knows.

Chapter 7: The Heart of the Storm
Key Scene:
Lily and her companions arrive at the heart of the storm—an area plagued by destructive winds, flooded rivers, and scorched earth. This is where the curse was born. They discover a hidden sanctuary where the last remaining birds are held captive by a corporation that is draining the land of its resources. The company has been secretly capturing and caging the magical birds, using their energy to control the weather and manipulate the land.

Chapter 8: The Battle for Harmony
Key Scene:
Lily, Marco, Sarah, and the crow face off against the corporation’s leader, who reveals himself as an old acquaintance of Lily’s family. He is the one responsible for disturbing the balance, believing that controlling nature would lead to prosperity. In a tense confrontation, Lily uses her ability to communicate with the birds and the forest itself to rally the wildlife against the humans. The battle culminates in a powerful moment where the birds, once again, take to the skies in unison, breaking the corporation’s hold over the land.

Chapter 9: The Sacrifice of the Heart
Key Scene:
To restore balance completely, Lily is forced to make a great sacrifice. In a final act of love and devotion to the earth, she decides to give up her ability to communicate with the birds. As she releases her magical connection, the birds return to their natural state, and the skies are filled with their songs once again. Lily feels both sorrow and peace, understanding that the forest and its creatures now have the freedom to thrive on their own. She walks away from the forest, knowing her sacrifice has brought harmony back.

Chapter 10: A New Dawn
Key Scene:
The town returns to normal, with the skies clear and the birds filling the air once again. The weather becomes stable, and the plants begin to flourish. The town begins to adopt more sustainable practices, learning from the lessons that Lily’s journey taught them. As Lily stands by the river, she watches the birds soar, knowing that she helped restore harmony between humans and nature. Her heart feels lighter, and as the birds sing, she smiles, knowing the earth is happy once more.

Epilogue: The Song of the Birds
Key Scene:
Years later, Lily returns to the forest, now flourishing and full of life. She sees the birds flying overhead, and although she can no longer communicate with them, she feels a deep connection. As the seasons change, she realizes that the birds' song is a reminder that nature and humanity must live in harmony for the world to be happy.`,
      image: "images/main-banner2.jpg",
    },
  ]);
});

app.get("/featuredBooks", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      id: 101,
      image: "images/productitem1.jpg",
      description: `Chapter 1: Armor’s Morning Battle
Key Scenes:

Armor, a disciplined and reserved office worker, struggles with his daily routine.
He fixes his tie in the mirror, annoyed by its crookedness, symbolizing his inner need for control.
He meets his nosy neighbor, Mrs. Langley, who insists on giving him cookies despite his protests.
Chapter 2: Rasmay’s Chaotic World
Key Scenes:

Rasmay, a carefree artist, wakes up late to a messy apartment filled with half-finished canvases.
She frantically prepares for an art gallery deadline, spilling coffee on a painting in the process.
A phone call from her best friend reveals her habit of living on the edge but always pulling through.
Chapter 3: The Unexpected Meeting
Key Scenes:

Armor and Rasmay collide at a local coffee shop after Rasmay accidentally spills her drink on Armor’s suit.
Their personalities clash as Armor coldly brushes her off while Rasmay apologizes with playful sarcasm.
They part ways, thinking it’s the last they’ll see of each other.
Chapter 4: Life Goes On
Key Scenes:

Armor deals with an office crisis when a coworker sabotages a project.
Rasmay has a heartwarming moment when a child at the park praises her street art.
Both characters reflect on their paths, feeling a sense of disconnection from those around them.
Chapter 5: Crossing Paths Again
Key Scenes:

Armor attends a charity event hosted by his boss, only to find Rasmay as one of the featured artists.
Rasmay recognizes Armor and teases him, prompting an awkward yet honest conversation.
They start to realize they might have more in common than they thought.
Chapter 6: Small Steps
Key Scenes:

Armor agrees to visit Rasmay’s art studio, where he learns about her struggles and passions.
Rasmay gets a glimpse into Armor’s regimented life when she visits his meticulously organized apartment.
Both characters begin to appreciate each other’s perspectives.
Chapter 7: A Conflict of Worlds
Key Scenes:

Rasmay misses a scheduled meeting with Armor due to her chaotic nature, frustrating him.
Armor’s rigidity leads to an argument about their differing lifestyles.
They part ways, both questioning if their connection is worth pursuing.
Chapter 8: Quiet Reflections
Key Scenes:

Armor revisits the park and sees one of Rasmay’s murals, sparking a sense of longing.
Rasmay finds one of Armor’s neatly typed notes in her studio, reminding her of his influence.
Both characters realize their differences are what make their connection unique.
Chapter 9: Reconciliation
Key Scenes:

Armor shows up at Rasmay’s gallery opening, surprising her with a heartfelt apology.
Rasmay gifts Armor a small painting that captures his meticulous nature in an abstract way.
They agree to take things slow, learning from each other along the way.
Chapter 10: A New Balance
Key Scenes:

Armor loosens up by joining Rasmay in painting a mural, getting his hands messy for the first time.
Rasmay surprises Armor by organizing her studio (to some extent), showing her effort to adapt.
The story ends with the two sharing a quiet moment on a park bench, hinting at a blossoming relationship.
`,
      title: "Simple way of piece life",
      author: "Armor Ramsey",
      price: 899,
    },
    {
      id: 102,
      image: "images/product-item2.jpg",
      title: "Great travel at desert",
      author: "Sanchit Howdy",
      description: `
Chapter 1: The Call to the Desert
Key Scenes:

Sanchit Howdy, a passionate traveler and amateur cartographer, receives a mysterious letter from an old mentor urging him to explore the uncharted dunes of the Sahron Desert.
He prepares for the journey, packing his compass, journal, and a few keepsakes, while friends warn him of the desert’s dangers.
The chapter ends with Sanchit boarding a dusty caravan heading into the unknown.
Chapter 2: The First Stretch
Key Scenes:

Sanchit joins a group of nomads who teach him basic survival skills: finding water, navigating stars, and reading sand patterns.
A sandstorm strikes, forcing the group to take shelter under makeshift tarps, introducing the harsh reality of the desert.
The chapter ends with Sanchit marveling at the desert’s starry night sky, feeling both awe and fear.
Chapter 3: The Forgotten Oasis
Key Scenes:

Sanchit discovers an oasis that isn’t marked on any maps, raising questions about its origin.
He encounters an elderly storyteller who shares legends about hidden treasures and cursed lands deep within the desert.
The storyteller’s cryptic words, “Not all maps lead to gold,” intrigue Sanchit, pushing him to venture further.
Chapter 4: Mirage or Reality
Key Scenes:

Sanchit experiences hallucinations from dehydration, questioning what’s real and what’s imagined.
He narrowly escapes a herd of stampeding camels, guided by an enigmatic woman named Zara who claims to know the desert’s secrets.
Zara offers to guide him for a price, introducing tension and mystery.
Chapter 5: Trials of the Sun
Key Scenes:

The journey intensifies as Sanchit faces extreme heat, dwindling supplies, and treacherous terrain.
Zara challenges Sanchit’s motives, asking why he’s willing to risk everything for the desert.
They discover ancient carvings on a rock face, hinting at the existence of an ancient civilization.
Chapter 6: The Whispering Dunes
Key Scenes:

The duo traverses dunes that seem to "whisper" at night, unnerving Sanchit.
Zara reveals her own tragic past, tied to the desert’s mysteries, building a bond between the two.
They find a ruined caravan buried in the sand, uncovering old journals and artifacts.
Chapter 7: The Hidden Temple
Key Scenes:

Sanchit and Zara uncover a partially buried temple, believed to hold the secrets of the ancient civilization.
Inside, they find intricate murals depicting tales of greed, betrayal, and survival.
The temple starts to collapse due to shifting sands, forcing them to flee with only fragments of knowledge.
Chapter 8: Betrayal in the Sands
Key Scenes:

Zara reveals her true intentions, leading Sanchit into a trap orchestrated by treasure hunters.
Sanchit uses his wits and knowledge of the desert to escape, leaving Zara to face her own moral dilemma.
Alone, he reflects on trust and human nature, questioning if the journey was worth it.
Chapter 9: The Heart of the Desert
Key Scenes:

Sanchit stumbles upon the heart of the desert—a breathtaking, hidden valley filled with rare flora and a sparkling underground spring.
He documents the discovery in his journal, deciding not to share its exact location with the world.
Sanchit finds peace in the solitude, realizing the journey was as much about self-discovery as exploration.
Chapter 10: The Return Home
Key Scenes:

Sanchit retraces his steps, weathered but wiser, and bids farewell to the desert that changed him.
Back in his hometown, he publishes his findings, but omits the most precious secrets, preserving the desert’s mystique.
The story ends with Sanchit gazing at the horizon, wondering if another adventure awaits`,
      price:780,
    },
    {
      id: 103,
      image: "images/product-item3.jpg",
      title: "The lady beauty Scarlett",
      author: "Arthur Doyle",
      description: `Chapter 1: The Arrival of Scarlett
Key Scenes:

A small, picturesque English village is abuzz with rumors about the new arrival, Lady Scarlett—a widow with striking beauty and an air of mystery.
The local painter, Thomas Whitaker, catches his first glimpse of her as she steps off her carriage, dressed in elegant crimson.
Scarlett’s piercing gaze captivates Thomas, and he feels an irresistible urge to paint her portrait.
Chapter 2: Whispers in the Village
Key Scenes:

Gossip spreads about Scarlett’s past, with tales of a tragic love and a fortune left by her late husband.
Thomas gathers courage to visit Scarlett’s estate, offering to paint her portrait.
Scarlett agrees, her enigmatic smile leaving Thomas both excited and unsettled.
Chapter 3: The First Sitting
Key Scenes:

Scarlett’s poise and beauty mesmerize Thomas during the first portrait session, but her aloof demeanor piques his curiosity.
Scarlett shares cryptic details about her past, mentioning a love lost in mysterious circumstances.
Thomas begins to notice subtle hints of sadness behind her composed exterior.
Chapter 4: An Uninvited Guest
Key Scenes:

A dashing but arrogant nobleman, Lord Henry, arrives in the village, claiming to know Scarlett from her past.
Lord Henry’s presence unsettles Scarlett, and she seems torn between anger and fear.
Thomas overhears a tense argument between Scarlett and Lord Henry, further deepening the mystery around her.
Chapter 5: The Dance of Secrets
Key Scenes:

A grand ball is held at the village manor, with Scarlett as the guest of honor.
Scarlett’s dance with Thomas stirs emotions in him, but Lord Henry’s jealous gaze follows them.
Scarlett leaves the ball abruptly after receiving an ominous letter slipped into her hand.
Chapter 6: The Portrait Reveals
Key Scenes:

As Thomas nears completion of Scarlett’s portrait, he notices his painting captures something unexpected—a faint scar near her collarbone.
Scarlett reluctantly explains that the scar is from an incident tied to her husband’s death, which she implies wasn’t an accident.
Thomas realizes Scarlett is haunted by more than just grief.
Chapter 7: Lord Henry’s Ultimatum
Key Scenes:

Lord Henry confronts Scarlett, threatening to expose secrets from her past unless she leaves the village with him.
Scarlett refuses, showing a rare moment of vulnerability when she seeks Thomas’s help.
The bond between Scarlett and Thomas deepens, though he remains wary of the dangers she brings.
Chapter 8: A Hidden Truth
Key Scenes:

Thomas uncovers old letters in Scarlett’s estate that hint at a conspiracy involving her late husband and Lord Henry.
The letters reveal that Scarlett’s husband was betrayed by someone close to him, leading to his untimely demise.
Scarlett’s true reason for coming to the village is unveiled: she’s seeking justice for her husband.
Chapter 9: A Dangerous Confrontation
Key Scenes:

Scarlett confronts Lord Henry with the letters, but he counters with threats of his own, revealing he’s been manipulating events all along.
Thomas intervenes, challenging Lord Henry in a duel of wit and courage.
The confrontation ends with Lord Henry fleeing, his reputation in shambles.
Chapter 10: A New Beginning
Key Scenes:

Scarlett decides to stay in the village, finding solace in the company of Thomas and the newfound peace of mind.
The completed portrait of Scarlett is unveiled, symbolizing her transition from a life of secrets to one of honesty and hope.
The story ends with Scarlett and Thomas walking through the village together, hinting at the possibility of love and a brighter future.
`,
      price:500,
    },
    {
      id: 105,
      image: "images/product-item4.jpg",
      title: "Once upon a time",
      author: "Klien Marry",
      description: `Chapter 1: The Little Cottage in the Woods
Key Scenes:

Introduce Clara, a kind-hearted girl living in a quaint cottage at the edge of a mystical forest.
Clara dreams of adventures beyond her quiet life but feels bound by her responsibilities to care for her ailing grandmother.
One stormy evening, Clara finds a mysterious golden feather on her doorstep, glowing faintly.
Chapter 2: The Call to Adventure
Key Scenes:

A talking fox named Lory visits Clara, explaining that the golden feather belongs to the legendary Firebird, whose capture has thrown the forest into chaos.
Lory implores Clara to help restore balance by returning the feather to its rightful owner.
Clara hesitates but ultimately agrees, leaving her grandmother with a trusted neighbor.

Chapter 3: The Enchanted Forest
Key Scenes:

Clara and Lory venture into the enchanted forest, where trees whisper secrets, and paths shift like mazes.
They encounter mischievous sprites who try to steal the feather but are calmed when Clara offers them a tune on her grandmother's flute.
Clara’s courage begins to grow as she realizes her kindness can overcome obstacles.

Chapter 4: The Mysterious Stranger
Key Scenes:

Clara meets Elias, a wandering knight with a tarnished shield, who offers to guide them deeper into the forest.
Elias reveals he’s searching for redemption after failing to protect his kingdom from a great calamity.
The trio forms a tentative bond, sharing tales of hope and regret by the campfire.
Chapter 5: Trials of the Heart
Key Scenes:

The group faces their first major challenge: crossing a river guarded by a melancholic siren.
The siren tests Clara’s sincerity by luring her with visions of her happiest memories, tempting her to abandon the quest.
Clara resists, proving her determination, and the siren grants them safe passage.

Chapter 6: The Firebird’s Lair
Key Scenes:

They reach the heart of the forest, where the Firebird resides in a glowing, golden nest atop an ancient tree.
The forest seems alive, testing their resolve with illusions of their deepest fears.
Clara bravely climbs the tree, guided by the feather’s glow, while Elias and Lory fend off shadowy creatures below.
Chapter 7: The Truth Revealed

Key Scenes:

At the top of the tree, Clara discovers the Firebird is imprisoned by a cursed crown forged by a jealous sorcerer.
The feather is the key to breaking the curse, but doing so will extinguish the Firebird’s light, leaving the forest forever dark.
Clara hesitates, torn between freeing the Firebird and protecting the forest’s beauty.

Chapter 8: The Selfless Choice
Key Scenes:

Clara makes the selfless choice to sacrifice the feather, breaking the curse.
The Firebird is freed but transforms into a radiant phoenix, spreading its light across the forest one last time before flying away.
The forest begins to heal, blooming with new life, symbolizing rebirth and resilience.
Chapter 9: Farewell to the Forest
Key Scenes:

Clara and her companions return to the village, changed by their journey.
Elias decides to stay and protect the forest, finding his redemption in its recovery.
Lory bids Clara a tearful goodbye, promising to visit her whenever the wind carries his voice.

Chapter 10: Home Again
Key Scenes:

Clara returns to her grandmother, who miraculously recovers, hinting at the Firebird’s lingering magic.
Clara is now a storyteller, sharing tales of courage and selflessness with the village children.
The story ends with Clara looking out at the horizon, the golden feather now part of her grandmother’s flute, glowing faintly as if to say, “The journey continues.”
`,
      price:960,
    },
  ]);
});

app.get("/popularBooks", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      id:10,
      image: "images/tab-item5.jpg",
      title: "Peaceful Enlightment",
      author: "Marmik Lama",
      description: `Chapter 1: The Burdened Soul
Key Scenes:

Introduction to Arjun, a 35-year-old corporate worker living in a bustling city, feeling trapped in the monotony of his routine.
A growing sense of dissatisfaction and recurring dreams of tranquil mountains push him to question his life’s purpose.
Arjun stumbles upon an ancient, weathered book titled The Path to Peaceful Enlightenment in an old library, sparking his desire to explore the unknown.
Chapter 2: The Call to the Mountains
Key Scenes:

Inspired by the book, Arjun decides to leave his job and embark on a journey to the Himalayas in search of the mythical “Temple of Stillness.”
On the train ride to a remote Himalayan village, he meets Pema, a cheerful traveler with deep knowledge of Himalayan culture and spiritual practices.
Pema offers to guide Arjun, sharing stories of the mountains and the temple's legends.
Chapter 3: The Path of Trials
Key Scenes:

Arjun begins the trek through dense forests and rugged mountain paths, where he faces his first challenge: navigating a wild river.
He learns patience and trust as Pema shows him how to calm his mind and focus to cross the river safely.
This chapter emphasizes Arjun’s first steps toward mindfulness and resilience.
Chapter 4: The Hermit of the Cave
Key Scenes:

They encounter an elderly hermit meditating in a cave, who imparts cryptic wisdom: “To find peace, you must first lose yourself.”
The hermit gives Arjun a stone engraved with a lotus, symbolizing growth through adversity.
Arjun begins to reflect deeply on his attachments and fears, questioning the life he left behind.
Chapter 5: The Valley of Reflections
Key Scenes:

Arjun and Pema reach a tranquil valley with a crystal-clear lake, where the water reflects not just their appearances but their inner emotions.
As Arjun gazes into the lake, he is overwhelmed by visions of his past mistakes, regrets, and unfulfilled dreams.
Guided by Pema, Arjun confronts his guilt and forgives himself, marking a significant step in his emotional healing.
Chapter 6: The Temple of Stillness
Key Scenes:

After days of trekking, they arrive at the Temple of Stillness, perched on a cliff surrounded by swirling clouds.
Arjun meets Lama Dorje, the temple’s serene leader, who invites him to stay and learn the ways of inner peace.
Lama Dorje assigns Arjun simple yet profound tasks, like sweeping the temple courtyard and observing the play of sunlight on the stones, to teach mindfulness in everyday actions.
Chapter 7: The Silence Within
Key Scenes:

Arjun begins practicing meditation but struggles to quiet his restless thoughts.
Lama Dorje advises him to focus on his breath and accept his thoughts without judgment.
Over time, Arjun experiences his first moment of profound stillness, realizing that peace lies in the present moment, not in the past or future.
Chapter 8: The Weight of the Ego
Key Scenes:

Arjun participates in a temple ritual where monks release floating lanterns symbolizing the letting go of ego and attachments.
He writes his own fears and desires on a lantern and watches it drift into the sky, feeling a sense of liberation.
This act deepens his understanding of impermanence and the interconnectedness of all things.
Chapter 9: The Return Journey
Key Scenes:

After months at the temple, Lama Dorje tells Arjun that his journey of enlightenment must continue beyond the temple walls.
Pema accompanies him on the return trek, during which Arjun notices how the same paths and challenges now feel different to him—less daunting, more beautiful.
Arjun practices gratitude for the lessons he learned, vowing to carry the temple’s teachings into his daily life.
Chapter 10: A Peaceful Awakening
Key Scenes:

Back in the city, Arjun transforms his life: he simplifies his lifestyle, reconnects with loved ones, and begins teaching mindfulness to others.
The stone with the lotus engraving becomes a symbol of his journey, resting on his desk as a reminder of his growth.
The novel ends with Arjun sitting in a park at sunrise, meditating with a serene smile, as a breeze carries the scent of Himalayan flowers—a subtle nod to the peace he found within.
`,
      price:1200,
    },
    {
      id:11,
      image: "./images/tab-item6.jpg",
      title: "Great travel at desert",
      author: "Sanchit Howdy",
      description: `Chapter 1: The Call to the Desert
Key Scenes:

Sanchit Howdy, a passionate traveler and amateur cartographer, receives a mysterious letter from an old mentor urging him to explore the uncharted dunes of the Sahron Desert.
He prepares for the journey, packing his compass, journal, and a few keepsakes, while friends warn him of the desert’s dangers.
The chapter ends with Sanchit boarding a dusty caravan heading into the unknown.
Chapter 2: The First Stretch
Key Scenes:

Sanchit joins a group of nomads who teach him basic survival skills: finding water, navigating stars, and reading sand patterns.
A sandstorm strikes, forcing the group to take shelter under makeshift tarps, introducing the harsh reality of the desert.
The chapter ends with Sanchit marveling at the desert’s starry night sky, feeling both awe and fear.
Chapter 3: The Forgotten Oasis
Key Scenes:

Sanchit discovers an oasis that isn’t marked on any maps, raising questions about its origin.
He encounters an elderly storyteller who shares legends about hidden treasures and cursed lands deep within the desert.
The storyteller’s cryptic words, “Not all maps lead to gold,” intrigue Sanchit, pushing him to venture further.
Chapter 4: Mirage or Reality
Key Scenes:

Sanchit experiences hallucinations from dehydration, questioning what’s real and what’s imagined.
He narrowly escapes a herd of stampeding camels, guided by an enigmatic woman named Zara who claims to know the desert’s secrets.
Zara offers to guide him for a price, introducing tension and mystery.
Chapter 5: Trials of the Sun
Key Scenes:

The journey intensifies as Sanchit faces extreme heat, dwindling supplies, and treacherous terrain.
Zara challenges Sanchit’s motives, asking why he’s willing to risk everything for the desert.
They discover ancient carvings on a rock face, hinting at the existence of an ancient civilization.
Chapter 6: The Whispering Dunes
Key Scenes:

The duo traverses dunes that seem to "whisper" at night, unnerving Sanchit.
Zara reveals her own tragic past, tied to the desert’s mysteries, building a bond between the two.
They find a ruined caravan buried in the sand, uncovering old journals and artifacts.
Chapter 7: The Hidden Temple
Key Scenes:

Sanchit and Zara uncover a partially buried temple, believed to hold the secrets of the ancient civilization.
Inside, they find intricate murals depicting tales of greed, betrayal, and survival.
The temple starts to collapse due to shifting sands, forcing them to flee with only fragments of knowledge.
Chapter 8: Betrayal in the Sands
Key Scenes:

Zara reveals her true intentions, leading Sanchit into a trap orchestrated by treasure hunters.
Sanchit uses his wits and knowledge of the desert to escape, leaving Zara to face her own moral dilemma.
Alone, he reflects on trust and human nature, questioning if the journey was worth it.
Chapter 9: The Heart of the Desert
Key Scenes:

Sanchit stumbles upon the heart of the desert—a breathtaking, hidden valley filled with rare flora and a sparkling underground spring.
He documents the discovery in his journal, deciding not to share its exact location with the world.
Sanchit finds peace in the solitude, realizing the journey was as much about self-discovery as exploration.
Chapter 10: The Return Home
Key Scenes:

Sanchit retraces his steps, weathered but wiser, and bids farewell to the desert that changed him.
Back in his hometown, he publishes his findings, but omits the most precious secrets, preserving the desert’s mystique.
The story ends with Sanchit gazing at the horizon, wondering if another adventure awaits.
`,
      price:300,
    },
    {
      id:12,
      image: "images/tab-item7.jpg",
      title: "Life among the pirates",
      description: `Chapter 1: The Young Stowaway
Key Scenes:

Introduce Jack, a daring young orphan who dreams of life beyond his coastal village.
Jack sneaks aboard a merchant ship bound for the Caribbean, hoping for adventure.
The ship is attacked by the infamous pirate crew of the Crimson Tide. Jack is discovered and taken aboard as a prisoner.
Chapter 2: Welcome to the Crimson Tide
Key Scenes:

The pirate captain, Hector “Blackfang” Reynolds, spares Jack’s life after recognizing his resourcefulness during the attack.
Jack is reluctantly welcomed into the crew as a cabin boy, tasked with menial chores and enduring the crew’s hazing.
Jack befriends a kind but mysterious pirate, Marlow, who teaches him basic survival skills.
Chapter 3: Blood and Booty
Key Scenes:

The Crimson Tide raids a Spanish galleon, showcasing the brutal yet strategic life of pirates.
Jack witnesses the harsh realities of piracy—treachery, greed, and fleeting alliances.
Amid the chaos, Jack saves Marlow’s life, earning his trust and the crew’s grudging respect.
Chapter 4: The Pirate Code
Key Scenes:

Captain Blackfang explains the pirate code to Jack, emphasizing loyalty and equality among the crew but with harsh punishments for betrayal.
Jack learns the crew’s motto: “Freedom above all.”
Jack begins to see the pirates as more than ruthless criminals—they’re outcasts seeking freedom from oppressive rulers.
Chapter 5: The Treasure Map
Key Scenes:

The crew discovers a cryptic treasure map among the galleon’s spoils, sparking excitement and tension.
Marlow reveals his knowledge of ancient maritime legends and helps interpret the map.
Jack uncovers clues suggesting the treasure may be cursed, but his warnings are ignored.
Chapter 6: Storms and Mutiny
Key Scenes:

A fierce storm tests the crew’s resilience as they navigate treacherous waters toward the treasure’s location.
Dissatisfaction with Blackfang’s leadership grows, leading to a mutiny attempt led by the first mate, Briggs.
Jack plays a pivotal role in thwarting the mutiny, earning Blackfang’s favor.
Chapter 7: The Island of Shadows
Key Scenes:

The Crimson Tide arrives at the mysterious island marked on the map, shrouded in fog and legends of danger.
The crew ventures inland, facing booby traps and hostile wildlife, which fuel fears of the curse.
Jack discovers an ancient artifact that seems tied to the treasure’s location, deepening the mystery.
Chapter 8: The Treasure’s Curse
Key Scenes:

The crew uncovers the treasure—a hoard of gold, jewels, and an ominous-looking chest sealed with strange markings.
Greed overtakes the crew, leading to arguments and violence as they divide the spoils.
When the chest is opened, it triggers a series of misfortunes, convincing some that the curse is real.
Chapter 9: A Captain’s Betrayal
Key Scenes:

Blackfang’s ruthless side emerges as he plots to abandon some of the crew and take the majority of the treasure for himself.
Jack and Marlow discover Blackfang’s plan and rally the loyal crew members to stand against him.
A climactic showdown occurs, with Jack playing a key role in defeating Blackfang and taking leadership of the remaining crew.
Chapter 10: Freedom’s Horizon
Key Scenes:

With Blackfang defeated, the crew votes Marlow as the new captain, and Jack becomes his trusted first mate.
The treasure is used to repair the ship and establish a safe haven for the crew, fulfilling their dream of freedom.
The story ends with Jack gazing at the horizon, the Crimson Tide sailing toward new adventures, and the promise of a brighter future.
`,
      author: "David Woodard",
      price: 200,
    },
    {
      id:13,
      image: "images/tab-item8.jpg",
      title: "Simple way of piece life",
      author: "Armor Ramsey",
      description: `Chapter 1: The Restless Beginning
Key Scenes:

Introduction to Thomas, a middle-aged man overwhelmed by the demands of his high-pressure corporate job and strained personal life.
A health scare forces Thomas to reevaluate his priorities.
During a visit to a quiet park, he meets Eliza, an elderly woman tending to a small garden, who shares her philosophy of “living simply to live fully.”
Chapter 2: Letting Go of Excess
Key Scenes:

Inspired by Eliza, Thomas decides to declutter his home, starting with his overflowing closet and unused possessions.
As he clears physical clutter, he begins to notice the mental clarity it brings.
A poignant moment occurs when he finds an old photo of his family, reminding him of the happiness he once felt in simpler times.
Chapter 3: The Art of Slowing Down
Key Scenes:

Eliza teaches Thomas to appreciate the present moment by focusing on everyday activities like brewing tea or walking barefoot on grass.
Thomas struggles at first, battling the urge to multitask, but gradually starts enjoying these small rituals.
He journals his thoughts for the first time, realizing the therapeutic value of reflection.
Chapter 4: Building Connections
Key Scenes:

Thomas reconnects with his estranged sister, Anna, during a quiet weekend retreat.
They reminisce about their childhood, particularly the simple joys they shared, like stargazing and climbing trees.
This chapter emphasizes the healing power of relationships and shared memories.
Chapter 5: Nature’s Embrace
Key Scenes:

Thomas embarks on a solo trip to the countryside, camping by a serene lake surrounded by mountains.
He experiences the calming effects of nature, listening to birdsong and watching the sunrise.
A powerful moment occurs when he observes a caterpillar transforming into a butterfly, symbolizing his own journey.
Chapter 6: Simplicity in Action
Key Scenes:

Back home, Thomas adopts a minimalist lifestyle—cooking simple meals, reducing his digital distractions, and prioritizing meaningful activities.
He volunteers at a local community garden, finding joy in nurturing plants and connecting with neighbors.
Thomas begins to notice an improvement in his mental health and overall happiness.
Chapter 7: The Wisdom of Eliza
Key Scenes:

Eliza shares her life story, revealing that she once lived a fast-paced life as a successful businesswoman but chose simplicity after losing her husband unexpectedly.
Her story inspires Thomas to fully commit to his new path.
She offers him a parting gift: a handwritten journal with quotes and reflections about living peacefully.
Chapter 8: Challenges of Simplicity
Key Scenes:

Thomas faces criticism from friends and colleagues who don’t understand his lifestyle changes.
He struggles with moments of doubt, especially when financial insecurities and societal pressures resurface.
Thomas finds strength in his newfound inner peace and the supportive relationships he’s built.
Chapter 9: Sharing the Philosophy
Key Scenes:

Thomas starts a blog titled The Simple Way, sharing his journey and tips for simplifying life.
He gains a small but loyal readership, including people inspired to make positive changes in their own lives.
Through storytelling, Thomas discovers a new sense of purpose.
Chapter 10: A Peaceful Legacy
Key Scenes:

Years later, Thomas continues living his simple, fulfilling life, surrounded by nature and loved ones.
He mentors young people who feel lost in the chaos of modern life, passing on Eliza’s wisdom.
The story ends with Thomas planting a tree in the park where he first met Eliza, a symbol of growth, peace, and enduring simplicity.
`,
      price:400,
    },
  ]);
});
app.get("/BestSellingBooks", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      author: "By Timbur Hood",
      bookName: "Birds gonna be happy",
      desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit  Sed eu feugiat amet, libero ipsum enim pharetra hac.",
      price: " $ 49.00 ",
    },
  ]);
});
app.get("/blogs", async (req, res) => {
  // let data = await Novels.find();
  res.json([
    {
      id: 1,
      image: "images/post-img1.jpg",
      description: "  Reading books always makes the moments happy",
      date: "Mar 30, 2021",
      categorie: "inspiration",
    },
    {
      id: 2,
      image: "images/post-img2.jpg",
      description: "  Reading books always makes the moments happy",
      date: "Mar 30, 2021",
      categorie: "inspiration",
    },
    {
      id: 3,
      image: "images/post-img3.jpg",
      description: "Reading books always makes the moments happy",
      date: "Mar 30, 2021",
      categorie: "inspiration",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
