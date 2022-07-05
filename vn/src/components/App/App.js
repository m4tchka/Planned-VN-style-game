import { useState } from 'react';
import "./App.css";
import { ButtonList } from "../LowerSectionBox/ReusableButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js" 
import { ch1 } from '../../DialogueFile.js'
function App() {
    const [sceneArrayEntry,setSceneArrayEntry,] = useState(0)
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState ("");

    function switchDialogue () {
        setCurrentDialogue(ch1[0].Scene1[sceneArrayEntry].Dialogue)
    };
    function switchName () {
        setCurrentName(ch1[0].Scene1[sceneArrayEntry].Name)
        console.log(ch1[0].Scene1[sceneArrayEntry].Name);
    };

    function handleClick () {
       
        if (sceneArrayEntry===ch1[0].Scene1.length-1) {
            setSceneArrayEntry(0);
            switchName();
            switchDialogue();
        }
        else {
            setSceneArrayEntry(sceneArrayEntry+1)
            switchName();
            switchDialogue();
        };
    }



/* >>> Wrap both onClick functions in a wrapping function <<< */

    return (
        <div className="App">
        <p> Hello </p>
                <p onClick={handleClick}>Hello {currentName}</p>
                <p>{currentDialogue}</p>
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

<LowerSectionBox 
                onClick={ switchDialogue + switchName }
                CharacterName={ currentName }
                Dialogue={ currentDialogue }
                ButtonList={ ButtonList }/>


*/