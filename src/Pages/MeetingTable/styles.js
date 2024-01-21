import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const TableContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const Icon = styled.div`
  width: 304px;
  height: 120px;
  border-radius: 10px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const CustomDatePicker = styled(DatePicker)`
  width: 140px;
  height: 24px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 800;
  text-align: center;
  margin-top: 24px;
  margin-right: 160px;
`;

export const Table = styled.table`
  width: 304px;
  margin-top: 12px;
  border: 3px solid #3a70ff;
  border-collapse: collapse;

  th,
  td {
    border: 2px solid #3a70ff;
    text-align: center;
    padding: 4px;
  }
`;
