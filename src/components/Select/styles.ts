import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFielled: boolean;
}

export const Container = styled.div`

    background: #FFF;
    border-radius: 5px;
    padding: 1px;

    border: 2px solid #FFF;
    color: black;
    font-size: 12px;

    & + div {
        margin-top: 16px;
    }

    &:focus-within {
      border-color: #52B3CF;
    }

/*
    svg {
        margin-right: 16px;
    } */
`;
