import React from 'react';

import Header from '../../components/Header';
import ButtonSelectProject from './components/ButtonSelectProject';

import {
    Container
} from './style';

import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
} from 'react-icons/di';

import { FiFile } from 'react-icons/fi'

const LandingPage = () => {
    return (
        <Container>
            <Header 
                title="DragonJS" 
            />

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
        </Container>
    )
}

export default LandingPage;