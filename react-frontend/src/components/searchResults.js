import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

export default class SearchResults extends Component {

    render(){
        // Before render
        return(
            <div className="container-fluid">
                <h1>Search Results</h1>
                <div className="Search-Results-Top">
                    <div className="Search-Bar"></div>
                    <div className="Profile-Icon"></div>
                </div>
                <div className="Search-Results-Bottom">
                    <div className="Image-Grid"></div>
                </div>
            </div>
        )
    }
}