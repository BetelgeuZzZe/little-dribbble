import * as React from 'react';

import { createStore, applyMiddleware }    from 'redux';
import { ModalContainer }                  from './components/Modal/ModalContainer';
import { createLogger }                    from 'redux-logger';
import thunkMiddleware                     from 'redux-thunk';
import { ShotsList }                       from './components/ShotsList';
import { Provider }                        from 'react-redux';
import AppReducers                         from './reducers';
import Backdrop                            from './components/Backdrop';
import TopBar                              from './components/TopBar';

const store = createStore(
  AppReducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
);

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store} >
        <div>
          <TopBar/>
          <Backdrop/>
          <ShotsList/>
          <ModalContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
