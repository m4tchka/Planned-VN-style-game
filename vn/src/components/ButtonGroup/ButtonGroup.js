import "./ButtonGroup.css";
function ButtonGroup({ ButtonList }) {
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
