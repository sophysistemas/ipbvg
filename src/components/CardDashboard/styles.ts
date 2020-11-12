import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 190px;
  height: 200px;
  padding-bottom: 20px;

  border-radius: 10px;
  
  color: #2C6862;

  .card-title{
    width: 300px;
    height: 35px;

    font-size: 16px;

    display: flex;
    align-items: center;
  }

  .card-total{
    width: 100%;
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total{
      font-size: 55px;
      font-weight: 500;
    }
  }

  .value-card{
    font-size: 13px;
  }
`;
