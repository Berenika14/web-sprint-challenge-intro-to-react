import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 15em;
  padding: 35px;
  border: 3px solid green;
  width: 60%;
  height: 100%;
  color: white;
  opacity: 0.6;
  :hover {
    opacity: 1;
  }
  background-color: black;
`;

//Write your Character component here
const Character = (props) => {
  const { charactersName, year } = props;

  return (
    <StyledCharacters>
      {charactersName} {year}
    </StyledCharacters>
  );
};

export default Character;
