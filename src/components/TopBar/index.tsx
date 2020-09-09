import React from 'react';

import {
    Container,
    Shortcut
} from './style';

import {
    FiFolder,
    FiFile,
    FiHeart
} from 'react-icons/fi';

const TopBar = () => {
    return (
        <Container>
            <Shortcut color="gray" >
                <FiFolder/>
            </Shortcut>
            <Shortcut color="gray">
                <FiFile/>
            </Shortcut>
            <Shortcut color="red">
                <FiHeart/>
            </Shortcut>
        </Container>
    )
}

export default TopBar;