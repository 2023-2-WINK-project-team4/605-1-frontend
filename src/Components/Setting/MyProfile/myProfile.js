import React, { useEffect, useState } from 'react';
import * as style from './styles';
import axios from 'axios';
import FullBtn from '../../Button/fullBtn';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const url = process.env.REACT_APP_API_URL;
  // const userInfo = {
  //   name: '유건',
  //   studentId: 20203103,
  //   club: 'wink',
  //   profile:
  //     'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
  //   kakaoId: '카카오아이디',
  // };

  useEffect(() => {
    axios
      .get(url + 'user') // 나중에 /user앞에 주소 들어가야됨
      .then((res) => {
        setUserInfo(res.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
              <span>소속</span>
              <span>{userInfo.club}</span>
            </style.userInfo>
            <style.userInfo>
              <span>학번</span>
              <span>{userInfo.studentID}</span>
            </style.userInfo>
          </style.userInfoBox>
        </style.userInfoWrapper>
        <FullBtn
          size="big"
          club={userInfo.club}
          name="프로필 수정하기"
          onClick={() => {
            navigate('/profileEdit', { state: { userInfo } });
          }}
        />
      </style.userInfoContainer>
    </>
  );
}
