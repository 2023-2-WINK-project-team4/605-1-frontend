import styled from 'styled-components';
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
  height: 120px;
  border-radius: 10px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

export const NoStatus = styled.div`
  font-weight: 600;
  margin-top: 25vh;
`;

export const CustomDatePicker = styled.div`
  width: 128px;
  height: 24px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  margin-top: 24px;
  margin-right: 180px;
  position: relative;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0 10px;
  .react-datepicker__header {
    background-color: ${(props) => props.theme.color};
  }
`;

export const TableWrapper = styled.div`
  width: 324px;
  height: 440px;
  margin-top: 12px;
  border: 3px solid #3a70ff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #3a70ff;
    text-align: center;
    padding: 4px;
  }
`;
