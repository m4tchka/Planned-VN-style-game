import { useState, useEffect } from 'react';
import "./App.css";
import { ButtonList } from "../LowerSectionBox/ReusableButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js" 
import { ch1 } from '../../DialogueFile.js'
import { SpriteSectionBox } from '../SpriteSectionBox/SpriteSectionBox.js';
import { ChoiceBox } from "../ChoiceBox/ChoiceBox.js"
function App() {
    const [sceneArrayEntry,setSceneArrayEntry,] = useState(0)
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState ("");
    //const [currentSceneObj,setCurrentSceneObj]= useState({});
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
        setCurrentSceneObj(ch1[0].Scene1[sceneArrayEntry])
    };
 */    
    useEffect (()=> {
        switchName();
        switchDialogue();
        //switchCurrentSceneObj();
    }); // Maybe add back ', [sceneArrayEntry]' into useEffect

    function handleClick () {
        if (sceneArrayEntry===ch1[0].Scene1.length-1) {
            setSceneArrayEntry(0);
        }
        else {
            setSceneArrayEntry(sceneArrayEntry+1)
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
            <ChoiceBox/>
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