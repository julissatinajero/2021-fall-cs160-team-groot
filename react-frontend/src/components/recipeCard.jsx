import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Card} from 'react-bootstrap'
import { Redirect } from "react-router";

export function RecipeCard({ data }) {
    return(
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={"https://cdn.pixabay.com/photo/2020/10/19/01/41/apples-5666483_1280.png"} />
            <Card.Body className="d-flex flex-column"> 
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold text-center">{data.recipeName}</Card.Title>
                </div>
                <Card.Text style={{fontSize: 15}}>Calorie count: {data.calorieCount}</Card.Text>
                <Card.Text style={{fontSize: 15}}>Prep Time: {data.prepTime} min</Card.Text>
                <Button style={{ backgroundColor: "#68a574", border:"none" }}>View</Button>
            </Card.Body>
        </Card>
    );
} export default RecipeCard;