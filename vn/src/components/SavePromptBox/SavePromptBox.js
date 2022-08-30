import "./SavePromptBox.css";
// import { saveFileAdderFunction } from "../../index.js";
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
/*     let saves = getSaves(); */
    return (
        <div className="save-prompt-box">
        <p>{saveObj.currentScene}</p>
        <p>{saveObj.sceneEntry}</p>
        <p>{saveObj.bg}</p>
        <p>{saveObj.luck}</p>
            {/* {xyz.map((save) => {
                return (
                    <div className="savefile">
                        <p>{save.id}</p>
                    </div>
                );
            })} */}
      {/*       <button
                onClick={() => {
                    saveFileAdderFunction(saveObj);
                }}
            >
                Save
            </button> */}
        </div>
    );
}
export { SavePromptBox };
