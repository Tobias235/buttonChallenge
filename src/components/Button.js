import React from "react";
import "./Button.css";

function Button(props) {
  const checkBtnDisabled = props.disabled ? props.disabled : "";

  const totalClassName =
    (props.variant ? props.variant : "") +
    (props.color ? " " + props.color : "") +
    (props.size ? " " + props.size : "") +
    (props.startIcon || props.endIcon ? "" : "") +
    (props.hover ? " " + props.hover : "") +
    (props.disableShadow ? " " + props.disableShadow : "");
  return (
    <button
      disabled={checkBtnDisabled}
      className={`${totalClassName} ${props.className}`}
    >
      {props.startIcon ? (
        <span className={"material-icons"}>{props.startIcon}</span>
      ) : (
        ""
      )}
      {props.children}
      {props.endIcon ? (
        <span className={"material-icons"}>{props.endIcon}</span>
      ) : (
        ""
      )}
    </button>
  );
}

export default Button;
