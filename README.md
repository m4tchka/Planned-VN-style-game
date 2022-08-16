# Planned-VN-style-game

This repository contains the planning and code for a VN & (hopefully eventually) accompanying game.

<br>

## Overview:
This aims to be a VN-style shoot'em'up top-down game reminiscent of browser flash games from the mid-late 2000s, and will combine gameplay similar to those, with VN-style storytelling in between.

<br>

## Plan
### Features list:
- [x]  Choice breaks leading to different _"routes"_
    + [x]  Each _"route"_ in _dialogueFile.js_ is scaleable(ish)
    + [x]  Conditionally render a _choice box_ and map through an array of possible choices
    + [x]  Luck/ Standing/ Reputation/ Karma etc
        - [x]  "Min" Luck check logic - Choices being locked based on current standing/ repuation/ luck
        - [ ]  "Hard" difficulty - Start with less than normal "luck" = fewer availiable choices (maybe ? - More of a _storywriting_ issue) 
        - [ ]  "Max" Luck check logic - More bad choices appear at lower luck
- [x]  Background switching
- [x]  Skip (done, robust)
- [x]  Log (done, robust)
    + [x]  Add skipped dialogue to log state
    + [x]  Move  logVisibility state & its logic  to a custom hook
    + [x]  Move log state & its logic to a custom hook
    + [x]  Add chosen choices to log state
- [x]  Auto (setInterval probably - Partly working, cannot stop once started except by entering new scene)
- [x]  Save (take a snapshot of states and store in an object (or array ?))
    + [ ]  Load - Partly working, adds duplicate log entries
- [ ]  Sprite switching (Based on _name_ key of dialogue object ?) - **V.Difficult**
    + [ ]  Different _expressions_ for same character (i.e. different sprites)
- [ ]  Basic _react-testing-library_ tests
- [ ]  Main Menu
- [ ]  Enter & store player name (if story object of chapters will have self insert character with y/n)
- [ ]  Options menu (to set auto speed, change player name etc)
- [ ]  Turn all components into TypeScript
- [ ]  Some actual CSS
- [ ]  Basic _cypress_ tests
- [ ]  Backend
    + [ ]  Store savefiles with current dialogue
        - [ ]  Savefiles have current luck etc
        - [ ]  Savefiles have player name
        - [ ]  Savefiles have date
        - [ ]  Savefiles can be fetched and loaded
    + [ ]  Store *stories* (some structure with several chapters (+ a key indicating a self-insert story?))
+ [ ]  CLI tool (in Go?) for writing dialogue outputting to JSON/ JS

### Component tree & Wireframe:
See _"low-fid.excalidraw"_

### Dialogue file: 
#### Possible formats

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
        - Background (optional, only when the background changes)
        - Question & Options (optional, only at question moments)
        - Sprite (url/ path) **TBD**
        - Sprite type (i.e. The expression: normal, sad, angry etc) **TBD**
        - Animations **TBD**
```js
let ch1 = 
[
    {
        id:1
        scene:[
            {
                Name:"John Doe",
                Dialogue:"Hello World !",
                Background: "background.jpg"
            },
            {
                Name:"World",
                Dialogue:"Hello John !",
            }
            {
                Name:"Alien",
                Dialogue:"Choose your demise !",
                Question:"Which demise should we choose ?",
                Options: [
                    {
                        Text:"Meteor strike",
                        Next:1,
                        Luck:+1,
                    },
                    {
                        Text:"Invasion",
                        Next:2,
                        Luck:+2,
                    },
                    {
                        Text:"Nanomachine plague",
                        Next:3,
                        Luck:-1,
                    },
                ],
            }
        ]
    },
    {
        BG:bgImg2.jpg
        Scene2:[ 
            {
            }
        ]
    },
] 
```
</details>