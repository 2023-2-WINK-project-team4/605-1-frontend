import * as style from './styles';
import FullBtn from '../../Button/fullBtn';
import React from 'react';
import { themeWink, themeFoscar } from '../../Theme/theme';

export default function SeatModal({
  isOpen,
  closeModal,
  myReservationInfo,
  club,
  tryToSeat,
}) {
  return (
    isOpen && (
      <style.ModalWrapper>
        <style.ModalContainer onClick={closeModal} />
        <style.ModalContent theme={club === 'wink' ? themeWink : themeFoscar}>
          <style.ModalCloseButton onClick={closeModal}>
            X
          </style.ModalCloseButton>
          <div>
            {myReservationInfo.seatNumber !== 0 ? (
              <p>{myReservationInfo.seatNumber}번 좌석을 반납하시겠습니까?</p>
            ) : (
              <p>{tryToSeat}번 좌석을 배정하시겠습니까?</p>
            )}
          </div>
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

