import Axios from 'axios';
import './App.css';

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
}

export default App;
