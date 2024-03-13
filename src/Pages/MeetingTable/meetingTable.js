import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/header';
import DatePicker from 'react-datepicker';
import { ThemeProvider } from 'styled-components';
import { themeWink, themeFoscar } from '../../Components/Theme/theme';
import { GlobalStyle } from './styles';
import Footer from '../../Components/Footer/footer';
import * as style from './styles';
import ko from 'date-fns/locale/ko';
import axios from 'axios';

export default function MeetingTable(props) {
  const title = '회의 테이블 배정';
  const [tableInfo, setTableInfo] = useState({});

  const token = sessionStorage.getItem('token');

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDate = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false);
  };

  console.log(selectedDate);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const handleOpen = () => {
    setCalendarOpen(true);
  };

  const handleClose = () => {
    setCalendarOpen(false);
  };

  const tableHeaders = ['사용 동아리', '대표자', '사용 시간'];

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

  const getTableInfo = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/table/${selectedDate}`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        setTableInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTableInfo();
  }, [selectedDate]);

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
        {tableInfo.length > 0 ? (
          <>
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
                  {tableInfo.map((item, rowIndex) => (
                    <tr key={rowIndex}>
                      <td key={0}>
                        {item.club === 'wink' ? 'WINK' : 'FOSCAR'}
                      </td>
                      <td key={1}>{item.member}</td>
                      <td key={2}>
                        {item.startTime.toString().substr(11, 5)} ~{' '}
                        {item.endTime.toString().substr(11, 5)}
                      </td>
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
