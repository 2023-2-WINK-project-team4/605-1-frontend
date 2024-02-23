import React, { useState } from 'react';
import { themeWink, themeFoscar } from '../Theme/theme';
import Button from '../Button/fullBtn';
import Dropdown from '../Dropdown/dropdown';
import DatePicker from 'react-mobile-datepicker';
import * as style from './styles';

export default function ReserveReportModal(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [seatNum, setSeatNum] = useState('');
  const [reason, setReason] = useState('');
  const [club, setClub] = useState('');
  const [reps, setReps] = useState('');
  const [time, setTime] = useState(new Date());

  const handleDateSelect = (time) => {
    setTime(time);
    toggleDatePicker();
  };

  const toggleDatePicker = () => {
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
          >
            <style.ModalHeader>
              <span>
                {props.pageName === 'meetingTable'
                  ? '부정 사용자 신고하기'
                  : '예약하기'}
              </span>
              <style.CloseButton onClick={props.closeModal}>
                X
              </style.CloseButton>
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
                    width={'120px'}
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
                    width={'132px'}
                    height={'20px'}
                    onChange={(e) => setReps(e.target.value)}
                  />
                )}
              </style.InputContainer>
              <style.InputContainer column>
                <Button size="small" name="사용 시간" club={props.club} />
                {props.pageName === 'meetingTable' ? (
                  <style.Input
                    as="textarea"
                    type={'textarea'}
                    width={'212px'}
                    height={'88px'}
                    onChange={(e) => setReason(e.target.value)}
                  />
                ) : (
                  <>
                    <style.Input
                      width={'212px'}
                      height={'88px'}
                      centerText
                      onClick={toggleDatePicker}
                      readOnly
                    />
                    <DatePicker
                      value={time}
                      isOpen={isOpen}
                      dateConfig={dateConfig}
                      showHeader={false}
                      showFooter={false}
                      onSelect={handleDateSelect}
                      onCancel={toggleDatePicker}
                    />
                  </>
                )}
              </style.InputContainer>
            </style.FormContainer>
            <style.ButtonContainer>
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
                  onClick={props.closeModal}
                />
              </div>
            </style.ButtonContainer>
          </style.ModalContent>
        </style.ModalContainer>
      )}
    </>
  );
}
