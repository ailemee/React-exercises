import React from "react";

const onClick = (e) => {
  alert("You clicked on Button " + e.target.id);
};

const Button = (props) => {
  return (
    <button id={props.id} onClick={(e) => onClick(e)}>
      Button {props.id}
    </button>
  );
};

export default Button;
