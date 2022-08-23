import "./SpriteSectionBox.css";
import testImg from "../../Character_Ganyu_Portrait.webp";

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
            <img alt="testImg" src={testImg} className="test" />
        </section>
    );
}
export { SpriteSectionBox };
