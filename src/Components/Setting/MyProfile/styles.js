import styled from 'styled-components';

export const title = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

export const userProfile = styled.div`
  > img {
    width: 120px;
    height: 120px;
    border-radius: 300px;
  }
`;

export const userInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const userInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 40px 13px;
  align-items: center;
  gap: 90px;
`;

export const userInfo = styled.div`
  font-size: 16px;
  :first-child {
    font-size: 16px;
    font-weight: 800;
    margin-right: 10px;
  }
`;

// export const profileBox = styled.div`

// `;
