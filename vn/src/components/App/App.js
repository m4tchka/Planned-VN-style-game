import { useState, useEffect } from "react";
import "./App.css";
import { ButtonList } from "../LowerSectionBox/ReusableButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js";
import { ch1 } from "../../DialogueFile.js";
import { SpriteSectionBox } from "../SpriteSectionBox/SpriteSectionBox.js";
import { ChoiceBox } from "../ChoiceBox/ChoiceBox.js";

function App() {
    const [sceneArrayEntry, setSceneArrayEntry] = useState(0);
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState("");
    const [currentSceneObj, setCurrentSceneObj] = useState({});
    const [currentScene, setCurrentScene] = useState(0);
    const [log, setLog] = useState([]);
    const [bg, setBg] = useState(`"${ch1[currentScene].Background}"`);
    function switchBackground() {
        setBg(currentSceneObj.Background);
    }
    function switchDialogue() {
        setCurrentDialogue(currentSceneObj.Dialogue);
    }
    function switchName() {
        setCurrentName(currentSceneObj.Name);
    }
    /* 
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
    /* function updateLog (){
        // setLog([...log,{[`${currentName}`]:currentDialogue}]);
        // setLog([...log, {currentName: currentDialogue}]);
        setLog([...log,`${currentName}:${currentDialogue}\n`])
    }; */
    useEffect(() => {
        switchCurrentSceneObj1();
        if (ch1[currentScene].scene[sceneArrayEntry].Background) {
            switchBackground();
        }
        switchName();
        switchDialogue();
        console.log(bg);
    });
    function handleClick() {
        setLog([...log, `${currentName}:${currentDialogue}\n`]);
        setSceneArrayEntry(sceneArrayEntry + 1);
        console.log(`currentSceneObj: ${currentSceneObj}\n 
                    currentName: ${currentName}\n 
                    currentDialogue: ${currentDialogue}\n
                    Log: ${log} 
                    isQuestion? ${currentSceneObj.Question}`);
        /* 
        if (sceneArrayEntry===ch1[currentScene].scene.length-1) {
            
            setSceneArrayEntry(0);
            //switchCurrentSceneObj()
        }
        else {
            setSceneArrayEntry(sceneArrayEntry+1)
            //switchCurrentSceneObj();
        };
         */
    }
    /* >>> Wrap both onClick functions in a wrapping function <<< */
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
            {currentSceneObj.Question ? (
                <ChoiceBox
                    choiceList={
                        currentSceneObj.Options
                    }
                    question={currentSceneObj.Question}
                    handleChoice={setCurrentScene}
                    resetScene={setSceneArrayEntry}
                />
            ) : (
                <></>
            )}
            {currentSceneObj.Question ? (
                <LowerSectionBox
                    CharacterName={currentName}
                    Dialogue={currentDialogue}
                    ButtonList={ButtonList}
                />
            ) : (
                <LowerSectionBox
                    onClick={handleClick}
                    //This handleClick func may be passed to the div above instead.
                    CharacterName={currentName}
                    Dialogue={currentDialogue}
                    ButtonList={ButtonList}
                />
            )}
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
