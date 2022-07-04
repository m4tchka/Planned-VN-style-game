import "./DialogueBox.css";

function DialogueBox ( {Dialogue} ) {
    return (
        <div className="DialogueBox">
            <p>{Dialogue}</p>
        </div>
    )
};
export {DialogueBox};