import * as React from 'react';
import * as styles from './styles/Modal.less';

export function Image({src}: {src: string}) {
  return(
    <div className={styles.image}>
      <img src={src} alt="Preview"/>
    </div>
  );
}