let ch1 = 
[
    {
        id:1,
        scene:[
/*      
            {   
                Name: "Person1",
                Dialogue:"Greetings. My name is Person1. You all have met me at some point, but I do not believe you have met each other. Some introductions are in order.",
                Background: "https://wallpaperaccess.com/full/1861934.jpg",
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
                Dialogue: "The long and short of it is, there are signs that the southern flank is about to collapse.",
            },
            {
                Name:"Person4",
                Dialogue:"Whaaaaat ?! Is this for real ? I thought that was where all the elite units were !",
            },
            {
                Name:"Person2",
                Dialogue:"It is indeed real, I've seen it for myself. The previous massed attack left them more mauled than initially thought...",
            },
            {
                Name:"Person2",
                Dialogue:"Coupled with the previous skirmishes, and the illnesses running wild through their ranks due to not being properly acclimatised to the region...",
            },
            {
                Name:"Person2",
                Dialogue:"It was surely only a matter of time.",
            },
            {
                Name:"Person3",
                Dialogue:"So what does this mean for us? If we stay here in the northern part, then we risk getting encircled and overrun if the southern flank falls..",
            },
            {
                Name:"Person1",
                Dialogue:"Correct. If they are to fall, then it's inevitable that we will follow eventually.",
            },
            {
                Name:"Person2",
                Dialogue:"Person1, I'm guessing you're planning on fleeing sometime around, tomorrow afternoon while the other units are busy partying ?",
            },
            {
                Name:"Person1",
                Dialogue:"Yes, although I'm open to other ideas. We should decide quickly though. Remember this is the last time for the forseeable future that the supply runs include alcohol.",
            },
            {
                Name:"Person4",
                Dialogue:"Well, if we have to flee, why can't we take the path along the cliff by the edge of the forest instead ? The forest is so spooky...",
            },
            {
                Name:"Person1",
                Dialogue:"Person4, you're not meant to take those stories seriously !",
            },
            {
                Name:"Person4",
                Dialogue:"But I swear I saw something when I was on watch the other night! A monster-looking thing moving through the forest !",
            },
            {
                Name:"Person3",
                Dialogue:"Wasn't that the night you drank all of our alcohol as well ? I'm not sure I believe this...",
            },
            {
                Name:"Person3",
                Dialogue:"Moving on, I vote we take the shortcut through the forest valley. They won't think to search there, given it was considered impassable",
            },
            {
                Name:"Person1",
                Dialogue:"Not a bad suggestion honestly. I would be wary about getting lost though. That area of forest is particularly dense, regardless of Person4's 'stories'",
            }, 
*/
            {
                Name:"Person4",
                Dialogue:"See, you guys ! Person1 agrees with me !",
                Background: "https://wallpaperaccess.com/full/1861934.jpg",
                Sprites:{
                    left:"",
                    center:"",
                    right:"",
                },
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
