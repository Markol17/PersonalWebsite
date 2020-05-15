import React, { useEffect } from 'react';

function Cursor() {
  function cursor(e) {
    let mouseCursor = document.querySelector('.cursor');
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    if (
      parseInt(mouseCursor.style.top) === e.pageY &&
      parseInt(mouseCursor.style.left) === e.pageX
    ) {
      window.removeEventListener('mousemove', cursor);
    }
    setTimeout(() => {
      window.addEventListener('mousemove', cursor);
    }, 50);
  }

  useEffect(() => {
    window.addEventListener('mousemove', cursor);
  });

  return <div className='cursor'></div>;
}

export default Cursor;
