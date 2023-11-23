//레이아웃 너비는 최대 480픽셀 , 높이는 디바이스 높이의 100%

import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import MyProfile from '../../Components/Setting/MyProfile/myProfile.js';
import MyReservation from '../../Components/Setting/MyReservation/myReservation.js';
import * as style from './styles.js';

export default function Setting() {
  const title = '설정';

  return (
    <>
      <Header title={title} />
      <style.SettingContainer>
        <MyProfile />
        <MyReservation />
      </style.SettingContainer>

      <Footer title={title} />
    </>
  );
}
