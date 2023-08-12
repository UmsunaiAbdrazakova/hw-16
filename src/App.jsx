import React from "react";
import styled from "styled-components";
import Button from "./components/UI/Button";
import useCounter from "./hooks/useCounter";
import useInput from "./hooks/useInput";
import useTimer from "./hooks/useTimer";

function App() {
  const counter = useCounter();

  const nameInput = useInput("", (value) => {
    if (!value) return "Field is required(Поле обязательно для заполнения)";
    return null;
  });

  const emailInput = useInput("", (value) => {
    if (!value) return "Email is required(Email обязателен для заполнения)";
    if (!/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
    return null;
  });

  const passwordInput = useInput("", (value) => {
    if (!value) return "Password is required(Пароль обязателен для заполнения)";
    if (value.length < 6) return "Password must be at least 6 characters long";
    return null;
  });

  const timer = useTimer(2);

  return (
    <StyledApp>
      <StyledSection>
        <h1>Counter</h1>
        <p>Count: {counter.count}</p>
        <Button onClick={counter.increment} color="#27ae60">
          Increment
        </Button>
        <Button onClick={counter.decrement} color="#e74c3c">
          Decrement
        </Button>
        <Button onClick={counter.reset}>Reset</Button>
      </StyledSection>
      <StyledSection>
        <h2>Input Validation</h2>
        <form>
          <nameInput.InputComponent
            type="text"
            value={nameInput.value}
            onChange={nameInput.handleChange}
            placeholder="Enter your name"
          />
          {nameInput.error && <ErrorText>{nameInput.error}</ErrorText>}

          <emailInput.InputComponent
            type="email"
            value={emailInput.value}
            onChange={emailInput.handleChange}
            placeholder="Enter your email"
          />
          {emailInput.error && <ErrorText>{emailInput.error}</ErrorText>}

          <passwordInput.InputComponent
            type="password"
            value={passwordInput.value}
            onChange={passwordInput.handleChange}
            placeholder="Enter your password"
          />
          {passwordInput.error && <ErrorText>{passwordInput.error}</ErrorText>}
        </form>
      </StyledSection>

      <StyledSection>
        <h3>Timer</h3>
        <p>Time: {timer.time} seconds</p>
        <Button onClick={timer.start} color="#27ae60">
          Start
        </Button>
        <Button onClick={timer.stop} color="#e74c3c">
          Stop
        </Button>
        <Button onClick={timer.restart} color="#f39c12">
          Restart
        </Button>
      </StyledSection>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
  margin: 2rem;
  h1,
  h2,
  h3 {
    padding-bottom: 1rem;
  }
`;

const StyledSection = styled.div`
  margin-bottom: 2rem;
`;

const ErrorText = styled.p`
  color: red;
`;
export default App;
