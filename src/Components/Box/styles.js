import styled from 'styled-components';

export const Box = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 3px solid ${(props) => props.borderColor};
  border-radius: 10px;
`;
