import * as React from 'react';

export interface IIConsProps {
  content: string | number;
  icon: string;
}

export function Icons(props: IIConsProps) {
  return(
    <span className="tiny_info__icon">
      {props.icon && <i className={`fa fa-${props.icon}`} aria-hidden="true"/>}
      <span className="tiny_info__content">{props.content}</span>
    </span>
  );
}