import "./App.css";
import { ButtonList } from "../LowerSectionBox/ReusableButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js" 
function App() {
    return (
        <div className="App">
            <LowerSectionBox 
                CharacterName={"Ganyu"}
                Dialogue={'"Roll for who you like"'}
                ButtonList={ButtonList}/>
        </div>
    );
};
export default App;
