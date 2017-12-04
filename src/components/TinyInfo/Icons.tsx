import * as React from 'react';
import * as styles from './styles/TinyInfo.less';

export interface IIConsProps {
  content: string | number;
  icon: string;
}

export function Icons(props: IIConsProps) {
  return(
    <span className={styles.icon}>
      {props.icon && <i className={`fa fa-${props.icon}`} aria-hidden="true"/>}
      <span className={styles.content}>{props.content}</span>
    </span>
  );
}