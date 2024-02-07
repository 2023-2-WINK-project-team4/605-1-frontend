import React from 'react';
import * as style from './styles';

export default function Login() {
  const kakaoURL = 'http://43.201.38.170:8080/auth/login';

  const handleLogin = () => {
    window.location.href = kakaoURL; // 카카오 로그인 페이지로 리디렉션
  };

  return (
    <style.LoginContainer>
      <img
        src={process.env.PUBLIC_URL + '/Images/All/whiteAppIcon.svg'}
        alt=""
      />
      <style.KakaoButton onClick={handleLogin}>
        <img
          src={process.env.PUBLIC_URL + '/Images/Login/kakao.svg'}
          alt="카카오톡 로고"
        />
        <span>카카오로 시작하기</span>
      </style.KakaoButton>
    </style.LoginContainer>
  );
}
