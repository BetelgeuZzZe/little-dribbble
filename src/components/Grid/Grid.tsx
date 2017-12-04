import * as React from 'react';
import * as styles from './styles/Grid.less';

export function Grid(props: {children: any}) {
  return(
    <div className={styles.grid}>
      {props.children}
    </div>
  );
}
export function Column(props: {children: any}) {
  return(
    <div className={styles.column}>
      {props.children}
    </div>
  );
}