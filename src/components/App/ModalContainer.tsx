import * as React   from 'react';

import ShotsStore, {
  IShotsStoreState
}                      from '../../stores/ShotsStore';
import { EAppActions } from '../../actions/ShotsActions';
import AppDispatcher   from '../../dispatchers/AppDispatcher';
import { Backdrop }    from '../Backdrop/Backdrop';
import { Modal }       from '../Modal/Modal';

interface IModalContainerState {
  card?: IShotsStoreState;
}

export class ModalContainer extends React.PureComponent<{}, IModalContainerState> {
  subscription: string;

  state: IModalContainerState = {};

  componentDidMount() {
    this.subscription = AppDispatcher.register(({action, data}) => {
      switch (action) {
        case EAppActions.pickCard:
          return this.setState({
            card: ShotsStore.getState().find((card) => card.id === data.id)
          });
        case EAppActions.kickCard:
          return this.setState({card: undefined});
        default:
          return;
      }
    });
  }

  componentWillUnmount() {
    AppDispatcher.unregister(this.subscription);
  }

  render() {
    const { card } = this.state;
    return(
      <div>
        {card && <Backdrop/>}
        {card && <Modal {...card} />}
      </div>
    );
  }
}