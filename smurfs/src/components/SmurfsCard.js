import React from "react";

const SmurfsCard = (props) => {
  return (
    <dvi>
      <h2>{props.smurf.name} </h2>
      <h3>{props.smurf.age} </h3>
      <h3>{props.smurf.height} </h3>
    </dvi>
  );
};

export default SmurfsCard;
