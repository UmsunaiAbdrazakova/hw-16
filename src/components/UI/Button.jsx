import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick, color }) => {
  return (
    <StyledButton onClick={onClick} color={color}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) => props.color || "#3498db"};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;
  font-size:1rem;
`;

export default Button;
