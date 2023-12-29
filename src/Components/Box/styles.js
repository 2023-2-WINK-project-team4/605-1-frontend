import styled from 'styled-components';

export const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const BoxContent = styled.div`
  font-size: 16px;
  font-weight: 400;
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
