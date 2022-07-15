import { useState, useEffect } from 'react';
import "./App.css";
import { ButtonList } from "../LowerSectionBox/ReusableButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js" 
import { ch1 } from '../../DialogueFile.js'
import { SpriteSectionBox } from '../SpriteSectionBox/SpriteSectionBox.js';
import { ChoiceBox } from "../ChoiceBox/ChoiceBox.js"
let centerMenu;

function App() {
    const [sceneArrayEntry, setSceneArrayEntry,] = useState(0)
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState ("");
    const [currentSceneObj, setCurrentSceneObj]= useState({});
/* 
    const SceneObjContext= createContext(null);
    const NameContext = createContext(null);
    const DialogueContext = createContext(null);
*/
    function switchDialogue () {
        setCurrentDialogue(ch1[0].Scene1[sceneArrayEntry].Dialogue)
    };
    function switchName () {
        setCurrentName(ch1[0].Scene1[sceneArrayEntry].Name)
    };
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

    function switchCurrentSceneObj1 () {
        setCurrentSceneObj(ch1[0].Scene1[sceneArrayEntry])
            function checkType(obj) {
                console.log(currentSceneObj)
                console.log(obj)
                if (// "Question" in currentSceneObj 
                    obj.hasOwnProperty("Question")) {
                    console.log(currentSceneObj)
                    centerMenu=<ChoiceBox choiceList={currentSceneObj.Options}/>
                }
                else {
                    centerMenu=
                    console.log("Not a question")
                }
            }
            checkType(currentSceneObj)
       
    };



    useEffect (()=> {
        switchName();
        switchDialogue();
        switchCurrentSceneObj1()
    }); // Maybe add back ', [sceneArrayEntry]' into useEffect

    function handleClick () {
        if (sceneArrayEntry===ch1[0].Scene1.length-1) {
            setSceneArrayEntry(0);
            //switchCurrentSceneObj()
        }
        else {
            setSceneArrayEntry(sceneArrayEntry+1)
            //switchCurrentSceneObj();
        };
    };

/* >>> Wrap both onClick functions in a wrapping function <<< */

    return (
        <div className="App">
{/*         
        <NameContext.Provider value = {currentName}>
        <DialogueContext.Provider value = {currentDialogue}>
        <SceneObjContext.Provider value = {currentSceneObj}>
*/}
            <SpriteSectionBox/>
            <div>
                {centerMenu}
            </div>
            
            <LowerSectionBox 
                onClick = { handleClick }
                //This handleClick func may be passed to the div above instead.
                CharacterName = { currentName }
                Dialogue = { currentDialogue }
                ButtonList = { ButtonList }/>
{/* 
        </SceneObjContext.Provider>
        </DialogueContext.Provider>
        </NameContext.Provider> 
*/}
        </div>
    );
};
export default App;

/*    
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState ("");

    function switchDialogue () {
        setCurrentDialogue()
    };
    function switchName () {
        setCurrentName()
    }; 
*/

/* Intended behvaviour:
        - On click, increment array entry (which is a number)
            + Check the new sceneArrayObj for a particular k/v
                * If there is no "type" key and there is a dialogue key, OR the "type" key's value is Dialogue", then update currentDialogue & currentName states to be the new name & dialogue, and pass these down as props to rerender the components (i.e. change the names & dialogue onsceen)
                * If there is no "type" and there is a "question" key, OR the type key's value is "Question", then:
                    - Render a ChoiceBox component, 
                        + Pass down the array of choices from the currentSceneObj, as a prop to <ChoiceBox>
                        Map through the array of choice objects that came with the sceneArrayObj, and display those as choices within ChoiceBox, 

*/

