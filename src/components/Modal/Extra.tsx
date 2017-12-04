import * as React from 'react';
import * as styles from './styles/Modal.less';

export function Extra(props: any) {
  return(
    <div className={styles.extra}>
      {props.children}
    </div>
  );
}