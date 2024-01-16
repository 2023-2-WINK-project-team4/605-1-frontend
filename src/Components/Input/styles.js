import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  > span {
    font-weight: 800;
  }
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginBottom};
  border: 1px solid black;
  border-radius: 8px;
  padding: 7px 10px;
`;
