import React from 'react';
import * as style from './styles';

export default function Box(props) {
  return (
    <style.Box
      width={props.width}
      height={props.height}
      borderColor={props.borderColor}
    >
      <p>{props.content}</p>
    </style.Box>
  );
}
