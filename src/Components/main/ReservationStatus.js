export default function ReservationStatus() {
  const [seatStatus, setSeatStatus] = useState('메롱');
  const [isUsing, setIsUsing] = useState(true);

  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppLogo width={100} height={100} />
      <h1 style={{ fontSize: 24 }}>내 좌석 예약현황</h1>
      {isUsing ? ( //좌석을 사용중이면, N번 좌석을 출력하고자 하는 의도, 아니면 좌석 사용안함
        <p style={{ fontSize: 16 }}>{seatStatus}</p>
      ) : (
        <p style={{ fontSize: 16 }}>좌석 사용 안함</p>
      )}
    </div>
  );
}
