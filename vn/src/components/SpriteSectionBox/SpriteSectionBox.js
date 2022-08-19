import "./SpriteSectionBox.css";
/* import { SpriteBox } from "./SpriteBox/SpriteBox.js"; */

function SpriteSectionBox({ spriteList }) {
    return (
        <section className="SpriteSectionBox">
            {spriteList.map((sprite) => (
                <div className="SpriteBox">
                    <img
                        id={sprite.Name}
                        className="Sprite"
                        alt={sprite.Name}
                        src={sprite.Path}
                    />
                </div>
            ))}
{/*             <SpriteBox />
            <SpriteBox />
            <SpriteBox /> */}
        </section>
    );
}
export { SpriteSectionBox };
