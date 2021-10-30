import { Component, useState, useEffect } from "react";
import '../css/searchResults.css';
import { Row, Col, Form, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassEnd, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import dmmydata from '../dummyData';    // Delete this import of the json file later
import RecipeCard from './recipeCard';

const SearchResults = () => {
    // Creating custom hook and setting it as empty values
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState(""); // Hook that determines if search bar is empty or not 
    const [dietIsChecked, setDietIsChecked] = useState({
        pescatarian: false,
        vegan: false,
        vegetarian: false
    });
    const [genre, setGenre] = useState([]);
    const [filteredGenre, setFilteredGenre] = useState([]);

    const handleChange = e => {
        if (e.target.checked) {
            setGenre([...genre, e.target.id]);
        } else {
            setGenre(genre.filter(id => id !== e.target.id));
        }
    };

    useEffect(() => {
        if (genre.length === 0) {
            setFilteredGenre(dmmydata);
        } else {
            setFilteredGenre(
                dmmydata.filter(val =>
                    genre.some(category => [val.menu].flat().includes(category.toString().toLowerCase()))
                )
            );
        }
    }, [genre]);

    // Grabbing user input from search and setting it to the filteredData hook
    const setData = (val) => {
        setFilteredData(val.target.value);
        setWordEntered(val.target.value);
    }

    // When user clicks 'x' button in search bar, empty the search bar
    const clearInput = () => {
        // Resetting search bar value to nothing
        setFilteredData([]);
        setWordEntered("");
    }

    const handleDietCheckbox = (event) => {
        //console.log(event.target.id);
        //console.log(event.target.checked);

        setDietIsChecked({
            ...dietIsChecked,
            [event.target.id]: event.target.checked
        });
        console.log(event.target.checked);
    }

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
                                            id="pescatarian"
                                            // checked={dietIsChecked.pescatarian}
                                            onChange={handleChange}
                                        // onChange={handleDietCheckbox}
                                        />
                                        <Form.Check
                                            inline
                                            label="Vegetarian"
                                            name="diet"
                                            type={type}
                                            id="vegetarian"
                                            // checked={dietIsChecked.vegetarian}
                                            onChange={handleChange}
                                        // onChange={handleDietCheckbox}
                                        />
                                        <Form.Check
                                            inline
                                            label="Vegan"
                                            name="diet"
                                            type={type}
                                            id="vegan"
                                            // checked={dietIsChecked.vegan}
                                            onChange={handleChange}
                                        // onChange={handleDietCheckbox}
                                        />
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
                                            id={`${type}-dairy`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No Peanuts"
                                            name="restriction"
                                            type={type}
                                            id={`${type}-peanuts`}
                                        />
                                        <Form.Check
                                            inline
                                            label="No Egg"
                                            name="restriction"
                                            type={type}
                                            id={`${type}-egg`}
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
                                {/* Julissa's Code -> Don't delete */}
                                {/*  <input 
                                    type="text" 
                                    className="searchBar py-1" 
                                    onChange={setData} 
                                /> */}
                                <div className="py-1">
                                    <input
                                        type="text"
                                        className="searchBar py-1"
                                        value={wordEntered}
                                        onChange={setData}
                                    />
                                    <div className="searchIcon">
                                        {/* 
                                           If there's nothing in the search bar, display the search icon
                                           If there's text in the search bar, display 'x' icon and allow user
                                           to clear search bar
                                         */}
                                        {filteredData.length === 0 ?
                                            (<FontAwesomeIcon icon={faSearch} />) :
                                            (<FontAwesomeIcon icon={faTimes} onClick={clearInput} />)}
                                        {/* <FontAwesomeIcon icon={faSearch}/> */}
                                    </div>
                                </div>
                                {/* Julissa's Code -> Don't delete */}
                                {/* <button className="buttonSearchResult col-1 py-1">
                                    <Link to="/search"><FontAwesomeIcon icon={faSearch} color="white" /></Link>
                                </button> */}
                            </Row>
                            <Row>
                                {/* Filters through the recipe database for the matching search term */}
                                {/* If the search is empty, display all the recipe cards through map function */}
                                {/* Else if search term matches with one of the recipe fields, map through matching recipes */}
                                {dmmydata.filter((val) => {
                                    if (filteredData === "") {
                                        return val;
                                    } else if (val.ingredients.toString().toLowerCase().includes(filteredData.toString().toLowerCase()) ||
                                        (val.recipe_name.toLowerCase().includes(filteredData.toString().toLowerCase())) ||
                                        (val.menu.toString().toLowerCase().includes(filteredData.toLowerCase())) ||
                                        (val.restrictions.toString().toLowerCase().includes(filteredData.toLowerCase()))) {
                                        return val;
                                    }
                                }).map((val, key) => {
                                    return (
                                        <Col xs={3} className="mb-2" key={'${val.id}'}>
                                            <RecipeCard data={val} />
                                        </Col>
                                    );
                                })}

                                {filteredGenre.map((val, index) => (
                                        <Col xs={3} className="mb-2" key={'${val.id}'}>
                                            <RecipeCard data={val} />
                                        </Col>
                                    
                                ))}

                                {/* dmmydata.map((data, key) => ( 
                                    <Col xs={3} className="mb-2" key={'${data.id}'}>
                                        <RecipeCard data={data} />
                                    </Col>
                                ))*/}
                            </Row>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default SearchResults

