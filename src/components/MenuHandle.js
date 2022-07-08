import React, { useState, useEffect } from 'react';

function MenuHandle({ type, label }) {

  useEffect(() => {
    const menus = document.querySelectorAll('details.menu');

    {/* click the body, close all menus */}
    document.addEventListener('click', function() {
      menus.forEach(function(element) {
        element.removeAttribute("open");
      });
    });

    {/* except clicking on menus */}
    menus.forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    });
  });

  return (
    <summary className={'menu-handle '+(type === 'icon' ? 'icon' : 'text')}>
      {type === 'icon' ?
        <img src={label} /> :
        <span>{label}</span>
      }
    </summary>
  );
}

export default MenuHandle;
