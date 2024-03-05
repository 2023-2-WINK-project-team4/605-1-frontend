import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginCallBack() {
  const code = new URLSearchParams(window.location.search).get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/auth/login/callback?code=${code}`,
        )
        .then((res) => {
          if (res.data.msg === 'sign_up') {
            const kakaoId = res.data.kakaoId;
            console.log(kakaoId);
            navigate('/profile', { state: { kakaoId: kakaoId } });
          } else {
            sessionStorage.setItem('token', res.data.token);
            navigate('/main');
          }
        })
        .catch((error) => {
          console.log(error);
          alert('로그인 콜백 오류');
          navigate('/');
        });
    }
  }, []);

  return (
    <>
      <span>카카오 로그인 진행중입니다.</span>
    </>
  );
}
