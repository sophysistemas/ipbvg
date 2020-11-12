import styled from 'styled-components';

export const Container = styled.div`
  background: #E5F0FF;
  height: 40px;
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .container-title{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg{
      margin-right: 10px;
    }

    span{
      font-size: 16px;
      font-weight: 500;
      color: #145A80;
    }
  }

  .container-buttons{
    //width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 25px;
  }
`;
