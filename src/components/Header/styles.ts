import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 2.2rem;

    background-color: #161616;

    border-bottom: 1px solid #000;

    -webkit-app-region: drag;
`

export const ContainerButtons = styled.div`
    position: absolute;
    right: 0%;
`

export const Button = styled.button`
    padding: 0.5rem;

    border: 0;

    font-size: 1rem;

    color: #fff;
    background-color: rgba(0, 0, 0, 0);

    cursor: pointer;
    outline: none;

    :hover{
        background-color:${ props => props.color }
    }

    -webkit-app-region: no-drag;
`

export const Logo = styled.img`
    position: absolute;
    left: 1%;

    width: 25px;
`