import styled from 'styled-components';

export const SmallFullButton = styled.button`
  width: 48px;
  height: 26px;
  background: ${(props) => props.theme.color}; // theme color
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
`;

export const BigFullButton = styled.button`
  width: 200px;
  height: 33px;
  background: ${(props) => props.theme.color}; // theme
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
`;

export const StrokeButton = styled.button`
  width: 48px;
  height: 26px;
  color: ${(props) => props.theme.color}; // theme
  background: white;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
`;

export const SmallFullSquareButton = styled.button`
  width: 57px;
  height: 57px;
  background: ${(props) => props.theme.color};
  border-width: 3px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
`;

export const BigFullSquareButton = styled.button`
  width: 120px;
  height: 120px;
  background: ${(props) => props.theme.color};
  border: 5px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 30px;
  cursor: pointer;
`;

export const SmallStrokeSquareButton = styled.button`
  width: 19px;
  height: 19px;
  background: white;
  border-width: 1px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 5px;
  cursor: pointer;
`;

export const MiddleStrokeSquareButton = styled.button`
  width: 57px;
  height: 57px;
  background: white;
  border-width: 3px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
`;

export const BigStrokeSquareButton = styled.button`
  width: 120px;
  height: 120px;
  background: white;
  border-width: 5px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 30px;
  cursor: pointer;
`;

export const ImageForSquare = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
