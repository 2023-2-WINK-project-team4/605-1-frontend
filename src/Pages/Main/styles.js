import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: max-content;
    height: max-content;
  }
  padding: 32px;
  gap: 100px;
`;
export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

export const ReservationContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
`;
