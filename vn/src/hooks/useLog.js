import { useState } from "react";

function useLog () {
    const [log2,setLog2] = useState([]);
    function makeEntry (Name, Dialogue) {
        // let newEntry = {[`${Name}`]:Dialogue}
        let newEntry = {Name2:Name, Dialogue2:Dialogue}
        return newEntry;
    };
    function makeQuestionEntry (Question, Choice) {
        // let newEntryQ = {[`${Question}`]:Choice}
        let newEntryQ = {Question:Question, Choice:Choice}
        return newEntryQ;
    }
    function addEntry (newEntry) {
        console.log(newEntry, " added to log2!")
        setLog2([...log2,newEntry])
        console.log("log2 is now: ",[...log2,newEntry])
    };
    return {log2, makeEntry, makeQuestionEntry, addEntry};
};
export default useLog;

