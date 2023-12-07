import React from 'react';

type ButtonIconProps = {
  svg: JSX.Element;
  onClick: () => void;
};

const ButtonIcon = ({ svg, onClick }: ButtonIconProps) => {
  return (
    <button type="button" onClick={onClick}>
      {svg}
    </button>
  );
};

export default ButtonIcon;
