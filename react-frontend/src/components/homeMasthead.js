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
            <div className="container-fluid">
                <div className="d-flex align-items-center row">
                    <div className="col-7">
                        <div className="align-baseline">
                            <h1 className="title">Food Finder</h1>
                            <h2>Start finding recipes now</h2>
                            <input type="text" className="my-3"/>
                            <div className="row">
                                <button className="buttonHome col-4 mx-2">Sign-In</button>
                                <button className="buttonHome col-4 mx-2">Sign-Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 px-0">
                        <img className="img-fluid" src={head}/>
                    </div>
                </div>
            </div>
        )
    }
}