import styled from 'styled-components';

export const Button = styled.div`
    display: felx;
    align-items: center;
    justify-content: center;

    width: 14rem;
    height: 3rem;

    color: #fff;
    background-color: #161616;

    border: 1px solid #000;

    cursor: pointer;

    :hover {
        transition: 0.5s;
        background-color: ${ props => props.color }
    }
`;

export const Image = styled.img`
    width: 60px;
`;