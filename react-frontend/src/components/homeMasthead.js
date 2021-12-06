import React, {Component, useState, useEffect } from "react";
import {Row, Col} from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom";
import '../css/home.css';
import head from '../resources/StockFood.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const HomeMasthead = (props) => {
    // Extra
    const [searchTerm, setSearchTerm] = useState("");
    const [wordTerm, setWordTerm] = useState("");
    const [redirectResults, setRedirectResults] = useState({ redirect: null });

    // Redirects; TODO: Turn the buttons into links to remove these functions
    const redirectSignin = () => {
        props.history.push("/sign-in")
    };

    const redirectSignup = () =>{
        props.history.push("/sign-up")
    };

    // This will need to be changed when incorporating search terms
    const redirectSearch = () =>{
        setRedirectResults({ redirect: 1});
        //props.history.push("/search")
    };

    const setData = (val) => {
        setSearchTerm(val.target.value);
        setWordTerm(val.target.value);
    }

    const redirectProfile = () =>{
        props.history.push("/profile")
    }

    const signOutHandler = () => {
        localStorage.removeItem("jwt");
        localStorage.removeItem("username");
        props.history.push("/");
        alert("User successfully signed out.");
    }

    // Redirect Results
    if(redirectResults.redirect != null){
        return <Redirect push to={{
            pathname: "/search",
            state: { term: searchTerm }
        }}/>
    }
    
    return(
        <div className="container-fluid">
            <div className="d-flex align-items-center padding-fix row">
                <div className="col-7">
                    <div className="mb-5">
                        <h1 className="title ff-font d-flex justify-content-center">Food Finder</h1>
                        <h2 className="d-flex justify-content-center">Start finding recipes now</h2>
                        <div className="d-flex justify-content-center my-3">
                            <input type="text" className="searchBar py-1" onChange={setData} value={wordTerm}/>
                            <button className="buttonSearch col-1 py-1" onClick={redirectSearch}><FontAwesomeIcon icon={faSearch}/></button>
                        </div>
                        <div className="row d-flex justify-content-center">
                                {
                                    (localStorage.getItem("jwt") === null) ?
                                    <button className="buttonHome col-4 mx-2" onClick={redirectSignin}>Sign-In</button> :
                                    ( <div className="row d-flex justify-content-center">
                                            <button className="buttonHome col-4 mx-2" onClick={redirectProfile}>Profile</button>
                                            <button className="buttonHome col-4 mx-2" onClick={signOutHandler}>Sign-Out</button>
                                    </div>)
                                }
                                {
                                    (localStorage.getItem("jwt") === null) ?
                                    <button className="buttonHome col-4 mx-2" onClick={redirectSignup}>Sign-Up</button> :
                                    null
                                }
                            </div>                       
                        {/**<div className="row d-flex justify-content-center">*/}
                            {/**<button className="buttonHome col-4 mx-2" onClick={redirectSignin}>Sign-In</button>
                            <button className="buttonHome col-4 mx-2" onClick={redirectSignup}>Sign-Up</button>*/}
                        {/**</div>*/}
                    </div>
                </div>
                <div className="col-5 px-0">
                    <img className="img-fluid" src={head}/>
                </div>
            </div>
        </div>
    )
}
export default HomeMasthead