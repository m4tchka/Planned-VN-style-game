import "./Textbox.css";
import { DialogueBox } from "./DialogueBox/DialogueBox.js";
import { NameBox } from "./NameBox/NameBox.js";

function Textbox ( {CharacterName, Dialogue, onClick} ) {
    
    return (
        <div className="Textbox" id="clickable-dialogue-box" onClick={onClick}>
            <NameBox CharacterName={CharacterName}/>
            <DialogueBox Dialogue={Dialogue}/>
        </div>
    )
};
export { Textbox };