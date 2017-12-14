import * as React from 'react';
import * as styles from './styles/Modal.less';

export interface ILayoutProps {
  children?: React.ReactNode;
  onCloseClick?(): void;
}

export function Layout(props: ILayoutProps) {
  return(
    <div className={styles.modal} style={{top: window.scrollY + 35}}>
      <div className={styles.close} onClick={props.onCloseClick}>
        <img src="/exit.png" alt="close"/>
      </div>
      {props.children}
    </div>
  );
}
