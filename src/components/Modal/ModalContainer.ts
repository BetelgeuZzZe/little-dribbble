import { IAppState } from '../../reducers/index';
import { kickCard }  from '../../actions/card';
import { connect }   from 'react-redux';
import { Modal }     from './Modal';

const mapStateToProps = ({shots, pickedShot}: IAppState) => {
  return {shot: shots.shots.find(s => s.id === pickedShot)};
};

const mapDispatchToProps = (dispatch) => {
  return {onClose: () => dispatch(kickCard())};
};

export const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);