let ch1 = 
[
    {
        id:1,
        lastBg:"https://wallpaperaccess.com/full/4113280.jpg",
        scene:[
/*
            {   
                Name: "Person1",
                Dialogue:"Greetings. My name is Person1. You all have met me at some point, but I do not believe you have met each other. Some introductions are in order.",
            },
            {
                Name:"Person2",
                Dialogue:"The name's 2. Person 2."
            },     
            {
                Name:"Person3",
                Dialogue:"Howdy ! I'm Person3"
            },
            {
                Name:"Person4",
                Dialogue:"Hiyaa ~ People call me Person4, but I go by 4 ~",
            },
            {
                Name:"Person1",
                Dialogue:"Now you may be wondering why I have gathered you here today... ",
            },
            {
                Name:"Person1",
                Dialogue: "The long and short of it is, there are signs that the Eastern flank is about to collapse.",
            },
            {
                Name:"Person4",
                Dialogue:"Whaaaaat ?! Is this for real ? I thought that was the strongest part of the line !",
            },
            {
                Name:"Person2",
                Dialogue:"It is indeed real. I have seen it for myself. The previous attack left them more mauled than initially thought. ",
            },
            {
                Name:"Person3",
                Dialogue:"So what does this mean for us? If we stay here in the center, then we risk getting encircled and overrun if the eastern flank falls..",
            },
            {
                Name:"Person1",
                Dialogue:"Correct. If they are to fall, then it's inevitable that we will follow eventually.",
            },
            {
                Name:"Person2",
                Dialogue:"Person1, I'm guessing you're planning on fleeing through the forest to our south, tomorrow afternoon while the other units are busy ?",
            },
*/          
            {
                Name:"Person1",
                Dialogue:"Yes, although I'm open to other ideas. We should decide quickly though.",
                Background:"https://wallpaperaccess.com/full/4113280.jpg",
            },
            {
                Name:"Person4",
                Dialogue:"If we're going to flee, can't we take the path along the cliff by the edge of the forest instead ? The forest is so spooky...",
            },
            {
                Name:"Person3",
                Dialogue:"I suggest we take the shortcut through the forest valley. They won't think to search there, given it was considered impassable",
            },
            {
                Name:"Person2",
                Dialogue:"Hmm... I think it would be best to take a path close to the main road. We can orient ourselves that way, instead of risking getting lost in the valley",
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
                        MinLuck:10,
                    },
                ]
            },
        ],
    },
    {
        id:4,
        lastBg:"https://img.wallpapersafari.com/desktop/1920/1080/93/59/46lIUy.jpg",
        scene:[
            {
                Name:"Person1",
                Dialogue:"Alright, I agree with Person 2, lets go through the forest, but stick close to the road so we don't get lost.",
            },
            {
                Name:"Person4",
                Dialogue:"Aww, alright then...",
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