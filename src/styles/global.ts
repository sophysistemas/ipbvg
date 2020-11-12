import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FFF;
    color: #7D8589;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  body, input, button {
    font-family: 'Roboto', serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .text-center{
    align-items: center;
  }

  .text-right{
    align-items: flex-end;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .col {
    display: flex;
    flex-direction: column;
    padding: 5px 10px 5px 10px;
    //border: 1px solid green;
  }

  .col-1 {
    width: 8.3%;
  }
  .col-2 {
    width: 16.6%;
  }
  .col-3 {
    width: 24.9%;
  }
  .col-4 {
    width: 33.2%;
  }
  .col-5 {
    width: 41.5%;
  }
  .col-6 {
    width: 49.8%;
  }
  .col-7 {
    width: 58.1%;
  }
  .col-8 {
    width: 66.4%;
  }
  .col-9 {
    width: 74.7%;
  }
  .col-10 {
    width: 83%;
  }
  .col-11 {
    width: 91.3%;
  }
  .col-12 {
    width: 99.6%;
  }
`;
