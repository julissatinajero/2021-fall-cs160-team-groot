import { Component, useState } from "react";
import '../css/searchResults.css';
import { Row, Col, Form, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import dmmydata from '../dummyData';    // Delete this import of the json file later
import RecipeCard from './recipeCard';

const SearchResults = () => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <div className="outer-container">
                <Row class="justify-content-md-center">
                    <div class="col-3">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <Form.Label className="labelTitles">Ingredients</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Lettuce"
                                            name="ingredient"
                                            type={type}
                                            id={`inline-${type}-1`} />
                                        <Form.Check
                                            inline
                                            label="Tomatoes"
                                            name="ingredient"
                                            type={type}
                                            id={`inline-${type}-2`} />
                                        <Form.Check
                                            inline
                                            label="Garlic"
                                            name="ingredient"
                                            type={type}
                                            id={`inline-${type}-3`} />
                                    </div>
                                ))}
                            </li>
                            <li class="list-group-item">
                                <Form.Label className="labelTitles">Diet</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Pescatarian"
                                            name="diet"
                                            type={type}
                                            id={`inline-${type}-1`} />
                                        <Form.Check
                                            inline
                                            label="Vegetarian"
                                            name="diet"
                                            type={type}
                                            id={`inline-${type}-2`} />
                                        <Form.Check
                                            inline
                                            label="Vegan"
                                            name="diet"
                                            type={type}
                                            id={`inline-${type}-3`} />
                                    </div>
                                ))}
                            </li>
                            <li class="list-group-item">
                                <Form.Label className="labelTitles">Restrictions</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="No Dairy"
                                            name="restriction"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No Peanuts"
                                            name="restriction"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No Egg"
                                            name="restriction"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}
                            </li>
                        </ul>
                    </div>
                    <div class="col-8">
                        <Card className="recipeResults">
                            <h1 className="searchTitle">Search Results</h1>
                            <Row>
                                {/* Whatever the user types in the search bar will be set in setSearch by onChange */}
                                <input 
                                    type="text" 
                                    className="searchBar py-1" 
                                    onChange={(event) => {setSearch(event.target.value);}} />
                                <button className="buttonSearchResult col-1 py-1">
                                    <Link to="/search"><FontAwesomeIcon icon={faSearch} color="white" /></Link>
                                </button>
                            </Row>
                            <Row>
                                {/* {dmmydata.filter((data) => {
                                    //If there's an empty search, display all recipe cards
                                    if (search == "") {
                                        return data;
                                    } else if (data.ingredients.
                                        toLowerCase().
                                        includes(search.toLowerCase())) {
                                        return data;
                                    }
                                }).map((data, key) => {
                                    return (
                                        <Col xs={3} className="mb-2" key={'${data.id}'}>
                                            <RecipeCard data={data} />
                                        </Col>
                                    );
                                })} */}
                            
                                { dmmydata.map(data => ( 
                                    <Col xs={3} className="mb-2" key={'${data.id}'}>
                                        <RecipeCard data={data} />
                                    </Col>
                                ))}  
                            </Row>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default SearchResults

