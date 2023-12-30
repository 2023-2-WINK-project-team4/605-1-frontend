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
