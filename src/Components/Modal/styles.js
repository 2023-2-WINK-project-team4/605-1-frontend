import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  width: 260px;
  height: 356px;
  background: white;
  border: 2px solid ${(props) => props.theme.color};
  border-radius: 10px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  margin: 8px 0 20px 4px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: none;
  border: none;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: black;
  background: none;
  border: none;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: ${(props) => (props.column ? 'flex-start' : 'center')};
  gap: ${(props) => (props.column ? '12px' : '20px')};
  vertical-align: ${(props) => (props.column ? 'top' : 'middle')};
`;

export const Input = styled.input`
  width: ${(props) => (props.column ? '228px' : props.width)};
  height: ${(props) => props.height};
  border: 1px solid black;
  border-radius: 8px;
  padding: 7px 10px;
  text-align: ${(props) => (props.centerText ? 'center' : 'left')};
  ${(props) =>
    props.type === 'textarea'
      ? `
          white-space: pre-wrap;
          overflow: auto;
          resize: none;
        `
      : ''}
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  button:first-child {
    margin-right: 20px;
  }
`;
