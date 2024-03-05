import * as style from './styles';
import { useState, useEffect } from 'react';
import SeatModal from '../Modal/SeatModal/seatModal';
import axios from 'axios';

export default function FoscarSeat(props) {
  const [mySeatData, setMySeatData] = useState([]);
  const club = 'foscar';
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/seat/${club}`, { token })
      .then((res) => {
        console.log('res : ', res);
        setMySeatData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // const MySeatData = [
  //   {
  //     seatNumber: 1,
  //     seatStatus: 'using',
  //     studentId: 20213100,
  //     userName: '홍승현',
  //     userProfileUrl:
  //       'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
  //     startTime: '2024-02-12T12:41:23.521Z',
  //   },
  //   {
  //     seatNumber: 2,
  //     seatStatus: 'using',
  //     studentId: 20201111,
  //     userName: '류건',
  //     userProfileUrl:
  //       'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
  //     startTime: '2024-02-12T12:41:23.521Z',
  //   },
  //   {
  //     seatNumber: 3,
  //     seatStatus: 'notUsed',
  //     studentId: null,
  //     userName: null,
  //     userProfileUrl: null,
  //     startTime: null,
  //   },
  //   {
  //     seatNumber: 4,
  //     seatStatus: 'notUsed',
  //     studentId: null,
  //     userName: null,
  //     userProfileUrl: null,
  //     startTime: null,
  //   },
  //   {
  //     seatNumber: 5,
  //     seatStatus: 'notUsed',
  //     studentId: null,
  //     userName: null,
  //     userProfileUrl: null,
  //     startTime: null,
  //   },
  //   {
  //     seatNumber: 6,
  //     seatStatus: 'notUsed',
  //     studentId: null,
  //     userName: null,
  //     userProfileUrl: null,
  //     startTime: null,
  //   },
  //   {
  //     seatNumber: 7,
  //     seatStatus: 'notUsed',
  //     studentId: null,
  //     userName: null,
  //     userProfileUrl: null,
  //     startTime: null,
  //   },
  //   {
  //     seatNumber: 8,
  //     seatStatus: 'notUsed',
  //     studentId: null,
  //     userName: null,
  //     userProfileUrl: null,
  //     startTime: null,
  //   },
  // ];

  const foscarSeatData = [
    { club: club, monitor: 'true', number: '1' },
    { club: club, monitor: 'true', number: '2' },
    { club: club, monitor: 'true', number: '3' },
    { club: club, monitor: 'true', number: '4' },
    { club: club, monitor: 'false', number: '5' },
    { club: club, monitor: 'false', number: '6' },
    { club: club, monitor: 'true', number: '7' },
    { club: club, monitor: 'false', number: '8' },
  ];

  const foscarSeatDT1 = foscarSeatData.slice(0, 4);
  const foscarSeatDT2 = foscarSeatData.slice(4, 8);

  // const handleSeatClick = (seatNumber, seatStatus) => {
  //   if (seatStatus === 'notUsed') {
  //     setSelectedSeat(seatNumber);
  //     setIsModalOpen(true); //사용하지 않는 좌석만 열리게 함
  //   }
  // };

  return (
    <>
      {props.club === 'foscar' ? (
        <style.GroupContainer>
          <style.SeatContainer>
            {foscarSeatDT1.map((item) => {
              return (
                <>
                  <SeatModal
                    club="wink"
                    myReservationInfo={{
                      seatNumber: 1,
                      seatStatus: 'using',
                      studentId: 20213100,
                      userName: '홍승현',
                      userProfileUrl:
                        'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
                      startTime: '2024-02-12T12:41:23.521Z',
                    }}
                    tryToSeat={item.number}
                    children={
                      <div>
                        <style.UseableSeat club={club} key={item.number}>
                          <span>{item.number}</span>
                          {item.monitor === 'true' && (
                            <>
                              <style.Icon
                                src={
                                  process.env.PUBLIC_URL +
                                  '/Images/Seat/monitorIcon.svg'
                                }
                                alt="Monitor Icon"
                              />
                            </>
                          )}
                          {mySeatData[item.number - 1]?.seatStatus ===
                          'using' ? (
                            <style.ProfilePic
                              src={mySeatData[item.number - 1]?.userProfileUrl}
                              alt="profile pic"
                            />
                          ) : null}
                        </style.UseableSeat>
                      </div>
                    }
                  />
                </>
              );
            })}
          </style.SeatContainer>
          <style.SeatContainer>
            {foscarSeatDT2.map((item) => {
              return (
                <SeatModal
                  club="wink"
                  myReservationInfo={{
                    seatNumber: 1,
                    seatStatus: 'using',
                    studentId: 20213100,
                    userName: '홍승현',
                    userProfileUrl:
                      'https://t3.ftcdn.net/jpg/04/73/67/64/240_F_473676400_VyH1ey15WGBA6L9MILjha6thtMVfuRh2.jpg',
                    startTime: '2024-02-12T12:41:23.521Z',
                  }}
                  tryToSeat={item.number}
                  children={
                    <div>
                      <style.UseableSeat
                        club={club}
                        key={item.number}
                        // onClick={() =>
                        //   handleSeatClick(item.seatNumber, item.seatStatus)
                        // }
                        // seatStatus={item.seatStatus}
                      >
                        <span>{item.number}</span>
                        {item.monitor === 'true' && (
                          <>
                            <style.Icon
                              src={
                                process.env.PUBLIC_URL +
                                '/Images/Seat/monitorIcon.svg'
                              }
                              alt="Monitor Icon"
                            />
                          </>
                          /// 여기까지
                        )}
                        {mySeatData[item.number - 1]?.seatStatus === 'using' ? (
                          <style.ProfilePic
                            src={mySeatData[item.number - 1]?.userProfileUrl}
                            alt="profile pic"
                          />
                        ) : null}
                      </style.UseableSeat>
                    </div>
                  }
                />
              );
            })}
          </style.SeatContainer>
        </style.GroupContainer>
      ) : (
        <style.GroupContainer>
          <style.SeatContainer>
            {foscarSeatDT1.map(() => {
              return <style.BannedSeat />;
            })}
          </style.SeatContainer>
          <style.SeatContainer>
            {foscarSeatDT2.map(() => {
              return <style.BannedSeat />;
            })}
          </style.SeatContainer>
        </style.GroupContainer>
      )}
    </>
  );
}
