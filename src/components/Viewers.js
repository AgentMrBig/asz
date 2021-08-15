import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        {/* <img src="/images/viewers-disney.png" alt="" /> */}
        <h1>FOREX</h1>
      </Wrap>
      <Wrap>
        {/* <img src="/images/viewers-pixar.png" alt="" /> */}
        <h1>STOCKS</h1>
      </Wrap>
      <Wrap>
        {/* <img src="/images/viewers-marvel.png" alt="" /> */}
        <h1>CRYPTO</h1>
      </Wrap>
      {/* <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <h1>FOREX</h1>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <h1>FOREX</h1>
      </Wrap> */}
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-gap: 25px;
  padding: 30px 0px 26px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }

  h1 {
  }
`;
