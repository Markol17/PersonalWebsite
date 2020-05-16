import React, { useEffect } from 'react';

let isSnaped = false;

function Cursor() {
  function cursor(e) {
    let mouseCursor = document.querySelector('.cursor');
    let navLinks = document.querySelectorAll('.link');
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

    navLinks.forEach((link) => {
      link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow');
      });
      link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow');
      });
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', cursor);
  });

  return <div className='cursor'></div>;
}

export default Cursor;
