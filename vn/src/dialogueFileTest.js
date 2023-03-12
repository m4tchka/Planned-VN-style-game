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
                PlayerInput:true,
                Name:"",
                Dialogue:"...",
            },
            {
                Name:"???",
                Dialogue:"Oh I see, well, hello $YourName... please may you explain what you are doing behind my house?",
            },
			{
				Name:"",
				Dialogue:"Well, I...",
			},
			{
				Name:"???",
				Dialogue:"You...?",
			},
			{
				Name:"",
				Dialogue:"It's hard to believe, but I was walking down a road near my house, and there was a bright flash of light and I ended up here.",
			},
			{
				Name:"",
				Dialogue:"My whole body hurts though, like I was hit by a bus or something...",
			},
			{
				Name:"???",
				Dialogue:"What's a bus?",
			},
			{
				Name:"",
				Dialogue:"Huh? You know, the thing that carries lots of people along a certain route...",
			},
			{
				Name:"???",
				Dialogue:"Like a carriage?",
			},
			{
				Name:"",
				Dialogue:"Uhh... ",
			},
			{
				Name:"",
				Dialogue:"(Was this girl living under a rock? Or...)",
			},
			{
				Name:"",
				Dialogue:"Where are we, by the way?",
			},
			{
				Name:"???",
				Dialogue:"Hmm...",
			},
			{
				Name:"",
				Dialogue:"What?",
			},
			{
				Name:"???",
				Dialogue:"You must be another one of those 'people from another world' that the Wizard talked about...",
			},
			{
				Name:"",
				Dialogue:"The WHAT now!?",
			},
			{
				Name:"",
				Dialogue:"A real wizard exists here?!",
			},
			{
				Name:"???",
				Dialogue:"Yup! He even said you people always have the same reaction! I'm sure of it now, you must be from another world!",
			},
			{
				Name:"???",
				Dialogue:"Well, I think he would know best on what to do in cases like this, so I can take you to see him, if you'd like?",
			},
			// Possible early branch here - refuse her and go your own way - meet different MC girl in the wilderness
			{
				Name:"",
				Dialogue:"(!!!)",
			},
			{
				Name:"",
				Dialogue:"Yes please, I think sounds like it would be best...",
			},
			{
				Name:"",
				Dialogue:"(A real wizard!!!)",
			},
			{
				Name:"???",
				Dialogue:"Also, to answer your earlier question, we are in the land of >>>>NAME<<<<",
			},
			{
				Name:"???",
				Dialogue:"And to ask the likely next question, it is the year of >>>YEAR<<<, and the month of >>>MONTH<<<",
			},
			{
				Name:"",
				Dialogue:"Wow... yeah, I've never heard of any of those before... this really is a totally different world...",
			},
			{
				Name:"",
				Dialogue:"",
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
