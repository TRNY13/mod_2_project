import React from "react";

// This component is set as a functional component as well since it
// wont be using state.
// Used in-line styling here to create the
// width& height of the pictures when displayed

const Dogs = (props) => {
  return (
    <div className="dogimg-container">
      <img style={{ width: 350, height: 350 }} alt="" src={props.url} />
    </div>
  );
};





export default Dogs;
