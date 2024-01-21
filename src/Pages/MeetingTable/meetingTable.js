import React, { useState } from 'react';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import * as style from './styles';

export default function MeetingTable() {
  const title = '회의 테이블 배정';

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDate = (date) => {
    setSelectedDate(date);
  };

  const tableHeaders = ['사용 동아리', '대표자', '사용 시간'];
  const reservationData = [
    ['WINK', '박정명', '19:00 ~ 20:00'],
    ['WINK', '박정명', '12:00 ~ 18:00'],
    ['WINK', '박정명', '17:00 ~ 23:00'],
  ];

  return (
    <>
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
        <style.CustomDatePicker
          selected={selectedDate}
          onChange={handleDate}
          dateFormat="yyyy. MM. dd"
          showOn="button"
          minDate={new Date()}
          placeholderText="날짜 선택"
        />
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
      </style.TableContainer>
      <Footer title={title} />
    </>
  );
}
