import "./ReusableButtonGroup.css"
import { ReusableButton } from "./ReusableButton/ReusableButton.js";
function ReusableButtonGroup ( {ButtonList} ) {
    return (
        <div className = "ReusableButtonGroup">
            {ButtonList.map(function(eachRButton) {
                return ( 
                    <ReusableButton 
                        ReusableButtonText={eachRButton.name}
                        someFunction={eachRButton.function}
                    />
                )
            })};
        </div>
    )
}
export {ReusableButtonGroup};