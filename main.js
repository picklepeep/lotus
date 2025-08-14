//import {InputSpinner} from "./src/InputSpinner.js";
// make sure ability is the default tab
document.getElementById("defaultOpen").click();

const powersjson = {
  "aspect": {
    "0": {
      "title": "Cosmopolitan",
      "description": "Speak any worldly language.",
      "example": "Speak ASL, the True Tongue of Heaven, or a particular family's idiolect.",
      "example_desert": ""
    },
    "1": {
      "title": "Dauntless",
      "description": "Miraculously win against a mundane action that defeated you previously in the same scene. The opponent is allowed to escalate and \"get serious\" to pull ahead again, but this only works for them once - Dauntless will only let you lose the same mundane conflict twice.",
      "example": "After being badly beaten in a swordfight (understandable, since you've never held a sword before), grit your teeth, refine your stance, and come back to win. Set a hard limit of \"twice\" for how often you can be fooled by a series of tricky riddles.",
      "example_desert": ""    
    },
    "2": {
      "title": "Untiring",
      "description": "You don\'t really get tired and heal remarkably quickly, recovering 3 Wear per chapter. Unlike the Revenant Rite, you don't need to actively play this out.",
      "example": "Shake off a sprained ankle, be unfazed by a long day at work.",
      "example_desert": ""
    },
    "3": {
      "title": "Grace",
      "description": "Makes it easy to act as you wish to act. Have high end physical conditioning and be lucid, calm and flexible even in stressful or unpleasant situations. Be neatly groomed even in impossible ones.",
      "example": "Being clean, fresh and calm during an artillery bombardment. Getting up and starting work simply because you will it. Doing an entirely unecessary backflip onto a couch while answering the phone. Having olympic-level athleticism despite never exercising.",
      "example_desert": ""
    },
    "4": {
      "title": "Flair",
      "description": "Add 4 your Ability instead of taking Wear. Included by default in any 4+ Aspect action that relies on or enhances a mundane action.",
      "example": "With 0 Ability, comfortably hold down an office job. With 6 Ability, readily lead a large organization through a crisis. With Ability 7, casually write great literature in your spare time.",
      "example_desert": ""
    },
    "5": {
      "title": "Perfection",
      "description": "You perform actions \"perfectly\". They have flawless timing, usually granting 3 Edge, and are fast, graceful and skillful enough to compete with miracles.",
      "example": "Stroll casually across a busy highway. Arrive at court \"just in time\". Parry a miraculous death-ray with a baseball bat. Use pure mental discipline to rapidly remap your memories and foil a memory altering miracle.",
      "example_desert": ""
    },
    "6": {
      "title": "Determination",
      "description": "Have the strength of a bear, mental speed of a computer, and the equivalent for every other capacity.",
      "example": "Throw a car, track someone by scent, run on the heads of a crowd, punch out giants, perform rapid scenario analysis.",
      "example_desert": ""
    },
    "7": {
      "title": "Conviction",
      "description": "Low-fantasy control over your body and mind - doing stuff <i>in the spirit</i> of what humans can do, even if it could never happen in real life.",
      "example": "Raise your body temp enough to start a fire, sing two lines of a song at once, deliberately forget something, blow icy air on a drink, perfectly imitate a modem or a wolf call, exert your full strength through a fingertip or your hair.",
      "example_desert": ""
    },
    "8": {
      "title": "Practice",
      "description": "With time, learn a low-fantasy or cinematic technique.",
      "example": "Learn to ricochet bullets around corners. Learn to ride an umbrella around on windy days. Learn to cook meals that heal minor injuries. Learn to play music so sweet that it brings birds down from the sky and water up from the river.",
      "example_desert": ""
    }
  },
  "domain": {
      "0": {
        "title": "Estate-Driven Divination",
        "description": "Know when your Estate is in trouble.",
        "example": "",
      "example_desert": ""
      },
      "1": {
        "title": "Divination",
        "description": "Get information about your Estate.",
        "example": "Read someone's fears, how brave they're feeling, and know if there's something they'd fight for.",
      "example_desert": "Get details on a desert - size, average rainfall, local flora and fauna - including locations thereof, soil composition, weather over the course of the day, etc."
      },
      "2": {
        "title": "Ghost Miracle",
        "description": "Create Estate-based SFX and illusions, minor versions of the other powers in Domain. Always has low narrative consequence, but useful for duels, looking cool, and impressing the power of the divine on mortals.",
        "example": "Fill people with a passing resolve, fear or hesitation - the sense that facing some fear is possible or impossible, even if stopping to think about it even for a moment makes them realize that's not true.",
      "example_desert": "Create a sudden, harmless rush of sandy desert air, give someone chills or sweats. Make the world around you evocative of the desert, even if someone can blink and realise that that everything is normal."
      },
      "3": {
        "title": "Conversation",
        "description": "Speak directly to things of your Estate, and be considered worth listening to. Get small beneficial coincidences that could be written off by outside observers.",
        "example": "Speak directly to the valor in someone's heart regardless of conditions that would otherwise prevent it, like them not being able to hear you or not wanting to listen.",
      "example_desert": "Have desert spirits perform small favors: find water just as you announce you will, walk easily across sand even as others struggle, pick up a cactus without getting spines stuck in you."
      },
      "4": {
        "title": "Preservation",
        "description": "Protect or strengthen your Estate.",
      "example": "Stoke the valor someone already possesses. Make a pretty worthy thing shine with glorious righteousness. Make someone's valor striking or notable to others. Defeat supernatural fear and mental corruption.",
      "example_desert": "Make a dry patch of ground or a child’s sandbox into a small desert. Intensify heat, cold, or dryness to extreme desert-like levels. Cause the desert to reclaim a golf course that has been built over it. Strengthen a sandstorm. Turn a grain of sand into a boulder."
      },
      "5": {
        "title": "Animation",
        "description": "Make your Estate act.",
        "example": "Surround yourself with an aura of valor that repels those of unsure purpose. Temporarily transfer valor between people, or concentrate it within a group of people. Make someone’s valor manifest physically, and keep going even when their body is too worn out or injured to go on. Change the “orientation” of someone’s valor so that they bravely apply for a job instead of bravely getting into an online argument.",
      "example_desert": "Protect yourself from any harm that the desert could cause. Create barriers of sand, or mobile sand whips that you can control with Ability/Aspect. Create a building out of desert material. Create sandstorms, cause the desert to encroach on nearby terrain, make servitors out of “desert stuff” and have them do things."
      },
      "6": {
        "title": "Creation",
        "description": "Create instances of your Estate, or summon an existing one.",
        "example": "Create valor in those who lack it. Summon capable valor spirits, or a deeply valorous person. Give a computer the valor it needs to defeat a virus. Issue someone a righteous quest of your choosing, or make an existing mission or job into something valorous. Fill a panicking, collapsing house with the valor to hold itself together long enough for someone to be evacuated.  Give someone a quixotic sense of valor for charging a semi-truck head on.",
      "example_desert": "Create a small (neighborhood-size or smaller) desert. Arbitrarily create heat, cold, and dryness. Summon a potent desert spirit, or make a specific desert spiritually present."
      },
      "7": {
        "title": "Motion",
        "description": "Subtly change the location, destiny or context of your Estate locally.",
        "example": "Declare that valor will find a way to protect a friend from harm. Declare that a valorous quest will result in you finding cool treasure. Declare that a mecha can be powered by its pilot’s valorous heart. Declare that a task will draw a valorous soul to attempt it. Take a righteous cause away from someone and give it to someone else. Declare that New York city should have a special medal to award you for your valorous deeds.",
      "example_desert": "Change a section of a hot desert into a cold one, and vice versa. Declare that, contrary to expectations, a particular section of desert is a really great place to farm peaches. Declare that a section of desert will host a music festival. Declare that the desert will protect someone from harm. Declare that Paris has always had a small desert in it. Declare that you are in a different location in a desert from that which you appeared to be. Declare that you own all the sand in the desert, and can charge people when they walk away with it in their shoes."
      }
    },
  "persona": {
    "0": {
      "title": "Shine",
      "description": "Actions taken by others for you, or your behalf, or in service or your plans/ideology gain +1 Ability.",
      "example": "Baristas always put extra effort into your coffee. Soldiers under your command fight a little more effectively. If you've decreed that everyone in the Chancel has to have a tree in their house, they all get a little better at tree care.",
      "example_desert": ""
    },
    "1": {
      "title": "The Sight",
      "description": "See your Estate\'s impacts on the world. It's a binary toggle that you can turn on or off, but leaving it on makes it harder to notice ordinary stuff.",
      "example": "Instinctually recognize the brave, the cowardly, and those who desperately need help. See that someone is a knight, even in disguise.",
      "example_desert": "Recognize whether someone lives or has lived in a desert. Perceive how much \"desert nature\" a place has, instinctually know, e.g. how long since it last rained."
    },
    "2": {
      "title": "Ghost Miracle",
        "description": "Create Estate-based SFX and illusions, minor versions of the other powers in Persona. Always has low narrative consequence, but useful for duels, looking cool, and impressing the power of the divine on mortals.",
      "example": "Make yourself or someone else seem obviously valorous, even if you can shake off that sense easily. Create the stirring but ephemeral sense that someone belongs on a quest or as part of a cause.",
      "example_desert": "Have your eyes flash with the fury of a desert sandstorm. Create the fragile sense that you are surrounded by a desert version of your locality. Fill someone with the horrifying (but inaccurate) sense that their body is dissolving into sand."
    },
    "3": {
      "title": "Incarnation",
      "description": "Be with an instance of your Estate, or someone experiencing your Estate, in the same region. Have an easier time relating to them from there on out.",
      "example": "Be present with someone experiencing valor, or in the shared spirit of a valor-filled experience, like a battle.",
      "example_desert": "Experience life as if you were a particular desert, or with someone experiencing the desert."
    },
    "4": {
      "title": "Emulation",
      "description": "Apply your Estate\'s properties to yourself as Geasa, typically to support a single action.",
      "example": "The Power of Horses can carry great burdens, be swift as the wind, power up by eating oats, and make themselves freak out, in the event that that ever becomes relevant.<br>The Power of Dark Matter can make themselves impossible to study or observe, make their existence deeply troubling to others, continue to exist even in the face of obliteration - so long as signs of them yet exist, and have at least a partial answer for any unfathomable mysteries you pose them.",
      "example_desert": ""
    },
    "5": {
      "title": "Embodiment",
      "description": "Seek out new powers appropriate to your role as whatever you're Power of.",
      "example": "If you're a valorous knight, but your powers don't give you any tools for pulling swords from stones or defeating dark knights, go seek them out!",
      "example_desert": ""
    },
    "6": {
      "title": "Enchantment",
      "description": "Apply your Estate\'s properties or nature to anything (objects, people, statements, feelings, etc) locally as a glamor.",
      "example": "The Power of Horses can inflict terrible physical or emotional burdens, make others swift as the wind or blow at gale forces, make a knife freak out whenever anyone tries to use it, and fill their car up with oats instead of gasoline. <br>The Power of Dark Matter can hide things incredible well, declare that someone's birthday party is highly illegal, parlay highly dubious Nessie sightings into an actual real life Nessie, and thwart the efforts of others to gain a complete understanding of mysteries.<br><br>For you, turn mere bravery, duty or resigned action into valor. Enchant a secret such that revealing it becomes a deeply cowardly act. Make a teddy bear into something that will help a child face their fears. Make a bouquet of flowers firm in the face of danger so that you can beat an assailant to death with it. Make someone the kind of person who respects valor.",
      "example_desert": "The Power of Horses can inflict terrible physical or emotional burdens, make others swift as the wind or blow at gale forces, make a knife freak out whenever anyone tries to use it, and fill their car up with oats instead of gasoline. <br>The Power of Dark Matter can hide things incredible well, declare that someone's birthday party is highly illegal, parlay highly dubious Nessie sightings into an actual real life Nessie, and thwart the efforts of others to gain a complete understanding of mysteries.<br><br>For you, make a TV show a documentary about deserts. Turn a European fox into a desert fox. Turn a person to sand for a scene, though in a way where they retain their life and consciousness. Make a parking lot deserted for a clandestine meeting. Turn someone's words to sand in their mouth. Give someone a dry sense of humor."
    },
    "7": {
      "title": "Binding",
      "description": "Bring something into the story of your Estate - grant fates, make someone or something important to your Estate, bestow minor powers.",
      "example": "Declare that someone will go on a quest and grow in valor along the way. Turn someone into a soldier or a knight. Make someone a shining exemplar of valor, with special powers that arise from the strength of their heart. Declare that someone will be killed by valor. Declare that a gate will only allow the valorous to pass through it. Declare that a battle-standard will bring valor to those nearby.",
      "example_desert": "Curse someone to wander the desert for 40 days and 40 nights. Make it so that someone will never be rained on again. Make someone a champion of desert ecosystems. Declare that it’s someone’s destiny to drown in loose sand, and then watch as they do. Declare that someone’s true home is in Arizona, and let fate carry them there. Make something well adapted to life in the desert. Create a keystone that gradually turns the area around it to desert. Make a desert fox into the supernatural protector of an area, which ends up giving them shapeshifting and magical heat-based powers."
    },
    "8": {
    "title": "Sacrifice",
    "description": "Remove your Estate's nature from something, with low control over what it becomes as a result. Alternately, exempt it from one of your Estate properties.",
    "example": "The Power of Horses can relieve a bridge's burdens, semi-inadvertantly causing the cars driving over it to plummet into the river below. They can cause someone to not sweat the small stuff, remove the wind's wind-swiftness (making it still, I guess?), and make oats something that causes lethargy and weakness.<br>The Power of Dark Matter can reveal the hidden or study something that would otherwise by impossible to study. They can shut down the potential existence of any roaming urban legends, make every known legal code suggest that a fireworks store should be set up on the corner in time for the holidays, or gain extremely complete answers to highly fathomable mysteries.",
    "example_deserts": ""
  }
  },
  "flore": {
    "0": {
      "title": "Connection",
      "description": "Know when your Treasures are in danger or trying to reach you.",
      "example": "Know when someone is trying to steal your Sacred Grail. Feel the frantic, repeated calls of a treasured child, even though you don't have your phone.",
      "example_desert": ""
    },
    "1": {
      "title": "Projection",
      "description": "Visit your Treasures in the same region through dreams or a trance, perceive <i>their</i> dreams and sense what they sense. Lend them your powers/skills and grant limited mobility if normally immobile. You can perform - and are vulnerable to - miracles at your Treasure's location.",
      "example": "Guide your Mercedes Alsvidur through the Interchange of Tears. Spend your days adventuring and your nights in a high-stakes negotiations by riding shotgun in your servant's head.",
      "example_desert": ""
    },
    "2": {
      "title": "Administration",
      "description": "Visit your Treasures in the same region while awake, sense what they sense. You can perform - and are vulnerable to - miracles at your Treasure's location.",
      "example": "Make sure that your student is actually studying.",
      "example_desert": ""
    },
    "3": {
      "title": "Guidance",
      "description": "Provide subtle aid to your Treasures, or grant yourself or someone else high-level professional competence (and often Edge) using a Treasure that you might not have otherwise.",
      "example": "After ghost walking (with Projection) into your friend's job interview, you talk them through it. Using your Celestial Paintbrush to give yourself an edge against a mortal painter.",
      "example_desert": ""
    },
    "4": {
      "title": "Glorification",
      "description": "Awaken a Treasure's signature power at a low-fantasy or cinematic level, granting it or its user the ability to use that power with their actions.",
      "example": "Awakening the power of your Four-Winds fan, so that you can blow wind at something. Activating your employee's telekinetic powers, so that they rescue a cat from a tree. Switching on the \"Analogue Mode\" mode of your Cinematic Hacking Program, so that you can hack a file cabinet. Granting they key agents of your Spy Agency supernatural stealth.",
      "example_desert": ""
    },
    "5": {
      "title": "Ignition",
      "description": "Treasures compete with miracles and gain unfair advantages against mundane action (typically 3 Edge).",
      "example": "Defeat a gang of mafia goons with your whiffle bat. Use your Cinematic Hacking Program to defeat a miraculous computer virus. Tangle up a Fallen Angel in your fishing line.",
      "example_desert": ""
    },
    "6": {
      "title": "Trust",
      "description": "Your Treasure rushes to your side from within the same region when you need them. Additionally, they can (with your OOC permission) activate Glorification and Ignition on their own at any time.",
      "example": "While at court, summon your magic baseball bat and knock the opposing counsel's evidence off over the horizon. Allow your employee to use their telekinetic powers even when they're not on the clock. Your incredibly athletic bodyguard pushes you out of the way of a falling stone.",
      "example_desert": ""
    },
    "7": {
      "title": "Design",
      "description": "Create, modify or repair artifacts - these can have permanent mundane magical effects.",
      "example": "Fix a computer. Create a sacred egg containing a ritually pure child. Forge a magic sword. Make a fabulous scintillating cloak.",
      "example_desert": ""
    },
    "8": {
      "title": "Divine Plan",
      "description": "Create a long-term plan for a Treasure to accomplish a course of action using its skills and power.",
      "example": "Appoint your friend to reform your Chancel's economic system. Assign your treasured scientists to build a machine that can reverse gravity. Declare that, with enough time, your treasured fishing rod will be able to fish up a special fish that will cure someone's illness.",
      "example_desert": ""
    }
},
  "ability": {
    "0": {
      "title": "Fail",
      "description": "Just give up.",
      "example": "",
      "example_desert": ""
    },
    "1": {
      "title": "Well-Met",
      "description": "In good circumstances, keep your life together.",
      "example": "",
      "example_desert": ""
    },
    "2": {
      "title": "Function",
      "description": "Perform basic tasks.",
      "example": "",
      "example_desert": ""
    },
    "3": {
      "title": "Focus",
      "description": "Pay attention.",
      "example": "",
      "example_desert": ""
    },
    "4": {
      "title": "Expertise",
      "description": "Do everyday work that falls within your competencies.",
      "example": "",
      "example_desert": ""
    },
    "5": {
      "title": "Steel",
      "description": "Do unpleasant or unfamiliar work.",
      "example": "",
      "example_desert": ""
    },
    "6": {
      "title": "Organization",
      "description": "Bring diligence, attention and organization to bear.",
      "example": "",
      "example_desert": ""
    },
    "7": {
      "title": "Flow",
      "description": "Be in a flow state, operate at your personal best.",
      "example": "",
      "example_desert": ""
    },
    "8": {
      "title": "Study Up",
      "description": "Learn a new mundane skill.",
      "example": "",
      "example_desert": ""
    }
  }
};

