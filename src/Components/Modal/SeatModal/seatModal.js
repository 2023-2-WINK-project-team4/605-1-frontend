import * as style from './styles';
import FullBtn from '../../Button/fullBtn';
import React, { useEffect, useState } from 'react';
import { themeWink, themeFoscar } from '../../Theme/theme';
import axios from 'axios';

export default function SeatModal(props) {
  const url = process.env.REACT_APP_API_URL;
  const [clubSeat, setClubseat] = useState(null);

  useEffect(() => {
    axios
      .get(url + `seat/${props.club}`)
      .then((res) => {
        setClubseat(
          res.data.filter((data) => {
            return data.seatNumber == props.tryToSeat;
          }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(true);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    handleCloseModal();
    props.onClick();
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
              {props.myReservationInfo.seatNumber !== null ? (
                <p>
                  {props.myReservationInfo.seatNumber}번 좌석을
                  반납하시겠습니까?
                </p>
              ) : clubSeat.studentId != null ? (
                <div>
                  {() => {
                    setIsButtonOpen(false);
                    return <p>이미 사용중인 좌석입니다</p>;
                  }}
                </div>
              ) : (
                <p>{props.tryToSeat}번 좌석을 배정하시겠습니까?</p>
              )}
            </div>
            <div>
              {isButtonOpen ? (
                <style.ButtonBox>
                  <FullBtn
                    size="small"
                    name="확인"
                    club={props.club}
                    onClick={handleClick}
                  />
                  <FullBtn
                    size="small"
                    name="취소"
                    club={props.club}
                    onClick={handleCloseModal}
                  />
                </style.ButtonBox>
              ) : null}
            </div>
          </style.ModalContent>
        </style.ModalWrapper>
      )}
    </div>
  );
}
