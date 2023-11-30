// myReservation.js
import React, { useState } from 'react';
import { SeatModal } from '../../Modal/SeatModal/seatModal'; // Use {} for named imports
import * as style from './styles.js';

const MyReservationInfo = {
  seatNumber: 7,
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
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        myReservationInfo={MyReservationInfo}
      />
      <style.myReservationContainer>
        <style.title>나의 예약</style.title>
        <div className="return box" onClick={handleOpenModal}>
          <style.myReservationWrapper>
            <style.chairIcon>
              <img
                src={process.env.PUBLIC_URL + '/Images/All/chairWink.svg'}
                alt="일반좌석 아이콘"
              />
            </style.chairIcon>
            <style.seatInfo>
              {MyReservationInfo.seatNumber}번 좌석 사용중
            </style.seatInfo>
          </style.myReservationWrapper>
        </div>
      </style.myReservationContainer>
    </>
  );
}
