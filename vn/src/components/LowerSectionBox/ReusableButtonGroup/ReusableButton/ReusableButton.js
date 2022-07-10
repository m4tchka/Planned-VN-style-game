import "./ReusableButton.css"

function ReusableButton ( {ReusableButtonText, someFunction, className} ) {

    return (
        <button 
            className={className}
            type = "button"
            onClick = {someFunction} 
        >
            {ReusableButtonText}        
        </button>            
    )
}
export { ReusableButton };