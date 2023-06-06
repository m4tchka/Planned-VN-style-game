import { useState } from "react";
import { useLocation } from "react-router-dom";
function useLog() {
    // TODO: Add condition to shift oldest entry when log is above certain number of entries.
    const location = useLocation();
    const [log, setLog] = useState(location.state ? location.state.gamestate.log : []);
    function makeEntry(Name, Dialogue) {
        let newEntry = { Name: Name, Dialogue: Dialogue };
        return newEntry;
    }
    function makeQuestionEntry(Question, Choice) {
        let newEntryQ = { Question: Question, Choice: Choice };
        return newEntryQ;
    }
    function addEntry(newEntry) {
        console.log(newEntry, " added to log!");
        if (!Array.isArray(newEntry)) {
            setLog([...log, newEntry]);
            console.log("log is now: ", [...log, newEntry]);
        } else {
            setLog([...log, newEntry].flat());
            console.log(
                "log is now: ",
                [...log, newEntry].flat(),
                "and had to be flattened !"
            );
        }
    }
    return { log, makeEntry, makeQuestionEntry, addEntry, setLog };
}
export default useLog;
