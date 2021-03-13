import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store, {persister} from "./Redux/store";
// import reportWebVitals from './reportWebVitals';
import history from "./history/history";
import ModalManager from "./Components/ModalManager/ModalManager";
// provide local storage access to app
import { PersistGate } from "redux-persist/integration/react";


ReactDOM.render(
  <React.StrictMode>
    {/* pass our own history which is created in history.js */}
    <Router history={history}>
      <Provider store={store}>
        {/* provide local storage access to app */}
      <PersistGate persistor = {persister}>     
      <ModalManager/>
        <App />
      </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
