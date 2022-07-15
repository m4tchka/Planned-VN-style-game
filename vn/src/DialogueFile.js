let ch1 = 
[
    {
        id:1,
        Background:"someImageFile.jpg",
        Scene1:[
            {   
                Name: "Person1",
                Dialogue:"Greetings. My name is Person1 !",

                /* Animations: ["some","numbers","here"],
                Sprite: "Normal", */
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
            },
            {
                Name:"Person1",
                Dialogue:"Now you may be wondering why I have gathered you here today... ",
                type:"Dialogue"
            },
            {
                Name:"Narrator",
                Dialogue: "And so began that fateful discussion, that would change the fates of every person in that room..."
            },
            {
                Name:"4thWall",
                Dialogue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ],
    },
    {
        Background: "someOtherImageFile.jpg",
        Scene2:[]
    },
    {
        Scene3:[]
    },
    {
        Scene4:[]
    },
    {
        Scene5:[]
    }
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