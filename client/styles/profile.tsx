import styled from "styled-components";

export const Component = styled.div`
  width: 100%;
  height: 100vh;
  /* background: #FCFCF8; */
  height: 100vh;
  background: linear-gradient(0deg, #fcfcf8 80%, #3c3d39 30%);
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  @media (max-width: 768px) {
    background: linear-gradient(0deg, #fcfcf8 73%, #3c3d39 38%);
  }
`;

export const Div = styled.div`
  height: 4em;
  width: 100%;
  background-color: #3c3d39;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const DivHeader = styled.div`
  min-width: 320px;
  max-width: 1250px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Logo = styled.div`
  width: 6em;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
  p {
    font-family: "Bungee", cursive;
    color: #758fb6;
    /* width:5em; */
    /* height: auto; */
  }
`;

export const Button = styled.div`
  /* width:7em; */
  padding: 0 5px;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-color: none;
  border: none;
  color: #fcfcf8;
  font-size: 0.9em;
`;

export const Settings = styled.div`
  margin: 12px;
  align-self: center;
  //display: flex;
  /* float:inherit; */
  width: 36px;
  height: 36px;
  /* margin: 5px; */
  line-height: 36px;
  border-radius: 50%;
  background-size: cover;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  background: ${(props) => (props.bg ? `${props.bg}` : "#758fb6")};
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  color: white;
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DivMain = styled.div`
  min-width: 320px;
  max-width: 1250px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const RowOne = styled.div`
  display: flex;
  flex-direction: row;
  height: 5em;
  /* border: 1px solid resd;  */
  justify-content: space-around;
`;

export const RowTwo = styled.div`
  display: flex;
  flex-direction: row;
  height: 8em;
  /* background-color: green; */
  /* border: 1px solid green; */
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    height: 15em;
  }
`;

export const Name = styled.h1`
  color: #fcfcf8;
  font-size: 1.2em;
  font-family: "Bungee", cursive;
  /* margin-left: 4em;
  @media (max-width: 768px) {
    margin-left: 0em;
  } */
  @media (max-width: 425px) {
    font-size: 0.8em;
  }
`;
export const Status = styled.p`
  color: #758fb6;
  margin-left: 1em;
  @media (max-width: 425px) {
    margin-left: 0.5em;
  }
`;

export const Column = styled.div`
  display: flex;
  width: 15em;
  justify-content: left;
  align-items: center;
  /* margin-left: 4em; */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LiveButton = styled.div`
  color: #fcfcf8;
  font-size: 1.2em;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1em;
  div {
    margin-right: 0.2em;
    background-color: red;
    width: 10px;
    height: 10px;
    border-radius: 10px;
  }
  @media (max-width: 425px) {
    font-size: 0.7em;
    div {
      margin-right: 0.1em;
      background-color: red;
      width: 5px;
      height: 5px;
      border-radius: 5px;
    }
  }
`;
export const Button1 = styled.button`
  color: #758fb6;
  background-color: #fcfcf8;
  font-size: 0.8em;
  font-family: "Bungee", cursive;
  min-width: 119px;
  height: 29px;
  border: none;
  @media (max-width: 425px) {
    font-size: 0.7em;
    min-width: auto;
    height: auto;
    padding: 5px 6px;
  }
`;

export const Picture = styled.div`
  /* margin: 12px; */
  align-self: center;
  //display: flex;
  /* float:inherit; */
  width: 130px;
  height: 130px;
  /* margin: 5px; */
  line-height: 36px;
  border-radius: 50%;
  background-size: cover;
  font-weight: 100;
  font-size: 18px;
  text-align: center;
  background: ${(props) => (props.bg ? `${props.bg}` : "#758fb6")};
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  color: white;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 60px;
  background-color: #758fb650;
  justify-content: space-around;
`;
export const Items = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.div`
  color: #758fb6;
  font-family: "Bungee", cursive;

  font-size: 0.8em;
`;
export const Number = styled.div`
  color: #fcfcf8;
  font-family: "Bungee", cursive;

  font-size: 0.7em;
`;

export const Titel = styled.div`
  color: #758fb6;
  font-family: "Times New Roman", Times, serif;
  font-size: 2em;
  align-items: center;
  justify-content: center;
  width: 100%;
  display: flex;
`;

export const TitelsDiv = styled.div`
  /* border: 1px solid red; */
  width: 90%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 320px) {
      width: 50%;

    }
  }
`;
export const MatchItems = styled.div`
  background-color: #D9D9D9;
  margin: 1em 0;
  border-radius: 5px;
  width: 90%;
  height: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    @media (max-width: 320px) {
      width: 50%;

    }
  }
`;
