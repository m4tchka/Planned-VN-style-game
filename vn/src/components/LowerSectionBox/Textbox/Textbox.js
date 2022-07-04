import "./Textbox.css";
import { DialogueBox } from "./DialogueBox/DialogueBox.js";
import { NameBox } from "./NameBox/NameBox.js";
function Textbox ( {CharacterName, Dialogue}) {
    
    return (
        <div className="Textbox">
            <NameBox CharacterName={CharacterName}/>
            <DialogueBox Dialogue={Dialogue}/>
        </div>
    )
};
export { Textbox };