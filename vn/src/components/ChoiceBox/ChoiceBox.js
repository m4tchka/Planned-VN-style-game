import "./ChoiceBox.css"
import { ReusableButton } from "../LowerSectionBox/ReusableButtonGroup/ReusableButton/ReusableButton"

function ChoiceBox ( {choiceList} ) {
    
    return (
        <div className = "ChoiceBox">
            {choiceList.map(function(eachChoice) {
                return ( 
                    <ReusableButton 
                        className = "ChoiceButton"
                        ReusableButtonText={eachChoice.text}
                        someFunction={function(){console.log(`You picked ${eachChoice.text}`)}}
                        
                    />
                )
            })}
        </div>
    );
};
export { ChoiceBox };

// someFunction={eachChoice.function}