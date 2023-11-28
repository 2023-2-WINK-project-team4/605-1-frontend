import React from 'react';
import { SmallFullSquareButton, BigFullSquareButton } from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';
import { ThemeProvider } from 'styled-components';

export default function FullSquareBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallFullSquareButton onClick={props.onClick}>
          {props.name}
        </SmallFullSquareButton>
      ) : (
        <BigFullSquareButton onClick={props.onClick}>
          {props.name}
        </BigFullSquareButton>
      )}
    </ThemeProvider>
  );
}
