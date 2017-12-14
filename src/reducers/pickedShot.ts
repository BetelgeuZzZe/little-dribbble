import { ICardAction } from '../actions';
import { ECardActions } from '../actions/card';

export function pickedShot(state: string = '', action: ICardAction) {
  switch (action.type) {
    case ECardActions.pickCard:
      return action.id;
    case ECardActions.kickCard:
      return '';
    default:
      return state;
  }
}