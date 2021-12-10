import React from "react";
import styled from "styled-components";

// Write your Character component here
const StyledCharacters = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
`;

const Character = (props) => {
  const { charactersName } = props;

  return <StyledCharacters>{charactersName}</StyledCharacters>;
};

export default Character;
