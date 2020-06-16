import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 500px;
  text-align: center;
  padding: 40px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;

  > div {
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 2vh;
    }

    input {
      &:focus {
        background: #ebeaed 0% 0% no-repeat padding-box;
        border: 1px solid #dedce1;

        &::placeholder {
          text-align: left;
          color: #8f8a9b;
        }
      }

      background: #f5f4f6 0% 0% no-repeat padding-box;
      border: 1px solid #ebeaed;
      border-radius: 5px;
      opacity: 1;
      margin-bottom: 2vh;
      padding: 5px;
      height: 50px;

      &::placeholder {
        text-align: left;
        color: #b1adb9;
      }
    }

    button {
      height: 50px;
      color: #ffffff;
      background: #244aa8 0% 0% no-repeat padding-box;
      border-radius: 5px;
      opacity: 1;

      &:hover {
        background: #2f55cc 0% 0% no-repeat padding-box;
      }
    }

    a {
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
