import React, { Component } from "react";
import RecipeDataService from "../services/recipe.service";
import { Link } from "react-router-dom";

export default class RecipesList extends Component {
    constructor(props) {
      super(props);
      this.retrieveRecipes = this.retrieveRecipes.bind(this);
      this.refreshList = this.refreshList.bind(this);
      this.deleteAllRecipes = this.deleteAllRecipes.bind(this);
  
      this.state = {
        recipes: [],
      };
    }
  
    componentDidMount() {
      this.retrieveRecipes();
    }
  
    retrieveRecipes() {
      RecipeDataService.getAllRecipes()
        .then(response => {
          this.setState({
            recipes: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    refreshList() {
      this.retrieveRecipes();
    }
  
    deleteAllRecipes() {
      RecipeDataService.deleteAllRecipes()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    render() {
        const {recipes} = this.state;
        return (
            <div>
                <h4>Recipes List</h4>
                <ul>
                    {
                        recipes &&
                        recipes.map((recipe, index) => (
                            <li key={index}>{recipe.title} by {recipe.author}</li>
                        ))
                    }
                </ul>
                <br/>
                <button onClick={this.deleteAllRecipes}>Remove All</button>
            </div>
        )
    }
  }