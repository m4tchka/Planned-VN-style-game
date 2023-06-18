// NOTE: Change iterator in app.js to look through object's keys instead of array
export const story = {
    "0": {
        id: "0",
        title: "scene0",
        summary: "Aiko is introduced and meets the player ...",
        scene: [
            {
                Name: "",
                Dialogue: "!!!",
                // Background: `/backgrounds/pureWhite.jpg`,
                Background: `/backgrounds/test.jpg`,
                // Effects: "Flash",
            },
            {
                Name: "",
                Dialogue: " ... ",
            },
            {
                Name: "",
                Dialogue: "(Urgh...)",
            },
            {
                Name: "",
                Dialogue: "...",
            },
            {
                Name: "",
                Dialogue: "(Where am I ... ?)",
                Background: `/backgrounds/peacefulCabin.jpg`,
            },
            {
                Name: "",
                Dialogue: "...",
            },
            {
                Name: "",
                Dialogue: "Behind someone's house?",
            },
            {
                Name: "",
                Dialogue: "...",
            },
            {
                Name: "",
                Dialogue: "Huh...",
            },
            {
                Name: "",
                Dialogue: "Wait...",
            },
            {
                Name: "",
                Dialogue:
                    "How did I get here? The nearest countryside is hours away...",
                // Sounds: "Footsteps",
            },
            {
                Name: "???",
                Dialogue: "Huh! Who are you???",
            },
            {
                Name: "",
                Dialogue: "(A girl? Why is she just staring at me?)",
            },
            {
                Name: "???",
                Dialogue: "Why are you standing behind my house?",
            },
            {
                Name: "???",
                Dialogue:
                    "If you aren't going to say anything, then just leave!",
            },
            {
                Name: "",
                Dialogue: "Uhh... (I have no idea what to say)",
            },
            {
                Name: "",
                Dialogue: "Hello.",
            },
            {
                Name: "???",
                Dialogue: "...",
            },
            {
                Name: "",
                Dialogue: "...",
            },
            {
                Name: "???",
                Dialogue: "...",
            },
            {
                Name: "???",
                Dialogue: "*Sigh*",
            },
            {
                Name: "???",
                Dialogue: "Let's try this again... ",
            },
            {
                Name: "???",
                Dialogue: "WHO---ARE---YOU???",
            },
            {
                PlayerInput: true,
                Name: "",
                Dialogue: "...",
            },
            {
                Name: "???",
                Dialogue:
                    "Oh I see, well, hello $YourName... please may you explain what you are doing behind my house?",
            },
            {
                Name: "",
                Dialogue: "Well, I...",
            },
            {
                Name: "???",
                Dialogue: "You...?",
            },
            {
                Name: "",
                Dialgoue: "...",
                Question: "(How should I answer her?)",
                Options: [
                    {
                        Text: "Well...",
                        Next: `0a`,
                        LuckChange: 0,
                        MinLuck: 0,
                    },
                    {
                        Text: "(Tell the truth)",
                        Next: `0b`,
                        LuckChange: 0,
                        MinLuck: 0,
                    },
                    {
                        Text: "I'm not really sure to be honest...",
                        Next: `0c`,
                        LuckChange: 0,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
    "0a": {
        id: "0a",
        title: "scene0a",
        summary: "scene0a description",
        scene: [
            {
                Name: "",
                Dialogue:
                    "It's a bit of a long story, but I was walking back from the supermarket...",
            },
            {
                Name: "",
                Dialogue: "...and well-",
            },
            {
                Name: "???",
                Dialogue:
                    "Hang on... the nearest market is almost a day's travel from here...",
            },
            {
                Name: "???",
                Dialogue: "...and what's a supermarket?",
            },
            {
                Name: "???",
                Dialogue: "Is it a new type of market?",
            },
            {
                Name: "",
                Dialogue:
                    "(This is really strange... she doesn't know what a supermarket is, and we appear to be really far into the countryside)",
            },
            {
                Name: "",
                Dialogue:
                    "(It was also night when I was walking home, yet it's daytime here...)",
            },
            {
                Name: "",
                Dialogue: "(This really doesn't add up...)",
                ForcedNext: "0f",
            },
        ],
    },
    "0b": {
        id: "0b",
        title: "scene0b",
        summary: "scene0b description",
        scene: [
            {
                Name: "",
                Dialogue:
                    "It's hard to believe, but I was walking home at night, and suddently there was a bright flash of light and I ended up here.",
            },
            {
                Name: "",
                Dialogue:
                    "My whole body hurts, like I was hit by a bus or something...",
            },
            {
                Name: "???",
                Dialogue: "What's a bus?",
            },
            {
                Name: "",
                Dialogue:
                    "Huh? You know, the thing that carries lots of people along a particular route...",
            },
            {
                Name: "???",
                Dialogue: "Like a carriage?",
            },
            {
                Name: "",
                Dialogue: "Uhh... ",
            },
            {
                Name: "",
                Dialogue: "(Was this girl living under a rock? Or...)",
                ForcedNext: "0f",
            },
        ],
    },
    "0c": {
        id: "0c",
        title: "scene0c",
        summary: "scene0c description",
        scene: [
            {
                Name: "",
                Dialogue: "I'm just as confused as you are...",
            },
            {
                Name: "",
                Dialogue: "There was a light that filled my entire vision...",
            },
            {
                Name: "",
                Dialogue:
                    "... and then I must have been unconscious, since I don't remember anything after that.",
            },
            {
                Name: "",
                Dialogue: "When I woke up I was lying here in the grass.",
            },
            {
                Name: "",
                Dialogue: "I have no idea where 'here' is though...",
                ForcedNext: "0f",
            },
        ],
    },
    "0f": {
        id: "0f",
        title: "scene0f",
        summary: "scene0f description",
        scene: [
            {
                Name: "",
                Dialogue: "Where are we, by the way?",
            },
            {
                Name: "???",
                Dialogue: "Hmm...",
            },
            {
                Name: "",
                Dialogue: "What?",
            },
            {
                Name: "???",
                Dialogue:
                    "You must be another one of those 'people from another world' that the Wizard talked about...",
            },
            {
                Name: "",
                Dialogue: "The WHAT now!?",
            },
            {
                Name: "",
                Dialogue: "A real wizard exists here?!",
            },
            {
                Name: "???",
                Dialogue:
                    "Yup! He even said you people always have the same reaction! I'm sure of it now, you must be from another world!",
            },
            {
                Name: "???",
                Dialogue:
                    "Well, I think he would know best on what to do in cases like this, so I can take you to see him, if you'd like?",
            },
            // Possible early branch here - refuse her and go your own way - meet different MC girl in the wilderness
            {
                Name: "",
                Dialogue: "(!!!)",
            },
            {
                Name: "",
                Dialogue: "Yes please, I think sounds like it would be best...",
            },
            {
                Name: "",
                Dialogue: "(A real wizard!!!)",
            },
            {
                Name: "???",
                Dialogue:
                    "Also, to answer your earlier question, we are in the land of >>>>NAME<<<<",
            },
            {
                Name: "???",
                Dialogue:
                    "And for the likely next question, it is the year of >>>YEAR<<<, and the month of >>>MONTH<<<",
            },
            {
                Name: "",
                Dialogue:
                    "Wow... yeah, I've never heard of any of those before... this really is a totally different world...",
            },
            {
                Name: "???",
                Dialogue:
                    "Well, on behalf of the citizens of >>>>NAME<<<<, I welcome you to our world !",
            },
            { Name: "", Dialogue: "Uh thanks..." },
            {
                Name: "???",
                Dialogue:
                    "No problem ! It's a long journey through the woods to get to the wizard's home, but fortunately, you appeared in the morning...",
            },
            {
                Name: "???",
                Dialogue: "...so we should be able to make it by evening.",
            },
            { Name: "", Dialogue: "Alright, I guess we should set off then." },
            { Name: "???", Dialogue: "Yup!" },
            { Name: "???", Dialogue: "Ohh wait!" },
            { Name: "", Dialogue: "What's the matter? " },
            {
                Name: "???",
                Dialogue: "I've just realised that I never introduced myself!",
            },
            {
                Name: "",
                Dialogue:
                    "Huh, you're right... (How did I miss something like that?)",
            },
            {
                Name: "???",
                Dialogue:
                    "Well, my name is Aiko, and I live in that cabin over there...",
            },
            {
                Name: "Aiko",
                Dialogue: "... so if you have any questions, let me know!",
            },
            {
                Name: "",
                Dialogue: "Sure, I guess I can just ask them on the journey then",
            },
            {
                Name:"Aiko",
                Dialogue:"Okay! Shall we set off then ? The trail starts down this path behind the house."
            },
            {
                Name:"",
                Dialogue:"Sure, let's go.",
                ForcedNext: "0i",
            }
            // --- Prompt --- (updates state etc)
        ],
    },
    "0i":{
        id:"0i",
        title:"scene0i",
        summary:"scene0i description",
        scene:[
            {
                Name:"",
                Dialogue:"...",
                // Background:"Forests.jpg"
            },
            {
                Name:"Aiko",
                Dialogue:"So, what is it like in your world, huh ?",

            },
        ],
    },
    1: {
        id: "1",
        title: "scene1",
        summary: "scene1 description",
        scene: [
            {},
            {},
            {
                Name: "",
                Dialogue: "",
                Options: [
                    {
                        Text: "Option 1",
                        Next: "4",
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2",
                        Next: "5",
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3",
                        Next: "6",
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
    2: {
        scene: [
            {},
            {},
            {
                Name: "",
                Dialogue: "",
                Options: [
                    {
                        Text: "Option 1 leading to 4",
                        Next: 4,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2 leading to 5",
                        Next: 5,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3 leading to 6",
                        Next: 6,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
};
