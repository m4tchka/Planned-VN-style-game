# Planned-VN-style-game
<br>

This repository will contain the planning and (hopefully eventually) the code for a VN & accompanying game.
<br>

## Overview:
This aims to be a VN-style shoot'em'up top-down game reminiscent of browser flash games from the mid-late 2000s, and will combine gameplay similar to those, with VN-style storytelling in between.
<br>

## Planned features:
<br>

### VN style UI for dialogue, with the usual buttons on/ near the dialogue box:

- Autoplay
- Hide
- Archive/log/history (of recent?/all past dialogue)
- Options
- Fastforward/skip
- Save/Load
- Single-click to finish animation/s (of text &/or character cutouts)
<br>

- Basic character cutouts & animations (entries/exits/interludes) (requires: Learning how to draw (again))

### CLI tool for writing dialogue (>>> Exact format TBD <<<)
#### (intended behaviour): 
- Typing a string followed by a predefined string followed by another string and then pressing enter; 
    + (ex. char1char1surname ::: dialogue goes here!), 
- Returns: Char1: "Dialogue goes here!".
- Leaving char name blank defaults to Narrator
- Upon typing another predefined string, exports all current logs that were "stored" in the CL to a new external .json file on desktop (v. difficult)
    + Move this file into main repository to have it "fed in" as dialogue (v.v.difficult)

## Files:
### plan.md
### README.md (will eventually contain instructions for launching & adding/editing dialogue files)       
### Example dialogue file formats:

Hierarchy:
    Dialogue File > Chapters > Scenes > Choice Breaks, Dialogues/Conversation > Monologues (& character name) > Character-limited text (to fit)
            Very compact ver.

```js
        Ch Title: Title
        Ch 1: [
            Scene0: [
                 
                    {   Dialogue1:"x",
                        transitionInAnimations: ["some","numbers","here"],
                        Name: "speech",
                        transitionOutAnimations: ["some","numbers","here"]
                    },
                /* -----------------------ALTERNATIVELY------------------- */
                    {
                        Character: "Name",
                        Dialogue: "Speech"
                    };
                /* ------------------------------------------------------- */
                {
                choiceBreak1
                }
                Dialogue2: 
                {

                }

            ]
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
            Character: Character's speech?
        }
        { ChoiceBreak1 }
        {
            Character: Character's speech?
        }
```