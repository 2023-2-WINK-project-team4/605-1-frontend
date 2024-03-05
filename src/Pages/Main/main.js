import StrokeSquareButton from '../../Components/Button/strokeSquareBtn';
import FullSquareBtn from '../../Components/Button/fullSquareBtn';
import Box from '../../Components/Box/box';
import Footer from '../../Components/Footer/footer';
import TitleBox from '../../Components/Box/titleBox';
import * as style from './styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Main(props) {
  const navigate = useNavigate();
  const location = useLocation();
  // const club = location.state.club;
  const club = 'wink';
  const token = sessionStorage.getItem('token');
  const [seatInfo, setSeatInfo] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/seat/my-seat`, { token })
      .then((res) => {
        setSeatInfo(res);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <style.MainContainer>
        <img
          src={process.env.PUBLIC_URL + '/Images/All/appIcon.svg'}
          alt="App Logo"
        />
        <style.BodyContainer>
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
              content={
                seatInfo.seatNumber != null
                  ? seatInfo.seatNumber + '번 좌석 예약 중'
                  : '이용 중인 좌석이 없습니다.'
              }
            />
          </style.ReservationContainer>
          <style.ButtonContainer>
            <StrokeSquareButton
              club={'wink'}
              size={'big'}
              url={process.env.PUBLIC_URL + '/Images/All/winkTableIcon.svg'}
              onClick={() => {
                navigate('./meetingTable', { state: { club } });
              }}
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
        </style.BodyContainer>
      </style.MainContainer>
      <Footer title="메인" />
    </>
  );
}
