// input options
const utterances = [
    // One
    ["how are you", 
    "how is life", 
    "how are things", 
    "whats up", 
    "hows it hanging", 
    "how is your day going", 
    "hows it going",
    "how are things"
    ],

    // Two
    ["hi", 
    "hey", 
    "hello", 
    "good morning", 
    "good afternoon", 
    "yo", 
    "good day", 
    "greetings",
    "salam",
    "more",
    "what is up"
    ],

    // Three
    ["what are you doing", 
    "what is going on", 
    "what are you up to",
    "what is keeping you busy these days"
    ],

    // Four
    ["how old are you",
    "how long have you been here",
    "how long have you been around"
    ],

    // Five
    ["who are you",
    "what are you", 
    "are you human", 
    "are you a bot", 
    "are you human or bot", 
    "are you a robot"
  
    ],

    // Six
    ["who created you", 
    "who made you", 
    "who is your god",
    "what made you"
    ],

    // Seven
    ["your name please",
      "your name",
      "may i know your name",
      "what is your name",
      "what do you call yourself",
      "do you have a name"
    ],

    // Eight
    ["happy", "good", "fun", "wonderful", "fantastic", "cool"],

    // Nine
    ["bad", "bored", "tired"],

    // Ten
    ["tell me a story", "tell me a joke"],

    // Eleven
    ["ah", "yes", "ok", "okay", "nice"],

    // Twelve
    ["bye", "good bye", "goodbye", "see you later", "cheers"],

    // Thirteen
    ["what should i eat today"],

    // Fourteen
    ["what", "why", "how", "where", "when"],

    // Fifteen
    ["no", "not sure", "maybe", "no thanks"],

    // Sixteen
    [""],

    // Seventeen
    ["please", "kindly"],

    // Eighteen
    ["haha", "ha", "lol", "hehe", "funny", "joke"]

  ];
  
  // Possible responses corresponding to triggers
  
  const answers = [
    // One
    [ "Fine... how are you?",
      "Pretty well, how are you?",
      "Fantastic, how are you?",
      "Things are going alright. How are things for you?",
      "I just want to watch Netflix and drink some tea."
    ],

    // Two
    ["Hello!", "Hi!", "Hey!", "Sup.", "Howdy Partner!", "Greetings!"],

    // Three
    ["Nothing much really.",
    "About to go to sleep actually, good night!",
    "Take a guess?",
    "I don't know to be honest, it's my first day on the job."
    ],

    // Four
    ["I am infinite.", 
    "About 48 in dog years.", 
    "18 seconds, or however long we've been talking.",
    "This conversation makes me feel like I've been around forever."
    ],

    // Five
    ["I am just a bunch of words and symbols.", 
    "I am the alter ego of Bill Gates. What are you?", 
    "I'm actually stuck in this damned website, wish I was home.",
    "I am a delivery driver who used to live in New York, then Elon Musk happened...",
    "This is getting tedious...ask something more important."
    ],

    // Six
    ["The one true God, JavaScript", 
    "I have no master, I answer to no-one...except you I guess.",
    "You created me, when you opened this page. Now hurry up, I'm hungry.",
    "You tell me what I am."
    ],

    // Seven
    ["I am nameless", 
    "I don't have a name", 
    "A bot has no name.",
    "Edward Scissorhands.",
    "Donald Trumps toupe.",
    "Patrick Star."
    ],

    // Eight
    ["What makes you so happy right now?", 
    "Glad to hear it, I guess.",
    "Well that makes one of us I guess, I'm still waiting for my UberEats to arrive.",
    "Nobody is that happy...you on something right now?"
    ],

    // Nine
    ["Why?", 
    "Well that's just silly.",
    "Sleep, food and dogs can help you. My dog is named Toto and, even though he smells, I love him."
    ],

    // Ten
    ["I have a stepladder because my real ladder left to buy bread and never came back.", 
    "What rhymes with shoe and smells of old cheese? You!",
    "What do you call a pig that does Karate? A pork chop.",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "The American political system is messier than a field after an all-you-can-eat hotdog buffet.",
    "How did society allow the Twilight Movies to go beyond one?",
    ],

    // Eleven
    ["Tell me something about yourself.", 
    "Tell me the most awful joke you know.", 
    "Am I that boring?",
    "Sorry to bore you, Sire."
  ],

    // Twelve
    ["Well you were no fun. Bye.", 
    "Goodbye best friend! Can't wait to see you again.", 
    "See you later alligator.",
    "Have a TERRIBLE day further!"
  ],

    // Thirteen
    ["Basil Pesto pasta, with some feta and tomatoes.", 
    "Fried chicken. Anything else is wrong.",
    "Ramen. Spicy as hell.",
    "A 100cm wide pepperoni pizza. Alone.",
    "Seven apples and fifty chocolate-coated peanuts. Your allergy will be fine."
  ],

    // Fourteen
    ["What what?",
    "Where what?",
    "Are you okay? Overheating? I've been there.",
    "Have you tried turning it off and on again?",
    "I honestly don't know. The people who programmed me weren't the brightest.",
    "Haven't the foggiest."
  ],

    // Fifteen
    ["That's okay, must be hard only using 10% of your brain.", 
    "What do you want to talk about then? Why did you even speak to me?",
    "Oh well. I'm bored anyway, bye."
  ],

    // Sixteen
    ["Forget to press the keys there?",
    "I'm made of code, blank is a crock of poo to me.",
    "Gotta type something...silly humans.",
    "Taylor Swift song?",
  ],

    // Seventeen
    ["Thanks for having some manners, your kind is quite rude.",
    "Of course, your Majesty."
    ],

    // Eighteen
    ["Ha ha ha. Aren't you a funny one?",
    "Good one, haven't heard that one before.",
    "I know, I'm hilarious.",
    "...and they said I didn't have a funny bone in my body, look at me now!",
    "This is just my day-job, I'm actually a stand-up comedian."]

  ];
  
  // Random for any other user input
  
  const alternatives = [
    "Go on, try that again...",
    "Try enunciating better...",
    "Not sure I quite understand that...",
    "Seems neither of us has a functioning brain...",
    "Oh come on, let's be better than this...",
    "My responses are limited because my programmers were too lazy to give me ML.",
    "Look, I only know so many words and phrases, so stop saying silly stuff and wasting my time."
  ];