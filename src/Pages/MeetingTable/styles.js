import styled, { createGlobalStyle } from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const TableContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const Icon = styled.div`
  width: 324px;
  height: 124px;
  border-radius: 10px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const NoStatus = styled.div`
  font-weight: 600;
  margin-top: 36vh;
`;

export const CustomDatePicker = styled.div`
  width: 128px;
  height: 28px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 24px;
  margin-right: 180px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px 2px;
`;

export const GlobalStyle = createGlobalStyle`
  .react-datepicker__header {
    background-color: ${(props) => props.theme.color};
  }
  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: white;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

export const TableWrapper = styled.div`
  width: 324px;
  height: 480px;
  margin-top: 12px;
  border: 3px solid #3a70ff;
  border-radius: 10px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border-bottom: 2px solid #3a70ff;
    text-align: center;
    padding: 4px;
    position: relative;
  }

  th::after,
  td::after {
    content: '';
    height: 100%;
    border-right: 2px solid #3a70ff;
    position: absolute;
    top: 0;
    right: 0px;
  }

  th:last-child::after,
  td:last-child::after {
    border-right: none;
  }
`;
