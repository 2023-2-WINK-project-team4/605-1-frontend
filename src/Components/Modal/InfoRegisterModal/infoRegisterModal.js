import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import FullBtn from '../../Button/fullBtn';
import StrokeBtn from '../../Button/strokeBtn';
import Dropdown from '../../Dropdown/dropdown';
import Input from '../../Input/input';
import * as style from './styles';

export default function InfoRegisterModal(props) {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState('');
  const [seatNum, setSeatNum] = useState('');
  const [reason, setReason] = useState('');
  const [club, setClub] = useState('');
  const [reps, setReps] = useState('');

  const handleCloseBtn = () => {
    setIsOpen(false);
  };

  const handleConfirmBtn = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        pageName={props.pageName}
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={style.customModalStyles}
        ariaHideApp={false}
        contentLabel="infomation & register modal"
        shouldCloseOnOverlayClick={false}
      >
        <style.ModalHeader>
          {props.pageName === 'meetingTable'
            ? '예약하기'
            : '부정 사용자 신고하기'}
          <style.CloseButton
            src={process.env.PUBLIC_URL + '/Images/All/closeIcon.svg'}
            onClick={handleCloseBtn}
          />
        </style.ModalHeader>
        <style.ModalContent>
          <style.ModalItem>
            <FullBtn
              size="small"
              name={props.pageName === 'meetingTable' ? '사용 동아리' : '이름'}
              club={props.club}
            />
            {props.pageName === 'meetingTable' ? (
              <Dropdown
                club={'wink'}
                width={'160px'}
                height={'34px'}
                onChange={(e) => setClub(e.target.value)}
              />
            ) : (
              <Input
                isModal
                type={'text'}
                width={'180px'}
                height={'20px'}
                onChange={(e) => setName(e.target.value)}
              />
            )}
          </style.ModalItem>
          <style.ModalItem>
            <FullBtn
              size="small"
              name={props.pageName === 'meetingTable' ? '대표자' : '좌석 번호'}
              club={props.club}
            />
            {props.pageName === 'meetingTable' ? (
              <Input
                isModal
                type={'text'}
                width={'168px'}
                height={'20px'}
                onChange={(e) => setReps(e.target.value)}
              />
            ) : (
              <Input
                isModal
                type={'number'}
                width={'152px'}
                height={'20px'}
                onChange={(e) => setSeatNum(e.target.value)}
              />
            )}
          </style.ModalItem>
          <style.ModalItem>
            <FullBtn
              size="small"
              name={
                props.pageName === 'meetingTable' ? '사용 시간' : '신고 사유'
              }
              club={props.club}
            />
            {props.pageName === 'meetingTable' ? (
              <style.DatePickerContainer>
                <DatePicker />
              </style.DatePickerContainer>
            ) : (
              <Input
                isModal
                isArea
                width={'240px'}
                height={'88px'}
                onChange={(e) => setReason(e.target.value)}
              />
            )}
          </style.ModalItem>
        </style.ModalContent>
        <style.ModalFooter pageName={props.pageName}>
          <FullBtn
            size="small"
            name="확인"
            club={props.club}
            onClick={handleConfirmBtn}
          />
          <StrokeBtn name="취소" club={props.club} onClick={handleCloseBtn} />
        </style.ModalFooter>
      </Modal>
    </>
  );
}
