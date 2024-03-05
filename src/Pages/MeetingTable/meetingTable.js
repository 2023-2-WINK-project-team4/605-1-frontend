
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



  const DatePickerInput = React.forwardRef(({ value, onClick }, ref) => (
    <style.CustomDatePicker>
      <span style={{ marginRight: 'auto' }}>{value}</span>
      <img
        src={process.env.PUBLIC_URL + '/Images/Dropdown/downArrow.svg'}
        alt="캘린더 드롭다운"
        ref={ref}
        onClick={onClick}
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
              dateFormat="yyyy. MM. dd"
              showOn="button"
              minDate={new Date()}
              placeholderText="날짜 선택"
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
