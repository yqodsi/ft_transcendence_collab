import styled from "styled-components";

export const Component = styled.div`
  width: 100%;
  height: 100vh;
  background: #3c3d39;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2em;
  font-family: 'Bungee', cursive;
    color: #758fb6;
`;

export const ButtonDiv = styled.div`
  button {
    width: 188px;
    height: 44px;
    font-size: 1.5em;
    background-color: #758fb6;
    font-family: 'Bebas Neue', cursive;

    color: #3c3d39;
    border: none;
    border-radius: 20px;
    :hover {
      background-color: #3c3d39;
      color: #758fb6;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #758fb6 0px 0px 0px 3px;
    }
  }
`;
