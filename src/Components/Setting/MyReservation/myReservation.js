import React, { useEffect, useState } from 'react';
import * as style from './styles';
import SeatModal from '../../Modal/SeatModal/seatModal';
import StrokeSquareBtn from '../../Button/strokeSquareBtn';
import axios from 'axios';

export default function MyReservation() {
  const MyReservationInfo = {
    seatNumber: 4,
    seatStatus: 'using',
    startTime: '2023-11-14T13:41:23.521Z',
  };
  // useEffect(() => {
  //   axios
  //     .get('seat/my-seat') // 나중에 seat/my-seat 앞에 주소 들어가야됨
  //     .then((res) => {
  //       const MyReservationInfo = res;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  //

  if (MyReservationInfo.seatStatus !== 'using') {
    return null;
  } else {
    return (
      <>
        <style.myReservationContainer>
          <style.title>나의 예약</style.title>
          <SeatModal
            children={
              <div className="return box">
                <style.myReservationWrapper>
                  <StrokeSquareBtn
                    size="middle"
                    club="wink"
                    url={
                      process.env.PUBLIC_URL + '/Images/All/winkSeatIcon.svg'
                    }
                  />
                  <style.seatInfo>
                    {MyReservationInfo.seatNumber}번 좌석 사용중
                  </style.seatInfo>
                </style.myReservationWrapper>
              </div>
            }
            club="wink"
            myReservationInfo={MyReservationInfo}
          />
        </style.myReservationContainer>
      </>
    );
  }
}
