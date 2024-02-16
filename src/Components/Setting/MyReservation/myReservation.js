import React, { useEffect, useState } from 'react';
import * as style from './styles';
import SeatModal from '../../Modal/SeatModal/seatModal';
import StrokeSquareBtn from '../../Button/strokeSquareBtn';
import axios from 'axios';

export default function MyReservation() {
  const url = process.env.REACT_APP_API_URL;
  const [myReservationInfo, setMyReservationInfo] = useState(null);

  useEffect(() => {
    axios
      .get(url + 'seat/my-seat')
      .then((res) => {
        setMyReservationInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const returnSeat = () => {
      axios
        .patch(url + 'seat/return')
        .then((res) => {
          console.log("좌석반납완료")
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  if (!myReservationInfo.seatNumber) {
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
                    {myReservationInfo.seatNumber}번 좌석 사용중
                  </style.seatInfo>
                </style.myReservationWrapper>
              </div>
            }
            club="wink"
            myReservationInfo={myReservationInfo}
          />
        </style.myReservationContainer>
      </>
    );
  }
