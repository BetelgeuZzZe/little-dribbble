import * as React from 'react';
import * as styles from './styles/Modal.less';

export function Flex({children}: {children: React.ReactNode}) {
 return(
   <div className={styles.modal_flex}>
     {children}
   </div>
 );
}

export function Row({children}: {children: React.ReactNode}) {
  return(
    <div className={styles.row}>
      {children}
    </div>
  );
}