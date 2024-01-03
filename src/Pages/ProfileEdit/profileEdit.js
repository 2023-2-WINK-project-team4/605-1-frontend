import React from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import * as style from './styles.js';

const ProfileEdit = () => {
  const title = '프로필 수정';
  const FooterTitle = '설정';
  const userInfo = {
    name: '유건',
    studentId: 20203103,
    club: 'wink',
    profile:
      'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
    kakaoId: '카카오아이디',
  };

  return (
    <>
      <Header title={title} />
      <style.ProfileEditContainer>
        <style.userProfile>
          <img
            src={userInfo.profile}
            alt="프로필 사진"
            className="image-bottom"
          />
          <style.EditButton>
            <img
              src={process.env.PUBLIC_URL + '/Images/All/pencil.svg'}
              alt="프로필 수정 버튼"
              className="image-top"
            />
          </style.EditButton>
        </style.userProfile>
      </style.ProfileEditContainer>
      <Footer title={FooterTitle} />
    </>
  );
};

export default ProfileEdit;
