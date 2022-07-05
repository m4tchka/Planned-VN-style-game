import "./App.css";
import { ButtonList } from "../LowerSectionBox/ReusableButtonGroup/ButtonList/ButtonList.js";
import { LowerSectionBox } from "../LowerSectionBox/LowerSectionBox.js" 
function App() {
    return (
        <div className="App">
            <LowerSectionBox 
                CharacterName={"Ganyu"}
                Dialogue={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'}
                ButtonList={ButtonList}/>
        </div>
    );
};
export default App;
