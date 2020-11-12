import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  model: string
}

export const Container = styled.div<ContainerProps>`
  border-radius: 5px;
  margin-left: 10px;

  a {
      color: #FFF;
      text-decoration: none;
      height: 30px;
      width: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

     &:hover {
      ${ (props) => props.model === "primary" &&
        css`
          background: ${shade(0.2, '#11567B')};
      `}

      ${ (props) => props.model === "danger" &&
        css`
          background: ${shade(0.2, '#D9534F')};
      `}

      ${ (props) => props.model === "info" &&
        css`
          background: ${shade(0.2, '#5bc0de')};
      `}

      ${ (props) => props.model === "success" &&
        css`
          background: ${shade(0.2, '#28a745')};
      `}
    }

    ${ (props) => props.model === "primary" &&
      css`
        background: #11567B;
    `}

    ${ (props) => props.model === "danger" &&
      css`
        background: #D9534F;
    `}

    ${ (props) => props.model === "info" &&
      css`
        background: #5bc0de;
    `}

    ${ (props) => props.model === "success" &&
      css`
        background: #28a745;
    `}
`;
