import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  model: string
}

export const Container = styled.button<ContainerProps>`
    height: 46px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #FFF;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;
    font-size: 16px;

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
