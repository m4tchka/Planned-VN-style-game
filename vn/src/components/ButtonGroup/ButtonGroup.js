import "./ButtonGroup.css";

function ButtonGroup({ Log, Skip, Auto, Save }) {

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
            name:"Save",
            function: Save,
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
