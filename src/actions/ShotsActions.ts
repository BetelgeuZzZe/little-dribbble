import { IShotsStoreState } from '../stores/ShotsStore';
import { fetchShots }       from '../utils/utils';
import AppDispatcher        from '../dispatchers/AppDispatcher';

export enum EAppActions {
  fetchShots,
  pickCard,
  kickCard,
}

export default class ShotsActions {
  /**
   * Fetch Shots from Dribble, accepts page number, default per-page 30
   * @param {number} page
   */
  static fetchShots(page: number = 0) {
    fetchShots(page).then((response: Array<IShotsStoreState>) => {
      AppDispatcher.dispatch({
        action: EAppActions.fetchShots,
        data: response
      });
    });
  }

  /**
   * For modal container control, show modal when picking(basically clicking) on a card;
   * @param {string} id
   */
  static pickCard(id: string) {
    AppDispatcher.dispatch({
      action: EAppActions.pickCard,
      data: {id}
    });
  }

  /**
   * For modal container again, hide modal when kicking(basically close modal);
   */
  static kickCard() {
    AppDispatcher.dispatch({
      action: EAppActions.kickCard,
      data: {}
    });
  }
}