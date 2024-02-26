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
  width: ${(props) => (props.pageName === 'meetingTable' ? '260px' : '280px')};
  height: ${(props) => (props.pageName === 'meetingTable' ? '356px' : '460px')};
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
  align-items: flex-start;
  gap: ${(props) => (props.column ? '12px' : '32px')};
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

export const DatePickerContainer = styled.div`
  position: absolute;
  width: 284px;
  top: 73%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${(props) =>
    props.pageName === 'meetingTable' ? '20px' : '240px'};
  button:first-child {
    margin-right: 20px;
  }
`;
