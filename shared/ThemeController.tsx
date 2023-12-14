'use client';

import React from 'react';

const ThemeController = () => {
  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.setAttribute(
      'data-theme',
      e.target.checked ? 'dark' : 'light'
    );
  };

  return (
    <input
      type="checkbox"
      value="synthwave"
      className="checkbox theme-controller"
      onChange={changeTheme}
    />
  );
};

export default ThemeController;
