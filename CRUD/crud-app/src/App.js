import './App.css';
import Home from './components/home/Home';
import Delete from './components/delete/Delete';
import Read from './components/read/Read';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserProvider } from './components/usercontext/UserContext';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';


function App() {
  
  return (
    <div className="app">
     <UserProvider>
     <Router>
        <Switch>
        <Route path="/create/">
            <Create />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
          <Route path="/read/:id">
            <Read />
          </Route>
          <Route path="/delete/:id">
            <Delete />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
     </Router>
     </UserProvider>
    </div>
 
  );
}

export default App;
