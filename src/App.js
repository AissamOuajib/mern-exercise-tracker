import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <NavBar/>
      <br/>
      <div className='container'>
        <Route path='/' exact component={ExercisesList}/>
      </div>
      <div className='container'>
        <Route path='/edit/:id' exact component={EditExercise}/>
      </div>
      <div className='container'>
        <Route path='/create' exact component={CreateExercise}/>
      </div>
      <div  className='container'>
        <Route path='/user' exact component={CreateUser}/>
      </div>
    </Router> 
  );
}

export default App;
