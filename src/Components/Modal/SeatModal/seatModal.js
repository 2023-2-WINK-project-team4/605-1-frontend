import React, { useEffect, useRef } from 'react';
import * as style from './styles.js';
import FullBtn from '../../Button/fullBtn';
import { themeWink, themeFoscar } from '../../Theme/theme';

export default function SeatModal({
  isOpen,
  closeModal,
  myReservationInfo,
  club,
  ref,
}) {
  return (
    isOpen && (
      <style.ModalWrapper>
        <style.ModalContainer ref={ref} onClick={closeModal} />
        <style.ModalContent theme={club === 'wink' ? themeWink : themeFoscar}>
          <style.ModalCloseButton onClick={closeModal}>
            X
          </style.ModalCloseButton>
          <p>{myReservationInfo.seatNumber}번 좌석을 반납하시겠습니까?</p>
          <style.ButtonBox>
            <FullBtn
              size="small"
              name="확인"
              club={club}
              onClick={closeModal}
            />
            <FullBtn
              size="small"
              name="취소"
              club={club}
              onClick={closeModal}
            />
          </style.ButtonBox>
        </style.ModalContent>
      </style.ModalWrapper>
    )
  );
}
