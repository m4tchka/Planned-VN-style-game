import "./App.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js";
import { ch1 } from "../../dialogueFile.js";
import { ch1Test } from "../../dialogueFileTest";
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
// import { auth } from "../../firebase";

function App() {
    /*TODO: 
    Separate states for sprites
    REVIEW: Possibly add useReducer instead of so many "switch___" functions
    Possibly move save/ load logic out to a hook
    Change sprite filenames
    */
    const location = useLocation();
    const [currentScene, setCurrentScene] = useState(
        location.state
            ? location.state.gamestate.scene
            : /* ch1.findIndex((e) => e.id === 1) */0
    );
    const [sceneArrayEntry, setSceneArrayEntry] = useState(
        location.state ? location.state.gamestate.sceneEntry : 0
    );
    const [playerName,setPlayerName] = useState("TestName");
    const [currentSceneObj, setCurrentSceneObj] = useState({});
    const [currentName, setCurrentName] = useState("");
    const [currentDialogue, setCurrentDialogue] = useState("");
    const [bg, setBg] = useState(
        location.state ? location.state.gamestate.background : 0
    );
    const [luck, setLuck] = useState(
        location.state ? location.state.gamestate.luck : 0
    );
    const [sprites, setSprites] = useState(
        location.state ? location.state.gamestate.sprites : []
    );
    /* const [sprite1,setSprite1]=useState({}) */
    const { log, makeEntry, makeQuestionEntry, addEntry, setLog } = useLog();
    const { logVisibility, toggleLogVisibility } = useLogBox();
    const { toggleAutoMode, autoToggled } = useAuto();
    const { savePromptVisibility, toggleSavePromptVisibility } =
        useSavePromptBox();
    const { loadPromptVisibility, toggleLoadPromptVisibility } =
        useLoadPromptBox();
    useEffect(() => {
        (function switchCurrentSceneObj() {
            setCurrentSceneObj(ch1Test[currentScene].scene[sceneArrayEntry]);
        })();
        // FIXME: when loading to a previous sceneObj in the story, if that scene obj has a background as below, it will switch to the loaded background, but then immediately flick back to the original background.
        // This problem DOES NOT occur when the currentSceneObj DOES NOT have a background key (i.e. background didn't change on the previous click)
        (function switchName() {
            setCurrentName(currentSceneObj.Name);
        })();
        (function switchDialogue() {
            setCurrentDialogue(currentSceneObj.Dialogue);
        })();
        if (currentSceneObj.Background) {
            (function switchBackground() {
                setBg(currentSceneObj.Background);
            })();
        }
        if (currentSceneObj.Sprites) {
            (function switchSprites() {
                setSprites(currentSceneObj.Sprites);
            })();
        }
    });
    function skipToEndOfCurrentScene() {
        let remainingObjsInArr = ch1Test[currentScene].scene.slice(
            sceneArrayEntry,
            ch1Test[currentScene].scene.length - 1
        );
        addEntry(remainingObjsInArr);
        let endOfSceneEntry = ch1Test[currentScene].scene.length - 1;
        setSceneArrayEntry(endOfSceneEntry);
        setCurrentSceneObj(ch1Test[currentScene].scene[endOfSceneEntry]);
        setSprites(
            ch1Test[currentScene].scene.findLast((element) => element.Sprites)
                .Sprites
        );
        setBg(
            ch1Test[currentScene].scene.findLast((element) => element.Background)
                .Background
        );
        console.log("SkipToEnd function called");
    }
    function handleClick() {
        // NOTE: THIS IS NOT INVOLVED IN THE AUTO FUNCTION
        if (
            sceneArrayEntry < ch1Test[currentScene].scene.length &&
            !currentSceneObj.Question
        ) {
            setSceneArrayEntry(sceneArrayEntry + 1);
            addEntry(makeEntry(currentName, currentDialogue));
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
        localStorage.setItem("quickSaveFile", JSON.stringify(savedObj));
        console.log(savedObj, "Saved to localStorage !");
    }
    function load() {
        let localLoadedGamestate = JSON.parse(
            localStorage.getItem("quickSaveFile")
        );
        console.log("localLoadedObj: ", localLoadedGamestate);
        loadGameState(localLoadedGamestate);
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
        console.log("loadGameState called with: ", gameStateObj);
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
                {/* {auth.currentUser ? (
                <p>User: {auth.currentUser.uid}</p>
            ) : (
                <p>No user found</p>
            )} */}
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
                    <LoadPromptBox loadGameState={loadGameState} />
                ) : loadPromptVisibility && savePromptVisibility ? (
                    toggleSavePromptVisibility() && (
                        <LoadPromptBox loadGameState={loadGameState} />
                    )
                ) : (
                    <></>
                )}
                <ButtonGroup
                    Log={toggleLogVisibility}
                    Skip={skipToEndOfCurrentScene}
                    Auto={() => {
                        toggleAutoMode();
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
