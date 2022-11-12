import "./LowerSectionBox.css";

function LowerSectionBox({ CharacterName, Dialogue, onClick }) {
    return (
        <section className="LowerSectionBox">
            <div
                className="textbox"
                id="clickable-dialogue-box"
                onClick={onClick}
            >
                <div className="name-box">
                    <h3 className="name-bar" id={CharacterName}>
                        {CharacterName}
                    </h3>
                </div>
                <div className="dialogue-box">
                    <p>{Dialogue}</p>
                </div>
            </div>
        </section>
    );
}
export { LowerSectionBox };
