import styled from 'styled-components';

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
`;
