import StrokeSquareButton from '../../Components/Button/strokeSquareBtn';
import FullSquareBtn from '../../Components/Button/fullSquareBtn';
import Box from '../../Components/Box/box';
import Footer from '../../Components/Footer/footer';
import TitleBox from '../../Components/Box/titleBox';
import * as style from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Main(props) {
  const navigate = useNavigate();

  return (
    <>
      <style.MainContainer>
        <img
          src={process.env.PUBLIC_URL + '/Images/All/appIcon.svg'}
          alt="App Logo"
        />
        <style.ReservationContainer>
          <TitleBox
            pageName={'main'}
            club={'wink'}
            title={'내 좌석 예약 현황'}
            width={'160px'}
            height={'28px'}
          />
          <Box
            width={'320px'}
            height={'90px'}
            borderColor={'#3A70FF'}
            pageName={'main'}
            src={process.env.PUBLIC_URL + '/Images/All/winkSeatIcon.svg'}
            content={'내 좌석 예약 현황'}
          />
        </style.ReservationContainer>
        <style.ButtonContainer>
          <StrokeSquareButton
            club={'wink'}
            size={'big'}
            url={process.env.PUBLIC_URL + '/Images/All/winkTableIcon.svg'}
          />
          <FullSquareBtn
            club={'wink'}
            size={'big'}
            url={process.env.PUBLIC_URL + '/Images/All/whiteSeatIcon.svg'}
            onClick={() => {
              navigate('./regularSeat', { state: { club } });
            }}
          />
        </style.ButtonContainer>
      </style.MainContainer>
      <Footer title="메인" />
    </>
  );
}
