import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ selectedNum, setSelectedNum, error, setError }) => {
  const arrayNum = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNum(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNum.map((value, idx) => (
          <Box
            isSelected={value === selectedNum}
            onClick={() => {
              numberSelectorHandler(value);
            }}
            key={idx}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="selNum">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  .selNum {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    font-size: 11px;
    font-weight: 500;
    color: red;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
