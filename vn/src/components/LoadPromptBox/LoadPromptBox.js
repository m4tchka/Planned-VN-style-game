import "./LoadPromptBox.css";
import { useEffect, useState } from "react";
import { colRef,user } from "../../firebase.js";
import { getDocs, where } from "firebase/firestore";
function LoadPromptBox({ loadGameState }) {
    // Fetches the list of savefiles from Firebase
    // Takes the SETSTATE functions (to change the current states to the loaded file's states)
    const [loadfiles, setLoadfiles] = useState([]);
    useEffect(() => {
        getDocs(colRef,where(`userId == ${user.uid}`)).then((snapshot) => {
            let saves = [];
            snapshot.docs.forEach((doc) => {
                saves.push({ ...doc.data(), id: doc.id });
            });
            console.log("getdocs: ", saves);
            setLoadfiles(saves);
        });
    }, []);
    return (
        <div className="load-prompt-box">
            <h2 className="load-prompt-box-title">Load</h2>
            {loadfiles.map((savefile) => {
                return (
                    <div className="loadfile" key={savefile.id}>
                        {savefile.createdAt ? (
                            <>
                                <p>{`${new Date(
                                    savefile.createdAt.seconds * 1000
                                )
                                    .toISOString()
                                    .substring(0, 10)} - ${new Date(
                                    savefile.createdAt.seconds * 1000
                                )
                                    .toISOString()
                                    .substring(11, 16)}`}</p>
                                <button
                                    onClick={() => {
                                        loadGameState(savefile);
                                    }}
                                >
                                    Load
                                </button>
                            </>
                        ) : (
                            <>
                                <p>No data</p>
                                <button disabled={true}>Load</button>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
export { LoadPromptBox };
