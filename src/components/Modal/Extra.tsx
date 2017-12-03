import * as React from 'react';

export function Extra(props: any) {
  return(
    <div className="modal__extra">
      {props.children}
    </div>
  );
}