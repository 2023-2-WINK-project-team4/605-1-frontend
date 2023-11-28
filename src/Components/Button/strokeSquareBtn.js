import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SmallStrokeSquareButton, BigStrokeSquareButton } from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function StrokeSquareBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallStrokeSquareButton onClick={props.onClick}>
          {props.name}
        </SmallStrokeSquareButton>
      ) : (
        <BigStrokeSquareButton onClick={props.onClick}>
          {props.name}
        </BigStrokeSquareButton>
      )}
    </ThemeProvider>
  );
}