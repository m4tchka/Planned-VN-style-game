import "./NameBox.css";

function NameBox ( {CharacterName} ) {

    return (
        <div className="NameBox">
            <p className="NameBar">{CharacterName}</p>
        </div>
    )
};
export { NameBox }; 