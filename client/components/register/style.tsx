import styled from 'styled-components';

export const Buttonsiv = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1em;

  label {
    width: 80px;
    height: 34px;
    background-color: #f5f5f5;
    font-family: 'Bebas Neue', cursive;

    color: #3c3d39;
    border: none;
    :hover {
      background-color: #3c3d39;
      color: #f5f5f5;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #f5f5f5 0px 0px 0px 3px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='file'] {
    display: none;
  }
  button {
    font-size: 1em;

    width: 80px;
    height: 34px;
    background-color: #f5f5f5;
    font-family: 'Bebas Neue', cursive;

    color: #3c3d39;
    border: none;
    :hover {
      background-color: #3c3d39;
      color: #f5f5f5;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, #f5f5f5 0px 0px 0px 3px;
    }
  }
`;

export const AuthDiv = styled.div`
  color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Bebas Neue', cursive;
`;

export const Input = styled.input`
  display: block;
  padding-left: 10px;
  margin: 0 auto;
  width: 80%;
  height: 37px;
  color: #3c3d39;
  border: none;
`;

export const FormDiv = styled.div`
  margin-top: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  height: 200px;
  background: rgb(117, 143, 182, 0.23);
`;
