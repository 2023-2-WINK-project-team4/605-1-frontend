import { React, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginCallBack() {
  const url = process.env.REACT_APP_API_URL;
  const code = new URLSearchParams(window.location.search).get('code');
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      axios
        .get(`${url}/auth/login/callback?code=${code}`)
        .then((res) => {
          console.log(res);

          if (res.data.msg === 'sign_up') {
            navigate('/profile');
          } else {
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
