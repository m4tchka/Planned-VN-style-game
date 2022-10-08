import "./App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import AuthenticationPrompt from "../AuthenticationPrompt/AuthenticationPrompt";
function App() {
    /*TODO: 
    Add Firebase Auth
    Turn bottom bar to <nav> element 
    REVIEW: Possibly add useReducer instead of so many "switch___" functions
    Add delete save functionlity to loadPrompt
    Possibly move save/ load logic out to a hook
    Change sprite filenames
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
    const location = useLocation();
    useEffect(() => {
        if (location.state) {
            console.log(
                "gamestate to be loaded at start: ",
                location.state.gamestate
            );
            let saveFile = location.state.gamestate;
            // TODO: Turn the load function to take a parameter (the savefile to be loaded) and call all the setstate functions on the keys of the parameter.
            setBg(
                ch1[saveFile.scene].scene.findLast(
                    (element) => element.Background
                ).Background
            );
            setCurrentScene(saveFile.scene);
            setSceneArrayEntry(saveFile.sceneEntry);
            setLog(saveFile.log);
            setLuck(saveFile.luck);
            setSprites(saveFile.sprites);
        } else {
            console.log("Should be null: ", location.state);
        }
    }, []);
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
    function switchCurrentSceneObj() {
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
        addEntry(remainingObjsInArr);
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
        switchCurrentSceneObj();
        // FIXME: when loading to a previous sceneObj in the story, if that scene obj has a background as below, it will switch to the loaded background, but then immediately flick back to the original background.
        // This problem DOES NOT occur when the currentSceneObj DOES NOT have a background key (i.e. background didn't change on the previous click)
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
    }
    function load() {
        let loadedObj = JSON.parse(localStorage.getItem("saveFile0"));
        console.log("LoadedObj: ", loadedObj);
        /*         console.log("LoadedObjBg:" ,loadedObj.background)
        console.log(
            "findlast bg: ",
            ch1[loadedObj.scene].scene.findLast((element) => element.Background)
                .Background
        ); */
        setBg(
            ch1[loadedObj.scene].scene.findLast((element) => element.Background)
                .Background
        );
        //setBg(loadedObj.background);
        setCurrentScene(loadedObj.scene);
        setSceneArrayEntry(loadedObj.sceneEntry);
        setLog(loadedObj.log);
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
    function loadGameState(gameStateObj) {
        console.log("loadGameState called with: ",gameStateObj);
        setCurrentScene(gameStateObj.scene);
        setSceneArrayEntry(gameStateObj.sceneEntry);
        setBg(gameStateObj.background);
        setLog(gameStateObj.log);
        setLuck(gameStateObj.luck);
        setSprites(gameStateObj.sprites);
    }
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
                {" "}
                <AuthenticationPrompt />
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
                    <LoadPromptBox
                        loadGameState={loadGameState}
                    />
                ) : loadPromptVisibility && savePromptVisibility ? (
                    toggleSavePromptVisibility() && (
                        <LoadPromptBox
                            loadGameState={loadGameState}
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
