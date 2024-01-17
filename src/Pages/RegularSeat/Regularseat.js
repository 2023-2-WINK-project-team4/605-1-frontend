import Box from '../../Components/Box/box';
import TitleBox from '../../Components/Box/titleBox';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import * as style from './styles';
import WinkSeat from '../../Components/Seat/WinkSeat';
import FoscarSeat from '../../Components/Seat/FoscarSeat';

export default function RegularSeat(props) {
  const WinkSeatData = [
    { club: 'wink', monitor: 'true', number: '1' },
    { club: 'wink', monitor: 'true', number: '2' },
    { club: 'wink', monitor: 'true', number: '3' },
    { club: 'wink', monitor: 'true', number: '4' },
    { club: 'wink', monitor: 'false', number: '5' },
    { club: 'wink', monitor: 'true', number: '6' },
    { club: 'wink', monitor: 'false', number: '7' },
    { club: 'wink', monitor: 'false', number: '8' },
  ];
  const FoscarSeatData = [
    { club: 'foscar', monitor: 'true', number: '1' },
    { club: 'foscar', monitor: 'true', number: '2' },
    { club: 'foscar', monitor: 'true', number: '3' },
    { club: 'foscar', monitor: 'true', number: '4' },
    { club: 'foscar', monitor: 'false', number: '5' },
    { club: 'foscar', monitor: 'false', number: '6' },
    { club: 'foscar', monitor: 'true', number: '7' },
    { club: 'foscar', monitor: 'false', number: '8' },
  ];
  const WinkSeatDT_1 = WinkSeatData.slice(0, 4);
  const WinkSeatDT_2 = WinkSeatData.slice(5, 8);
  const FoscarSeatDT_1 = FoscarSeatData.slice(0, 4);
  const FoscarSeatDT_2 = FoscarSeatData.slice(5, 8);
  return (
    <>
      <Header title="일반 좌석 배정" />
      <style.RegularSeat>
        <style.GroupContainer>
          <style.SeatContainer>
            <FoscarSeat club="wink" monitor="true" number="1" />
            <FoscarSeat club="wink" monitor="true" number="2" />
            <FoscarSeat club="wink" monitor="true" number="3" />
            <FoscarSeat club="wink" monitor="true" number="4" />
          </style.SeatContainer>
          <style.SeatContainer>
            <WinkSeat club="wink" monitor="true" number="1" />
            <WinkSeat club="wink" monitor="true" number="2" />
            <WinkSeat club="wink" monitor="true" number="3" />
            <WinkSeat club="wink" monitor="true" number="4" />
          </style.SeatContainer>
        </style.GroupContainer>
        <style.GroupContainer>
          <style.SeatContainer>
            <FoscarSeat club="wink" number="5" />
            <FoscarSeat club="wink" number="6" />
            <FoscarSeat club="wink" monitor="true" number="7" />
            <FoscarSeat club="wink" number="8" />
          </style.SeatContainer>
          <style.SeatContainer>
            <WinkSeat club="wink" number="5" />
            <WinkSeat club="wink" monitor="true" number="6" />
            <WinkSeat club="wink" number="7" />
            <WinkSeat club="wink" number="8" />
          </style.SeatContainer>
        </style.GroupContainer>
        <style.Titlecontainer>
          <TitleBox club="wink" title="좌석 배정 및 반납 방법" />
        </style.Titlecontainer>
        <Box
          width="351px"
          height="167px"
          pageName="regularSeat"
          borderColor="#3A70FF"
          title1="좌석 배정"
          content1={'1. 빈 좌석을 부른다.\n 2. 배정 확인 버튼을 부른다.'}
          title2="좌석 반납"
          content2={
            '1. 현재 자신이 사용중인 좌석을 누른다.\n 2. 반납 확인 버튼을 누른다.'
          }
        />
      </style.RegularSeat>
      <Footer title="일반 좌석 배정" />
    </>
  );
}
