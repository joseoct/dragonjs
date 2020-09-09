import React from 'react'
import { IconBaseProps } from 'react-icons'

import {
  Button,
  IconSpan,
  TitleSpan
} from './style'

interface ButtonProps {
    title: string;
    icon: React.ComponentType<IconBaseProps>;
    color: string;
}

const ButtonSelectProject: React.FC<ButtonProps> = ({ title, icon: Icon, color }) => {
  return (
    <Button color={ color }>
      <IconSpan>
        <Icon size={24} />
      </IconSpan>
      <TitleSpan>{ title }</TitleSpan>
    </Button>
  )
}

export default ButtonSelectProject
