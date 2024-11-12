import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  padding: 10px 10px;
  background-color: #000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

export const OutlineButton = styled(Button)`
  color: #000;
  border: 1px solid #000;
  background-color: #fff;
  &:hover {
    background-color: #000;
    border: 1px solid transparent;
    color: #fff;
  }
`;
