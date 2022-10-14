import React from 'react';
import { createRoot } from "react-dom/client";
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user';
import productsReducer from './features/products';
import settingsReducer from './features/navSettings';



// import Custom Css
import "./assets/css/style.css"




const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    settings: settingsReducer
  },
});



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


root.render(
    <Provider store={store}>
      <App />
    </Provider>
);



