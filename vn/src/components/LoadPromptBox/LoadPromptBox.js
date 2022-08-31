import "./LoadPromptBox.css";
import { useEffect, useState } from "react";
import { colRef } from "../../firebase.js";
import { getDocs } from "firebase/firestore";
function LoadPromptBox({ setStateFunctions }) {
    let { setCurrentScene, setSceneArrayEntry, setBg, setLog, setLuck, setSprites} = setStateFunctions;
    // Fetches the list of savefiles from Firebase
    // Takes the SETSTATE functions (to change the current states to the loaded file's states)
    const [loadfiles, setLoadfiles] = useState([]);
    useEffect(() => {
        getDocs(colRef).then((snapshot) => {
            let saves = [];
            snapshot.docs.forEach((doc) => {
                saves.push({ ...doc.data(), id: doc.id });
            });
            console.log("getdocs: ", saves);
            setLoadfiles(saves);
        });
    }, []);
    function load(savefile) {
        setCurrentScene(savefile.scene)
        setSceneArrayEntry(savefile.sceneEntry)
        setBg(savefile.background)
        setLog(savefile.log)
        setLuck(savefile.luck)
        setSprites(savefile.sprites)
    }
    return (
        <div className="load-prompt-box">
            <h2>Load</h2>
            {loadfiles.map((savefile) => {
                return (
                    <div className="loadfile" key={savefile.id}>
                        <p>{savefile.id}</p>
                        <button
                            onClick={() => {
                                load(savefile);
                            }}
                        ></button>
                    </div>
                );
            })}
        </div>
    );
}
export { LoadPromptBox };
