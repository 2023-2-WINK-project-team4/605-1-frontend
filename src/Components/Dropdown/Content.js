import React from 'react';

export default function Content({ onClick }) {
  return (
    <div onClick={onClick}>
      <li style={{ listStyleType: 'none' }}>WINK</li>
      <li style={{ listStyleType: 'none' }}>FOSCAR</li>
    </div>
  );
}
