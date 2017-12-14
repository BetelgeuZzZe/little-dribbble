import { EShotsActions, IShotsAction }  from '../actions';
import { assign }       from '../utils/utils';

export interface IShot {
  id: string;
  userName: string;
  teaser: string;
  likes: number;
  views: number;
  created_at: Date;
  title: string;
  hidpi: string;
  avatar: string;
  name: string;
  bio: string;
  location: string;
  description: string;
}

export interface IShotState {
  shots: Array<IShot>;
  fetching: boolean;
  count: number;
  page: number;
}

const initialState: IShotState = {
  shots: [],
  fetching: false,
  count: 0,
  page: 1
};

export function shots(state: IShotState = initialState, action: IShotsAction) {
  const changeState = assign(state);
  switch (action.type) {
    case EShotsActions.fetchShots:
      return changeState({fetching: true});
    case EShotsActions.fetchShotsSucceed:
      return changeState({
        fetching: false,
        shots: state.shots.concat(action.shots!),
        count: action.shots!.length + state.count,
        page: state.page + 1
      });
    case EShotsActions.fetchShotsError:
      return changeState({fetching: false});
    default:
      return state;
  }
}