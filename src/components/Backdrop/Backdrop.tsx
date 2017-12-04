import * as React   from 'react';
import ShotsActions from '../../actions/ShotsActions';
import * as styles from './styles/Backdrop.less';

export function Backdrop() {
  return (
    <div
      className={styles.backdrop}
      onClick={ShotsActions.kickCard}
    />
  );
}