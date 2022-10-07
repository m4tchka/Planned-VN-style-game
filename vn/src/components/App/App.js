import "./App.css";
import { useState, useEffect } from "react";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js";
import { ch1 } from "../../dialogueFile.js";
import { SpriteSectionBox } from "../SpriteSectionBox/SpriteSectionBox.js";
import { ButtonGroup } from "../ButtonGroup/ButtonGroup.js";
import { ChoiceBox } from "../ChoiceBox/ChoiceBox.js";
import { LogBox } from "../LogBox/LogBox.js";
import useLogBox from "../../hooks/useLogBox.js";
import useLog from "../../hooks/useLog.js";
import useAuto from "../../hooks/useAuto.js";
import useSavePromptBox from "../../hooks/useSavePromptBox.js";
import useLoadPromptBox from "../../hooks/useLoadPromptBox";
import { SavePromptBox } from "../SavePromptBox/SavePromptBox.js";
import { LoadPromptBox } from "../LoadPromptBox/LoadPromptBox.js";
function App() {
    /*TODO: 
    Add Firebase Auth
    Turn bottom bar to <nav> element 
    REVIEW: Possibly add useReducer instead of so many useStates
    Add delete save functionlity to loadPrompt
     
    */
    const [currentScene, setCurrentScene] = useState(0);
    const [sceneArrayEntry, setSceneArrayEntry] = useState(0);
    const [currentSceneObj, setCurrentSceneObj] = useState({});
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState("");
    const [bg, setBg] = useState("");
    const [luck, setLuck] = useState(0);
    const [sprites, setSprites] = useState([]);
    /* const [sprite1,setSprite1]=useState({}) */
    const { log, makeEntry, makeQuestionEntry, addEntry, setLog } = useLog();
    const { logVisibility, toggleLogVisibility } = useLogBox();
    const { toggleAutoModeV2, autoToggled } = useAuto();
    const { savePromptVisibility, toggleSavePromptVisibility } =
        useSavePromptBox();
    const { loadPromptVisibility, toggleLoadPromptVisibility } =
        useLoadPromptBox();
    // let displayMainMenu = true;
    function switchSprites() {
        setSprites(currentSceneObj.Sprites);
    }
    function switchBackground() {
        setBg(currentSceneObj.Background);
    }
    function switchDialogue() {
        setCurrentDialogue(currentSceneObj.Dialogue);
    }
    function switchName() {
        setCurrentName(currentSceneObj.Name);
    }
    function switchCurrentSceneObj1() {
        setCurrentSceneObj(ch1[currentScene].scene[sceneArrayEntry]);
    }
    let updateLog = () => {
        addEntry(makeEntry(currentName, currentDialogue));
    };
    function skipToEndOfCurrentScene() {
        let remainingObjsInArr = ch1[currentScene].scene.slice(
            sceneArrayEntry,
            ch1[currentScene].scene.length - 1
        );
        // ROiA is an array of the remaining objects in the array, including the current dialogue obj at which skip was pressed, but not including the last dialogue object of that scene (so that log remains 1 dialogue obj behind)
        console.log("(After) remainingObjs: ", remainingObjsInArr);
        addEntry(remainingObjsInArr);
        // Appends ROiA to the existing log, and sets the log state to be the result
        //The flat() method is required since the slice method returns an array (wihout it, ROiA would be appended as a nested array in "log")

        let endOfSceneEntry = ch1[currentScene].scene.length - 1;
        setSceneArrayEntry(endOfSceneEntry);
        setCurrentSceneObj(ch1[currentScene].scene[endOfSceneEntry]);
        setSprites(
            ch1[currentScene].scene.findLast((element) => element.Sprites)
                .Sprites
        );
        setBg(
            ch1[currentScene].scene.findLast((element) => element.Background)
                .Background
        );
        console.log("SkipToEnd function called");
    }
    useEffect(() => {
        switchCurrentSceneObj1();
        if (currentSceneObj.Background) {
            switchBackground();
        }
        if (currentSceneObj.Sprites) {
            switchSprites();
        }
        switchName();
        switchDialogue();
    });
    function handleClick() {
        if (
            sceneArrayEntry < ch1[currentScene].scene.length &&
            !currentSceneObj.Question
        ) {
            setSceneArrayEntry(sceneArrayEntry + 1);
            updateLog();
        } else {
            console.log("Please select a choice!");
        }
    }
    function save() {
        let savedObj = {
            scene: currentScene,
            sceneEntry: sceneArrayEntry,
            background: bg,
            log: log,
            luck: luck,
            sprites: sprites,
        };
        localStorage.setItem("saveFile0", JSON.stringify(savedObj));
        console.log(savedObj, "Saved to localStorage !");
        // let pulledSaveFile = localStorage.getItem("key");
        // Takes k/v pair and stores it as a variable
        // localStorage.removeItem("saveFileX");
        // Removes specific k/v
        // localStorage.clear();
        // Clears all
    }
    function load() {
        console.log(bg);
        let loadedObj = JSON.parse(localStorage.getItem("saveFile0"));
        console.log("LoadedObj: ", loadedObj);
        console.log("loadedobj bg: ", loadedObj.background);
        console.log(
            "findlast bg: ",
            ch1[loadedObj.scene].scene.findLast((element) => element.Background)
                .Background
        );
        setBg(loadedObj.background);
        setCurrentScene(loadedObj.scene);
        setSceneArrayEntry(loadedObj.sceneEntry);
        setLog(loadedObj.log /* .flat */);
        setLuck(loadedObj.luck);
        setSprites(loadedObj.sprites);
    }
    let stateSnapshot = {
        currentScene,
        sceneArrayEntry,
        bg,
        log,
        luck,
        sprites,
    };
    let stateSetterFunctions = {
        setCurrentScene,
        setSceneArrayEntry,
        setBg,
        setLog,
        setLuck,
        setSprites,
    };
    return (
        <>
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
                <SpriteSectionBox spriteList={sprites} />
                {currentSceneObj.Question ? (
                    <>
                        <ChoiceBox
                            choiceList={currentSceneObj.Options}
                            question={currentSceneObj.Question}
                            handleChoice={setCurrentScene}
                            resetScene={setSceneArrayEntry}
                            incrementLuck={setLuck}
                            luck={luck}
                            addChoiceToLog={{ addEntry, makeQuestionEntry }} // unnecessary destructuring
                        />
                        <LowerSectionBox
                            CharacterName={currentName}
                            Dialogue={currentDialogue}
                        />
                    </>
                ) : (
                    <>
                        <LowerSectionBox
                            onClick={handleClick}
                            CharacterName={currentName}
                            Dialogue={currentDialogue}
                        />
                    </>
                )}
                {logVisibility ? <LogBox log={log} /> : <></>}
                {savePromptVisibility && !loadPromptVisibility ? (
                    <SavePromptBox states={stateSnapshot} />
                ) : savePromptVisibility && loadPromptVisibility ? (
                    toggleLoadPromptVisibility() && (
                        <SavePromptBox states={stateSnapshot} />
                    )
                ) : (
                    <></>
                )}
                {loadPromptVisibility && !savePromptVisibility ? (
                    <LoadPromptBox setStateFunctions={stateSetterFunctions} />
                ) : loadPromptVisibility && savePromptVisibility ? (
                    toggleSavePromptVisibility() && (
                        <LoadPromptBox
                            setStateFunctions={stateSetterFunctions}
                        />
                    )
                ) : (
                    <></>
                )}
                <ButtonGroup
                    Log={toggleLogVisibility}
                    Skip={skipToEndOfCurrentScene}
                    Auto={() => {
                        toggleAutoModeV2(3000);
                        console.log("Is auto toggled? ", autoToggled);
                    }}
                    Save={save}
                    Load={load}
                    OSave={toggleSavePromptVisibility}
                    OLoad={toggleLoadPromptVisibility}
                />
            </div>
        </>
    );
}
export default App;
