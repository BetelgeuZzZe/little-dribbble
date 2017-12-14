import * as React from 'react';
import * as styles from './styles/Modal.less';

export function Header(props: {content?: string, children?: React.ReactNode}) {
  return(
    <div className={styles.header}>
      {props.content || props.children}
    </div>
  );
}