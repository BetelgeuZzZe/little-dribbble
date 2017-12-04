import * as React from 'react';
import * as styles from './styles/Modal.less';

export function Header(props: {content?: string, children?: any}) {
  return(
    <div className={styles.header}>
      {props.content || props.children}
    </div>
  );
}