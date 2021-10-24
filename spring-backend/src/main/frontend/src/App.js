import Axios from 'axios';
import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomeMasthead from './components/homeMasthead';
import SignUpPage from './components/SignUpPage';
import SearchResults from './components/searchResults';

/**
 * Currently does not work, routing is being handled by the index.js file
 * TODO: Get routing to work here instead of index.js
 */

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/search" component={SearchResults}/>
                    <Route path="/sign-up" component={SignUpPage}/>
                    <Route path="/" component={App}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;