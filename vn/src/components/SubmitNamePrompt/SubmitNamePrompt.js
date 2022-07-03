import "./SubmitNamePrompts.css"
import {useState} from 'react'

function SubmitNamePrompt () {
    const [playerName,setPlayerName]= useState("")
    const [nameField, setNameField] = useState("");

    function changeNameField(e) {
        setNameField(e.target.value);
    };
    function onSubmit (e, nameField) {
        console.log("onSubmit actually called");
        console.log(nameField);
        e.preventDefault();
        setPlayerName(nameField);
    }
    /* When rendering this, move onSubmit up into the component rendering SubmitNamePrompt, define a new state there, and pass onSubmit down to here as a prop. Add a line within onSubmit to set the new state to be the value of the name field. */

    return (
        <form
            onSubmit={function (e) {
                e.preventDefault();
                if (nameField) {
                    onSubmit(e, nameField);
                    console.log("onSubmit called");
                } else {
                    console.log("Please input a name!");
                }
            }}>

        </form>
    )
};

export { SubmitNamePrompt }