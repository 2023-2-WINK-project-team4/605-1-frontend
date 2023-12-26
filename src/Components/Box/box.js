import React from 'react';
import * as style from './styles';

export default function Box(props) {
  return (
    <style.Box
      width={props.width}
      height={props.height}
      borderColor={props.borderColor}
    >
      {props.content ? (
        <span>{props.content}</span>
      ) : (
        <span>
          <p>{props.title}</p>
          <p>{props.subtitle}</p>
        </span>
      )}
    </style.Box>
  );
}
