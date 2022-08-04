return (
    <div onClick={props.setNextFrame} className="zoom-frame">
      <ReactCSSTransitionGroup
        transitionName={props.bgTransition || "scene-change"}
        transitionEnterTimeout={bgTransitionTime("bgTransition")}
        transitionLeaveTimeout={bgTransitionTime("bgTransition")}
      >
        <img draggable="false" key={props.bg} className="bg" src={props.bg} />
        <ReactCSSTransitionGroup
          className="sprite-center-parent"
          transitionName={props.spriteTransition || "sprite"}
          transitionEnterTimeout={spriteTransitionTime("spriteTransition")}
          transitionLeaveTimeout={spriteTransitionTime("spriteTransition")}
        >
          <img draggable="false" key={props.sprite} className={"sprite " + props.spriteEffect} src={props.sprite} />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={props.spriteLeftTransition || "sprite"}
          transitionEnterTimeout={spriteTransitionTime("spriteLeftTransition")}
          transitionLeaveTimeout={spriteTransitionTime("spriteLeftTransition")}
        >
          <img
            draggable="false"
            key={props.spriteLeft + "left"}
            className={"sprite left " + props.spriteLeftEffect}
            src={props.spriteLeft}
          />
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName={props.spriteRightTransition || "sprite"}
          transitionEnterTimeout={spriteTransitionTime("spriteRightTransition")}
          transitionLeaveTimeout={spriteTransitionTime("spriteRightTransition")}
        >
          <img
            draggable="false"
            key={props.spriteRight + "right"}
            className={"sprite right " + props.spriteRightEffect}
            src={props.spriteRight}
          />
        </ReactCSSTransitionGroup>
      </ReactCSSTransitionGroup>
      {props.text && props.textBoxShown ? (
        <div className="text-box" style={{ fontFamily: props.font }}>
          {props.speaker ? <div className="speaker"> {props.speaker} </div> : null}
          <div className="text">{props.speaker ? `"${props.text}"` : props.text}</div>
        </div>
      ) : null}
    </div>
  );



  return (
    <div className="App">
        <LowerSectionBox 
            onClick = {switchDialogue + switchName}
            CharacterName={"Ganyu"}
            Dialogue={'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'}
            ButtonList={ButtonList}/>
    </div>
);
;
export default App;



