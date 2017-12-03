import * as React from 'react';

import { ModalContainer } from './components/App/ModalContainer';
import CardsContainer     from './components/App/CardsContainer';
import TopBar             from './components/TopBar';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar/>
        <CardsContainer/>
        <ModalContainer/>
      </div>
    );
  }
}

export default App;
