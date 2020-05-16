import React from 'react';

function NavLink({ position, content }) {
  return (
    <>
      {position === 'top' && <button class='top link'>{content}</button>}
      {position === 'right' && <button class='right link'>{content}</button>}
      {position === 'bottom' && <button class='bottom link'>{content}</button>}
      {position === 'left' && <button class='left link'>{content}</button>}
    </>
  );
}

export default NavLink;
