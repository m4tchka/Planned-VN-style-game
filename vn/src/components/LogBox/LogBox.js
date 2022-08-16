import "./LogBox.css";

function LogBox({ log }) {
    return (
        <>
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
        </>
    );
}
export { LogBox };