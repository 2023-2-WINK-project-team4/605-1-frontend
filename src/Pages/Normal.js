import BannedSeat from '../Components/Seat/BannedSeat';
import UseableSeat from '../Components/Seat/UseableSeat';
import Box from '../Components/Box/box';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

export default function Normal() {
  const Style_1 = {
    marginRight: '25px',
    marginBottom: '25px',
    marginLeft: '55px',
    marginTop: '53px',
  };
  const Style_2 = {
    marginLeft: '25px',
    marginBottom: '25px',
    marginRight: '55px',
    marginTop: '53px',
  };
  const Style_3 = {
    marginRight: '25px',
    marginTop: '25px',
    marginLeft: '55px',
  };
  const Style_4 = {
    marginLeft: '25px',
    marginTop: '25px',
    marginRight: '55px',
  };
  return (
    <>
      <Header title="일반 좌석 배정" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: 480,
        }}
      >
        <BannedSeat style={Style_1} />
        <UseableSeat style={Style_2} />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: 480,
        }}
      >
        <BannedSeat style={Style_3} />
        <UseableSeat style={Style_4} />
      </div>
      <Box
        width="351"
        height="167"
        borderColor="#3A70FF"
        borderRadius="10"
        content="일단 \n 임시"
      />
      <Footer title="일반 좌석 배정" />
    </>
  );
}
