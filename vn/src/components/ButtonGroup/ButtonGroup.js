import "./ButtonGroup.css";

function ButtonGroup({ Log, Skip, Auto, Save, Load, OSave, OLoad }) {
    //TODO: Refactor this implementation
    //TODO: Rename Save to QSave and add a new Save method for multiple local save fiels.
    let ButtonList = [
        {
            name:"Log",
            function: Log,
        },
        {
            name:"Skip",
            function: Skip,
        },
        {
            name:"Auto",
            function: Auto,
        },
        {
            name:"L.Save",
            function: Save,
        },
        {
            name:"L.Load",
            function: Load,
        },
        {
            name:"O.Save",
            function: OSave,
        },
        {
            name: "O.Load",
            function: OLoad,
        }
    ];
    return (
        <div className="ReusableButtonGroup">
            {ButtonList.map(function (eachRButton) {
                return (
                    <button
                        className="FunctionButton"
                        onClick={eachRButton.function}
                    >
                        {eachRButton.name}
                    </button>
                );
            })}
        </div>
    );
}
export { ButtonGroup };
