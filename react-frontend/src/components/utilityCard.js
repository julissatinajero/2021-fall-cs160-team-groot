import React, {Component} from "react";
import { withRouter } from "react-router";
import { Button, Card } from 'react-bootstrap';
import "../css/profile.css"

const UtilityCard = (props) => {
    return(
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={"https://cdn.pixabay.com/photo/2020/10/19/01/41/apples-5666483_1280.png"} />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex mb-2 justify-content-between">
                    <Card.Title className="mb-0 font-weight-bold text-center">See More</Card.Title>
                </div>
                <Card.Text className="card-text" style={{fontSize: 15}}>{props.data.message}</Card.Text>
                <Button className="card-footer" style={{ backgroundColor: "#68a574", border:"none" }} onClick={() => {props.history.push("/search")}}>
                    {props.data.locmessage}
                </Button>
            </Card.Body>
        </Card>
    )
}
export default withRouter(UtilityCard)