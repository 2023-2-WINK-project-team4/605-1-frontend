import React from 'react';
import { StrokeButton } from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';
import { ThemeProvider } from 'styled-components';

export default function StrokeBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      <StrokeButton onClick={props.onClick}> {props.name} </StrokeButton>
    </ThemeProvider>
  );
}
