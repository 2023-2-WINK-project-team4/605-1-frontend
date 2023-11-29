/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  SmallStrokeSquareButton,
  BigStrokeSquareButton,
  MiddleStrokeSquareButton,
  ImageForSquare,
} from './styles';
import { themeWink, themeFoscar } from '../Theme/theme';

export default function StrokeSquareBtn(props) {
  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      {props.size === 'small' ? (
        <SmallStrokeSquareButton onClick={props.onClick}>
          <ImageForSquare
            src={require(`../../../public/Images/All/${props.image}.svg`)}
          />
        </SmallStrokeSquareButton>
      ) : props.size === 'middle' ? (
        <MiddleStrokeSquareButton onClick={props.onClick}>
          <ImageForSquare
            src={require(`../../../public/Images/All/${props.image}.svg`)}
          />
        </MiddleStrokeSquareButton>
      ) : (
        <BigStrokeSquareButton onClick={props.onClick}>
          <ImageForSquare
            src={require(`../../../public/Images/All/${props.image}.svg`)}
          />
        </BigStrokeSquareButton>
      )}
    </ThemeProvider>
  );
}
