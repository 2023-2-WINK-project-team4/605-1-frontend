import React from 'react';
import { TitleBoxCom } from './styles';
import { ThemeProvider } from 'styled-components';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function TitleBox(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      <TitleBoxCom>{props.title}</TitleBoxCom>
    </ThemeProvider>
  );
}
