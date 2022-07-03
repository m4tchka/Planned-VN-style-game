import "./App.css";
import { ButtonList } from "../ReusableButtonGroup/ButtonList/ButtonList.js";
import { ReusableButtonGroup } from "../ReusableButtonGroup/ReusableButtonGroup.js";
function App() {
    return (
        <div className="App">

            <ReusableButtonGroup ButtonList={ButtonList}/>
        </div>
    );
}
export default App;
