import * as style from './styles';
import { useState } from 'react';
import SeatModal from '../Modal/SeatModal/seatModal';

export default function FoscarSeat(props) {
  // const [state, setState] = useState(False);

  const club = 'foscar';

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

  return (
    <>
      {props.club === 'foscar' ? (
        <style.GroupContainer>
          <style.SeatContainer>
            {foscarSeatDT1.map((item) => {
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
            {foscarSeatDT2.map((item) => {
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
