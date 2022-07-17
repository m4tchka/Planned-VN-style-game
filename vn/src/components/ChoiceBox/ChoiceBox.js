import "./ChoiceBox.css"

function ChoiceBox ( {choiceList, question, handleChoice} ) {
    
    return (
        <div className = "ChoiceBox">
            <p>{question}</p>
            {choiceList.map(function(eachChoice) {
                return ( 
                    <button 
                        className = "ChoiceButton"
                        onClick={
                            function(){
                                handleChoice(eachChoice.next)
                                console.log(eachChoice.next)
                            }
                        }   
                    >
                        {eachChoice.text}
                    </button>
                )
            })}
        </div>
    );
};
export { ChoiceBox };

// someFunction={eachChoice.function}