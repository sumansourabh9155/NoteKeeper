import React from "react";

function Note(props) {
  return (
    <div className="writtingArea">
      <h3>{props.name}</h3>
      <p contentEditable="true"> ashjgdgadg</p>
    </div>
  );
}
export default Note;
