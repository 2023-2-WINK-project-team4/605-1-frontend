// seatModal.js
import React from 'react';
import * as style from './styles.js';
import FullBtn from '../../Button/fullBtn'; // fullBtn 컴포넌트 불러오기
import { themeWink, themeFoscar } from '../../Theme/theme';

export default function SeatModal({
  isOpen,
  closeModal,
  myReservationInfo,
  club,
}) {
  if (!isOpen) return null;

  return (
    <style.ModalContainer>
      <style.ModalContent theme={club === 'wink' ? themeWink : themeFoscar}>
        <style.ModalCloseButton onClick={closeModal}>X</style.ModalCloseButton>
        <p>{myReservationInfo.seatNumber}번 좌석을 반납하시겠습니까?</p>
        <style.ButtonBox>
          <FullBtn size="small" name="확인" club="wink" onClick={closeModal} />
          <FullBtn size="small" name="취소" club="wink" onClick={closeModal} />
        </style.ButtonBox>
      </style.ModalContent>
    </style.ModalContainer>
  );
}
