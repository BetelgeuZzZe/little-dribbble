import * as Dispatcher      from 'flux/lib/Dispatcher';
import { EAppActions }      from '../actions/ShotsActions';

export interface IDispatcherPayload {
  action: EAppActions;
  data: any;
}

export default new Dispatcher<IDispatcherPayload>();