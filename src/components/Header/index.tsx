import React, { useCallback } from 'react';
import { remote } from 'electron';

import logo from '../../assets/image/dragonjs.png';

import {
    FiX, 
    FiMinus,
    FiSquare
} from 'react-icons/fi'

import { 
    Container, 
    Button,
    ContainerButtons,
    Logo
} from  './styles';

interface HeaderProps{
    icon?: string;
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const minimize = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.minimize();
    }, [])

    const maximize = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.maximize();
    }, [])

    const close = useCallback(() => {
        const window = remote.getCurrentWindow();

        window.close();
    }, [])

    return (
        <Container>
            <Logo src={ logo } alt='logo' />
            <span style={{ fontSize: '0.8rem', color: '#404040' }} >{ title }</span>
            <ContainerButtons>
                <Button color="#252525" onClick={ minimize } ><FiMinus/></Button>
                <Button color="#252525" onClick={ maximize } ><FiSquare/></Button>
                <Button color="red" onClick={ close } ><FiX/></Button>
            </ContainerButtons>
        </Container>
    )
}

export default Header;