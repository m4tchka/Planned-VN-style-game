import "./NameBox.css";

function NameBox ( {CharacterName} ) {
    /* 
    In order to make diffent names have different styles, do not use css modules,
    and instead have h3's id = {CharacterName} (passed as prop above) and make extra
    entries in Namebox.css corresponding for each character name that will have different styling.
    */
    return (
        <div className="NameBox">
            <h3 className="NameBar" id={CharacterName}>{CharacterName}</h3>
        </div>
    )
};
export { NameBox }; 