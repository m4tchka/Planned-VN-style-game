import "./Textbox.css";

function Textbox({ CharacterName, Dialogue, onClick }) {
    return (
        <div className="textbox" id="clickable-dialogue-box" onClick={onClick}>
            <div className="name-box">
                <h3 className="name-bar" id={CharacterName}>
                    {CharacterName}
                </h3>
            </div>
            <div className="dialogue-box">
                <p>{Dialogue}</p>
            </div>
        </div>
    );
}
export { Textbox };
