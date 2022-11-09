import "./ButtonGroup.css";
import { auth } from "../../firebase.js";

function ButtonGroup({ Log, Skip, Auto, Save, Load, OSave, OLoad }) {
    //TODO: Refactor this implementation
    //TODO: Rename Save to QSave and add a new Save method for multiple local save fiels.
    let ButtonList = [
        {
            name: "Log",
            function: Log,
        },
        {
            name: "Skip",
            function: Skip,
        },
        {
            name: "Auto",
            function: Auto,
        },
        {
            name: "Q.Save",
            function: Save,
        },
        {
            name: "Q.Load",
            function: Load,
        },
    ];
    if (auth.currentUser) {
        ButtonList.push(
            {
                name: "O.Save",
                function: OSave,
            },
            {
                name: "O.Load",
                function: OLoad,
            }
        );
    }

    return (
        <div className="ReusableButtonGroup">
            {ButtonList.map((eachRButton) => {
                return (
                    <button
                        key={eachRButton.name}
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
