import "./NameBox.css";

function NameBox ( {CharacterName} ) {

    return (
        <div className="NameBox">
            <p>{CharacterName}</p>
        </div>
    )
};
export { NameBox }; 