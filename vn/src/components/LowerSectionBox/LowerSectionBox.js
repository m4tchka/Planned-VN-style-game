import "./LowerSectionBox.css"
import { Textbox } from "./Textbox/Textbox.js";
import { ReusableButtonGroup } from "./ReusableButtonGroup/ReusableButtonGroup.js";

function LowerSectionBox ( { CharacterName, Dialogue, ButtonList } ) {

    return (
        <section className="LowerSectionBox">
            <Textbox 
                CharacterName={CharacterName}
                Dialogue={Dialogue}
            />
            <ReusableButtonGroup ButtonList={ButtonList}
            />
        </section>
    );
};
export { LowerSectionBox };