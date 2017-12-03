import * as React from 'react';

export function Header(props: {content?: string, children?: any}) {
  return(
    <div className="modal__header">
      {props.content || props.children}
    </div>
  );
}