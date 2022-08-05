import "./LogBox.css";
import useLogBox from "../../hooks/useLogBox.js";

function LogBox({ log }) {
    const { logVisibility } = useLogBox();
    //Destructure out (only) the logVisibility state from useLogBox custom hook
    //Below, consume that logVisibility state and use it to toggle whether the actual content of LogBox is rendered or not, using SHORT-CIRCUIT EVALUATION
    return (
        <>
            {logVisibility && (
                <div className="log-box">
                    {log.map((logEntry) => {
                        return (
                            <div className="log-box-entry">
                                <p>{`${logEntry.Name}: ${logEntry.Dialogue}`}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
export { LogBox };
