import '../../../App.css';
import * as style from './styles.js';
import FullBtn from '../../Button/fullBtn.js';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
  const userInfo = {
    name: '유건',
    studentId: 20203103,
    club: 'wink',
    profile:
      'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
    kakaoId: '카카오아이디',
  };
  const navigate = useNavigate();
  const goToProfileEdit = () => {
    navigate('/profileEdit', { state: { userInfo } });
  };

  return (
    <>
      <style.title>나의 프로필</style.title>
      <style.userInfoContainer>
        <style.userInfoWrapper>
          <style.userProfile>
            <img src={userInfo.profile} alt="프로필 사진" />
          </style.userProfile>
          <style.userInfoBox>
            <style.userInfo>
              <span>이름</span>
              <span>{userInfo.name}</span>
            </style.userInfo>
            <style.userInfo>
              <span>동아리</span>
              <span>{userInfo.club}</span>
            </style.userInfo>
            <style.userInfo>
              <span>학번</span>
              <span>{userInfo.studentId}</span>
            </style.userInfo>
          </style.userInfoBox>
        </style.userInfoWrapper>
        <FullBtn
          size="big"
          club={userInfo.club}
          name="프로필 수정하기"
          onClick={goToProfileEdit}
        />
      </style.userInfoContainer>
    </>
  );
}
