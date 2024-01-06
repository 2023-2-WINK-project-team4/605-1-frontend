import React, { useState } from 'react';
import * as style from './styles';
import SeatModal from '../../Modal/SeatModal/seatModal';
import StrokeSquareBtn from '../../Button/strokeSquareBtn';

const MyReservationInfo = {
  seatNumber: 4,
  seatStatus: 'using',
  startTime: '2023-11-14T13:41:23.521Z',
};

export default function MyReservation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SeatModal
        club="wink"
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        myReservationInfo={MyReservationInfo}
      />
      <style.myReservationContainer>
        <style.title>나의 예약</style.title>
        <div className="return box" onClick={handleOpenModal}>
          <style.myReservationWrapper>
            <StrokeSquareBtn
              size="middle"
              club="wink"
              url={process.env.PUBLIC_URL + '/Images/All/winkSeatIcon.svg'}
            />
            <style.seatInfo>
              {MyReservationInfo.seatNumber}번 좌석 사용중
            </style.seatInfo>
          </style.myReservationWrapper>
        </div>
      </style.myReservationContainer>
    </>
  );
}
