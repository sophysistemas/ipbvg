import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFielled: boolean;
}

export const Container = styled.div<ContainerProps>`
    height: 30px;
    width: 350px;
    background: #FFF;
    border-radius: 5px;
    padding: 8px;
    margin-right: 30px;

    border: 2px solid #FFF;
    color: #b4b4b4;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 15px;
    }

    ${props => props.isFocused &&
        css`
            color: #7febe7;
            border-color: #7febe7;
        `
    }

    ${props => props.isFielled &&
        css`
            color: #7febe7;
        `
    }

    input {
        flex: 1;
        background: transparent;
        border: 0;
        font-size: 12px;

        &::placeholder {
          color: #b4b4b4;
        }
    }

    svg {
        margin-right: 16px;
    }
`;
