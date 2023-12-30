import React, { useEffect, useRef } from 'react';
import * as style from './styles.js';
import FullBtn from '../../Button/fullBtn';
import { themeWink, themeFoscar } from '../../Theme/theme';

export default function SeatModal({
  isOpen,
  closeModal,
  myReservationInfo,
  club,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <style.ModalContainer ref={modalRef}>
      <style.ModalContent theme={club === 'wink' ? themeWink : themeFoscar}>
        <style.ModalCloseButton onClick={closeModal}>X</style.ModalCloseButton>
        <p>{myReservationInfo.seatNumber}번 좌석을 반납하시겠습니까?</p>
        <style.ButtonBox>
          <FullBtn size="small" name="확인" club={club} onClick={closeModal} />
          <FullBtn size="small" name="취소" club={club} onClick={closeModal} />
        </style.ButtonBox>
      </style.ModalContent>
    </style.ModalContainer>
  );
}
