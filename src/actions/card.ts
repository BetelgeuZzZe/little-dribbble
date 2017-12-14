export enum ECardActions {
  pickCard = 1,
  kickCard,
}

export interface ICardAction {
  type: ECardActions;
  id: string;
}

export function pickCard(id: string): ICardAction {
  return {
    type: ECardActions.pickCard,
    id
  };
}

export function kickCard(): ICardAction {
  return {
    type: ECardActions.kickCard,
    id: ''
  };
}