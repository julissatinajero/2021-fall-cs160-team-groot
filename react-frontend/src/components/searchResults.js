import { useState, useEffect } from "react";
import '../css/searchResults.css';
import { Row, Col, Form, Card } from 'react-bootstrap';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

import dmmydata from '../dummyData';    // Delete this import of the json file later
import RecipeCard from './recipeCard';

const SearchResults = () => {
    const [filteredData, setFilteredData] = useState([]); // Holds input that user typed into search bar 
    const [wordEntered, setWordEntered] = useState(""); // Hook that determines if search bar is empty or not 
    // Holds which diet values have been clicked (e.g. pescatarian, vegetarian, vegan)
    const [dietGenre, setDietGenre] = useState([]);
    // Holds recipes that match the checked diet genre
    const [filteredDietGenre, setFilteredDietGenre] = useState([]);
    const [searchResults, setSearchResults] = useState([]); // Holds all matched filtered and search values
    const [restrictGenre, setRestrictGenre] = useState([]);
    const [filteredRestrictGenre, setFilteredRestrictGenre] = useState([]);

    /*
    useEffect() runs everytime application renders 
    Whenever genre changes, useEffect will run the callback function 
    */
    useEffect(() => {
        if (dietGenre.length === 0) {
            setFilteredDietGenre(dmmydata);
        } else {
            setFilteredDietGenre(
                dmmydata.filter(val =>
                    dietGenre.some(category =>
                        ([val.menu].flat().includes(category.toString().toLowerCase()))))
            );
        }
    }, [dietGenre]);

    useEffect(() => {
        if (restrictGenre.length === 0) {
            setFilteredRestrictGenre(dmmydata);
        } else {
            setFilteredRestrictGenre(
                dmmydata.filter(val =>
                    restrictGenre.some(category =>
                        ([val.restrictions].flat().includes(category.toString().toLowerCase()))))
            );
        }
    }, [restrictGenre])

    const handleDietChange = e => {
        if (e.target.checked) {
            setDietGenre([...dietGenre, e.target.id]);
        } else {
            setDietGenre(dietGenre.filter(id => id !== e.target.id));
        }
    };


    const handleRestrictChange = e => {
        if (e.target.checked) {
            setRestrictGenre([...restrictGenre, e.target.id]);
        } else {
            setRestrictGenre(restrictGenre.filter(id => id !== e.target.id));
        }
    }

    /*
    handleClick gets triggered when search bar button is clicked
    */
    const handleClick = () => {
        new_search();
    }

    const new_search = () => {
        if (filteredData === "" && dietGenre.length === 0 && restrictGenre.length === 0) {
            // Runs if user did not select any filters and left search bar empty
            setSearchResults(dmmydata);
        } else if (filteredData.length === 0 && restrictGenre.length === 0 && dietGenre.length > 0) {
            // Runs if user only selected "diet" filters 
            setSearchResults(filteredDietGenre);
        } else if (filteredData.length === 0 && dietGenre.length === 0 && restrictGenre.length > 0) {
            // Runs if user only selected "restrictions" filters
            setSearchResults(filteredRestrictGenre);
        } else if (restrictGenre.length > 0 && dietGenre.length > 0 && filteredData.length === 0) {
            // Runs if there's a restrict checked and diet checked but no user input in search bar 
            let restrictionsArray = [];
            let dietArray = [];

            for (let i in filteredDietGenre) {
                dmmydata.filter((val) => {
                    if (val.recipe_name.toString().toLowerCase().includes(filteredDietGenre[i].recipe_name.toString().toLowerCase())) {
                        dietArray.push(val);
                    }
                })
            }

            for (let i in filteredRestrictGenre) {
                filteredDietGenre.map((val) => {
                    if (val.recipe_name.toString().toLowerCase().includes(filteredRestrictGenre[i].recipe_name.toString().toLowerCase())) {
                        restrictionsArray.push(val);
                    }
                })
            }

            setSearchResults(restrictionsArray);

        } else if (restrictGenre.length === 0 && filteredData !== "" && dietGenre.length > 0) {
            // Runs if user typed into search bar and selected diet filter
            let searchedValuesArray = []

            searchedValuesArray = searchKeywords();

            let matchedFilteredValues = []

            for (let i in filteredDietGenre) {
                searchedValuesArray.map((val) => {
                    if (val.recipe_name.toString().toLowerCase().includes(filteredDietGenre[i].recipe_name.toString().toLowerCase())) {
                        matchedFilteredValues.push(val);
                    }
                })
            }

            if (matchedFilteredValues.length > 0) {
                setSearchResults(matchedFilteredValues);
            } else {
                setSearchResults(-1);
            }

            //setSearchResults(matchedFilteredValues);
        } else if (dietGenre.length === 0 && restrictGenre.length > 0 && filteredData !== "") {
            // Runs if user typed into search bar and selected restrictions filter
            let searchedValuesArray = [];

            searchedValuesArray = searchKeywords();

            let matchedFilteredValues = [];

            for (let i in filteredRestrictGenre) {
                searchedValuesArray.map((val) => {
                    if (val.recipe_name.toString().toLowerCase().includes(filteredRestrictGenre[i].recipe_name.toString().toLowerCase())) {
                        matchedFilteredValues.push(val);
                    }
                })
            }

            if (matchedFilteredValues.length > 0) {
                setSearchResults(matchedFilteredValues);
            } else {
                setSearchResults(-1);
            }

            // setSearchResults(matchedFilteredValues);

        } else if (dietGenre.length > 0 && restrictGenre.length > 0 && filteredData !== "") {
            // Runs if the user typed in search bar and used both restrictions and diet filters 
            let searchedValuesArray = []

            searchedValuesArray = searchKeywords();

            let matchedRestrictValues = []

            for (let i in filteredRestrictGenre) {
                searchedValuesArray.map((val) => {
                    if (val.recipe_name.toString().toLowerCase().includes(filteredRestrictGenre[i].recipe_name.toString().toLowerCase())) {
                        matchedRestrictValues.push(val);
                    }
                })
            }

            let matchedDietValues = []

            for (let i in filteredDietGenre) {
                searchedValuesArray.map((val) => {
                    if (val.recipe_name.toString().toLowerCase().includes(filteredDietGenre[i].recipe_name.toString().toLowerCase())) {
                        matchedDietValues.push(val);
                    }
                })
            }

            if (matchedDietValues.length > 0) {
                setSearchResults(matchedDietValues);
            } else {
                setSearchResults(-1);
            }

        } else if (filteredData !== "") {
            // Runs if the user only typed in input to the search bar
            let foundValues = [];
            foundValues = searchKeywords();

            if (foundValues.length > 0) {
                setSearchResults(foundValues);
            } else {
                setSearchResults(-1);
            }
        }
    }

    const searchKeywords = () => {
        let foundMatches = []

        foundMatches = dmmydata.filter((val) => {
            if (val.ingredients.toString().toLowerCase().includes(filteredData.toString().toLowerCase()) ||
                (val.recipe_name.toLowerCase().includes(filteredData.toString().toLowerCase())) ||
                (val.menu.toString().toLowerCase().includes(filteredData.toString().toLowerCase())) ||
                (val.restrictions.toString().toLowerCase().includes(filteredData.toString().toLowerCase()))) {
                return val;
            }
        })

        return foundMatches;
    }

    // Grabbing user input from search and setting it to the filteredData hook
    const setData = (val) => {
        setFilteredData(val.target.value);
        setWordEntered(val.target.value);
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
                                            onChange={handleDietChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Vegetarian"
                                            name="diet"
                                            type={type}
                                            id="vegetarian"
                                            onChange={handleDietChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Vegan"
                                            name="diet"
                                            type={type}
                                            id="vegan"
                                            onChange={handleDietChange}
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
                                            label="Gluten-free"
                                            name="restriction"
                                            type={type}
                                            id="gluten-free"
                                            onChange={handleRestrictChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Peanut-free"
                                            name="restriction"
                                            type={type}
                                            id="nut-free"
                                            onChange={handleRestrictChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Soy-free"
                                            name="restriction"
                                            type={type}
                                            id="soy-free"
                                            onChange={handleRestrictChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Egg-free"
                                            name="restriction"
                                            type={type}
                                            id="egg-free"
                                            onChange={handleRestrictChange}
                                        />
                                        <Form.Check
                                            inline
                                            label="Shellfish-free"
                                            name="restriction"
                                            type={type}
                                            id="shellfish-free"
                                            onChange={handleRestrictChange}
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
                                <Row>
                                    <input
                                        type="text"
                                        className="searchBar py-1"
                                        value={wordEntered}
                                        onChange={setData}
                                    />
                                    <button className="buttonSearchResult col-1 py-1"
                                        onClick={handleClick}>
                                        <Link to="/search"><FontAwesomeIcon icon={faSearch} color="white" /></Link>
                                    </button>

                                    {/* <div className="searchIcon"> 
                                           If there's nothing in the search bar, display the search icon
                                           If there's text in the search bar, display 'x' icon and allow user
                                           to clear search bar
                                         
                                         {filteredData.length === 0 ?
                                            (<FontAwesomeIcon icon={faSearch} />) :
                                            (<FontAwesomeIcon icon={faTimes} onClick={clearInput} />)} 
                                    </div> */}
                                </Row>
                            </Row>
                            <Row>
                                {
                                    (filteredData.length === 0 && dietGenre.length === 0 && restrictGenre.length === 0 ) ?
                                        (dmmydata.map((val, key) => {
                                            return (
                                                <Col xs={3} className="mb-2" key={key}>
                                                    <RecipeCard data={val} />
                                                </Col>
                                            );
                                        })) :
                                        ((searchResults === -1) ? 
                                        (<p className="searchTitle text-center">Sorry cannot find results :(</p>) :
                                        (searchResults.map((val, key) => {
                                            return (
                                                <Col xs={3} className="mb-2" key={key}>
                                                    <RecipeCard data={val} />
                                                </Col>
                                            );
                                        })))
                                }
                            </Row>
                        </Card>
                    </div>
                </Row>
            </div>
        </div>
    )
}

export default SearchResults

