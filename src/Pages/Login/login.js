import React from 'react';
import * as style from './styles';

export default function Login() {
  const REST_API_KEY = '???'; // 백엔드에서 발급받은 값으로 변경
  const REDIRECT_URI = '???'; // 백엔드에서 발급받은 값으로 변경
  const kakaoLink = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = kakaoLink; // 카카오 로그인 페이지로 리디렉션
  };

  return (
    <style.LoginContainer>
      <img
        src={process.env.PUBLIC_URL + '/Images/All/whiteAppIcon.svg'}
        alt=""
      />
      <style.KakaoButton onClick={loginHandler}>
        <img src={process.env.PUBLIC_URL + '/Images/Login/kakao.svg'} />
        <span>카카오로 시작하기</span>
      </style.KakaoButton>
    </style.LoginContainer>
  );
}
