import styled from 'styled-components';

export const ProfileEditContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 75px 21px;
  position: relative;
`;

export const userProfile = styled.div`
  flex: 1;
  position: relative;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 300px;
  }
`;

export const EditButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;
