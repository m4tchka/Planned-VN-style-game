import "./OneOffButton.css"

function OneOffButton ( {OneOffButtonText, someSpecificFunction} ) {

    return (
        <button 
            className = "OOButton"
            type = "button"
            onClick = {someSpecificFunction} 
        >
            {OneOffButtonText}        
        </button>
            
    )
}
export {OneOffButton};