import styled from 'styled-components';

export const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 10px;
  font-weight: ${(props) => props.fontWeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleBoxCom = styled.div`
  width: max-content;
  height: 22px;
  border: none;
  border-radius: 10px;
  padding: 4px 10px 0px 10px;
  background: ${(props) => props.theme.color}; // theme color
  color: white; // theme color

  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;
