import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  background-color: #3a70ff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    width: 172px;
  }
`;

export const KakaoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  padding: 12px 24px;
  gap: 8px;
  font-size: 20px;
  margin-top: 100px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  > img {
    margin-top: 4px;
  }
`;
