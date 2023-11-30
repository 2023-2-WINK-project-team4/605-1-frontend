// styles.js
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
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: white;
  border: 2px solid #3a70ff; // 파란색 테두리, 2px 크기
  padding: 35px 35px;
  border-radius: 15px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
`;

export const ModalFooter = styled.div`
  margin-top: 20px;
`;

// Other styles...
