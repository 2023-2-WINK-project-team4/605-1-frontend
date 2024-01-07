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
            onClick={props.onClick}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            onKeyDown={props.onKeyDown ? (e) => props.onKeyDown(e) : undefined}
          />
        </div>
      ) : (
        <div>
          <span>{props.content}</span>
          <style.Input
            type={props.type}
            width={props.width}
            height={props.height}
            marginBottom={props.marginBottom}
            marginLeft={props.marginLeft}
            onClick={props.onClick}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            onKeyDown={props.onKeyDown ? (e) => props.onKeyDown(e) : undefined}
          />
        </div>
      )}
    </>
  );
}