const greaterpowersjson = {
  "aspect": {
    "4": {
      "title": "Greater Cosmopolitan",
      "description": "Be received by a culture in the way you would back home. With a few hours, function in a place as a native to the general area would.",
      "example": "If considered beautiful in New York, be likewise in Octopus World. Successfully enacting New York politeness in the South.",
      "example_desert": ""
    },
    "5": {
      "title": "Greater Dauntless",
      "description": "Act in spite of fear, pain and potential for future discomfort.",
      "example": "Stick your hand into molten lava, ignore the fact that your legs are broken, resist an Excrucian's fear-based attack.",
      "example_desert": ""
    },
    "6": {
      "title": "Greater Untiring",
      "description": "Go without basic needs indefinitely.",
      "example": "Go without food or sleep for a month, run at a steady pace for a year, survive on sheer spite as you fly through the vacuum of space.",
      "example_desert": ""
    },
    "7": {
      "title": "Greater Grace",
      "description": "Become exceptionally graceful and fluid in body and mind.",
      "example": "Land safely on your feet after falling off a tall building, perform 50 meter leaps, run on the crest of waves, balance on a thread, choose not to feel sad, decide not to worry about Lord Entropy.",
      "example_desert": ""
    },
    "8": {
      "title": "Greater Flair",
      "description": "Gain temporary mastery in any mortal skill.",
      "example": "Become a world-class surgeon. Become a world-class rally driver. Become world-class at performing surgery while rally-driving.",
      "example_desert": ""
    },
    "9": {
      "title": "Greater Perfection",
      "description": "A mundane action you perform becomes miraculous, automatically defeating mundane opposition. Includes Greater Flair by default. Alternately, deploy an \"aura\" Technique (obtained through <b>Practice</b> or a Bond) with Ability 9.",
      "example": "Win a baking competition with no experience at baking. Sweep away a field of lesser enemies. Deploy an aura of swords or all-healing light.",
      "example_desert": ""
    },
    "10": {
      "title": "Greater Determination",
      "description": "One of your physical or mental capacities becomes effectively unlimited - it is sufficient to whatever you need to do.",
      "example": "Outrun a bullet train. Memorize an entire library in a single night. Grind a stone wall to powder. Punch someone through the Earth's crust. Break NSA encryption with mental math. With a good vantage point, observe a meeting taking place a hundred miles away.",
      "example_desert": ""
    },
    "11": {
      "title": "Greater Conviction",
      "description": "Perform actions that are not strictly possible - but which make conceptual sense.",
      "example": "Drag a character out of a movie, pluck a star from the sky, knock off someone's hat with a glare, surf on a soundwave, hide a building behind your back, put a mountain in your pocket, drink a lake, catch a lightning bolt, take down a blimp with a hatpin, shorten a road by picking it up and shaking it straight.",
      "example_desert": ""
    },
    "12": {
      "title": "Greater Practice",
      "description": "Train yourself to regularly perform an action from Greater Determination or Greater Conviction for the rest of the story, as an Extraordinary Technique.",
      "example": "Learn to shoot down The Sun with an arrow (Epic). Learn the trick of writing a thick book every night, so that you can reconstruct a lost library from memory. Mastering the ability to walk through walls without dematerializing.",
      "example_desert": ""
  }
  },
  "ability": {
    "4": {
      "title": "Greater Fail",
      "description": "Declare that something is impossible for you.",
      "example": "",
      "example_desert": ""
    },
    "5": {
      "title": "Greater Well-Met",
      "description": "Keep your life together in difficult circumstances.",
      "example": "",
      "example_desert": ""
    },
    "6": {
      "title": "Greater Function",
      "description": "Get a basic task done \"just right\".",
      "example": "",
      "example_desert": ""
    },
    "7": {
      "title": "Greater Focus",
      "description": "Pay close attention - gain sharp insights and maintain focus in distracting or confusing situations.",
      "example": "",
      "example_desert": ""
    },
    "8": {
      "title": "Greater Expertise",
      "description": "Stunning but conventional work within your field of expertise.",
      "example": "",
      "example_desert": ""
    },
    "9": {
      "title": "Greater Steel",
      "description": "Stunning work that's outside of your comfort zone, pushing on despite injury or serious hardship.",
      "example": "",
      "example_desert": ""
    },
    "10": {
      "title": "Greater Organization",
      "description": "Weather major life transitions, exhibit leadership, have awe-inspiring competence.",
      "example": "",
      "example_desert": ""
    },
    "11": {
      "title": "Greater Flow",
      "description": "Legendary professional achievements, hysterical strength and powering through extreme pain.",
      "example": "",
      "example_desert": ""
    },
    "12": {
      "title": "Greater Study Up",
      "description": "Learn a new magical skill, or learn to access a narrow level 8-11 Ability effect on demand.",
      "example": "",
      "example_desert": ""
    }
  },
  "domain": {
    "4": {
      "title": "Greater Estate-Driven Divination",
      "description": "Know the nature of danger to your Estate.",
      "example": "Know that Coriander Hasp is up to some bullshit.",
      "example_desert": ""
    },
    "5": {
      "title": "Greater Divination",
      "description": "Use Estate to gather information generally, or foretell the future to a limited extent.",
      "example": "Dispatch the very concept of valor to bravely seek information on your behalf.",
      "example_desert": "Conjure heady visions of distant events or even the future."
    },
    "6": {
      "title": "Greater Ghost Miracle",
      "description": "Create virtually any Estate-based effects you like as a Phantasmagorical effect. Might turn out to have been real if the narrative impact is low, otherwise remembered as a coincidence, dream, religious ecstasy, etc.",
      "example": "Fill a mortal with the valor they need to accomplish a task, safe in the knowledge that they'll attribute their altered mental state to mundane causes the next day.",
      "example_desert": "Create the impression that you're guiding someone through a very real desert as you lecture them, only for that to be remembered as a trippy vision."
    },
    "7": {
      "title": "Greater Conversation",
      "description": "Ask your Estate's spirits to do things they wouldn't normally do.",
      "example": "",
      "example_desert": ""
    }
  },
  "persona": {
      "4": {
        "title": "Greater Shine",
        "description": "Express the fundamental glory of your Estate, making your Nobility innately recognizable to others - inspire art, devotion, etc.",
        "example": "Shine with radiant, spiritual valor, probably entailing knightly sorts (and similar) instantly dropping to their knees in awe.",
      "example_desert": "Shine with the awesome majesty of the desert, inspiring devotion in those who care intensely about the same. "
      },
      "5": {
        "title": "Greater Sight",
        "description": "Mystical super-senses.",
        "example": "This one is just Greater Vision.",
      "example_desert": ""
      },
      "6": {
        "title": "Greater Ghost Miracle",
        "description": "Create virtually any Estate-based effects you like as a Phantasmagorical effect. Might turn out to have been real if the narrative impact is low, otherwise remembered as a coincidence, dream, religious ecstasy, etc.",
        "example": "",
      "example_desert": ""
      },
      "7": {
        "title": "Greater Incarnation",
        "description": "Be with an instance of your Estate, or someone experiencing your Estate, anywhere. Alternately: sift through hundreds of instances/lives.",
        "example": "Be present with hundreds of people doing brave things, or someone facing their fears in the bowels of Hell.",
      "example_desert": "Sift through the subjectivity of every grain of sand in a desert, or be present with a desert on Mars."
      },
      "8": {
        "title": "Greater Emulation",
        "description": "Force the activation of one of your Estate properties (with a relatively consistent trigger for each property), or apply it on a large scale.",
        "example": "The Power of Cliffs can declare that someone meeting for them for the first time is actually experiencing a meet cute, allowing them to invoke, \"I make your heart race.\", and stick to the result. The Power of Horses .",
        "example_desert": ""
      },
      "9": {
        "title": "Greater Embodiment",
        "description": "Tame powerful artifacts and draw on external sources of power.",
        "example": "Bend Excalibur to your whim, even though you aren't the True King of England. Read the Necronomicon without going mad.",
        "example_desert": ""
      },
      "10": {
        "title": "Greater Enchantment",
        "description": "Imbue things with your Estate's properties or nature on a grand scale, cause the world to flourish in line with your Estate.",
        "example": "The Power of Horses can make a city \"fast as the wind\", causing it sprout enormous sails and drift across the land. They can give someone the strength to hold up the sky. They can transition a region to renewable oat-based power.<br>The Power of Bread can create a cool sacred enclave where physical and spiritual needs are met automatically, allowing people to focus on other things. They can forge a new micronation out of their suitably humble local PTA. They can make a mountain detatch from the earth and fly off into space.",
        "example_desert": ""
      },
      "11": {
        "title": "Greater Binding",
        "description": "Empower or redeem someone, pulling them from their ordinary or fallen life and giving them a new role in service to your own. Or bind stuff into your Estate's mythology on a grand scale.",
        "example": "Turn people into great heroes. Fill a city with romantic courtly love that inspires future valor. Declare that, no matter what, for the rest of time, a place will always welcome those who have acted with valor.",
        "example_desert": "Doom a city to be destroyed by the desert. Grant a holy order mundane sandbending. Reveal someone's true nature as powerful desert spirit."
      },
      "12": {
        "title": "Greater Sacrifice",
        "description": "Remove your Estate's properties or nature from things on a grand scale.",
        "example": "The Power of Horses can remove the swiftness of an entire city's traffic, causing massive and persistent gridlock. They can free an Angel from her vigil and let her take a vacation, create vast oceans of calm, or create the Great Oatmeal Curse of 2025.<br>The Power of Dark Matter.",
        "example_desert": ""
      }
    },
    "flore": {
      "4": {
        "title": "Greater Connection",
        "description": "Know the nature of danger facing a Treasure, and understand the feelings of non-human Treasures.",
        "example": "Understand how your magical castle is feeling. Know that your dog has been kidnapped by the mafia.",
      "example_desert": ""
      },
      "5": {
        "title": "Greater Projection",
        "description": "Visit (potentially multiple) Treasures anywhere by dreaming, with the normal power lending and limited mobility.",
        "example": "Find your Sacred Grail after it gets stolen away to fairyland. Communicate with all of your students, while in a trance.",
      "example_desert": ""
      },
      "6": {
        "title": "Greater Administration",
        "description": "Visit (potentially multiple) Treasures anywhere while awake.",
        "example": "Psychically command your army while fighting. Touch base with your friend while they're on vacation on another world.",
      "example_desert": ""
      },
      "7": {
        "title": "Greater Guidance",
        "description": "Give incredible instruction/advice, giving a Treasure or someone wielding one (including yourself) professional competence and effective Ability 7. Teach someone specialized or magical skills.",
        "example": "Instructing an ordinary Treasure on how to steal documents from a military base. Use an Enchanted Wardrobe to be extremely put together and fashionable, Ability 0 be damned. Teach someone a skill that you don't yourself have.",
      "example_desert": ""
      },
    "8": {
      "title": "Greater Glorification",
      "description": "Awaken your Treasure's power at a superheroic or mythic level - this is hard on it if the Treasure isn't itself miraculous.",
      "example": "Awakening the power of your Four-Winds Fan, and stirring up a hurricane. Activating your employee's Psychic Overtime contigency, allowing them to throw buildings around with their mind. Grant the key agents of your Spy Agency the ability to transform into shadows.",
      "example_desert": ""
    },
    "9": {
      "title": "Greater Ignition",
      "description": "Make a Treasure's action miraculous - it automatically defeats mundane opposition and it, or its wielder, has effective Ability 9 when using its signature power.",
      "example": "Using your incredible curative draught to heal someone poisoned by a Serpent's fang. Driving your treasured car through a tsunami. Using your Cinematic Hacking Program's ability to bypass firewalls to find a hole in the Weirding Wall that surrounds the world. Using your sword to cut the wind.",
      "example_desert": ""
    },
    "10": {
      "title": "Greater Trust",
      "description": "A Treasure rushes to your side from anywhere, and can reveal a new \"combo move\" version of its power that evokes your own themes or Estate. It can use this with effective Ability 10.",
      "example": "Summon your Treasured rival so that the sonorous clash of your blades can shatter a crystal prison. Combine your powers with your pet Kaiju to give it the strength to catch a storm or tear down the sky. Pouring your heartfelt love into your holy grail to bring the dead back to life.",
      "example_desert": ""
    },
    "11": {
      "title": "Greater Design",
      "description": "Build, repair or modify fortress scale artifacts that affect whole regions.",
      "example": "Erect a prayer stone that transformatively lifts people's burdens - even turning some of them into birds! Build a sinister flying fortress whose shadow causes those below to fall into deepest despair. Through advanced hydrological engineering, make a literal river of milk and honey.",
      "example_desert": ""
    },
    "12": {
      "title": "Greater Divine Plan",
      "description": "Use a Treasure to make a Wish, with wishes that suit the Treasure's nature likely to work well, and those that don't... likely to go wrong in a weird ways.",
      "example": "Likely to go as planned: Using your Four-Winds Fan to keep ships from shore for a year and a day. Using your dog that can recite Shakespeare to open a portal to Elizabethan England. <br>Likely to be exceptionally strange: Using your Cinematic Hacking Program to hack reality, summoning the long lost dragon of the sea. Undoing the assassination of Martin Luther King Jr by using your fishing rod to fish the gun that killed him out of the past.",
      "example_desert": ""
    }
    }
};

