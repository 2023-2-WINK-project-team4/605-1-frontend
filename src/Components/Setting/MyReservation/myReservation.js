import React, { useState, useEffect } from 'react';
import SeatModal from '../../Modal/SeatModal/seatModal';
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

  // 모달 창 외부를 클릭했을 때 모달 창이 닫히도록 이벤트 리스너 추가
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isModalOpen && !event.target.closest('.ModalContainer')) {
        handleCloseModal();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    // 컴포넌트가 언마운트되면 이벤트 리스너 제거
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isModalOpen]);

  // MyReservation 컴포넌트의 return 구문 수정
  return (
    <>
      {isModalOpen && (
        <SeatModal
          isOpen={isModalOpen}
          closeModal={handleCloseModal}
          myReservationInfo={MyReservationInfo}
        />
      )}
      <style.myReservationContainer>
        <style.title>나의 예약</style.title>
        <div className="returnBox" onClick={handleOpenModal}>
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
