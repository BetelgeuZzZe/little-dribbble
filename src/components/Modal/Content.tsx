import * as React from 'react';
import * as styles from './styles/Modal.less';

export function Content(props: {content?: string, children?: any}) {
  return(
    <div className={styles.content}>
      <div dangerouslySetInnerHTML={{__html: props.content!}}/>
    </div>
  );
}