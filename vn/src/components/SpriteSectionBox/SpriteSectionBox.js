import "./SpriteSectionBox.css";

function SpriteSectionBox({ spriteList }) {
    return (
        <section className="SpriteSectionBox">
            {spriteList.map((sprite) => (
                <div className="SpriteBox">
                    {sprite.Path ? (
                        <img
                            id={sprite.Name}
                            className="Sprite"
                            alt={sprite.Name}
                            src={`${process.env.PUBLIC_URL}${sprite.Path}?auto=compress`}
                        />
                    ) : (
                        <div className="SpriteEmpty"></div>
                    )}
                </div>
            ))}
        </section>
    );
}
export { SpriteSectionBox };
