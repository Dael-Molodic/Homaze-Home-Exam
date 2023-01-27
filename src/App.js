/* LIBRAIRIES */
import React from 'react';
import { Provider } from 'react-redux';

/*  COMPONENTS */
import Dashboard from './pages/Dashboard';

/*  Store */
import store from './redux/store';

/*  Style */
import "./styles/GlobalStyle.css";

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <Dashboard/>
      </div>
    </Provider>
  );
}

export default App;
