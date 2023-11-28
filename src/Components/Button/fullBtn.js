import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SmallFullButton, BigFullButton } from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function FullBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallFullButton onClick={props.onClick}>{props.name}</SmallFullButton>
      ) : (
        <BigFullButton onClick={props.onClick}> {props.name} </BigFullButton>
      )}
    </ThemeProvider>
  );
}
