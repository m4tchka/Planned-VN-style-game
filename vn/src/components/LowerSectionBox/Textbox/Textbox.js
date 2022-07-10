import "./Textbox.css";
import { DialogueBox } from "./DialogueBox/DialogueBox.js";
import { NameBox } from "./NameBox/NameBox.js";

function Textbox ( {CharacterName, Dialogue, onClick} ) {
    
    return (
        <div className="Textbox" onClick={onClick}>
            <NameBox CharacterName={CharacterName}/>
            <DialogueBox Dialogue={Dialogue}/>
        </div>
    )
};
export { Textbox };