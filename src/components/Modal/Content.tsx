import * as React from 'react';

export function Content(props: {content?: string, children?: any}) {
  return(
    <div className="modal__content">
      <div dangerouslySetInnerHTML={{__html: props.content!}}/>
    </div>
  );
}