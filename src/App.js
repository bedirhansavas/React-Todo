
import './css/App.css';
import TodoForm from './components/TodoForm';
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"
import CardPage from './pages/CardPage';


function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/">
        <TodoForm/>
        </Route>
        <Route path="/todo">
         <CardPage/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
