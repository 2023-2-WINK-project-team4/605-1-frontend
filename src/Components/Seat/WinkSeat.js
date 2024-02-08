import * as style from './styles';
import { useState } from 'react';
import SeatModal from '../Modal/SeatModal/seatModal';
import axios from 'axios';

export default function WinkSeat(props) {
  useEffect(() => {
    axios
      .get('seat/${props.club}')
      .then((res) => {
        const MySeatData = res;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const club = 'wink';

  const winkSeatData = [
    { club: club, monitor: 'true', number: '1' },
    { club: club, monitor: 'true', number: '2' },
    { club: club, monitor: 'true', number: '3' },
    { club: club, monitor: 'true', number: '4' },
    { club: club, monitor: 'false', number: '5' },
    { club: club, monitor: 'true', number: '6' },
    { club: club, monitor: 'false', number: '7' },
    { club: club, monitor: 'false', number: '8' },
  ];

  const winkSeatDT1 = winkSeatData.slice(0, 4);
  const winkSeatDT2 = winkSeatData.slice(4, 8);

  const handleSeatClick = (seatNumber, seatStatus) => {
    if (seatStatus === 'notUsed') {
      setSelectedSeat(seatNumber);
      setIsModalOpen(true); //사용하지 않는 좌석만 열리게 함
    }
  };

  return (
    <>
      {props.club === 'wink' ? (
        <style.GroupContainer>
          <style.SeatContainer>
            {winkSeatDT1.map((item) => {
              return (
                <style.UseableSeat
                  club={club}
                  key={item.number}
                  // onClick={() =>
                  //   handleSeatClick(item.seatNumber, item.seatStatus)
                  // }문제이스
                >
                  <span>{item.number}</span>
                  {item.monitor === 'true' && (
                    <>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/Images/Seat/monitorIcon.svg'
                        }
                        alt="Monitor Icon"
                      />
                      {MySeatData[item.number - 1].seatStatus === 'using' ? (
                        <style.ProfilePic
                          src={MySeatdata[item.number - 1].userProfileUrl}
                          alt="profile pic"
                        />
                      ) : null}
                    </>
                  )}
                </style.UseableSeat>
              );
            })}
          </style.SeatContainer>
          <style.SeatContainer>
            {winkSeatDT2.map((item) => {
              return (
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
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/Images/Seat/monitorIcon.svg'
                        }
                        alt="Monitor Icon"
                      />
                      {MySeatData[item.number - 1].seatStatus === 'using' ? (
                        <style.ProfilePic
                          src={MySeatdata[item.number - 1].userProfileUrl}
                          alt="profile pic"
                        />
                      ) : null}
                    </>
                  )}
                </style.UseableSeat>
              );
            })}
          </style.SeatContainer>
        </style.GroupContainer>
      ) : (
        <style.GroupContainer>
          <style.SeatContainer>
            {winkSeatDT1.map(() => {
              return <style.BannedSeat />;
            })}
          </style.SeatContainer>
          <style.SeatContainer>
            {winkSeatDT2.map(() => {
              return <style.BannedSeat />;
            })}
          </style.SeatContainer>
        </style.GroupContainer>
      )}
    </>
  );
}
