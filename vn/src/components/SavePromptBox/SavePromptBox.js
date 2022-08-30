import "./SavePromptBox.css";
import { saveFileAdderFunction, getSaves } from "../../index.js";
function SavePromptBox({ states }) {
    let { currentScene, sceneArrayEntry, bg, log, luck, sprites } = states;
    // Takes the list of savefiles from Firebase - to overwrite
    // Takes the STATES themselves - to make a snapshot of and send to Firebase as a document
    let saveObj = {
        scene: currentScene,
        sceneEntry: sceneArrayEntry,
        background: bg,
        log: log,
        luck: luck,
        sprites: sprites,
    };
    let saves = getSaves();
    return (
        <div className="save-prompt-box">
            {saves.map((save) => {
                return (
                    <div className="savefile">
                        <p>{save.id}</p>
                    </div>
                );
            })}
            <button
                onClick={() => {
                    saveFileAdderFunction(saveObj);
                }}
            >
                Save
            </button>
        </div>
    );
}
export { SavePromptBox };
