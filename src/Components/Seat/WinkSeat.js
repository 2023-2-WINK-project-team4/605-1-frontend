import * as style from './styles';
import { useState } from 'react';
import SeatModal from '../Modal/SeatModal/seatModal';

export default function WinkSeat(props) {
  // const [state, setState] = useState(False);

  return (
    <>
      {props.club === 'wink' ? (
        <style.UseableSeatWink /*onClick={setState(True)}*/>
          <span>{props.number}</span>
          {props.monitor === 'true' ? (
            <img
              src={process.env.PUBLIC_URL + '/Images/Seat/monitorIcon.svg'}
              alt="Monitor Icon"
            />
          ) : null}
        </style.UseableSeatWink>
      ) : (
        <style.BannedSeat />
      )}
    </>
  );
}
