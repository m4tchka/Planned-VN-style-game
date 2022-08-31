import "./SavePromptBox.css";
import { useEffect, useState } from "react";
// import { saveFileAdderFunction } from "../../index.js";
import { colRef,db } from "../../firebase.js";
import { getDocs, serverTimestamp, updateDoc, doc } from "firebase/firestore";
function SavePromptBox({ states }) {
    let { currentScene, sceneArrayEntry, bg, log, luck, sprites } = states;
    // Fetches the list of savefiles from Firebase - to overwrite
    // Takes the STATES themselves - to make a snapshot of and send to Firebase as a document
    const [savefiles, setSavefiles] = useState([]);
    let saveObj = {
        scene: currentScene,
        sceneEntry: sceneArrayEntry,
        background: bg,
        log: log,
        luck: luck,
        sprites: sprites,
        createdAt: serverTimestamp(),
    }; 
    useEffect(() => {
         getDocs(colRef).then((snapshot) => {
            let saves = [];
            snapshot.docs.forEach((doc) => {
                saves.push({ ...doc.data(), id: doc.id });
            });
            console.log("getdocs: ", saves);
            setSavefiles(saves);
        });
    }, []);
    function overwrite(id) {
        console.log("overwrite called");
        const docRef = doc(db,"testSaves", id)
        updateDoc(docRef,
            saveObj
        )  
    }
    function save() {
        console.log("save called");
    }
    console.log("savefiles: ", savefiles);
    return (
        <div className="save-prompt-box">
        <h2>Save</h2>
            {savefiles.map((savefile) => {
                return (
                    <div className="savefile" key={savefile.id}>
                        <p>{savefile.id}</p>
                        <button onClick={() => overwrite(savefile.id)}>Overwrite</button>
                        <button onClick={() => save()}>Save</button>
                    </div>
                );
            })}
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
