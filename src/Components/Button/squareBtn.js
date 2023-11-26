import React from 'react';
import { ColoredSqureButton, StrokeSqureButton } from './styles';

export default function SquareBtn(props) {
  const type = props.type;

  if (type === 'full') {
    return (
      <ColoredSqureButton onClick={props.onClick}>
        {props.name}
      </ColoredSqureButton>
    );
  } else {
    return (
      <StrokeSqureButton onClick={props.onClick}>
        {props.name}
      </StrokeSqureButton>
    );
  }
}
