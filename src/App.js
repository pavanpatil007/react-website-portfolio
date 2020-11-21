
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import achivements from './components/Pages/Achivements';
import resume from './components/Resume';



function App() {
  return (
    <>
    <Router>
     <Navbar/>
     <Switch>
       <Route path="/" exact component ={Home}
       />
       <Route path="/services" exact component ={Services}
       />
       <Route path="/achivements" exact component ={achivements}
       />
       <Route path="/sign-up" exact component ={resume}
       />
     </Switch>
    </Router>
      
      
    </>
  );
}

export default App;
