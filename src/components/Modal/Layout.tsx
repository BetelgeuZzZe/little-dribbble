import * as React from 'react';
import ShotsActions from '../../actions/ShotsActions';

export class Layout extends React.PureComponent {
  render() {
    return(
      <div className="modal">
        <div className="modal__close" onClick={ShotsActions.kickCard}>
          <img src="/exit.png" alt="close"/>
        </div>
        {this.props.children}
      </div>
    );
  }
}