import React from "react";

// Write your Character component here

const Character = (props) => {
  const { charactersName } = props;
  return <div>{charactersName}</div>;
};

export default Character;
