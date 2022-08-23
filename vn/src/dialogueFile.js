import testimg from "../src/Character_Ganyu_Portrait.webp"

let ch1 = 
[
    {
        id:1,
        scene:[
            {
                Name:"Person4",
                Dialogue:"See, you guys ! Person1 agrees with me !",
                Background: "https://wallpaperaccess.com/full/1861934.jpg",
                Sprites: [ 
                    {
                        Name: "Aikoooooooooooooo",
                        Path: `${process.env.PUBLIC_URL}/sprites/Aiko/Winter Uniform/Aiko_Cat_WinterSera_Frown.png`,
                    }, 
                ],
            },
            {
                Name:"Person1",
                Dialogue:"I ... didn't say anything about agreeing though ...",
            },
            {
                Name:"Person2",
                Dialogue:"Person1, you raise a good point about getting lost. That part of the forest is particularly poorly mapped ...",
            },
            {
                Name:"Person2",
                Dialogue:"... Stories aside, I think it would be best to take a path close to the main road. We can orient ourselves that way, instead of risking getting lost in the valley",
            },
            {
                Name: "Person4",
                Dialogue:"Well, Person1's the veteran here and has the most experience in the area ! We should let them decide !",
            },
            {
                Name: "Person3",
                Dialogue:"That's a good point... and you didn't put forward any suggestion of your own...",
            },
            {
                Name: "Person2",
                Dialogue:"Those 3 options are really the only realistic ones based on the surrounding geography. Person1, you have the deciding vote.",
            },
            {
                Name:"Person1",
                Dialogue:"",
                Question: "Which route should we choose ?",
                Options: [
                    {
                        Text:"Follow Person2's suggestion and stay close to the road.",
                        Route:"a",
                        Next:1,
                        LuckChange:+1,
                        MinLuck: 0,
                    },
                    {
                        Text:"Follow Person3's suggestion and go through the forest valley.",
                        Route:"b",
                        Next:2,
                        LuckChange:+2,
                        MinLuck:0,
                    },
                    {
                        Text:"Follow Person4's suggestion and go around the edge of the forest.",
                        Route:"c",
                        Next:3,
                        LuckChange:-1,
                        MinLuck:0,
                    },
                ]
            },
        ],
    },
    {
        id:4,
        scene:[
            {
                Name:"Person1",
                Dialogue:"Alright, I agree with Person 2, lets go through the forest, but stick close to the road so we don't get lost.",
            },
            {
                Name:"Person4",
                Dialogue:"Aww, alright then ... you guys better save me from any monsters !",
            },
            {
                Name:"",
                Dialogue:"Some time later...",
                Background: "https://img.wallpapersafari.com/desktop/1920/1080/93/59/46lIUy.jpg"
            },
            {
                Name:"Person3",
                Dialogue:"It's been some time since I've been here, in the Southern forests...",
            },
        ],
    },
    {
        id:5,
        scene:[
            {
                Name:"Person1",
                Dialogue:"I think Person3 makes a good point, we should take the route they least expect. We all know what happens to deserters...",
            },
            {
                Name:"Person2",
                Dialogue:"I guess that makes sense. if we make good time, we could set up camp along the river at the end of the valley.",
            },
            {
                Name:"Person1",
                Dialogue:"I guess we might as well set off now then. I think it's late enough.",
            },
            {
                Name:"",
                Dialogue:"...",
            },
            {
                Background: "https://img.wallpapersafari.com/desktop/1920/1080/22/18/yoGWPq.jpg",
                Name:"Person1",
                Dialogue:"Well, here we are, the forest valley",
            },
        ],
    },
    {
        id:6,        
        scene:[
            {
                Name:"Person1",
                Dialogue:"I wouldn't go so far as to say it's scary, but going around the forest would let us stay on easier terrain and could be faster in the long run.",
            },
            {
                Name:"Person3",
                Dialogue:"Mmm, that's a good point. Let's go with that then.",
            },
            {
                Name:"Person4",
                Dialogue:"Y-yeah, that's what I meant!",
            },
            {
                Name:"Person1",
                Dialogue:"Of course, naturally.",
            },
            {
                Name:"Person4",
                Dialogue:"...",
            },
            {
                Name:"Person2",
                Dialogue:"Enough bickering, we should get going",
            },
            {
                Name:"",
                Dialogue:"Several hours later...",
            },
            {
                Background: "https://wallpaperaccess.com/full/836696.jpg",
                Name:"Person4",
                Dialogue:"Wow, look at the view!",
            },
        ],
    },
];
let ch2 = [
    {},
    {},
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
export { ch1, ch2 };

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
