import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #2C6862;
  height: 60px;
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .div-logo {
    width: 50%;
  }

  .div-logo img {
    width: 45px;
    height: 50px
  }

  .header-icons {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .div-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 110px;
      padding: 5px;
      margin: 5px;
      border-radius: 5px;

      span {
        font-size: 11px;
        color: rgba(255, 255, 255, 0.7);
      }

      &:hover {
        background: ${shade(0.2, '#2C6862')};

        svg {
          color: rgba(255, 255, 255, 1);
        }

        span {
          color: rgba(255, 255, 255, 1);
        }
      }
    }

     div:not(.logout) {
      margin-right: 15px;
    }

    svg {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

export const ContainerUser = styled.div`
  margin-top: 0;
  padding-top: 5px;
  width: 100px;
  border-radius: 5px;
  height: 53px;
  display: flex;

  span {
    font-size: 11px;
    color: #FFF;
  }

  .div-user {
    width: 100%;

    .div-user-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;
      padding-left: 10px;
    }

    ul {
      list-style: none;
      position: relative;
      visibility: hidden;
    }

    ul li {
      width: 100px;
      border-bottom: 1px solid #c2c2c2;
      float: left;
      padding: 5px;
      font-size: 12px;
      display: flex;
      justify-content: left;
      align-items: center;
      background: rgba(240, 248, 255, 0.9);

      svg {
        color: #4a4848;
        margin-right: 5px;
      }

      &:hover{
        background: rgba(208, 227, 249, 0.9);
      }
    }

    a {
      padding-bottom: 5px;
      text-decoration: none;
      background: #c9e9f0;
      display: flex;
      justify-content: left;
      align-items: center;
      background: transparent;
      color: #4a4848;
    }
  }

  &:hover ul{
    visibility: visible;
  }

  &:hover{
    background: ${shade(0.2, '#2C6862')};

    svg {
      color: rgba(255, 255, 255, 1);
    }

    span {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

