import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 1px solid #000000;
  border-radius: 10px;
  cursor: pointer;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const selectedValueItem = styled.div`
  width: 100%;
`;

export const DropdownContent = styled.div`
  width: 100%;
`;

export const DropdownItem = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.selectedValue ? '#f5f5f5' : '#ffffff')};
  &:first-child {
    border-top: 1px solid #000000;
    border-bottom: 1px solid #000000;
  }
  &:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  &:hover {
    background-color: #f5f5f5;
  }
`;
