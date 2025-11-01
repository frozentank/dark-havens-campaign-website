import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import SectionCard from '../../components/SectionCard';

const cultures = [
  {
    name: "Skaivania",
    climate: "Hot",
    terrain: "Mountain",
    leader: "Nunataq (Mountain Peak)",
    racialMajority: "Goliath",
    racialRestriction: "Goliath",
    skills: ["Nature", "Survival"],
    languages: "Elven",
    description: {
      food: "Here in Skaivania, we feast! Bring in the cheese, the mead and the boar! Cook it over the fire! What did you say? That town only had a small goat and some honey. Hmmm... BRING IN THE GOAT, baste it in the honey! Cook it over the fire!",
      fashion: "Never let me see you in a wolf fur, us bear clan members have a bitter rival with the wolf clan. If I see you in a wolf fur, I'm just going to have to battle you to the death. No hard feelings, it's just what I have to do to protect my honor. Also, if you could get an eagle feather before arriving we will need it to pay tribute to Long Stare, the clan leader. Not as important but an owl feather will let you pay homage to Speaks with Squirrels the clan elder. Can't hurt to have them both on your side.",
      arts: "I see you lack any warrior tattoos, you must have never seen battle. Don't worry, stick with me and we'll surely have the Guido recording your heroics in no time. When you do pass, the Guido will happily complete your tombstone. His blood magic will remove all your tattoos and imprint them onto your headstone so you can enter into Howatta with clean skin."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Modest",
      laws: "Temperate",
      change: "Tradition",
      indulgence: "Excess",
      social: "Tribal",
      military: "Raiders",
      family: "Clans",
      inheritance: "Gavelkind"
    },
    economy: {
      surplus: "Meat/Fish, Magical Reagents",
      demand: "Salt"
    }
  },
  {
    name: "Nostrio",
    climate: "Hot",
    terrain: "Coastal",
    leader: "Unknown",
    racialMajority: "Elf",
    racialRestriction: "Half-Elf",
    skills: ["Persuasion", "Insight"],
    languages: "Draconic",
    description: {
      food: "No meal is worth having if it took less than an hour to prepare. Tonight we will be having dried and aged seabass, Utamma Vineyard 131 wine, stone-ground rye bread and a variety of seafruit. While we dine would you prefer a sonata or a cantata? I suppose we could have both.",
      fashion: "We really must get you a gown, those clothes look like your cleaning garments. They are wonderfully light and airy. Imported from the jungles up north, they are all the rage. I know they are expensive, but they do last a long time. I mean I've had mine for nearly 200 years now and it still looks as new as the day I bought it. Those little grubs produce the finest of silks. Doesn't wear, doesn't hold moisture, doesn't smell. I mean if we could get any other color but pastels they'd be perfect.",
      arts: "Here in Nostrio all of us are artists. From a young age, we are taught different art skills. By the time I was 10, I had finished 3 different marble statues. Two of them were complete rubbish. I got terrible grades on them but that's the breaks. My rite of passage piece was a wonderful painting of a ship passing an island made completely with moss. Took me nearly a year to complete. And I'll tell you that moss grows all kinds of weird mushrooms and the fumes nearly killed me. But it was worth it, now look at me, I'm an ambassador. That will show Vulre, I think he's a guard now. I told him that music piece was horrid."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Individualism",
      self: "Modest",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Caste System",
      military: "Feudal Levies",
      family: "Communitarian",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Magical Reagents, Cloth",
      demand: "Wine/Ale"
    }
  },
  {
    name: "Gufrailand",
    climate: "Cold",
    terrain: "Hills/Highlands",
    leader: "Queen Osk II",
    racialMajority: "Dwarf",
    racialRestriction: "None",
    skills: ["Religion", "Medicine"],
    languages: "Dwarven, Halfling",
    description: {
      food: "Come in come in. Sit down my friend. We'll be having a bite here soon. My little sis, Gatmelda, is in the kitchen cook a nice warm stew. I heard my uncle shot a elk yesterday and this will be the first meal. Hopefully we can follow that up with a nice brambleberry pie and some warm honeyed goats milk. It's definitely my favorite.",
      fashion: "There's nothing quite like a good pair of boots and a sturdy apron. Every dwarf here in Gufrailand has one of each. Wouldn't leave home without them. I mean who knows when you'll be stepping in mud or needing to forge a bit of steel. You have to be prepared.",
      arts: "Let me see that blade of yours. Just as I thought, I don't know where you got this kid but it's a disgrace. We'll head over to the forges, get you a proper blade. One with with a bit of inlay work along the handle. Maybe a gem or two if you can afford it. I mean it is an investment but you can always pass it on to your children."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Ambitious",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Feudal",
      military: "Feudal Levies",
      family: "Dynastic",
      inheritance: "Ultimogeniture"
    },
    economy: {
      surplus: "Smithed Goods",
      demand: "Dairy"
    }
  },
  {
    name: "Flaigua",
    climate: "Temperate",
    terrain: "Forest",
    leader: "Disputed",
    racialMajority: "Orc",
    racialRestriction: "Half-Orc",
    skills: ["Sleight of Hand", "Deception"],
    languages: "Thieves Cant",
    description: {
      food: "If it got dead and don't speak, that's dinner chieftan always say. If we real hungry. Sometimes we forget the speak part. I don't. Never forget that part. Human flesh bad. But Klog different",
      fashion: "I put on what I find. Bones, cloth from gnome. Klog, he chief, he have shiny chest hard stuff. It really shiny. With colored things on it. That why he chief.",
      arts: "Shobob once made a buffalo on the cave wall at house. Bright, red when he made it. Kind of dried and got all flaky later. And dogs kept try lick it. But nice it was, when he drewed it."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Ambitious",
      laws: "Relaxed",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Tribal",
      military: "Raiders",
      family: "Clans",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "Salt, Spices",
      demand: "Wheat/Corn"
    }
  },
  {
    name: "Gyso",
    climate: "Hot",
    terrain: "Wetlands",
    leader: "Hammer 'n Ammer, Ore Decor",
    racialMajority: "Halfling",
    racialRestriction: "None",
    skills: ["Stealth", "Perception"],
    languages: "Giant, Halfling",
    description: {
      food: "Hey there gretlin, looks like wander a bit further than you expected. Landed yourself in this here marsh. I guess we'll have to get you on home here shortly. Here, take this iron cake, a bit of boloti butter and some dried drake meat. I only have this here waterskin for meself and I'm not about to share it with you. But don't be drinking that water. It's no good for you to feed the dragons. Just head on back where you came from and you'll be fine.",
      fashion: "No, I haven't washed this shirt this week. It's still clean, I mean you city folk might say it's a bit swampy but so's everything around here. Just gotta accept this is the way it is.",
      arts: "Arts? I mean Dumb Danry does a bit a whittling when he's fishing. He doesn't every catch nothing but them little people he make go for a good bit of coin come all summer's eve. Ladies like to give em the children."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Ambitious",
      laws: "Temperate",
      change: "Adaptation",
      indulgence: "Discrete",
      social: "Feudal",
      military: "Professional Armies",
      family: "Nuclear",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Magical Reagents",
      demand: "Smithed Goods"
    }
  },
  {
    name: "New Kiblic",
    climate: "Temperate",
    terrain: "Hills/Highlands",
    leader: "Queen Amelda Landon",
    racialMajority: "Human/Human Variant",
    racialRestriction: "None",
    skills: ["Nature", "Survival"],
    languages: "Orcish",
    description: {
      food: "Good afternoon and welcome to New Kiblic. Please take this voucher for your bread and milk supplement. If you are in need of meat we will be issuing chicken and pork rations every Friday and Monday. Beef, vension, elk or bear will be available every second Tuesday. Salt provisions are provided on a monthly basis. Thank you for your coorporation and long live New Kiblic.",
      fashion: "The colors of our glorious republic are blue and orange. Wearing them shows your pride in our glorious nation. Caring a flag with you into battle would certainly look good to your commander.",
      arts: "Come see the glorious statue of the founder of our great nation: Demiphones Sidonius. We also have a glorious painting of workers tending to the fields, or our soliders standing gloriously in victory. Really makes you want to join up, am I right?"
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Ambitious",
      laws: "Strict",
      change: "Adaptation",
      indulgence: "Restraint",
      social: "Feudal",
      military: "Professional Armies",
      family: "Nuclear",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Wine/Ale, Wheat/Corn",
      demand: "Smithed Goods"
    }
  },
  {
    name: "Marmanio",
    climate: "Temperate",
    terrain: "Coastal",
    leader: "Hey (Winter)",
    racialMajority: "Goliath",
    racialRestriction: "None",
    skills: ["History", "Intimidation"],
    languages: "Giant, Halfling",
    description: {
      food: "Wake up, it's nearly sun-up. We got to get going. Meet me in the field, here we work for our food. Fresh eggs and milk can be had from the barn. There's a store of a bit of flour up in the hayloft. That will make a fine meal of biscuits and eggs. We got some dried fish for dinner. But if you get a bit of time, we could use a bit more. If you head out to the water, wander up the shore to the North. There's a nice little bay where we caught a bunch of little brim.",
      fashion: "My tunic and stocking have served me well over the years. Spun out of wool by my wife about May this year. The smoke of the fire gives it an always fresh scent, so no need to worry about laundry. Save the undergarmets.",
      arts: "Most of the time we have little use for art. It doesn't serve much purpose in my mind. Though I do like the look of a good shell. I mean if you find one with that particularly interesting sheen, just a pleasure to look at."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Individualism",
      self: "Ambitious",
      laws: "Relaxed",
      change: "Adaptation",
      indulgence: "Discrete",
      social: "Tribal",
      military: "Raiders",
      family: "Clans",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Wheat/Corn",
      demand: "Cloth"
    }
  },
  {
    name: "Ebra",
    climate: "Hot",
    terrain: "Wetlands",
    leader: "President Pepper Oakflower",
    racialMajority: "Gnome",
    racialRestriction: "Gnome",
    skills: ["Acrobatics", "Intimidation"],
    languages: "Halfling",
    description: {
      food: "That's a good point, you probably do need to know a few things to bring. You certainly can't show up to someone's home without something to eat. My recommendation is a chocolate crab cake. It's delightful, though a little complicated to make. Perhaps a Rotgrit stew or a Stint tea pipeweed would be a good alternative.",
      fashion: "I personally, love to have as many different colors as possible. I mean I think I have... 1 2 3 4... 8! different colors on today. It does take a bit to get them all to match well. But it makes me happy to see all of them before I leave.",
      arts: "President Oakflower recently banned all art. I don't really know what to tell you without risking my own life. But I promise there's still a bit of art going on. Mostly pottery and drawings. I'm sure it will eventually be allowed again."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Individualism",
      self: "Ambitious",
      laws: "Temperate",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Feudal",
      military: "Feudal Levies",
      family: "Nuclear",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Wheat/Corn",
      demand: "Spices"
    }
  },
  {
    name: "The Dwarven Brotherhood",
    climate: "Temperate",
    terrain: "Mountain",
    leader: "The Masters: Johen Hegg, Olavi Mikkonen, Johan Soderberg, Ted Lundstrom, Fredrik Andersson",
    racialMajority: "Dwarf",
    racialRestriction: "Dwarf",
    skills: ["History", "Animal Handling"],
    languages: "Giant",
    description: {
      food: "Ah nothing like a good mezpuu. So warm and fluffy with a nutty flavor. I mean if we have some potatoes and carrots on hand, I guess that will do.",
      fashion: "Me personally, I prefer my hiking boots. A nice pack on me shoulders and the cold wind in my beard. I love roaming these mountains, digging in the mines and fighting the yeti.",
      arts: "The fine metal workers in the capital make the finest jewelry in all of Nausalistia. You can always tell how well off a royal is by how many items they wear that the Dwarven Brotherhood has made."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Ambitious",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Discrete",
      social: "Feudal",
      military: "Feudal Levies",
      family: "Clans",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Smithed Goods, Wine/Ale",
      demand: "Meat/Fish"
    }
  },
  {
    name: "The Shan-maris Conclave",
    climate: "Hot",
    terrain: "Coastal",
    leader: "The Epoch Guardians: Infinite Fate, Aura's Watch",
    racialMajority: "Dragonborn",
    racialRestriction: "Dragonborn",
    skills: ["Arcana", "Medicine"],
    languages: "Shan-maris",
    description: {
      food: "One may enjoy this week's meal: scorched game meat sandwiches and radish salsa. One could also join for anise tea. One should refrain from complaining as one has been given these gifts.",
      fashion: "One should seek to wear colors of one compliment. As one can see, I am decendent of a powerful red drake. One can also see that I look wonderful in green atire.",
      arts: "One needn't look far to see the art all around oneself. One can be satisfied viewing just one's surroundings. Look over there one's friend has become a song bird. And there, one's sculptor the orbweaver."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Collectivism",
      self: "Modest",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Caste System",
      military: "Feudal Levies",
      family: "Clans",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "Cloth, Magical Reagents",
      demand: "Wheat/Corn"
    }
  },
  {
    name: "Rugliorhiel",
    climate: "Cold",
    terrain: "Coastal",
    leader: "Prince Andwise Farfoot",
    racialMajority: "Halfling",
    racialRestriction: "None",
    skills: ["Performance", "Insight"],
    languages: "Halfling, Orcish",
    description: {
      food: "Psst, over here. Yeah, I'm talking to you. What you're looking for a meal? No, no my friend. What I got here isn't stolen. Look if you really want something to eat, go down the street there and get something for Bernese. I'd recommend the Ebra-fried scallop sandwich. But don't forget to come back. I mean these items are one of a kind, collectible, valuable...",
      fashion: "Why are you taking note of my clothes? You aren't some kind of paladin are you? Are you from the Holy Order? I really dislike dealing with them. But yeah I guess these are pretty generic. Just some casual pants and a shirt. Nothing flashy you know. But seriously, stop drawing attention to us. We're just trying to have a conversation.",
      arts: "Quora's son, man you really don't let up. I mean you have to be a tourist to ask this many question. Look if you want to take in the sights, head over to the marketplace and just watch a few of the street acts. Keep a good eye on your valuables. But otherwise it's quite enjoyable. Now get out of here if you aren't buying anything. I'm not a tour guide."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Modest",
      laws: "Relaxed",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Feudal",
      military: "Professional Armies",
      family: "Communitarian",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Meat/Fish",
      demand: "Magical Reagents"
    }
  },
  {
    name: "Yeotall",
    climate: "Temperate",
    terrain: "Mountain",
    leader: "King Price Mattox",
    racialMajority: "Human/Human Variant",
    racialRestriction: "None",
    skills: ["Nature", "Animal Handling"],
    languages: "Gnomish, Halfling",
    description: {
      food: "Plenty of food to be had in the caves up there. Just got to know where to look. And maybe be willing to take a bit of a risk on something new. I mean who would have guessed that them glowing yellow moss berries taste so dang good in a cobbler?",
      fashion: "Well, you're going to need something with some good knee protection. Can't tell you how many times I was stubbling around in the dark and just slammed my knee into a rock. Oh you meant like what I think looks good? I don't know most of the time the light is so low you can't really tell what color people are wearing.",
      arts: "Don't know what to tell you, we love to sing. Some people have even learned to use the echoes to create like a whole choir just by themselves."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Modest",
      laws: "Temperate",
      change: "Adaptation",
      indulgence: "Restraint",
      social: "Feudal",
      military: "Professional Armies",
      family: "Communitarian",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Smithed Goods, Spices",
      demand: "Wine/Ale"
    }
  },
  {
    name: "Jaster",
    climate: "Cold",
    terrain: "Forest",
    leader: "Queen Ruth Reid",
    racialMajority: "Human/Human Variant",
    racialRestriction: "None",
    skills: ["Acrobatics", "Athletics"],
    languages: "Dwarven, Halfling",
    description: {
      food: "Oh funny you should ask traveler. I, like many of my kin, have choosen to take the noble road only consume the plants of this world. No harm to animals. Sure it's a bit more effort to get a bit of fat and protein. But just think of the nourishment to your soul. It is certainly worth it my mind.",
      fashion: "I think it's less important how others view you than to how you view yourself. Wear what makes you feel strong and happy. Don't wear something because another person might think a certain way. That's a bunch of rubbish.",
      arts: "There is an amazing performance in the capital called the Prisma. The way those people bend their bodies or throw themselves through the air is a sight to beheld."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Individualism",
      self: "Modest",
      laws: "Temperate",
      change: "Tradition",
      indulgence: "Discrete",
      social: "Feudal",
      military: "Feudal Levies",
      family: "Nuclear",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Meat/Fish, Magical Reagents",
      demand: "Dairy"
    }
  },
  {
    name: "Teflin",
    climate: "Hot",
    terrain: "Grassland",
    leader: "King Alexus Macduff",
    racialMajority: "Human/Human Variant",
    racialRestriction: "None",
    skills: ["Stealth", "Investigation"],
    languages: "Draconic, Gnomish",
    description: {
      food: "Ah laddie, sure I could have a wee word with ya. We did used to have fair bit of forest game. But since the catastrophe and the Oshos arriving there's barely enough to scrap a sandwich together. Ah, let alone a traditional vension feast. I do miss those little mushrooms and the dinner rolls Lillin used to make.",
      fashion: "Well, the important thing is to make sure you don't look like those hackit Oshos. Shouldn't be too hard, you ain't covered in dirty and you ain't a Dragonborn. Great start. Now ya just a bit of mute colors and you'll be fine. Sure to blend in with the right crowd.",
      arts: "Head over to the capital if you want to see some art. Maybe checkout the King's palace grounds. All kinds of statues and tapestries, quite stunning. King Macduff has a bit of a saorsa way about em. He might even be willing to let you tour the grounds."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Modest",
      laws: "Temperate",
      change: "Tradition",
      indulgence: "Discrete",
      social: "Feudal",
      military: "Professional Armies",
      family: "Nuclear",
      inheritance: "Gavelkind"
    },
    economy: {
      surplus: "Cloth, Wheat/Corn",
      demand: "Smithed Goods"
    }
  },
  {
    name: "Leoman",
    climate: "Temperate",
    terrain: "Hills/Highlands",
    leader: "Duke Matthias Bronson",
    racialMajority: "Human/Human Variant",
    racialRestriction: "None",
    skills: ["Acrobatics", "Nature"],
    languages: "Dwarven, Halfling",
    description: {
      food: "Just give me something to eat as well. Don't really care where it came from as long as it won't kill me.",
      fashion: "You do you. I mean like a good pair of pants that fit well and are comfy. But I don't really think we have a sense of style. I mean the king has some nice clothes, but we're nothing compared to the New Kiblic's rules and structures.",
      arts: "Rolruth is a wonderful writer. Creates the best stories. I read one as kid about a group of adventures that flew and airship and spoke to genies. Great stuff. I'm sure he's create quite a few more, they get bought by people all across Nausalistia. Probably further."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Ambitious",
      laws: "Temperate",
      change: "Adaptation",
      indulgence: "Restraint",
      social: "Feudal",
      military: "Feudal Levies",
      family: "Nuclear",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Cloth, Spices",
      demand: "Wheat/Corn"
    }
  },
  {
    name: "The Holy Order of Quora",
    climate: "Temperate",
    terrain: "Forest",
    leader: "The Chosen: Lixene",
    racialMajority: "Human/Human Variant",
    racialRestriction: "None",
    skills: ["Religion", "Persuasion"],
    languages: "Quoran",
    description: {
      food: "When we are home, we will be happy with what we are provided by Quora. If it is her will to provide milk and honey, we will have it. If she provides locust and cabbage, we will have it. When we travel to preach, we are thankful for the gifts we are given. We do not desire, we simply get what we are given.",
      fashion: "To honor Quora, we must wear white and yellow. It is the only suitable colors for Quora to behold. We must keep it clean, Quora would be displeased by bloodstained clothing. I prefer something loose fitting, a robe or at least a skirt. But some other prefer a bit more structure. Pants and blouse.",
      arts: "We sing our praise to Quora. May her light bless us today."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Modest",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Caste System",
      military: "Professional Armies",
      family: "Communitarian",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "Dairy, Wheat/Corn",
      demand: "Salt"
    }
  },
  {
    name: "Pontifex Xefras",
    climate: "Hot",
    terrain: "Coastal",
    leader: "Speaker Holfast Button",
    racialMajority: "Halfling",
    racialRestriction: "Halfling",
    skills: ["History", "Insight"],
    languages: "Gnomish",
    description: {
      food: "Well, you're no Halfling. We'll get you some grub and then it's time for you to set to. We got just your basics: a loaf of oaten bread, a half dozen pickled quipper eggs and crayfish. Be careful with that, the crayfish can still give you a nasty pinch. No! You're not supposed to eat it raw. Just keep it alive so it stays fresh.",
      fashion: "You see this yellow sash, it's the only reason I haven't killed you at this point. Marks me as a converter. I go out, find similarly minded Halflings. Tell them about the wonderful things going on under Holfast Button. If you see a Halfling following me with a green sash. Well come to think of it, you probably won't see that Halfling. Doesn't matter, just point me to the nearest town I need to go.",
      arts: "Yes, we have arts. No, I don't really want to talk about them. Fine, I'll summarize. Almost everyone works around the order of Xefras. So only the youngest child might get to go to college. There's a college devoted to music and a college devoted to storytelling. I wanted to go to the college of Neotoma, the story-telling one, but my father was a converter, so here I am. My brother's the lucky one."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Individualism",
      self: "Modest",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Caste System",
      military: "Professional Armies",
      family: "Dynastic",
      inheritance: "Ultimogeniture"
    },
    economy: {
      surplus: "Cloth, Spices",
      demand: "Meat/Fish"
    }
  },
  {
    name: "The Empire of Nemon the Magnificent",
    climate: "Cold",
    terrain: "Forest",
    leader: "Nemon (the Magnificent)",
    racialMajority: "Orc",
    racialRestriction: "Half-Orc",
    skills: ["Athletics", "Deception"],
    languages: "None",
    description: {
      food: "We eat what Nemon decrees. This harvest is potato, leek and boar. Last was corn, garlic and peasant.",
      fashion: "Only Nemon wears purple. That is his color. Chieftans wear blue. Sages wear green. Shaman wear red. You and I, we wear black. Maybe a bit of white if we trying to find a mate.",
      arts: "Nemon has decreed that we should always build a symbol when we have a battle. This should be a nice arrangement of the bones of the fallen, covered by their weapons. Not all of them but some."
    },
    traits: {
      sstratification: "Hierarchical",
      community: "Collectivism",
      self: "Ambitious",
      laws: "Relaxed",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Caste System",
      military: "Raiders",
      family: "Clans",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "Meat/Fish, Dairy",
      demand: "Cloth"
    }
  },
  {
    name: "Oshos",
    climate: "Hot",
    terrain: "Forest",
    leader: "N/A",
    racialMajority: "Dragonborn",
    racialRestriction: "None",
    skills: ["Arcana", "Survival"],
    languages: "Draconic, Halfling",
    description: {
      food: "Ah, how I miss the sea. All the shellfish, the fresh daily catch. So much better than what's available here. I mean, don't get me wrong, the human-folk have been a welcome savior. It just doesn't fill the void of home.",
      fashion: "Linens used to be the fashion of our people. Light, airey, doesn't bog you down in the water. But these wools are a long way from making us comfortable. I guess they are water proof. And the linens wouldn't do much in the winter. I guess I just miss the sea.",
      arts: "Hilku has an inherited pearl necklace. Fifteen brilliantly white and one black pearls. That black one is amazing to behold, the colors seem to swirl within it. Iadkre claims it's magically but no one's ever seen and evidence of that."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Modest",
      laws: "Temperate",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Tribal",
      military: "Unofficial",
      family: "Clans",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "Spices, Wine/Ale",
      demand: "Wheat/Corn"
    }
  },
  {
    name: "Ascar",
    climate: "Temperate",
    terrain: "Mountain",
    leader: "Fulk Longfoot",
    racialMajority: "Gnome",
    racialRestriction: "None",
    skills: ["History", "Persuasion"],
    languages: "Gnomish, Dwarvish",
    description: {
      food: "Normally, it's business first; dinner afterwards. But since you're new here I guess we can share a bit of our gruel. Nimop makes it daily. Bit of oats, bit of stock, some veggies if we got em and a good helping of lard. It will keep you going and warm. Though you may not enjoy the flavor, first of second time.",
      fashion: "Kaspip is the caravan's seamstress. Makes all of our clothes. I suppose her daughter might be taking over at this point. But if you need something mended she'll get you set in a jiff.",
      arts: "As you can see from our colorful coaches, we take a lot of pride in making them beautiful. Also, attracts a fair amount of business. You always know when a Ascar caravan is on the horizon."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Ambitious",
      laws: "Strict",
      change: "Tradition",
      indulgence: "Discrete",
      social: "Tribal",
      military: "Unofficial",
      family: "Communitarian",
      inheritance: "Primogeniture"
    },
    economy: {
      surplus: "Smithed Goods",
      demand: "Dairy"
    }
  },
  {
    name: "Alistia Jungle",
    climate: "Hot",
    terrain: "Jungle",
    leader: "Odrenond",
    racialMajority: "Gnome",
    racialRestriction: "None",
    skills: ["Selectable Int", "Selectable Wis"],
    languages: "Gnomish",
    description: {
      food: "Down here, we can't find what we'd really like. Those wonderful bananas and avocados. So delicious back home. But here, we just have to make due each meal. A few apples, maybe an orange if we're lucky. Just something to finish off these salty meals.",
      fashion: "You want to keep everything dark and green. Something to throw off your silhouette. Maybe a nice dark green hood, black leathers and black boots. That will really help you blend in with the underbrush.",
      arts: "Back home they have a tradition, when a couple is wed. The father of the bride goes out into the forest and selects a True Ribwart tree. A big fat one, not too tall. Then with the father of the groom, they both cut the massive tree down. The next year the family spends carving out the tree to build a home for the couple. Intricate details will be throughout, reminding the couple of their family connection."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Ambitious",
      laws: "Relaxed",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Tribal",
      military: "Raiders",
      family: "Clans",
      inheritance: "Gavelkind"
    },
    economy: {
      surplus: "N/A",
      demand: "N/A"
    }
  },
  {
    name: "Tyme Lakes",
    climate: "Cold",
    terrain: "Forest",
    leader: "N/A",
    racialMajority: "Half-Elf",
    racialRestriction: "None",
    skills: ["Selectable Wis", "Selectable Cha"],
    languages: "Elven",
    description: {
      food: "Aw shucks, making me think of home. I miss them fields so much. All those open pastures. Right you was asking about food. I mean we ate plenty of cheese, beef, milk, some mighty fine corn, oats, Ma used to make plenty of pies. Man, I'm gettin hungry.",
      fashion: "I mean some of the city folk would have a bit of fashion. Mostly the women, walking around in some fancy hats or oversized dresses. I mean my pa had a top hat, my brother got that after he passed. I just go his black dress boots.",
      arts: "Man, you keep asking about the cities. I don't really know much about them. I guess they got some of them arts. I've seen some paintings. Pretty weird looking. Saw one that just look like some spilled paint all over the place and then called it art. I made one of them back in school."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Ambitious",
      laws: "Temperate",
      change: "Tradition",
      indulgence: "Discrete",
      social: "Feudal",
      military: "Professional Armies",
      family: "Nuclear",
      inheritance: "Gavelkind"
    },
    economy: {
      surplus: "N/A",
      demand: "N/A"
    }
  },
  {
    name: "Masha-Masha Mountains",
    climate: "Cold",
    terrain: "Mountain",
    leader: "N/A",
    racialMajority: "Dwarf",
    racialRestriction: "None",
    skills: ["Selectable Int", "Selectable Cha"],
    languages: "Dwarven",
    description: {
      food: "Oh, so you want to try Giant do ya? AHAH, No, no. I'm just kidding, though we did eat the occasional dragon when we could best it. Makes for some mighty fine meals. Though them black drakes you got around here, they got a nasty after taste.",
      fashion: "Oh, our fashion lies in our hair. We have wonderful braids both for me head and me beard. This one here, a double square cresent knot, took me a day to braid in, I'll probably let it down in another week and spend some more time putting a new one in. Maybe something a bit easier.",
      arts: "You see these beads I got wooven into me beard? These are symbols of my family and their/my accomplishments. I got one here, this black one with a yellow strip. This is my family bead. This red one, means I fought in a battle and drew blood. This other here, with the sparkle and looks like you can almost see through it. This indicates my role as an explorer. I got to see through that fog, find out the truth."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Modest",
      laws: "Strict",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Tribal",
      military: "Raiders",
      family: "Communitarian",
      inheritance: "Ultimogeniture"
    },
    economy: {
      surplus: "N/A",
      demand: "N/A"
    }
  },
  {
    name: "Rasi Desert",
    climate: "Hot",
    terrain: "Desert",
    leader: "N/A",
    racialMajority: "Halfling",
    racialRestriction: "None",
    skills: ["Acrobatics", "Selectable Wis"],
    languages: "Halfling",
    description: {
      food: "Ah, we sees how you walk. Camel milk, camel cheese, yogurt, a bit of cactus fruit, and a bit of dune worm meat.",
      fashion: "My face and hands are covered, the sun and sand are painful. We refrain from color, the white cloth will be the coolest and fashion for us is a luxury we don't seek to have. We will represent ourselves through our camels. The colors of our saddles indicate whom we are.",
      arts: "I just spoke of our art. Why would you not understand this. Our camels are our lifeline. We protect them above all else. Walk how you sees."
    },
    traits: {
      stratification: "Hierarchical",
      community: "Collectivism",
      self: "Modest",
      laws: "Temperate",
      change: "Tradition",
      indulgence: "Restraint",
      social: "Tribal",
      military: "Raiders",
      family: "Clans",
      inheritance: "Ultimogeniture"
    },
    economy: {
      surplus: "N/A",
      demand: "N/A"
    }
  },
  {
    name: "Palast and Baras",
    climate: "Hot",
    terrain: "Sea-faring",
    leader: "None",
    racialMajority: "None",
    racialRestriction: "None",
    skills: ["Stealth", "Selectable Cha"],
    languages: "Common with an accent",
    description: {
      food: "I don't know what that hag puts in her stew but it's delicious. Spicy and savory, there's a bit of vegetables in there green, yellow and red. I mean that's all the food groups. So much better than salted fish and grog. Later we'll go get a bit of rum and we can forget about not knowing exactly what was in that stew.",
      fashion: "You need a hat. The bigger the better. Just remember if it's too big someone is going to get a notion to steal it from you. And usually, they aren't going to leave you to come steal it back. Just saying, watch your back.",
      arts: "Have you heard a shanty sung by 30 drunk sailors under the pale moonlight. Simply wonderful. Or at least that's what I remember from that night."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Ambitious",
      laws: "Relaxed",
      change: "Tradition",
      indulgence: "Excess",
      social: "Feudal",
      military: "Raiders",
      family: "Nuclear",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "N/A",
      demand: "N/A"
    }
  },
  {
    name: "Freeport",
    climate: "Temperate",
    terrain: "Grassland",
    leader: "None",
    racialMajority: "None",
    racialRestriction: "None",
    skills: ["Selectable Int", "Selectable Wis"],
    languages: "None",
    description: {
      food: "The smells in Freeport are wild, one moment they will be sweet and heavenly, with a touch of cinnamon; the next a spicy aroma will burn every hair in your nose. With so many cultures mixed together, it's hard to tell what's truely Freeport cuisine. Most claim it's everything, while other claim it's the fusion. Either way, if you want it, someone somewhere in Freeport has it for sale.",
      fashion: "Freeport fashion is dynamic, the cultural mixture of the city give a whirlwind of colors, fabrics, and styles. The only thing you can't find, green Tenka cotton. Sure, green dyed cotton is readily available. But cotton from the Tenka fields just South of Bonje Lake, that is never dyed green. It just won't hold the stain and know one really knows why.",
      arts: "If you call graffiti art, well Freeport is the town for you. Art installations are everywhere. One the tavern, the inn, your cart if you're not paying attention. Most of it is simply a logo of some business, some might call that an ad. But we just call it art."
    },
    traits: {
      stratification: "Egalitarian",
      community: "Individualism",
      self: "Ambitious",
      laws: "Relaxed",
      change: "Adaptation",
      indulgence: "Excess",
      social: "Feudal",
      military: "Unofficial",
      family: "Nuclear",
      inheritance: "Seniorty/Tanistry"
    },
    economy: {
      surplus: "Dairy, Wheat/Corn",
      demand: "Salt"
    }
  }
];

