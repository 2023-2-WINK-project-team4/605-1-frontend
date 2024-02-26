import React, { useState } from 'react';
import { themeWink, themeFoscar } from '../../Theme/theme';
import Button from '../../Button/fullBtn';
import Dropdown from '../../Dropdown/dropdown';
import DatePicker from 'react-mobile-datepicker';
import * as style from './styles';

export default function InfoRegisterModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [seatNum, setSeatNum] = useState('');
  const [reason, setReason] = useState('');
  const [club, setClub] = useState('');
  const [reps, setReps] = useState('');
  const [time, setTime] = useState(new Date());

  const handleDateSelect = (time) => {
    handleDateCancel();
  };

  const handleDateCancel = () => {
    setIsOpen(!isOpen);
  };

  const dateConfig = {
    year: {
      format: 'YYYY',
      caption: '년',
      step: 1,
    },
    month: {
      format: 'MM',
      caption: '월',
      step: 1,
    },
    date: {
      format: 'DD',
      caption: '일',
      step: 1,
    },
    hour: {
      format: 'hh',
      caption: '시',
      step: 1,
    },
    minute: {
      format: 'mm',
      caption: '분',
      step: 1,
    },
    meridiem: {
      format: (value) => (value.hour < 12 ? '오전' : '오후'),
      caption: '오전/오후',
      step: 1,
    },
  };

  const handleClose = () => {
    props.closeModal();
  };

  const handleConfirm = () => {
    // 정보 저장
    props.closeModal();
  };

  return (
    <>
      {props.openModal && (
        <style.ModalContainer>
          <style.ModalContent
            theme={props.club === 'wink' ? themeWink : themeFoscar}
            pageName={props.pageName}
          >
            <style.ModalHeader>
              <span>
                {props.pageName === 'meetingTable'
                  ? '부정 사용자 신고하기'
                  : '예약하기'}
              </span>
              <style.CloseButton onClick={handleClose}>X</style.CloseButton>
            </style.ModalHeader>

            <style.FormContainer>
              <style.InputContainer>
                <Button
                  size="small"
                  name={
                    props.pageName === 'meetingTable' ? '이름' : '사용 동아리'
                  }
                  club={props.club}
                />
                {props.pageName === 'meetingTable' ? (
                  <style.Input
                    type={'text'}
                    width={'148px'}
                    height={'20px'}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <Dropdown
                    club={'WINK'}
                    width={'156px'}
                    height={'34px'}
                    onChange={(e) => setClub(e.target.value)}
                  />
                )}
              </style.InputContainer>
              <style.InputContainer>
                <Button
                  size="small"
                  name={
                    props.pageName === 'meetingTable' ? '좌석 번호' : '대표자'
                  }
                  club={props.club}
                />
                {props.pageName === 'meetingTable' ? (
                  <style.Input
                    type={'number'}
                    width={'116px'}
                    height={'20px'}
                    onChange={(e) => setSeatNum(e.target.value)}
                  />
                ) : (
                  <style.Input
                    type={'text'}
                    width={'168px'}
                    height={'20px'}
                    onChange={(e) => setReps(e.target.value)}
                  />
                )}
              </style.InputContainer>
              <style.InputContainer
                column
                style={
                  props.pageName === 'meetingTable'
                    ? {}
                    : { marginLeft: '-204px' }
                }
              >
                <Button
                  size="small"
                  name={
                    props.pageName === 'meetingTable'
                      ? '신고 사유'
                      : '사용 시간'
                  }
                  club={props.club}
                />

                {props.pageName === 'meetingTable' ? (
                  <style.Input
                    as="textarea"
                    type={'textarea'}
                    width={'224px'}
                    height={'88px'}
                    onChange={(e) => setReason(e.target.value)}
                  />
                ) : (
                  <style.DatePickerContainer>
                    <DatePicker
                      value={time}
                      isPopup={false}
                      isOpen={true}
                      dateConfig={dateConfig}
                      showHeader={false}
                      showFooter={false}
                      onSelect={handleDateSelect}
                      onCancel={handleDateCancel}
                    />
                  </style.DatePickerContainer>
                )}
              </style.InputContainer>
            </style.FormContainer>
            <style.ButtonContainer pageName={props.pageName}>
              <div>
                <Button
                  size="small"
                  name="확인"
                  club={props.club}
                  onClick={handleConfirm}
                />
                <Button
                  size="small"
                  name="취소"
                  club={props.club}
                  onClick={handleClose}
                />
              </div>
            </style.ButtonContainer>
          </style.ModalContent>
        </style.ModalContainer>
      )}
    </>
  );
}
