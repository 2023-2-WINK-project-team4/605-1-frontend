import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import DatePicker from 'react-datepicker';
import { ThemeProvider } from 'styled-components';
import { themeWink, themeFoscar } from '../../Components/Theme/theme';
import { GlobalStyle } from './styles';
import Footer from '../../Components/Footer/footer';
import * as style from './styles';
import ko from 'date-fns/locale/ko';

export default function MeetingTable(props) {
  const title = '회의 테이블 배정';

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDate = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false);
  };

  const [calendarOpen, setCalendarOpen] = useState(false);
  const handleOpen = () => {
    setCalendarOpen(true);
  };

  const handleClose = () => {
    setCalendarOpen(false);
  };

  const tableHeaders = ['사용 동아리', '대표자', '사용 시간'];
  const reservationData = [
    ['WINK', '박정명', '19:00 ~ 20:00'],
    ['WINK', '박정명', '12:00 ~ 18:00'],
    ['WINK', '박정명', '17:00 ~ 23:00'],
  ];

  const DatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
    <style.CustomDatePicker>
      <span style={{ marginRight: 'auto' }}>{value ? value : '날짜'}</span>
      <img
        src={
          calendarOpen
            ? process.env.PUBLIC_URL + '/Images/Dropdown/upArrow.svg'
            : process.env.PUBLIC_URL + '/Images/Dropdown/downArrow.svg'
        }
        alt="캘린더 드롭다운"
        ref={ref}
        onClick={onClick}
        style={{ marginTop: '3px' }}
      />
    </style.CustomDatePicker>
  ));

  return (
    <ThemeProvider theme={props.club === 'wink' ? themeWink : themeFoscar}>
      <GlobalStyle />
      <Header title={title} />
      <style.TableContainer>
        <style.Icon>
          <img
            src={process.env.PUBLIC_URL + '/Images/MeetingTable/foscarIcon.svg'}
            alt="포스카 로고"
          />
          <img
            src={process.env.PUBLIC_URL + '/Images/MeetingTable/winkIcon.svg'}
            alt="윙크 로고"
          />
        </style.Icon>
        {reservationData.length > 0 ? (
          <>
            <DatePicker
              selected={selectedDate}
              onChange={handleDate}
              onCalendarOpen={handleOpen}
              onCalendarClose={handleClose}
              dateFormat="yyyy. MM. dd"
              showOn="button"
              minDate={new Date()}
              onFocus={(e) => (e.target.readOnly = true)}
              locale={ko}
              customInput={<DatePickerInput />}
            />
            <style.TableWrapper>
              <style.Table>
                <thead>
                  <tr>
                    {tableHeaders.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {reservationData.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                      {rowData.map((data, colIndex) => (
                        <td key={colIndex}>{data}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </style.Table>
            </style.TableWrapper>
          </>
        ) : (
          <style.NoStatus>
            <span>예약 현황이 없습니다.</span>
          </style.NoStatus>
        )}
      </style.TableContainer>
      <Footer title={title} />
    </ThemeProvider>
  );
}