import "./ButtonGroup.css";

function ButtonGroup({ Log, Skip, Auto, Save, Load, OnlineSave }) {

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
            name:"O.Load",
            function: OnlineSave
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
