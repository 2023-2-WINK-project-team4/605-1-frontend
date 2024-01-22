import * as style from './styles';
import { useState } from 'react';
import SeatModal from '../Modal/SeatModal/seatModal';

export default function WinkSeat(props) {
  // const [state, setState] = useState(False);

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

  return (
    <>
      {props.club === 'wink' ? (
        <style.GroupContainer>
          <style.SeatContainer>
            {winkSeatDT1.map((item) => {
              return (
                <style.UseableSeat club={club} /*onClick={setState(True)}*/>
                  <span>{item.number}</span>
                  {item.monitor === 'true' && (
                    <img
                      src={
                        process.env.PUBLIC_URL + '/Images/Seat/monitorIcon.svg'
                      }
                      alt="Monitor Icon"
                    />
                  )}
                </style.UseableSeat>
              );
            })}
          </style.SeatContainer>
          <style.SeatContainer>
            {winkSeatDT2.map((item) => {
              return (
                <style.UseableSeat club={club} /*onClick={setState(True)}*/>
                  <span>{item.number}</span>
                  {item.monitor === 'true' && (
                    <img
                      src={
                        process.env.PUBLIC_URL + '/Images/Seat/monitorIcon.svg'
                      }
                      alt="Monitor Icon"
                    />
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
