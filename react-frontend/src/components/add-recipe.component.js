import React, { Component } from "react";
import RecipeDataService from "../services/recipe.service";

export default class AddRecipe extends Component{
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeIngredient1 = this.onChangeIngredient1.bind(this);
        this.onChangeIngredient2 = this.onChangeIngredient2.bind(this);
        this.onChangeInstruction1 = this.onChangeInstruction1.bind(this);
        this.onChangeInstruction2 = this.onChangeInstruction2.bind(this);
        this.saveRecipe = this.saveRecipe.bind(this);
        this.newRecipe = this.newRecipe.bind(this);
    
        this.state = {
          id: null,
          title: "",
          author: "",
          date: "",
          ingredient1: "",
          ingredient2: "",
          instruction1: "",
          instruction2: "",
          submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
          author: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
          date: e.target.value
        });
    }

    onChangeIngredient1(e) {
        this.setState({
          ingredient1: e.target.value
        });
    }

    onChangeIngredient2(e) {
        this.setState({
          ingredient2: e.target.value
        });
    }

    onChangeInstruction1(e) {
        this.setState({
          instruction1: e.target.value
        });
    }

    onChangeInstruction2(e) {
        this.setState({
          instruction2: e.target.value
        });
    }

    saveRecipe() {
        var data = {
            title: this.state.title,
            author: this.state.author,
            date: this.state.date,
            ingredient1: this.state.ingredient1,
            ingredient2: this.state.ingredient2,
            instruction1: this.state.instruction1,
            instruction2: this.state.instruction2
        };
    
        RecipeDataService.create(data)
          .then(response => {
            this.setState({
                id: response.data.id,
                title: response.data.title,
                author: response.data.author,
                date: response.data.date,
                ingredient1: response.data.ingredient1,
                ingredient2: response.data.ingredient2,
                instruction1: response.data.instruction1,
                instruction2: response.data.instruction2,
                submitted: true
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    newRecipe() {
        this.setState({
            id: null,
            title: "",
            author: "",
            date: "",
            ingredient1: "",
            ingredient2: "",
            instruction1: "",
            instruction2: "",
            submitted: false
        });
    }

    render(){
        return(
            <div className="submit-form">
            {this.state.submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newRecipe}>
                Add
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    required
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    name="title"
                />
                </div>

                <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    className="form-control"
                    id="author"
                    required
                    value={this.state.author}
                    onChange={this.onChangeAuthor}
                    name="author"
                />
                </div>

                <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    required
                    value={this.state.date}
                    onChange={this.onChangeDate}
                    name="date"
                />
                </div>

                <div className="form-group">
                <label htmlFor="ingredient1">Ingredient</label>
                <input
                    type="text"
                    className="form-control"
                    id="ingredient1"
                    required
                    value={this.state.ingredient1}
                    onChange={this.onChangeIngredient1}
                    name="ingredient1"
                />
                </div>

                <div className="form-group">
                <label htmlFor="ingredient2">Ingredient</label>
                <input
                    type="text"
                    className="form-control"
                    id="ingredient2"
                    required
                    value={this.state.ingredient2}
                    onChange={this.onChangeIngredient2}
                    name="ingredient2"
                />
                </div>

                <div className="form-group">
                <label htmlFor="instruction1">Instruction</label>
                <input
                    type="text"
                    className="form-control"
                    id="instruction1"
                    required
                    value={this.state.instruction1}
                    onChange={this.onChangeInstruction1}
                    name="instruction1"
                />
                </div>

                <div className="form-group">
                <label htmlFor="instruction2">Instruction</label>
                <input
                    type="text"
                    className="form-control"
                    id="instruction2"
                    required
                    value={this.state.instruction2}
                    onChange={this.onChangeInstruction2}
                    name="instruction2"
                />
                </div>

                <button onClick={this.saveRecipe} className="btn btn-success">
                Submit
                </button>
            </div>
            )}
        </div>
        );
    }

}
