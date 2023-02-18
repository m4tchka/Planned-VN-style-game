let ch1 = [
    {
        id: 1,
        scene: [
            {
                Name: "Aiko",
                Dialogue: "Greetings ! I'm Aiko",
                // Background: "https://wallpaperaccess.com/full/259711.jpg",
                Background:`/backgrounds/peacefulCabin.jpg`,
                Sprites: [
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/A_All/Blazer Uniform/Aiko_Blazer_Smile.png`,
                    },
                    {},
                    {},
                ],
                // Sound effects
            },
            {
                Name: "Aiko ?",
                Dialogue:"Hey there ! I'm Aiko, but with cat ears! You can call me Aico !",
                Sprites: [
                    {},
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Closed_Open_Blush.png`,
                    },
                ],
            },
            {
                Name: "Aiko",
                Dialogue: "Well Aico, why don't we go have a picnic ?",
                Sprites: [
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Smile.png`,
                    },
                    {},
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue: "Sure, sounds fun ! Lets do it !",
                Sprites: [
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Smile.png`,
                    },
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Open.png`,
                    },
                ],
            },
            {
                Name: "Aiko",
                Dialogue: "But first, lets decide where we'll go !",
            },
            {
                Name: "",
                Dialogue: "",
                Question: "Where should we go ?",
                Options: [
                    {
                        Text: "Visit the densely forested valley",
                        Next: 1,
                        LuckChange: +1,
                        MinLuck: 0,
                    },
                    {
                        Text: "Take the meandering path along the cliffside",
                        Next: 2,
                        LuckChange: +2,
                        MinLuck: 0,
                    },
                    {
                        Text: "Follow the road straight through the forest",
                        Next: 3,
                        LuckChange: -1,
                        MinLuck: 0,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        scene: [
            {
                Name: "Aico",
                Dialogue: "Lets go to the forest valley !",
                Sprites: [
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Smile.png`,
                    },
                    {},
                ],
            },
            {
                Name: "Aiko",
                Dialogue: "Alright then... I find it pretty scary though...",
                Sprites: [
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Frown.png`,
                    },
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Smile.png`,
                    },
                ],
            },
            {
                Name: "Aico",
                Dialogue: "Don't worry Aiko, it'll be fiiine...",
            },
            {
                Name: "",
                Dialogue: "Some time later...",
                // Background:"https://img.wallpapersafari.com/desktop/1920/1080/22/18/yoGWPq.jpg",
                Background:`/backgrounds/forestValley.jpg`,
                Sprites: [
                    {},
                    {},
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue: "We finally arrived ! Lets go find a nice clearing and have a picnic or something !",
                Sprites: [
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Closed_Open.png`
                    },
                    {},
                ],
            },
            {
                Name: "Aiko",
                Dialogue: "Ufff sounds good... I'm exhausted...",
                Sprites: [
                    {                        
                        Name:"Aiko",
                        Path: `/sprites/Aiko/A_All/Blazer Uniform/Aiko_Blazer_Closed_Frown.png`
                    },
                    {},
                    {},
                ],
            },
        ],
    },
    {
        id: 4,
        scene: [
            {
                Name: "Aico",
                Dialogue:"Hmm, why don't we take the path along the cliffside ? We haven't gone that way in a while ",
            },
            {
                Name: "Aiko",
                Dialogue: "As you wish Aico, lead the way...",
                Sprites: [
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Frown.png`,
                    },
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Open.png`,
                    },
                ],
            },
            {
                Name: "Aico",
                Dialogue: "Woweeeee we're here !!!",
                Background:`/backgrounds/cliffsidePath.jpg`,
                // Background: "https://wallpaperaccess.com/full/836696.jpg",
                Sprites: [
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Closed_Open_Blush.png`,
                    },
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue: "Look, look ! It's so pretty !",
            },
            {
                Name: "Aiko",
                Dialogue:"Goodness me, the forest really does look pretty from here ! I've missed this view ...",
                Sprites: [
                    {},
                    {
                        Name:"Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Smile.png`,
                    },
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue: "Lets go to the top of that hill ! The view'll be even better from there !",
                Sprites: [
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Closed_Open_Blush.png`,
                    },
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue:"Uhhh Aiko ? Come on, we won't be able to see the view if it gets too dark...",
                Sprites: [
                    {},
                    {
                        Name: "Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Frown.png`,
                    },
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue:"Aikoooooo you're so slowwwww, hurry up ! I'm all the way over here and you're over there !",
            },
            {
                Name: "Aiko",
                Dialogue:"*Huff* *Puff* Slow down, Aico ! You're gonna get lost running ahead like that !!! Blegh...",
                Sprites: [
                    {},
                    {},
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Closed_Frown_Blush.png`,
                    },
                ],
            },
            {
                Name: "Aiko",
                Dialogue: "How irritating...",
            },
        ],
    },
    {
        id: 5,
        scene: [
            {
                Name: "Aiko",
                Dialogue: "Hmm actually, I think I know a good spot",
                Sprites: [
                    {},
                    {
                        Name:"Aiko",
                        Path:`/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Open.png`,
                    },
                    {},
                ],
            },
            {
                Name: "Aiko",
                Dialogue:"We can follow the road, until we reach the river. There's a great view over a hidden waterfall just downstream",
            },
            {
                Name: "Aico",
                Dialogue: "Wooo, sounds great ! Lets go right now !",
                Sprites: [
                    {},
                    {},
                    {
                        Name:"Aico",
                        Path:`/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Closed_Open.png`
                    },
                ],
            },
            {
                Name: "Aiko",
                Dialogue: "Aico wait !",
                Sprites: [
                    {
                        Name:"Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Frown.png`
                    },
                    {},
                    {},
                ],
            },
            {
                Name: "Aiko",
                Dialogue:"Pleaseeee Aico... My legs are gonna fall off at this rate...",
                // Background:"https://img.wallpapersafari.com/desktop/1920/1080/93/59/46lIUy.jpg",
                Background:`/backgrounds/pathThroughForest.jpg`,
                Sprites: [
                    {
                        Name:"Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Closed_Frown_Blush.png`
                    },
                    {},
                    {},
                ],
            },
            {
                Name: "Aico",
                Dialogue: "Nearly there Aiko ! You can do it !",
                Sprites: [
                    {
                        Name:"Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Closed_Frown_Blush.png`
                    },
                    {},
                    {
                        Name:"Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Smile.png`
                    },
                ],
            },
            {
                Name: "Aico",
                Dialogue: "...",
            },
            {
                Name: "Aico",
                Dialogue: "Aww ok... Put your arm around my shoulder",
                Sprites: [
                    {
                        Name:"Aiko",
                        Path: `/sprites/Aiko/B_BlazerC/Aiko_B_Blazer_Closed_Frown_Blush.png`
                    },
                    {
                        Name:"Aico",
                        Path: `/sprites/Aiko/A_AllCatC/Winter Uniform/Aiko_Cat_WinterSera_Smile.png`
                    },
                    {},
                ],
            },
        ],
    },
];

/* 
Animations: ["some","numbers","here"],
Sprite: "Normal" 

            {   
                Name: "Ganyu",
                Dialogue:"I could do with an Adeptus' Temptation... ",
            },
            {
                Name:"Xiangling",
                Dialogue:"Sounds delicious !"
            },  

*/
export { ch1 };
