import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  .container-icon{
    height: 25px;
    width: 25px;
    background-color: #DA3434;
    margin-right: 10px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
      background-color: ${shade(0.2, '#DA3434')};
    }
  }
`;
