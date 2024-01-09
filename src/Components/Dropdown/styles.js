// styles.js
import styled from 'styled-components';

export const Dropdown = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #000000;
  border-radius: 10px;
  overflow: auto;
`;
