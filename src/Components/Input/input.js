import React from 'react';
import * as style from './styles';

export default function Input(props) {
  return (
    <>
      {props.isModal ? (
        <div>
          <style.Input
            type={props.type}
            width={props.width}
            height={props.height}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
          />
        </div>
      ) : (
        <label>
          <span>{props.content}</span>
          <style.Input
            type={props.type}
            width={props.width}
            height={props.height}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
          />
        </label>
      )}
    </>
  );
}
