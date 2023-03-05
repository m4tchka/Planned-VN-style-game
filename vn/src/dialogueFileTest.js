// NOTE: Change iterator in app.js to look through object's keys instead of array
let ch1Test = {
    0: {
        id: 0,
        title: "scene0",
        summary:"scene0 description",
        scene: [
            {
                Name: "",
                Dialogue: "!!!",
                // Background: `/backgrounds/pureWhite.jpg`,
                Background: `/backgrounds/test.jpg`,
            },
            {
                Name: "",
                Dialogue: " ... ",
            },
            {
                Name: "...",
                Dialogue: "(Urgh...)",
            },
            {
                Name: "...",
                Dialogue: "...",
            },
            {
                Name: "...",
                Dialogue: "(Where am I ... ?)",
                Background: `/backgrounds/peacefulCabin.jpg`,
            },
            {
                Name: "...",
                Dialogue: "...",
            },
            {
                Name: "...",
                Dialogue: "Behind someone's house?",
            },
            {
                Name: "...",
                Dialogue: "...",
            },
            {
                Name: "...",
                Dialogue: "Huh...",
            },
            {
                Name: "...",
                Dialogue: "Wait...",
            },
            {
                Name: "...",
                Dialogue:
                    "How did I get here? The nearest countryside is hours away...",
            },
            {
                Name: "???",
                Dialogue: "Huh! Who are you???",
            },
            {
                Name: "...",
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
                Name: "...",
                Dialogue: "Uhh... (I have no idea what to say)",
            },
            {
                Name: "...",
                Dialogue: "Hello.",
            },
            {
                Name: "???",
                Dialogue: "...",
            },
            {
                Name: "...",
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
                PlayerInput:true,
            },
            {
                Name:"",
                Dialogue:"",
                Question:"Test question",
                Options:[
                    {
                        Text:"Option 1",
                        Next:1,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2",
                        Next: 2,
                        LuckChange: +2,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3",
                        Next: 3,
                        LuckChange: -1,
                        MinLuck: 0,
                    },
                ]
            }
            // --- Prompt --- (updates state etc)
        ],
    },
    1: {
        id: 1,
        title: "scene1",
        summary:"scene1 description",
        scene: [
            {},
            {},
            {
                Name: "",
                Dialogue: "",
                Options: [
                    {
                        Text: "Option 1",
                        Next: 4,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 2",
                        Next: 5,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Option 3",
                        Next: 6,
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
export { ch1Test };
