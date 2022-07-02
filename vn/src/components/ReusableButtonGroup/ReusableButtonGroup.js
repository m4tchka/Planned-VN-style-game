import "./ReusableButtonGroup.css"
import { ReusableButton } from "./ReusableButton/ReusableButton";
function ReusableButtonGroup ( {ListOfReusableButtons} ) {
    return (
        <div className = "ReusableButtonGroup">
            {ListOfReusableButtons.map(function(eachRButton) {
                return ( 
                    <ReusableButton 
                        ReusableButtonText={eachRButton.text}
                        someFunction="Function"
                    />
                )
            })}
        </div>
    )
}
export {ReusableButtonGroup};