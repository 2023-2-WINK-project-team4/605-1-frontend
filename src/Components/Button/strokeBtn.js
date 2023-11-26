import React from 'react';
import { StrokeButton } from './styles';

export default function StrokeBtn(props) {
  return <StrokeButton onClick={props.onClick}> {props.name} </StrokeButton>;
}
