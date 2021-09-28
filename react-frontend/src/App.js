import Axios from 'axios';
import React, {Component} from "react";
import AddRecipe from './components/add-recipe.component';
import RecipesList from './components/recipe-list.component';
import './App.css';

class App extends Component {
    /**
    getUsers = () => {
        Axios.get('http://localhost:8080/api/users')
            .then(
                response => {
                    console.log(response);
                }
            )
    }*/
    
    render(){
        return(<div className="App">
            <h1>Hello from React</h1>
            <input 
                type="submit" 
                value="Press to test connection to spring"
                onClick={() => {
                    Axios.get('http://localhost:8080/api/users')
                        .then(
                            response => {
                                console.log(response);
                            }
                        )
                }}
            /><br/>

            <AddRecipe/>
            <RecipesList/>

        </div>);
    }
}

/**
const App = () => {


    const getUsers = () => {
        Axios.get('http://localhost:8080/api/users')
            .then(
                response => {
                    console.log(response);
                }
            )
    }

    return (
        <div className="App">
            <h1>Hello from React</h1>
            <input 
                type="submit" 
                value="Press to test connection to spring"
                onClick={getUsers}
            />
        </div>
    );
}*/

export default App;
