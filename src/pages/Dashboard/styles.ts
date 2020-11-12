import styled from 'styled-components';

export const SubHeader = styled.div`
  height: 50px;
  padding-left: 10px; 
  display: flex;
  align-items: center;

  & svg{
    margin-right: 10px;
  }

  span{
    font-size: 16px;
    color: #2C6862;
    font-weight: 500;
  }
`;

export const Container = styled.div`
  padding: 40px;
  height: 80vh;
  background: #F2F8FF;

  display: flex;
  justify-content: space-around;

  .categories {
    width: 40%;
    height: 430px;
    padding: 10px 20px 10px 20px;
    background: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    color: #145A80;
    font-weight: 500;

    .names{
      padding: 10px 0 5px 0;
      border-bottom: 1px solid #DFDADA;
      display: flex;
      justify-content: space-between;

      span{
        font-size: 14px;
        font-weight: normal;
        color: #636465;
      }
    }

    .cards{
      display: flex;
      justify-content: space-between;
      
    }
  }
`;