// seatModal.js
import React from 'react';
import * as style from './styles.js';
import FullBtn from '../../Button/fullBtn'; // fullBtn 컴포넌트 불러오기

export default function SeatModal({ isOpen, closeModal, myReservationInfo }) {
  if (!isOpen) return null;

  return (
    <style.ModalContainer>
      <style.ModalContent>
        <style.ModalCloseButton onClick={closeModal}>X</style.ModalCloseButton>
        <p>{myReservationInfo.seatNumber}번 좌석을 반납하시겠습니까?</p>
        {/* FullBtn 컴포넌트를 사용하여 예, 아니오 버튼 스타일링 */}
        <div>
          <FullBtn size="small" name="확인" onClick={closeModal} />
          <FullBtn size="small" name="취소" onClick={closeModal} />
        </div>
      </style.ModalContent>
    </style.ModalContainer>
  );
}
