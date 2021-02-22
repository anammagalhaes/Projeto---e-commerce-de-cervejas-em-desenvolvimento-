import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from './componentes/Header';
import Routes from './routes';
import { store } from './store';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
