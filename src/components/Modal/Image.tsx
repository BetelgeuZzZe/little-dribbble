import * as React from 'react';

export function Image({src}: {src: string}) {
  return(
    <div className="modal__image">
      <img src={src} alt="Preview"/>
    </div>
  );
}