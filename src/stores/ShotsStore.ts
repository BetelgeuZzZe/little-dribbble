import AppDispatcher, { IDispatcherPayload } from '../dispatchers/AppDispatcher';
import * as FluxReduceStore                  from 'flux/lib/FluxReduceStore';
import { EAppActions }                       from '../actions/ShotsActions';

export interface IShotsStoreState {
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

export class ShotsStore extends FluxReduceStore<Array<IShotsStoreState>, IDispatcherPayload> {

  getInitialState() {
    return [];
  }

  reduce(state: Array<IShotsStoreState>, {action, data}: IDispatcherPayload) {
    switch (action) {
      case EAppActions.fetchShots:
        return state.concat(data);
      default:
        return state;
    }
  }
}

export default new ShotsStore(AppDispatcher);