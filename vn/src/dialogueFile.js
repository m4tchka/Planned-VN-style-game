let ch1 = 
[
    {
        id:1,
        scene:[
            {
                Name:"Aiko",
                Dialogue:"Greetings ! I'm Aiko",
                Background:"https://wallpaperaccess.com/full/259711.jpg",
                Sprites: [ 
                    {
                        Name: "Aiko",
                        Path: `/sprites/Aiko/A_All/Winter Uniform/Aiko_WinterSera_Frown.png`,
                    },
                    {
                        /* Name: "Aikoooooooooooooo",
                        Path: `${process.env.PUBLIC_URL}/sprites/Aiko/Winter Uniform/Aiko_Cat_WinterSera_Frown.png`, */
                    },
                    {
/*                         Name: "Aikoooooooooooooo",
                        Path: `/sprites/Aiko/B_Blazer/Aiko_B_Blazer_Frown.png`, */
                    }, 
                ],
            },
            {
                Name:"Aiko ?",
                Dialogue:"Hey there ! I'm Aiko, but with cat ears! You can call me Aico.",
            },
            {
                Name:"Aiko",
                Dialogue:"Well Aico, why don't we go have a picnic ?",
            },
            {
                Name:"Aico",
                Dialogue:"Sure, sounds fun ! Lets do it",
            },
            {
                Name:"Aiko",
                Dialogue:"But first, lets decide where we'll go !",
            },
            {
                Name:"",
                Dialogue:"",
                Question:"Where should we go ?",
                Options: [
                    {
                        Text:"Visit the densely forested valley",
                        Next:1,
                        LuckChange:+1,
                        MinLuck: 0,
                    
                    },
                    {
                        Text:"Take the meandering path along the cliffside",
                        Next:2,
                        LuckChange:+2,
                        MinLuck: 0,
                    },
                    {
                        Text:"Follow the road straight through the forest",
                        Next:3,
                        LuckChange:-1,
                        MinLuck: 0,
                    },
                
                ]
                
            },
        ],
    },
    {
        id:3,
        scene:[
            {
                Name:"Aico",
                Dialogue:"Lets go to the forest valley !",
            },
            {
                Name:"Aiko",
                Dialogue:"Alright then... I find it pretty scary though...",
            },
            {
                Name:"Aico",
                Dialogue:"Don't worry Aiko, it'll be fiiine...",
            },
            {
                Name:"",
                Dialogue:"Some time later...",
                Background:"https://img.wallpapersafari.com/desktop/1920/1080/22/18/yoGWPq.jpg",
            },
            {
                Name:"Aico",
                Dialogue:"We finally arrived ! Lets go find a nice clearing and have a picnic or something !",
            },
            {
                Name:"Aiko",
                Dialogue:"Ufff sounds good... I'm exhausted...",
            },
        ],
    },
    {
        id:5,
        scene:[
            {
                Name:"Aico",
                Dialogue:"Hmm, why don't we take the path along the cliffside ? We haven't gone that way in a while ",
            },
            {
                Name:"Aiko",
                Dialogue:"As you wish Aico, lead the way...",
            },
            {
                Name:"Aico",
                Dialogue:"Woweeeee we're here",
                Background:"https://wallpaperaccess.com/full/836696.jpg",
            },
            {
                Name:"Aico",
                Dialogue:"Look, look ! It's so pretty !",
            },
            {
                Name:"Aiko",
                Dialogue:"Goodness me, the forest really does look pretty from here ! I've missed this view",
            },
            {
                Name:"Aico",
                Dialogue:"Lets go to the top of that hill ! The view'll be even better from there !",
            },
            {
                Name:"Aico",
                Dialogue:"Aiko ? Come on, we won't be able to see the view if it gets too dark...",
            },
            {
                Name:"Aico",
                Dialogue:"Aikoooooo you're so slowwwww, hurry up ! I'm all the way over here and you're over there !",
            },
            {
                Name:"Aiko",
                Dialogue:"*Huff* *Puff* Slow down, Aico ! You're gonna get lost running ahead like that !!! Blegh...",
            },
            {
                Name: "Aiko",
                Dialogue:"How irritating...",
            },
        ],
    },
    {
        id:6,        
        scene:[
            {
                Name:"Aiko",
                Dialogue:"Hmm actually, I think I know a good spot",
            },
            {
                Name:"Aiko",
                Dialogue:"We can follow the road, until we reach the river. There's a great view over a hidden waterfall just downstream",
            },
            {
                Name:"Aico",
                Dialogue:"Wooo, sounds great ! Lets go right now !",
            },
            {
                Name:"Aiko",
                Dialogue:"Aico wait !",
            },
            {
                Name:"Aiko",
                Dialogue:"Pleaseeee Aico... My legs are gonna fall off at this rate...",
                Background:"https://img.wallpapersafari.com/desktop/1920/1080/93/59/46lIUy.jpg",
            },
            {
                Name:"Aico",
                Dialogue:"Nearly there Aiko ! You can do it !",
            },
            {
                Name:"Aiko",
                Dialogue:"...",
            },
            {
                Name:"Aico",
                Dialogue:"Aww ok... Put your arm around my shoulder",
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

/* 
{
    Name:"Person2",
    Type: "Dialogue" | "Question",
    Text:"The name's 2. Person 2.",
    Route("if Type:Dialogue & after a question"): "a"/"b"/"c",
    Choice("if Type:Question"):[
        {text:"This is choice 1"},
        {text:"This is choice 2"},
        {text:"This is choice 3"},
    ]
}
*/
/* 
                Question: "What do I do now ?",
                Options: [
                            {
                                text:"Go left, with Person2",
                                route:"a"
                            },
                            {
                                text:"Go center, with Person3",
                                route:"b"
                            },
                            {
                                text:"Go right, with Person4",
                                route:"c"
                            }
                        ]
*/

/* 
            {
                Name:"",
                Dialogue:"",
            },
*/
/* Background:"https://wallpaperaccess.com/full/4113280.jpg", */
