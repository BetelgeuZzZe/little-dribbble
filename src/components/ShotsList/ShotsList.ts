import { fetchShotsRequest } from '../../actions/shots';
import { connect, Dispatch } from 'react-redux';
import { ICardAction }       from '../../actions/card';
import { IAppState }         from '../../reducers/index';
import { pickCard }          from '../../actions';
import { Shots }             from './Shots';

const mapStateToProps = ({shots: { shots, page}}: IAppState) => {
  return {shots, page};
};

const mapDispatchToProps = (dispatch: Dispatch<ICardAction>) => {
  return {
    onCardClick(id: string) { dispatch(pickCard(id)); },
    onScroll(page: number) { dispatch(fetchShotsRequest(page)); }
  };
};

export const ShotsList = connect(mapStateToProps, mapDispatchToProps)(Shots);