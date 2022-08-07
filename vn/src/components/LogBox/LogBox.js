import "./LogBox.css";

function LogBox({ log, logVisibility }) {
    console.log("logVisibility (LogBox): ", logVisibility);
    return (
        <>
            {logVisibility && (
                <div className="log-box">
                    {log.map((logEntry) => {
                        return (
                            <div className="log-box-entry">
                                {logEntry.Question ? (
                                    <p>{`${logEntry.Question}: ${logEntry.Choice}`}</p>
                                ) : (
                                    <p>{`${logEntry.Name}: ${logEntry.Dialogue}`}</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}
export { LogBox };
/*  Old "same level" passing of logVis state - Didn't work 
import useLogBox from "../../hooks/useLogBox.js";
const { logVisibility } = useLogBox();
    Destructure out (only) the logVisibility state from useLogBox custom hook
    Below, consume that logVisibility state and use it to toggle whether the actual content of LogBox is rendered or not, using SHORT-CIRCUIT EVALUATION
 */
