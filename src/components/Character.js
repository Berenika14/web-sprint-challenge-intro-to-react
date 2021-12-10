import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 45px;
  border: 1px solid green;
  margin: 0.3em;
  margin-left: 12em;
  width: 60%;
  color: white;
  opacity: 0.6;
  :hover {
    opacity: 1;
    text-shadow: 1px 1px 5px #fff;
  }
  background-color: black;
`;
const StyledYears = styled.div`
  background-color: #6c7375;
  border-radius: 5px 15px;
  color: purple;
`;
//Write your Character component here
const Character = (props) => {
  const { charactersName, year } = props;

  return (
    <StyledCharacters>
      {charactersName} <StyledYears>{year}</StyledYears>
    </StyledCharacters>
  );
};

export default Character;
