let ch1 = 
[
    {
        id:1,
        background:"someImageFile.jpg",
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
                Dialogue:"So what does this mean for us? If we stay here in the Center, then we risk getting encircled and overrun if the East flank falls..",
            },
            {
                Name:"Person1",
                Dialogue:"Correct. If they are to fall, then it is inevitable that we will follow eventually.",
            },
            {
                Name:"Person2",
                Dialogue:"I'm guessing you're planning on fleeing through the forest to our South, tomorrow afternoon while the other units are busy.",
            },
*/
            
            {
                Name:"Person1",
                Dialogue:"Yes, although I'm open to other ideas. We should decide quickly though.",
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
                Dialogue:"Hmm... I think it would be best to take a path parallel to the main road. We can orient ourselves that way, instead of risking getting lost in the valley",
            },
            {
                Name:"Person1",
                Dialogue:"",
                Question: "Which route should we choose ?",
                Options: [
                            {
                                text:"Follow Person2's suggestion and stay close to the road.",
                                route:"a",
                                next:1,
                            },
                            {
                                text:"Follow Person3's suggestion and go through the forest valley.",
                                route:"b",
                                next:2,
                            },
                            {
                                text:"Follow Person4's suggestion and go around the edge of the forest.",
                                route:"c",
                                next:3,
                            },
                        ]
            },
            {
                Name:"",
                Dialogue:"",
            }

        ],
    },
    {
        id:4,
        background: "someOtherImageFile4.jpg",
        scene:[
            {
                Name:"Person1",
                Dialogue:"Alright, I agree with Person 2, lets go through the forest, but stick close to the road so we don't get lost.",
            },
            {
                Name:"Person4",
                Dialogue:"Aww, alright then...",
            },
        ],
    },
    {
        id:5,
        background: "someOtherImageFile5.jpg",
        scene:[
            {
                Name:"Person1",
                Dialogue:"I think Person3 makes a good point, we should take the route they least expect. We all know what happens to deserters...",
            },
            {
                Name:"Person2",
                Dialogue:"I guess that makes sense. if we make good time, we could set up camp along the river at the end of the valley.",
            },
        ],
    },
    {
        id:6,
        background: "someOtherImageFile6.jpg",
        scene:[
            {
                Name:"Person1",
                Dialogue:"I wouldn't go so far as to say it's scary, but going around the forest would let us stay on easier terrain and could be faster in the long run.",
            },
            {
                Name:"Person3",
                Dialogue:"Mmm, that's a good point. Let's go with that then.",
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