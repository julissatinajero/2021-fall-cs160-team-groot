import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import head from '../resources/StockFood.png';
//import 'react-frontend/src/App.css';
//import 'react-frontend/src/index.css';

export default class HomeMasthead extends Component {

    render(){
        // Before render
        return(
            <div className="w-100">
                <div className="row my-auto">
                <div className="col-7">
                    <div className="mx-auto">
                        <h1>Food Finder</h1>
                        <p>Start finding recipes now</p>
                        <input type="text"/>
                    </div>
                </div>
                <div className="col-5">
                    <img className="img-fluid" src={head}/>
                </div>
                </div>
            </div>
        )
    }
}