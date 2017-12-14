import * as React  from 'react';

import { connect, Dispatch } from 'react-redux';
import { ICardAction } from '../../actions';
import { IAppState } from '../../reducers/index';
import * as styles   from './styles/Backdrop.less';
import { kickCard }  from '../../actions/card';

function BackdropComponent({onClick, visible}: {visible: boolean, onClick(): void}) {
  if (visible) {
    return (
      <div
        className={styles.backdrop}
        onClick={onClick}
      />
    );
  } else {
    return null;
  }
}

function mapStateToProps({pickedShot}: IAppState) {
  return {
    visible: !!pickedShot
  };
}

function mapDispatchToProps(dispatch: Dispatch<ICardAction>) {
  return {
    onClick: () => dispatch(kickCard())
  };
}

export const Backdrop = connect(mapStateToProps, mapDispatchToProps)(BackdropComponent);