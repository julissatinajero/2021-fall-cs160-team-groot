import Axios from 'axios';
import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import HomeMasthead from './components/homeMasthead';

class App extends Component {
    render(){
        return(
            <HomeMasthead/>
        )
    }
}

export default App;