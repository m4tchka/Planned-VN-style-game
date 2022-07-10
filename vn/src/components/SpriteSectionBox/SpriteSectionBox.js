import "./SpriteSectionBox.css";
import { SpriteBox } from "./SpriteBox/SpriteBox.js";

function SpriteSectionBox () {
    return (
        <section className="SpriteSectionBox">
            <SpriteBox/>
            <SpriteBox/>
            <SpriteBox/>
        </section>
    )
};
export { SpriteSectionBox };