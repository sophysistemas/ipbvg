import styled from 'styled-components';

import signInBackgroundImg from '../../assets/signin-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  background: #2C6862;

  width: 100%;
  max-width: 400px;

  .div-logo {
    //border: 1px solid white;
    height: 200px;
    width: 200px;

    border-radius: 100px 100px 100px 100px;
    background: #8DB73A;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    margin: 70px 0;
    width: 340px;
    text-align: center;

    h1 {
      font-size: 20px;
      margin-bottom: 24px;
      color: #FFF;
    }
  }

  img {
    width: 150px;
    height: 100px
  }

`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: left;

  padding: 0 20px 20px 20px;

  div{
    font-size: 32px;
    color: #054D52;
    font-family: Dancing Script, Arial, Helvetica, sans-serif;
  }
`;
