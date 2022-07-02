



States to use:
    "Y/n"
        Updates at:
            Start, (and then never again?)
    "Progress" through the story
        Updates at: 
            Each dialogue "segment/section"
            Each decision point
            Each "Cutscene"/ fixed event
            Before & after every "level/mission" (e.g xyz mission start, xyz mission finish)

    "Standing/ reputation" (with each character?)
        Updates at:
            (some) decision points
            (some) "Cutscenes"/ fixed events
            After (some) "levels/missions" (at various score thresholds)
            
Components are functions that return HTML elements (via JSX)
    Independent
    Reusable
        
List of components:
Button 
    Purpose: render a button, at bottom bar of screen
        Functions: carries out an onClick function
    Props: Different Text/label, different functions passed down as onClick prop
    States: None
    Returns: Button with differing text/label, (same styling?)

Textbox (Dialogue) Div
    Purpose: render a styled textbox, within which the dialogue will be displayed
        Functions: None (Nested <p> tag component will have the dialogue)
    Props: None (text passed straight through)
    States: None 
    Returns: Box surrounding actual dialogue


    Purpose:
        Functions:
    Props:
    States:
    Returns:
etc