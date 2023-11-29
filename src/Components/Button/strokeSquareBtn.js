/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  SmallStrokeSquareButton,
  BigStrokeSquareButton,
  MiddleStrokeSqureButton,
} from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function StrokeSquareBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallStrokeSquareButton onClick={props.onClick}>
          <img src={props.url} />
        </SmallStrokeSquareButton>
      ) : props.size === 'middle' ? (
        <MiddleStrokeSqureButton onClick={props.onClick}>
          <img src={props.url} />
        </MiddleStrokeSqureButton>
      ) : (
        <BigStrokeSquareButton onClick={props.onClick}>
          <img src={props.url} />
        </BigStrokeSquareButton>
      )}
    </ThemeProvider>
  );
}
