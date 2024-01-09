export default function BannedSeat({ style }) {
  return (
    <>
      {/* <div
        style={{
          width: 70,
          height: 70,
          background: '#808080',
          border: 'none', //bannedbox
          // margin: 11,
        }}
      /> */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '160px',
          ...style,
        }}
      >
        <div
          style={{
            width: 70,
            height: 70,
            background: '#808080',
            border: 'none',
            margin: '5px', // 원하는 간격 설정
          }}
        />
        <div
          style={{
            width: 70,
            height: 70,
            background: '#808080',
            border: 'none',
            margin: '5px', // 원하는 간격 설정
          }}
        />
        <div
          style={{
            width: 70,
            height: 70,
            background: '#808080',
            border: 'none',
            margin: '5px', // 원하는 간격 설정
          }}
        />
        <div
          style={{
            width: 70,
            height: 70,
            background: '#808080',
            border: 'none',
            margin: '5px', // 원하는 간격 설정
          }}
        />
      </div>
    </>
  );
}
