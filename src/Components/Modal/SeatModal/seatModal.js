// seatModal.js
import React from 'react';
import * as style from './styles.js';

export function SeatModal({ isOpen, closeModal, myReservationInfo }) {
  if (!isOpen) return null;

  return (
    <style.ModalContainer>
      <style.ModalContent>
        <p>{myReservationInfo.seatNumber}번 좌석을 반납하시겠습니까?</p>
        <button onClick={closeModal}>아니오</button>
        <button onClick={closeModal}>예</button>
      </style.ModalContent>
    </style.ModalContainer>
  );
}