// const aspectobj = JSON.parse(aspectjson);

// set up tabs for attributes
function openAttribute(evt, attrName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(attrName).style.display = "block";
  evt.currentTarget.className += " active";
};

function pointsRemaining() {
    var characterPoints = 25;
    var ability = document.getElementById("abilityRating").value;
    var aspect = document.getElementById("aspectRating").value;
    var domain = document.getElementById("domainRating").value;
    var persona = document.getElementById("personaRating").value;
    var flore = document.getElementById("floreRating").value;

    var abilityCost = Math.min(ability, 7);
    var aspectCost = Math.min(aspect * 2, 14);
    var domainCost = Math.min(domain * 2, 14);
    var personaCost = Math.min(persona * 2, 14);
    var floreCost = Math.min(flore * 2, 14);
    
    var abilityMax = document.getElementById("abilityRating");
    var aspectMax = document.getElementById("aspectRating");
    var domainMax = document.getElementById("domainRating");
    var personaMax = document.getElementById("personaRating");
    var floreMax = document.getElementById("floreRating");

    costtagupdater(ability, aspect, domain, persona, flore)

    var pointsRemaining = characterPoints - abilityCost - aspectCost - domainCost - personaCost - floreCost;

    if (pointsRemaining == 0) {
      abilityMax.setAttribute('max', abilityCost)
      aspectMax.setAttribute('max', aspectCost/2)
      domainMax.setAttribute('max', domainCost/2)
      personaMax.setAttribute('max', personaCost/2)
      floreMax.setAttribute('max', floreCost/2)
    } else if (pointsRemaining == 1) {
      abilityMax.setAttribute('max', abilityCost + 1)
      aspectMax.setAttribute('max', aspectCost/2)
      domainMax.setAttribute('max', domainCost/2)
      personaMax.setAttribute('max', personaCost/2)
      floreMax.setAttribute('max', floreCost/2)
    } else {
      abilityMax.setAttribute('max', 12)
      aspectMax.setAttribute('max', 12)
      domainMax.setAttribute('max', 12)
      personaMax.setAttribute('max', 12)
      floreMax.setAttribute('max', 12)      
    };

    document.getElementById("charPointsRemaining").innerHTML = "Character Points Remaining: " + pointsRemaining;

    powerText("aspect")
    powerText("domain")
    powerText("persona")
    powerText("flore")
    powerText("ability")

    greaterpowerText("aspect")
    greaterpowerText("ability")
    greaterpowerText("domain")
    greaterpowerText("persona")
    greaterpowerText("flore")

};

