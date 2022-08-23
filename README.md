# Planned-VN-style-game 

Take a look at the deployed app [here !](https://react-visual-novel.netlify.app/)

This repository contains the planning and code for a Visual Novel made in React

<br>

## Overview:
This is my attempt at a Visual Novel made in React. 
Initially this will be just a VN, with a """"story""""; this part specifically will ideally achive most of the functionality of a real VN, including choices, sprite switching and save/ load functionality to "bookmark" progress.

In the far far future, this _may_ include a game element reminiscent of browser flash games from the mid-late 2000s, combining gameplay similar to those, with the VN-style storytelling in between. 

<br>

## Usage: 
A visual novel is typically a way of telling a story, with some level of interaction and _choice_ on the part of the reader, whilst also typically having sprites representing the characters appearing/ disappearing based on which character is currently "talking", as well as several buttons to view what was previously said, skip to the end of scene:

- Clicking on the textbox advances the dialogue,

- Clicking on a choice (if/ when they appear) goes down that "route" of the story

- Pressing skip skips to the end of the current scene

- Pressing auto automatically clicks through the dialogue until it reaches a choice

- Save/ Load will save the current progress to a localStorage object. Load will change the current state to be that localStorage object - i.e. jump to the point in the story when save was pressed.

## Plan
### VN Features list:
---
> ### MVP

- [x]  Choice breaks leading to different _"routes"_
    + [x]  Each _"route"_ in _dialogueFile.js_ is scaleable(ish)
    + [x]  Conditionally render a _choice box_ and map through an array of possible choices
    + [x]  Luck/ Standing/ Reputation/ Karma etc
        - [x]  "Min" Luck check logic - Choices being locked based on current standing/ repuation/ luck
        - [ ]  "Hard" difficulty - Start with less than normal "luck" = fewer availiable choices (maybe ? - More of a _storywriting_ issue) 
        - [ ]  "Max" Luck check logic - More bad choices appear at lower luck ("easily" implementable, but not seen this feature in actual VNs really)
- [x]  Background switching
- [x]  Skip (done, robust)
- [x]  Log (done, robust)
    + [x]  Add skipped dialogue to log state
    + [x]  Move  logVisibility state & its logic  to a custom hook
    + [x]  Move log state & its logic to a custom hook
    + [x]  Add chosen choices to log state - instead of "Name" & "Dialogue", choices appear as "Question" & "Choice" keys
- [x]  Auto (setInterval probably - Partly working, cannot stop once started except by entering new scene)
- [x]  Save (LOCAL ONLY) - Take a snapshot of states and store in an object (or array ?)
    + [x]  Load (LOCAL ONLY) - Mostly done, bg not correctly switching when loading a previous scene on first click - second click correctly switches it back though... (works when loading a scene ahead of current position though...)
- [x]  Sprite switching (WORKING - Add sprite key to dialogue obj if changing sprites/ slot order)
    + [x]  Different _expressions_ for same character (Done but not implemented (just change filepath for sprite obj in sprites array to a different .png easy))
    + [ ]  Refactor to move sprites to separate k/v pairs (instead of 1 array of all 3 sprites) - Won't force a rerender when just 1 of 3 sprites changes.
-----
> ### Additional features
- [ ]  Write an actual story
- [ ]  Remove unused sprites (huge lag on commit & push)
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
- In each Scene object is an array of "dialogue" object (i.e. what changes on screen between each click")
    + Each dialogue object contains several keys:
        - Name
        - Dialogue
        - Background (optional, only when the background changes)
        - Question [] & Options {} (optional, only at question moments)
        - Sprites [] and sprite {} (url/ path) (optional, only when a sprite is to change)
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
                Background: "background.jpg",
                Sprites: [
                    {
                        Path:"/.../john.png"
                        Name:"John"
                    }
                ]
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
<br>

## Motivations:
I enjoy playing through a route on a VN from time to time, and I would like to attempt to make one myself to not only go some way towards appreciating the work that goes into these titles, but also to practice creating an app in React, Javascript (and eventually Typescript), as well as force myself to learn some actual CSS and apply that in the development process to make an app that is at least somewhat functionally & visually similar to a real VN.

If you decide to try the app through the deployment (which is linked at the top of the document), I hope you enjoy the functionality of this project (because you certainly won't enjoy my storywriting skills lmao). 

Feedback/ advice (especially on tech) is much appreciated ! 

## Acknowledgements:
Sprites from: [@NoranekoGames](https://twitter.com/noranekogames) - [itch.io profile](https://noranekogames.itch.io/)