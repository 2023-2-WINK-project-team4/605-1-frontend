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
        <div>
          <style.BoxTitle>
            <span>{props.title}</span>
          </style.BoxTitle>
          <style.BoxContent>
            <span>{props.content}</span>
          </style.BoxContent>
        </div>
      ) : (
        <style.BoxContent>
          <span>{props.content}</span>
        </style.BoxContent>
      )}
    </style.Box>
  );
}
