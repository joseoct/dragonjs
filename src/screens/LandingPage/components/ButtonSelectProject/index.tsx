import React from 'react';

import {    
    Button,
    Image
} from './style';

interface ButtonProps {
    title: string;
    icon: any;
    color: string;
}

const ButtonSelectProject: React.FC<ButtonProps> = ({ title, icon, color }) => {
    return (
        <Button color={ color }>
            <span style={{ position: 'absolute', left: '2%', fontSize: 20 }} >{ icon }</span>
            <span>{ title }</span>
        </Button>
    )
}

export default ButtonSelectProject;