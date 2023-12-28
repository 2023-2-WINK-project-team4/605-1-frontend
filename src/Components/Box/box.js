import React from 'react';
import * as style from './styles';

export default function Box(props) {
  return (
    <style.Box
      width={props.width}
      height={props.height}
      borderColor={props.borderColor}
    >
      {props.title ? (
        <span>
          <style.Title>
            <p>{props.title}</p>
          </style.Title>
          <style.Content>
            <p>{props.content}</p>
          </style.Content>
        </span>
      ) : (
        <span>
          <p>{props.content}</p>
        </span>
      )}
    </style.Box>
  );
}
