import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 14rem;
    height: 2rem;

    background-color: #303030;
    color: #fff;

    border: 0;
`;

export const Shortcut = styled.span`
    margin-left: 1rem;

    cursor: pointer;

    :hover {
        color: ${ props => props.color };
    }
`;