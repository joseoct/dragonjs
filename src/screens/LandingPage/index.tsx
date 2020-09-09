import React from 'react';

import Header from '../../components/Header';
import ButtonSelectProject from './components/ButtonSelectProject';

import logo from '../../assets/image/logo.png';

import {
    Container,
    LeftBar,
    Logo
} from './style';

import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
} from 'react-icons/di';

import { FiFile } from 'react-icons/fi'
import TopBar from '../../components/TopBar';
import Favorites from '../../components/Favorites';

const LandingPage = () => {
    return (
        <Container>
            <Header 
                title="DragonJS" 
            />
            <LeftBar>
                <TopBar/>
                <ButtonSelectProject
                    title="Open Project"
                    icon={ <FiFile/> }
                    color="red"
                />
                <ButtonSelectProject
                    title="New Default Project"
                    icon={ <DiJavascript1/> }
                    color="#f7df1d"
                />
                <ButtonSelectProject
                    title="New ReactJS"
                    icon={ <DiReact/> }
                    color="#60dbfc"
                />
                <ButtonSelectProject
                    title="New NodeJS"
                    icon={ <DiNodejsSmall/> }
                    color="#18bf3e"
                />
                <Favorites/>
            </LeftBar>
            <Logo
                src={ logo }
            />
        </Container>
    )
}

export default LandingPage;