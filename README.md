# Planned-VN-style-game

This repository will contain the planning and (hopefully eventually) the code for a VN & accompanying game.
<br>

## Overview:
This aims to be a VN-style shoot'em'up top-down game reminiscent of browser flash games from the mid-late 2000s, and will combine gameplay similar to those, with VN-style storytelling in between.
<br>

## Planned features:


### VN style UI for dialogue, with the usual buttons on/ near the dialogue box:

- Autoplay
- Hide
- Archive/ log/history (of recent?/ all past dialogue)
- Options
- Fastforward/ skip
- Save/ Load
- Single-click to finish animation/s (of text &/ or character cutouts)
- Full screen/ hide dialogue box
<br>

- Basic character cutouts & animations (entries/ exits/ interludes) (requires: Learning how to draw (again))

### CLI tool for writing dialogue: (>>> Exact format TBD <<<)
#### (intended behaviour): 
- Typing a string followed by a predefined string followed by another string and then pressing enter; 
    + (ex. char1char1surname ::: dialogue goes here!), 
- Returns: Char1: "Dialogue goes here!".
- Leaving char name blank defaults to Narrator
- Upon typing another predefined string, exports all current logs that were "stored" in the CL to a new external .json file on desktop (v. difficult)
    + Move this file into main repository to have it "fed in" as dialogue (v.v.difficult)
<br>

### Basic react-testing-library tests:
<br>

## Files:
### plan.md
### README.md (will eventually contain instructions for launching & adding/editing dialogue files)       
### Dialogue file 
#### Possible formats:

Hierarchy:
    Dialogue File > Chapters > Scenes > Choice Breaks, Dialogues/Conversation > Monologues (& character name) > Character-limited text (to fit)
            Very compact ver.

<details> 
<summary>Drafting dialogue object structure</summary>

```js 
        Ch Title: Title
        Ch 1: [
                { 
                    Scene0: [
                        {   
                            Dialogue1:"x",
                            transitionInAnimations: ["some","numbers","here"],
                            Name: "speech",
                            transitionOutAnimations: ["some","numbers","here"]
                        },
                /* -----------------------ALTERNATIVELY------------------- */
                        {
                            Character: "Name",
                            Dialogue: "Speech",
                            Expression: "normal"
                        },
                /* ------------------------------------------------------- */
                        {
                            CB:"choiceBreak1",
                            1: "Choice1Text",
                            2: "Choice2Text",
                            3: "Choice3Text"
                        }

                Dialogue2: 
                {

                }

                    ]
                }
            Scene1:
            [
                
            ]
        ]




        {
            Character: Name
            Dialogue: Speech
            (Animations?): ?
        }


        {
            Character: "Character's speech?"
        },
        { ChoiceBreak1 }
        {
            Character: "Character's speech?"
        }
```

</details>

<details> 
<summary>Current dialogue object structure</summary>
<br>

### Each Chapter is an array of scene objects:
- Each Scene object is an array of "dialogue" object (i.e. what changes on screen between each click")
    + Each dialogue object contains several keys:
        - Name
        - Dialogue
        - Sprite (url/ path) **TBD**
        - Sprite type (i.e. The expression: normal, sad, angry etc) **TBD**
        - Animations **TBD**
```js
let ch1 = 
[
    {
        BG:bgImg.jpg
        Scene1:[
            {
                Name:"John Doe",
                Dialogue:"Hello World !",
            },
            {
                Name:"World",
                Dialogue:"Hello John !",
            }
        ]
    },
    {
        BG:bgImg.jpg
        Scene2:[ 
            {
            }
        ]
    },
] 
```
</details>