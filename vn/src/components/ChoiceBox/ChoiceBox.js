import "./ChoiceBox.css"

function ChoiceBox ( {choiceList, question, handleChoice, resetScene} ) {
    
    return (
        <div className = "ChoiceBox">
            <p className = "ChoiceQuestion">{question}</p>
            {choiceList.map(function(eachChoice) {
                return ( 
                    <button 
                        className = "ChoiceButton"
                        onClick = {
                            function() {
                                handleChoice(eachChoice.Next)
                                resetScene(0)
                            }
                        }   
                    >
                        {eachChoice.Text}
                    </button>
                )
            })}
        </div>
    );
};
export { ChoiceBox };

// someFunction={eachChoice.function}