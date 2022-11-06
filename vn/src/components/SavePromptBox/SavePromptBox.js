import "./SavePromptBox.css";
import { useEffect, useState } from "react";
import { colRef, db } from "../../firebase.js";
import {
    getDocs,
    serverTimestamp,
    updateDoc,
    doc,
    addDoc,
    /* onSnapshot, */
} from "firebase/firestore";
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
    /* FIXME: Infinite loop with snapshot function - even when not using useEffect
    Could pass down savePromptVisibility to this component and have it conditionally render most of the content it, with a invisible div always being rendered in app.
        useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            let saves = [];
            snapshot.docs.forEach((doc) => {
                saves.push({ ...doc.data(), id: doc.id });
            });
            console.log("onSnapshot: ", saves);
            setSavefiles(saves);
        });
    }, []); 
    */

    function overwrite(id) {
        console.log("overwrite called");
        const docRef = doc(db, "testSaves", id);
        updateDoc(docRef, saveObj);
    }
    function save() {
        console.log("save called with saveobj: ", saveObj);
        addDoc(colRef, saveObj);
    }
    console.log("savefiles: ", savefiles);
    return (
        <div className="save-prompt-box">
            <h2 className="save-prompt-box-title">Save</h2>
            <div className="savefile" id="new-savefile-slot">
                <p>+</p>
                <button onClick={save}>Save new</button>
            </div>
            {savefiles.map((savefile) => {
                return (
                    <div className="savefile" key={savefile.id}>
                        {savefile.createdAt ? (
                            <>
                                <p>
                                    {`${new Date(
                                        savefile.createdAt.seconds * 1000
                                    )
                                        .toISOString()
                                        .substring(0, 10)} - ${new Date(
                                        savefile.createdAt.seconds * 1000
                                    )
                                        .toISOString()
                                        .substring(11, 16)}`}
                                </p>
                                <button onClick={() => overwrite(savefile.id)}>
                                    Overwrite
                                </button>
                            </>
                        ) : (
                            <>
                                <p>No data</p>
                                <button onClick={() => save()}>Save</button>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
export { SavePromptBox };
