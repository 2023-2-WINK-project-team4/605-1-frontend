import React from 'react';
import { FullSqureButton, StrokeSqureButton } from './styles';

export default function SquareBtn(props) {
  const type = props.type;

  if (type === 'full') {
    return (
      <FullSqureButton onClick={props.onClick}>{props.name}</FullSqureButton>
    );
  } else {
    return (
      <StrokeSqureButton onClick={props.onClick}>
        {props.name}
      </StrokeSqureButton>
    );
  }
}
