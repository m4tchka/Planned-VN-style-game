import "./ReusableButton.css"

function ReusableButton ( {ReusableButtonText, someFunction} ) {

    return (
        <button 
            className = "RButton"
            type = "button"
            onClick = {someFunction} 
        >
            {ReusableButtonText}        
        </button>
            
    )
}
export {ReusableButton};