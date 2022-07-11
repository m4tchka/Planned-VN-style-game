import "./ChoiceBox.css"
import { ReusableButton } from "../LowerSectionBox/ReusableButtonGroup/ReusableButton/ReusableButton"
let choiceArray=[{text:"Choice 1",},
                    {text:"Choice 2",},
                    {text:"Choice 3",},
                    {text:"Choice 4",},];
function ChoiceBox () {
    
    return (
        <div className = "ChoiceBox">
            {choiceArray.map(function(eachChoice) {
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