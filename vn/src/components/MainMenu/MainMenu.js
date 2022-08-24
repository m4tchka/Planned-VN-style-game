function mainMenu  () {

    // To make bg full screen, take from top-level div in App.js
    return (
        <div className="MainMenuPage">
            <h1 className="Title"> --- Title goes here --- </h1>
            <div>
                <button>Start</button>
                <button>Load</button>
                <button>Options</button>
                <button>About</button>
                <button>Exit</button>
            </div>
            <p></p>
        </div>
    )
}
export { mainMenu }