export default function CulturesSubTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerrain, setSelectedTerrain] = useState('All');
  const [selectedClimate, setSelectedClimate] = useState('All');
  const [selectedCulture, setSelectedCulture] = useState(null);

  // Get unique terrains and climates for filters
  const terrains = ['All', ...new Set(cultures.map(c => c.terrain))];
  const climates = ['All', ...new Set(cultures.map(c => c.climate))];

  // Filter cultures
  const filteredCultures = cultures.filter(culture => {
    const matchesSearch = culture.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTerrain = selectedTerrain === 'All' || culture.terrain === selectedTerrain;
    const matchesClimate = selectedClimate === 'All' || culture.climate === selectedClimate;
    return matchesSearch && matchesTerrain && matchesClimate;
  });

  const CultureListItem = ({ culture }) => (
    <button
      onClick={() => setSelectedCulture(culture)}
      className={`w-full text-left p-4 rounded-lg border transition-all ${selectedCulture?.name === culture.name
          ? 'bg-blue-900 border-blue-500'
          : 'bg-slate-900 border-slate-600 hover:bg-slate-800'
        }`}
    >
      <h3 className="text-lg font-bold text-blue-300">{culture.name}</h3>
      <div className="flex gap-4 mt-2 text-sm text-slate-400">
        <span>🌍 {culture.terrain}</span>
        <span>🌡️ {culture.climate}</span>
        <span>👥 {culture.racialMajority}</span>
      </div>
    </button>
  );

  const CultureDetail = ({ culture }) => (
    <div className="bg-slate-900 rounded-lg p-6 border border-slate-600">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-2">{culture.name}</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="bg-slate-800 px-3 py-1 rounded">🌍 {culture.terrain}</span>
          <span className="bg-slate-800 px-3 py-1 rounded">🌡️ {culture.climate}</span>
          <span className="bg-slate-800 px-3 py-1 rounded">👥 {culture.racialMajority}</span>
          {culture.leader !== 'N/A' && culture.leader && (
            <span className="bg-slate-800 px-3 py-1 rounded">👑 {culture.leader}</span>
          )}
        </div>
      </div>

      {/* Character Creation Info */}
      <div className="mb-6 p-4 bg-blue-950 rounded-lg border border-blue-800">
        <h3 className="text-xl font-bold text-blue-300 mb-3">Character Creation</h3>
        <div className="grid md:grid-cols-2 gap-4 text-slate-300">
          <div>
            <span className="font-semibold text-blue-400">Skills:</span> {culture.skills.join(', ')}
          </div>
          <div>
            <span className="font-semibold text-blue-400">Languages:</span> {culture.languages}
          </div>
          <div>
            <span className="font-semibold text-blue-400">Racial Restriction:</span> {culture.racialRestriction}
          </div>
          <div>
            <span className="font-semibold text-blue-400">Economy:</span> Surplus: {culture.economy.surplus} | Demand: {culture.economy.demand}
          </div>
        </div>
      </div>

      {/* Cultural Descriptions */}
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-bold text-blue-300 mb-2">🍴 Food & Cuisine</h4>
          <p className="text-slate-300 italic leading-relaxed">"{culture.description.food}"</p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-blue-300 mb-2">👔 Fashion & Dress</h4>
          <p className="text-slate-300 italic leading-relaxed">"{culture.description.fashion}"</p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-blue-300 mb-2">🎨 Arts & Culture</h4>
          <p className="text-slate-300 italic leading-relaxed">"{culture.description.arts}"</p>
        </div>
      </div>

      {/* Cultural Traits */}
      <div className="mt-6 p-4 bg-slate-800 rounded-lg">
        <h4 className="text-lg font-bold text-blue-300 mb-3">Cultural Traits</h4>
        <div className="grid md:grid-cols-3 gap-3 text-sm text-slate-300">
          <div><span className="font-semibold text-blue-400">Stratification:</span> {culture.traits.stratification}</div>
          <div><span className="font-semibold text-blue-400">Community:</span> {culture.traits.community}</div>
          <div><span className="font-semibold text-blue-400">Self:</span> {culture.traits.self}</div>
          <div><span className="font-semibold text-blue-400">Laws:</span> {culture.traits.laws}</div>
          <div><span className="font-semibold text-blue-400">Change:</span> {culture.traits.change}</div>
          <div><span className="font-semibold text-blue-400">Indulgence:</span> {culture.traits.indulgence}</div>
          <div><span className="font-semibold text-blue-400">Social:</span> {culture.traits.social}</div>
          <div><span className="font-semibold text-blue-400">Military:</span> {culture.traits.military}</div>
          <div><span className="font-semibold text-blue-400">Family:</span> {culture.traits.family}</div>
          <div><span className="font-semibold text-blue-400">Inheritance:</span> {culture.traits.inheritance}</div>
        </div>
      </div>
    </div>
  );

  return (
    <SectionCard>
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Cultures of Dark Havens</h2>

      {/* Search and Filters */}
      <div className="mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search cultures..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Filter size={16} className="text-slate-400" />
            <select
              value={selectedTerrain}
              onChange={(e) => setSelectedTerrain(e.target.value)}
              className="px-3 py-1 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            >
              {terrains.map(terrain => (
                <option key={terrain} value={terrain}>{terrain}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Filter size={16} className="text-slate-400" />
            <select
              value={selectedClimate}
              onChange={(e) => setSelectedClimate(e.target.value)}
              className="px-3 py-1 bg-slate-900 text-slate-100 rounded border border-slate-600 focus:border-blue-500 focus:outline-none"
            >
              {climates.map(climate => (
                <option key={climate} value={climate}>{climate}</option>
              ))}
            </select>
          </div>

          {(searchTerm || selectedTerrain !== 'All' || selectedClimate !== 'All') && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTerrain('All');
                setSelectedClimate('All');
              }}
              className="px-3 py-1 bg-red-900 hover:bg-red-800 text-white rounded text-sm transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="text-sm text-slate-400">
          Showing {filteredCultures.length} of {cultures.length} cultures
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Culture List */}
        <div className="md:col-span-1 space-y-2 max-h-[800px] overflow-y-auto pr-2">
          {filteredCultures.map(culture => (
            <CultureListItem key={culture.name} culture={culture} />
          ))}
        </div>

        {/* Culture Detail */}
        <div className="md:col-span-2">
          {selectedCulture ? (
            <CultureDetail culture={selectedCulture} />
          ) : (
            <div className="bg-slate-900 rounded-lg p-12 border border-slate-600 text-center">
              <p className="text-slate-400 text-lg">Select a culture from the list to view details</p>
            </div>
          )}
        </div>
      </div>
    </SectionCard>
  );
}