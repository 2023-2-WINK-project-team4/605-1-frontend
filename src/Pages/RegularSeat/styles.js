import styled from 'styled-components';

export const GroupContainer = styled.div`
  //1묶음들에 대한 배치
  width: 351px;
  height: 200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SeatContainer = styled.div`
  //좌석 4개 - 1묶음으로
  width: 160px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const RegularSeat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 51px;
  margin-bottom: 51px;
`;

export const Titlecontainer = styled.div`
  width: 371px;
  margin-left: 0px;
  margin-bottom: 13px;
`;
