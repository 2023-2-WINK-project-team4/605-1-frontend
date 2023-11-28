import React from 'react';
import { SmallFullButton, BigFullButton } from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';
import { ThemeProvider } from 'styled-components';

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
