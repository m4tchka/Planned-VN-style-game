import "./App.css";
import { ButtonList } from "../ReusableButtonGroup/ButtonList/ButtonList.js";
import { ReusableButtonGroup } from "../ReusableButtonGroup/ReusableButtonGroup.js";
function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <ReusableButtonGroup ButtonList={ButtonList}/>
        </div>
    );
}
export default App;
