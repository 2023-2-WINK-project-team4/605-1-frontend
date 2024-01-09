export default function UseableSeat({ style }) {
  // return (
  //   <>
  //     <div
  //       style={{
  //         width: 64,
  //         height: 64,
  //         background: '#FFFFFF',
  //         border: '3px solid #3A70FF',
  //       }}
  //     />
  //   </>
  // );
  return (
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
          width: 64,
          height: 64,
          background: '#FFFFFF',
          border: '3px solid #3A70FF',
          margin: '5px', // 원하는 간격 설정
        }}
      />
      <div
        style={{
          width: 64,
          height: 64,
          background: '#FFFFFF',
          border: '3px solid #3A70FF',
          margin: '5px', // 원하는 간격 설정
        }}
      />
      <div
        style={{
          width: 64,
          height: 64,
          background: '#FFFFFF',
          border: '3px solid #3A70FF',
          margin: '5px', // 원하는 간격 설정
        }}
      />
      <div
        style={{
          width: 64,
          height: 64,
          background: '#FFFFFF',
          border: '3px solid #3A70FF',
          margin: '5px', // 원하는 간격 설정
        }}
      />
    </div>
  );
}
