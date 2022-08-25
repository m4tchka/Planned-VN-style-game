function mainMenu  () {
    // TODO: React Router DOM
    // To make bg full screen, take from top-level div in App.js
    return (
        <div className="MainMenuPage">
            <h1 className="Title"> --- Title goes here --- </h1>
            <div className="VerticalButtonBar">
                <button>Start</button>
                <button>Load</button>
                <button>Options</button>
                <button>About</button>
                <button>Exit</button>
            </div>
            <p>By m4tchka</p>
        </div>
    )
}
export { mainMenu }