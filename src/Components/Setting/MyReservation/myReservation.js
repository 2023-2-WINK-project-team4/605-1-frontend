import React, { useEffect, useState } from 'react';
import * as style from './styles';
import axios from 'axios';
import FullBtn from '../../Button/fullBtn';
import { useNavigate } from 'react-router-dom';

export default function MyProfile() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const jwtToken = sessionStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옵니다.

    // 토큰이 없으면 로그인 페이지로 이동
    if (!jwtToken) {
      navigate('/login');
      return;
    }

    // 토큰이 있으면 정상적으로 진행
    axios
      .get(url + 'user', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((res) => {
        setUserInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
        // 토큰이 유효하지 않거나 기타 오류가 발생하면 로그인 페이지로 이동.
        navigate('/login');
      });
  }, [navigate, url]);

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