function costtagupdater(ability, aspect, domain, persona, flore) {
  if (ability > 7) {
    document.getElementById("abilitycosttag").innerHTML = "Advanced abilities at this level...";
  } else {
    document.getElementById("abilitycosttag").innerHTML = "Without Cost, you can use...";
  };
  if (aspect > 7) {
    document.getElementById("aspectcosttag").innerHTML = "Advanced abilities at this level...";
  } else {
    document.getElementById("aspectcosttag").innerHTML = "Without Cost, you can use...";
  };  
  if (domain > 7) {
    document.getElementById("domaincosttag").innerHTML = "Advanced abilities at this level...";
  } else {
    document.getElementById("domaincosttag").innerHTML = "Without Cost, you can use...";
  };
    if (persona > 7) {
    document.getElementById("personacosttag").innerHTML = "Advanced abilities at this level...";
  } else {
    document.getElementById("personacosttag").innerHTML = "Without Cost, you can use...";
  };
    if (flore > 7) {
    document.getElementById("florecosttag").innerHTML = "Advanced abilities at this level...";
  } else {
    document.getElementById("florecosttag").innerHTML = "Without Cost, you can use...";
  };  
};

function powerText(attribute) {
  var attrName = attribute + "Rating"
  var rating = String(document.getElementById(attrName).value);
  if (rating > 8) {
    title = ""
    description = ""
    example = ""
  } else {
      title = powersjson[attribute][rating]["title"];
      description = powersjson[attribute][rating]["description"];
      if (document.getElementById("toggle").checked && powersjson[attribute][rating]["example_desert"] !== "") {
      example = powersjson[attribute][rating]["example_desert"];
      } else {
      example = powersjson[attribute][rating]["example"];
  }

  }
  document.getElementById(attribute + "title").innerHTML = title;
  document.getElementById(attribute + "desc").innerHTML = description;
  document.getElementById(attribute + "ex").innerHTML = example;
};

function greaterpowerText(attribute) {
  var attrName = attribute + "Rating";
  var rating = String(document.getElementById(attrName).value);
  if (rating < 4) {
    title = ""
    description = ""
    example = ""
  } else {
    title = greaterpowersjson[attribute][rating]["title"];
    description = greaterpowersjson[attribute][rating]["description"];
    if (document.getElementById("toggle").checked && greaterpowersjson[attribute][rating]["example_desert"] !== "") {
      example = greaterpowersjson[attribute][rating]["example_desert"];
    } else {
      example = greaterpowersjson[attribute][rating]["example"];
    }
  };
  document.getElementById(attribute + "gtitle").innerHTML = title;
  document.getElementById(attribute + "gdesc").innerHTML = description;
  document.getElementById(attribute + "gex").innerHTML = example;
};

