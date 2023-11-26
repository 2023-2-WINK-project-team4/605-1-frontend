import React from 'react';
import { SmallFullButton, BigFullButton } from './styles';

export default function ColoredBtn(props) {
  const size = props.size;

  if (size === 'small') {
    return (
      <SmallFullButton onClick={props.onClick}> {props.name} </SmallFullButton>
    );
  } else {
    return (
      <BigFullButton onClick={props.onClick}> {props.name} </BigFullButton>
    );
  }
}
