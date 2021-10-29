import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomeMasthead from './components/homeMasthead';
import SearchResults from './components/SearchResults';
import SignIn from './components/signIn';
import SignUpPage from './components/SignUpPage';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route path="/search" component={SearchResults}/>
          <Route path="/sign-up" component={SignUpPage}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route path="/" component={HomeMasthead}/>
      </Switch>
    </BrowserRouter>
    {/*<App />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
