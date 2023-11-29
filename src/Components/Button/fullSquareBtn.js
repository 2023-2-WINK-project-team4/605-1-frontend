/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SmallFullSquareButton, BigFullSquareButton } from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function FullSquareBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallFullSquareButton onClick={props.onClick}>
          <img src={props.url} />
        </SmallFullSquareButton>
      ) : (
        <BigFullSquareButton onClick={props.onClick}>
          <img src={props.url} />
        </BigFullSquareButton>
      )}
    </ThemeProvider>
  );
}
