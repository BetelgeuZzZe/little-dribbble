import { getShots } from '../utils/utils';
import { Dispatch } from 'redux';
import { IShot }    from '../reducers/shots';

export enum EShotsActions {
  fetchShots = 10,
  fetchShotsSucceed,
  fetchShotsError
}

export interface IShotsAction {
  type: EShotsActions;
  shots?: Array<IShot>;
}

function fetchShots(): IShotsAction {
  return {
    type: EShotsActions.fetchShots,
  };
}

export function fetchShotsSucceed(shots: Array<IShot>): IShotsAction {
  return {
    type: EShotsActions.fetchShotsSucceed,
    shots
  };
}

export function fetchShotsError(): IShotsAction {
  return {
    type: EShotsActions.fetchShotsError
  };
}

export function fetchShotsRequest(page?: number) {
  return function(dispatch: Dispatch<IShotsAction>) {
    dispatch(fetchShots());

    return getShots(page)
      .then((shots: Array<IShot>) => dispatch(fetchShotsSucceed(shots)))
      .catch(() => dispatch(fetchShotsError()));
  };
}