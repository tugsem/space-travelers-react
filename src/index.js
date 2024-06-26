import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import './bganimation.css';
import App from './App';
import Header from './components/Header';
import store from './Redux/ConfigureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg" />
    <div className="app">
      <Router>
        <Provider store={store}>
          <Header />
          <App />
        </Provider>
      </Router>
    </div>
  </React.StrictMode>,
);
