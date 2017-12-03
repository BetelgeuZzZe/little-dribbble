import * as React from 'react';

import ShotsStore, { IShotsStoreState } from '../../stores/ShotsStore';
import { Container }                    from 'flux/utils';
import ShotsActions                     from '../../actions/ShotsActions';
import { Card }                         from '../Card/Card';

interface ICardsContainerState {
  cards: Array<IShotsStoreState>;
}

class Cards extends React.Component<{}, ICardsContainerState> {

  page = 1;

  state = {
    cards: []
  };

  static getStores() {
    return [ShotsStore];
  }

  static calculateState() {
    return {
      cards: ShotsStore.getState()
    };
  }

  componentDidMount() {
    ShotsActions.fetchShots();
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return(
      <div className="grid">
        {this.state.cards.map((card: IShotsStoreState) => (
          <div key={card.id} className="grid__column">
            <Card {...card} onClick={ShotsActions.pickCard}/>
          </div>
        ))}
      </div>
    );
  }

  private handleScroll = () => {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
      this.page = this.page + 1;
      ShotsActions.fetchShots(this.page);
    }
  }
}

export default Container.create<{}>(Cards);