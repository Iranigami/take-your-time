import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './redux/rootReducer';
import './style.css'
import App from './App';

const rootElement = document.getElementById('app');
if (rootElement) {
  const root = createRoot(rootElement);
  const store = configureStore({
    reducer: rootReducer
  });

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
