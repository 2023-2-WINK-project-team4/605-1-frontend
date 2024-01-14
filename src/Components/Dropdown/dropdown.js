import React, { useState, useRef, useEffect } from 'react';
import * as style from './styles';

export default function Dropdown(props) {
  const [view, setView] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef = useRef(null);

  const category = [
    {
      id: 0,
      label: 'WINK',
      value: 'wink',
    },
    {
      id: 1,
      label: 'FOSCAR',
      value: 'foscar',
    },
  ];

  const handleView = () => {
    setView(!view);
  };

  useEffect(() => {
    const outSideClick = (e) => {
      const { target } = e;
      if (
        view &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        setView(false);
      }
    };
    document.addEventListener('mousedown', outSideClick);

    return () => {
      document.removeEventListener('mousedown', outSideClick);
    };
  }, [view]);

  return (
    <style.DropdownContainer
      width={props.width}
      height={view ? props.height * 3 : props.height}
      ref={dropdownRef}
    >
      <style.DropdownHeader>
        <style.selectedValueItem>
          {selectedValue ? selectedValue.label : '동아리'}
        </style.selectedValueItem>
        {view ? (
          <img
            src={process.env.PUBLIC_URL + '/Images/Dropdown/upArrow.svg'}
            onClick={() => handleView()}
          />
        ) : (
          <img
            src={process.env.PUBLIC_URL + '/Images/Dropdown/downArrow.svg'}
            onClick={() => handleView()}
          />
        )}
      </style.DropdownHeader>
      {view && (
        <style.DropdownContent>
          {category.map((item) => (
            <style.DropdownItem
              key={item.id}
              onClick={() => {
                setSelectedValue(item);
                handleView();
              }}
              selectedValue={selectedValue?.id === item.id}
            >
              {item.label}
            </style.DropdownItem>
          ))}
        </style.DropdownContent>
      )}
    </style.DropdownContainer>
  );
}
