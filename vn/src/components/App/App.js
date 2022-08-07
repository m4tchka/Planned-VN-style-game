import { useState, useEffect } from "react";
import "./App.css";
import { ButtonList } from "../ButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js";
import { ch1 } from "../../dialogueFile.js";
import { SpriteSectionBox } from "../SpriteSectionBox/SpriteSectionBox.js";
import { ChoiceBox } from "../ChoiceBox/ChoiceBox.js";
import { LogBox } from "../LogBox/LogBox";
import useLogBox  from "../../hooks/useLogBox.js";
import useLog from "../../hooks/useLog";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup.js";
function App() {
    const [sceneArrayEntry, setSceneArrayEntry] = useState(0);
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState("");
    const [currentSceneObj, setCurrentSceneObj] = useState({});
    const [currentScene, setCurrentScene] = useState(0);
    const [bg, setBg] = useState(`"${ch1[currentScene].Background}"`);
    const [luck, setLuck] = useState(0);
    const {log, makeEntry, makeQuestionEntry, addEntry} = useLog();
    const {toggleLogVisibility, logVisibility} = useLogBox();

    function switchBackground() {
        setBg(currentSceneObj.Background);
    }
    function switchDialogue() {
        setCurrentDialogue(currentSceneObj.Dialogue);
    }
    function switchName() {
        setCurrentName(currentSceneObj.Name);
    }
    /* Switch scene object function attempt (ancient)
    function switchCurrentSceneObj () {
        console.log("switchCurrentSceneObj called")
        setCurrentSceneObj(ch1[0].Scene1[sceneArrayEntry])
        function checkType() {
            console.log("checkType called")
            console.log("sceneArrayEntry = "+ sceneArrayEntry)
            console.log("currentSceneObj = "+ currentSceneObj)
            if (currentSceneObj.type==="Dialogue") {
                console.log("type: Dialogue detected")
                centerMenu=
                switchDialogue();
                switchName();
            } else if (currentSceneObj.type==="Question") {
                centerMenu=<ChoiceBox/>
                console.log("type: Question detected")
            } 
        }
        checkType()
       
    };
    */
    function switchCurrentSceneObj1() {
        setCurrentSceneObj(ch1[currentScene].scene[sceneArrayEntry]);
    }
    let updateLog2 = (() => {
        addEntry(makeEntry(currentName,currentDialogue))
    })
    function skipToEndOfCurrentScene() {
        //When skipping, updateLog above originally would NOT include any dialogue that was skipped
        let remainingObjsInArr = ch1[currentScene].scene.slice(sceneArrayEntry, ch1[currentScene].scene.length - 1)
        // ROiA is an array of the remaining objects in the array, including the current dialogue obj at which skip was pressed, but not including the last dialogue object of that scene (so that log remains 1 dialogue obj behind)
        console.log("(After) remainingObjs: ",remainingObjsInArr)
        addEntry(remainingObjsInArr)
        // Appends ROiA to the existing log, and sets the log state to be the result
        //The flat() method is required since the slice method returns an array (wihout it, ROiA would be appended as a nested array in "log")

        let endOfSceneEntry = ch1[currentScene].scene.length - 1;
        setSceneArrayEntry(endOfSceneEntry);
        setCurrentSceneObj(ch1[currentScene].scene[endOfSceneEntry]);
        setBg(
            ch1[currentScene].scene.findLast((element) => element.Background).Background
        );
        console.log("SkipToEnd function called")
    }
    /*  skipToEndOfCurrentScene Function Shorter ver (worse convention ?)
    function skipToEndOfCurrentScene () {
        setSceneArrayEntry(ch1[currentScene].scene.length-1)
        switchCurrentSceneObj1()
    }
    */
    useEffect(() => {
        switchCurrentSceneObj1();
        if (currentSceneObj.Background) {
            switchBackground();
        }
        switchName();
        switchDialogue();
        
    });        
    function handleClick() {
        setSceneArrayEntry(sceneArrayEntry + 1);
        console.log(`Luck: ${luck}`);
        console.log("logVisibility (App): ", logVisibility)
        updateLog2()
    };

    return (
        <div
            className="App"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
            }}
        >
            <SpriteSectionBox />
            <button onClick={skipToEndOfCurrentScene}>---Skip---</button>
            {currentSceneObj.Question ? (
                <>
                    <ChoiceBox
                        choiceList={currentSceneObj.Options}
                        question={currentSceneObj.Question}
                        handleChoice={setCurrentScene}
                        resetScene={setSceneArrayEntry}
                        incrementLuck={setLuck}
                        luck={luck}
                        addChoiceToLog={{addEntry,makeQuestionEntry}}
                    />
                    <LowerSectionBox
                        CharacterName={currentName}
                        Dialogue={currentDialogue}
                    />
                </>
            ) : (
                <>
                    <LowerSectionBox
                        //This handleClick func may be passed to the div above instead.
                        onClick={handleClick}
                        CharacterName={currentName}
                        Dialogue={currentDialogue}
                    />
                </>
            )}
            <button className = "log-toggle-button" onClick={toggleLogVisibility}>Toggle</button>
            <LogBox log={log} logVisibility={logVisibility}/>
            <ButtonGroup 
                ButtonList={ButtonList}
            />
        </div>
    );
}
export default App;

/* Intended behvaviour:
        - On click, increment array entry (which is a number)
            + Check the new sceneArrayObj for a particular k/v
                * If there is no "type" key and there is a dialogue key, OR the "type" key's value is Dialogue", then update currentDialogue & currentName states to be the new name & dialogue, and pass these down as props to rerender the components (i.e. change the names & dialogue onsceen)
                * If there is no "type" and there is a "question" key, OR the type key's value is "Question", then:
                    - Render a ChoiceBox component, 
                        + Pass down the array of choices from the currentSceneObj, as a prop to <ChoiceBox>
                        Map through the array of choice objects that came with the sceneArrayObj, and display those as choices within ChoiceBox, 
*/

/* Intended behaviour:
    onClick, change scene state to a different number according to options[choice].next

*/
