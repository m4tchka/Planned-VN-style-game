import { useState } from "react";

function useLog () {
    const [log,setLog] = useState([]);
    function makeEntry (Name, Dialogue) {
        let newEntry = {[`${Name}`]:Dialogue}
        return newEntry;
    };
    function makeQuestionEntry (Question, Choice) {
        let newEntry = {[`${Question}`]:Choice}
        return newEntry;
    }
    function addEntry (newEntry) {
        setLog(...log,newEntry)
    };
    return {log, makeEntry, makeQuestionEntry, addEntry};
};
export default useLog;

