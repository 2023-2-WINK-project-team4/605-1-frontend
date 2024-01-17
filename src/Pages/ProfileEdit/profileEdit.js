import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import * as style from './styles';
import { useLocation } from 'react-router-dom';
import Input from '../../Components/Input/input';
import FullBtn from '../../Components/Button/fullBtn';
import Dropdown from '../../Components/Dropdown/dropdown';

export default function ProfileEdit() {
  const title = '프로필 수정';
  const location = useLocation();
  const userInfo = location.state.userInfo;

  const [realImage, setRealImage] = useState(userInfo.profile);
  const [tempImage, setTempImage] = useState(realImage);
  const [realName, setRealName] = useState(userInfo.name);
  const [tempName, setTempName] = useState(realName);
  const [realStudentId, setRealStudentId] = useState(userInfo.studentId);
  const [tempStudentId, setTempStudentId] = useState(realStudentId);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <Header title={title} />
      <style.ProfileEditContainer>
        <style.UserProfile>
          <img src={tempImage} alt="프로필 사진" />
          <style.EditButton>
            <style.EditLabel htmlFor="imageUpload">
              <img
                src={process.env.PUBLIC_URL + '/Images/All/pencil.svg'}
                alt="프로필 수정 버튼"
              />
            </style.EditLabel>
            <style.EditInput
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </style.EditButton>
        </style.UserProfile>
        <style.InputWrapper>
          <Input
            content={'이름'}
            type={'text'}
            width={'180px'}
            height={'15px'}
            placeholder={realName}
            onChange={(value) => setTempName(value)}
          />
          <Dropdown
            gap={'29px'}
            club={'wink'}
            content={'소속'}
            width={'202px'}
            height={'29px'}
          />
          <Input
            content={'학번'}
            type={'text'}
            width={'180px'}
            height={'15px'}
            placeholder={realStudentId}
            onChange={(value) => setTempStudentId(value)}
          />
        </style.InputWrapper>
        <FullBtn
          size="big"
          club={userInfo.club}
          name="확인"
          onClick={() => {
            setRealImage(tempImage);
            setRealName(tempName);
            setRealStudentId(tempStudentId);
          }}
        />
      </style.ProfileEditContainer>
      <Footer title={title} />
    </>
  );
}