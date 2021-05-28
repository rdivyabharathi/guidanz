import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login/Login";
import home from "./Components/Home/Home";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';

function App() {
  return (
   <Router>
     <div className="App">
       <Switch>
         <Route path="/" exact component={Login}/>
         <Route path ="/home" component={home}/>
       </Switch>
     </div>
   </Router>
      
  );
}

export default App;
