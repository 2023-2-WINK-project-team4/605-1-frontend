import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import * as style from './styles';
import { useLocation } from 'react-router-dom';
import Input from '../../Components/Input/input';
import FullBtn from '../../Components/Button/fullBtn';

export default function ProfileEdit() {
  const title = '프로필 수정';
  const location = useLocation();
  const userInfo = location.state.userInfo;

  const [realImage, setRealImage] = useState(userInfo.profile);
  const [tempImage, setTempImage] = useState(realImage);

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
          <img src={tempImage} alt="프로필 사진" className="image-bottom" />
          <style.EditButton>
            <style.EditLabel htmlFor="imageUpload">
              <img
                src={process.env.PUBLIC_URL + '/Images/All/pencil.svg'}
                alt="프로필 수정 버튼"
                className="image-top"
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

        <div>
          <span>이름</span>
          <Input
            type={'text'}
            width={'200px'}
            height={'20px'}
            marginBottom={'10px'}
            marginLeft={'30px'}
            placeholder={userInfo.name}
          ></Input>
          <br></br>
        </div>
        <FullBtn
          size="big"
          club={userInfo.club}
          name="확인"
          onClick={() => setRealImage(tempImage)}
        />
      </style.ProfileEditContainer>
      <Footer title={title} />
    </>
  );
}
