import { IShotState, shots }  from './shots';
import { combineReducers }    from 'redux';
import { pickedShot } from './pickedShot';

export interface IAppState {
  pickedShot: string;
  shots: IShotState;
}

const AppReducers = combineReducers({
  pickedShot,
  shots
});

export default AppReducers;