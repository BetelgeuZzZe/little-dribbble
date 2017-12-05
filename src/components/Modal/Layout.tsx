import * as React from 'react';
import ShotsActions from '../../actions/ShotsActions';
import * as styles from './styles/Modal.less';

export class Layout extends React.PureComponent {
  render() {
    return(
      <div className={styles.modal} style={{top: window.scrollY + 35}}>
        <div className={styles.close} onClick={ShotsActions.kickCard}>
          <img src="/exit.png" alt="close"/>
        </div>
        {this.props.children}
      </div>
    );
  }
}