import React, { useState, useRef, useEffect } from 'react';
import Content from './Content';
import * as style from './styles';

export default function Dropdown(props) {
  const [state, setState] = useState(false);
  const dropdownRef = useRef(null);

  const handleDocumentClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setState(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleContentClick = () => {
    // Content가 클릭되면 Dropdown에 표시하도록 state를 업데이트
    setState(true);
  };

  return (
    <style.Dropdown
      ref={dropdownRef}
      width={`${props.width}px`}
      height={`${props.height}px`}
    >
      <ul onClick={() => setState(!state)}>
        <img
          src={
            state
              ? process.env.PUBLIC_URL + '/Images/Dropdown/UpArrow.svg'
              : process.env.PUBLIC_URL + '/Images/Dropdown/DownArrow.svg'
          }
          alt={state ? 'Up Arrow' : 'Down Arrow'}
        />
        {state && <Content onClick={handleContentClick} />}{' '}
        {/* Content에 onClick 함수 전달 */}
      </ul>
    </style.Dropdown>
  );
}
