import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import Provider from "react-redux/lib/components/Provider";

const routerBaseName = process.env.PUBLIC_URL;

ReactDOM.render(
 <Provider store={store}>
     {/*<Router basename={routerBaseName}>*/}
         < App />
     {/*</Router>*/}
 </Provider>,
  document.getElementById('root')
);

reportWebVitals();
