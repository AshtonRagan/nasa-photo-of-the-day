import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

export const Centerd = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  background-color: black;
`;
