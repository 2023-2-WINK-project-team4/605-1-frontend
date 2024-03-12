import React, { useState } from 'react';
import Modal from 'react-modal';
import FullBtn from '../../Button/fullBtn';
import StrokeBtn from '../../Button/strokeBtn';
import Input from '../../Input/input';
import * as style from './styles';

export default function ReportModal(props) {
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
        contentLabel="report modal"
        shouldCloseOnOverlayClick={false}
      >
        <style.ModalHeader>
          {'부정 사용자 신고하기'}
          <style.CloseButton
            src={process.env.PUBLIC_URL + '/Images/All/closeIcon.svg'}
            onClick={handleCloseBtn}
          />
        </style.ModalHeader>
        <style.ModalContent>
          <style.ModalItem>
            <FullBtn size="small" name={'이름'} club={props.club} />
            <Input
              isModal
              type={'text'}
              width={'180px'}
              height={'20px'}
              onChange={(e) => setName(e.target.value)}
            />
          </style.ModalItem>
          <style.ModalItem>
            <FullBtn size="small" name={'좌석 번호'} club={props.club} />
            <Input
              isModal
              type={'number'}
              width={'152px'}
              height={'20px'}
              onChange={(e) => setSeatNum(e.target.value)}
            />
          </style.ModalItem>
          <style.ModalItem>
            <FullBtn size="small" name={'신고 사유'} club={props.club} />
            <Input
              isModal
              isArea
              width={'240px'}
              height={'88px'}
              onChange={(e) => setReason(e.target.value)}
            />
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
