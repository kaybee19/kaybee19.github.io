import React from "react";
import styled from "styled-components";
import ButtonBorder from "../components/layout/ButtonBorder";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  h1 {
    font-family: "VT323", monospace;
    font-size: 15rem;
    font-weight: 500;
    margin: 0;
  }

  p {
    font-size: 22px;
    margin: 0 0 1.5rem;
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>how did you end up here?</p>
      <Link to="/" className="link-class">
        <ButtonBorder text="go back" />
      </Link>
    </Wrapper>
  );
}
