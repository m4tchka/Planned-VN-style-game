import "./LowerSectionBox.css"
import { Textbox } from "./Textbox/Textbox.js";

function LowerSectionBox ( { CharacterName, Dialogue, onClick } ) {

    return (
        <section className="LowerSectionBox">
            <Textbox
                onClick={onClick} 
                CharacterName={CharacterName}
                Dialogue={Dialogue}
            />
        </section>
    );
};
export { LowerSectionBox };