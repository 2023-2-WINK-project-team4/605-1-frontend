/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  SmallFullSquareButton,
  BigFullSquareButton,
  ImageForSquare,
} from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function FullSquareBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallFullSquareButton onClick={props.onClick}>
          <ImageForSquare
            src={require(`../../../public/Images/All/${props.image}.svg`)}
          />
        </SmallFullSquareButton>
      ) : (
        <BigFullSquareButton onClick={props.onClick}>
          <ImageForSquare
            src={require(`../../../public/Images/All/${props.image}.svg`)}
          />
        </BigFullSquareButton>
      )}
    </ThemeProvider>
  );
}
