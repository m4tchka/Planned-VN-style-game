import "./ButtonGroup.css";

function ButtonGroup({ toggleLog, skip, toggleAuto }) {

    let ButtonList = [
        {
            name:"Log",
            function: toggleLog,
        },
        {
            name:"Skip",
            function: skip,
        },
        {
            name:"Auto",
            function: toggleAuto,
        },
        {
            name:"Save",
            function: function SaveFunction () {
                console.log("Save function called");
            },
        },
        {
            name:"Load",
            function: function LoadFunction () {
                console.log("Load function called");
            },
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
