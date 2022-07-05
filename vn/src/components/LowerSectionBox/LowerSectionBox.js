import "./LowerSectionBox.css"
import { Textbox } from "./Textbox/Textbox.js";
import { ReusableButtonGroup } from "./ReusableButtonGroup/ReusableButtonGroup.js";
function LowerSectionBox ( { ButtonList, CharacterName, Dialogue, onClick } ) {

    return (
        <section className="LowerSectionBox">
            <Textbox
                onClick={onClick} 
                CharacterName={CharacterName}
                Dialogue={Dialogue}
            />
            <ReusableButtonGroup ButtonList={ButtonList}
            />
        </section>
    );
};
export { LowerSectionBox };