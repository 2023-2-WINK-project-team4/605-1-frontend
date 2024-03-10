import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../../Components/Header/header';
import Box from '../../Components/Box/box';
import Input from '../../Components/Input/input';
import Dropdown from '../../Components/Dropdown/dropdown';
import Button from '../../Components/Button/fullBtn';
import * as style from './styles';
import axios from 'axios';

export default function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  const kakaoId = location.state.kakaoId;

  const title = '회원 정보 입력';

  const [name, setName] = useState('');
  const [club, setClub] = useState('wink');
  const [studentId, setStudentId] = useState('');

  const handleJoin = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/join`,
        {
          name,
          club,
          studentId,
          kakaoId,
        },
        { withCredentials: true },
      );

      if (res.data.msg === '회원 가입 성공') {
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('club', club);
        navigate('/main', { state: { club: club } });
      } else {
        alert('회원 가입 실패');
        navigate('/profile');
      }
    } catch (error) {
      alert('오류 발생');
    }
  };

  return (
    <>
      <Header title={title} />
      <style.InfoContainer>
        <style.Notice>
          <Box
            width={'280px'}
            height={'120px'}
            borderColor={'black'}
            pageName={'profile'}
            content={
              '최초 로그인 시,\n개인 정보(이름, 소속, 학번)\n입력이 필요합니다.'
            }
          />
        </style.Notice>
        <style.FormContainer>
          <Input
            content={'이름'}
            type={'text'}
            placeholder={'이름'}
            width={'220px'}
            height={'24px'}
            gap={'25px'}
            onChange={(e) => setName(e.target.value)}
          />
          <Dropdown
            content={'소속'}
            club={'WINK'}
            width={'240px'}
            height={'38px'}
            gap={'29px'}
            onChange={(value) => setClub(value)}
          />
          <Input
            content={'학번'}
            type={'number'}
            placeholder={'학번'}
            width={'220px'}
            height={'24px'}
            gap={'25px'}
            onChange={(e) => setStudentId(e.target.value)}
          />
        </style.FormContainer>
        <Button size="big" name="완료" onClick={handleJoin} />
      </style.InfoContainer>
    </>
  );
}
