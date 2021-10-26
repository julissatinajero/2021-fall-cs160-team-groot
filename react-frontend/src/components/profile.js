import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/profile.css"
import icon from '../resources/StockFood.png';

// To get to profile page, we need the user credentials, otherwise return to the home page

const ProfilePage = (props) => {
    // Redirect if no credentials were placed in

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-3 card pb-3 fixed-left">
                    <img src={icon} alt="Profile Picture" className="card-img-top img-circle"/>
                    <p className="text-center">{props.username ? props.username : "No Profile"}</p>
                    <button className="buttonAccount mb-2">Account Settings</button>
                    {/* Change username/password, Change profile pic, Change Visiblity, Delete Account */}
                    <button className="buttonAccount">Food Preferences</button>
                    {/* Change diet and restrictions that automatically apply */}
                </div>
                <div className="col-lg-9 card pt-3 pb-3">
                    <h3 className="ff-font">Your recipes</h3>
                    {/* List of created recipes */}
                    <div className="row flex-row flex-nowrap scrollable">
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                    </div>
                    <h3 className="ff-font">Favorite recipes</h3>
                    <div className="row flex-row flex-nowrap scrollable">
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                        <div className="col-4"><p>test</p></div>
                    </div>
                    {/* List of favorite recipes */}
                </div>
            </div>
        </div>
    )
}
export default ProfilePage