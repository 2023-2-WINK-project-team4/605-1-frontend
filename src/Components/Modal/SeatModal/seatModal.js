import * as style from './styles';
import FullBtn from '../../Button/fullBtn';
import React, { useState } from 'react';
import { themeWink, themeFoscar } from '../../Theme/theme';

export default function SeatModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div onClick={handleOpenModal}>{props.children}</div>
      {isModalOpen && (
        <style.ModalWrapper>
          <style.ModalContainer onClick={handleCloseModal} />
          <style.ModalContent
            theme={props.club === 'wink' ? themeWink : themeFoscar}
          >
            <style.ModalCloseButton onClick={handleCloseModal}>
              X
            </style.ModalCloseButton>
            <div>
              {props.myReservationInfo.seatNumber !== 0 ? (
                <p>
                  {props.myReservationInfo.seatNumber}번 좌석을
                  반납하시겠습니까?
                </p>
              ) : (
                <p>{props.tryToSeat}번 좌석을 배정하시겠습니까?</p>
              )}
            </div>
            <style.ButtonBox>
              <FullBtn
                size="small"
                name="확인"
                club={props.club}
                onClick={(handleCloseModal, props.onClick)}
              />
              <FullBtn
                size="small"
                name="취소"
                club={props.club}
                onClick={handleCloseModal}
              />
            </style.ButtonBox>
          </style.ModalContent>
        </style.ModalWrapper>
      )}
    </div>
  );
}
