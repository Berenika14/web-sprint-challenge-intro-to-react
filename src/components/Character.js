import React from "react";
import styled from "styled-components";

const StyledCharacters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 12em;
  padding: 45px;
  border: 3px solid green;
  width: 60%;
  height: 100%;
  color: white;
  opacity: 0.6;
  :hover {
    opacity: 1;
    text-shadow: 1px 1px 5px #fff;
  }
  background-color: black;
`;
const StyledYears = styled.div`
  background-color: #86bdcd;
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
