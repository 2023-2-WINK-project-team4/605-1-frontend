import styled from 'styled-components';

export const SmallFullButton = styled.button`
  width: 48px;
  height: 26px;
  background: ${(props) => props.theme.color}; // theme color
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

export const BigFullButton = styled.button`
  width: 200px;
  height: 33px;
  background: ${(props) => props.theme.color}; // theme
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

export const StrokeButton = styled.button`
  width: 48px;
  height: 26px;
  color: ${(props) => props.theme.color}; // theme
  background: white;
  border: 1px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

export const SmallFullSqureButton = styled.button`
  width: 57px;
  height: 57px;
  background: ${(props) => props.theme.color};
  border: 3px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

export const BigFullSqureButton = styled.button`
  width: 120px;
  height: 120px;
  background: ${(props) => props.theme.color};
  border: 5px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

export const SmallStrokeSqureButton = styled.button`
  width: 57px;
  height: 57px;
  background: white;
  border: 3px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;

export const BigStrokeSqureButton = styled.button`
  width: 120px;
  height: 120px;
  background: white;
  border: 5px;
  border-color: ${(props) => props.theme.color}; // theme
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
`;
