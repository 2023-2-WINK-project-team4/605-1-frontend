import styled from 'styled-components';

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  padding: 7px 10px;
  > div {
    display: flex;
    justify-content: center;
  }
  > span {
    font-weight: 800;
  }
`;
