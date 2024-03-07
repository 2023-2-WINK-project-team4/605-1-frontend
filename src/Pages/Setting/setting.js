import React from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import Box from '../../Components/Box/box';
import FullBtn from '../../Components/Button/fullBtn';

export default function Setting() {
  const title = '설정';
  const navigate = useNavigate();

  const userInfo = {
    name: '유건',
    studentId: 20203103,
    club: 'wink',
    profile:
      'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
    kakaoId: '카카오아이디',
  };

  const seatInfo = { seatNumber: '4' };

  return (
    <>
      <Header title={title} />
      <style.SettingContainer>
        <style.Title>나의 프로필</style.Title>
        <style.UserInfoContainer>
          <style.UserInfoWrapper>
            <style.UserProfile>
              <img src={userInfo.profile} alt="프로필 사진" />
            </style.UserProfile>
            <style.UserInfoBox>
              <style.UserInfo>
                <span>이름</span>
                <span>{userInfo.name}</span>
              </style.UserInfo>
              <style.UserInfo>
                <span>소속</span>
                <span>{userInfo.club}</span>
              </style.UserInfo>
              <style.UserInfo>
                <span>학번</span>
                <span>{userInfo.studentId}</span>
              </style.UserInfo>
            </style.UserInfoBox>
          </style.UserInfoWrapper>
          <FullBtn
            size="big"
            club={userInfo.club}
            name="프로필 수정하기"
            onClick={() => {
              navigate('/profileEdit', { state: { userInfo } });
            }}
          />
        </style.UserInfoContainer>
        <style.Title>나의 예약</style.Title>
        <style.ReservationContainer>
          <Box
            width={'320px'}
            height={'90px'}
            borderColor={'#3A70FF'}
            pageName={'main'}
            src={process.env.PUBLIC_URL + '/Images/All/winkSeatIcon.svg'}
            content={
              seatInfo.seatNumber != null
                ? seatInfo.seatNumber + '번 좌석 사용 중'
                : '이용 중인 좌석이 없습니다.'
            }
          />
        </style.ReservationContainer>
      </style.SettingContainer>
      <Footer title={title} />
    </>
  );
}
