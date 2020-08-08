import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.components";
import ExerciseList from "./components/exercise-list.component";
import CreateExercise from "./components/create-exercise.component";
import EditExercise from "./components/edit-exercise.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar></Navbar>
        <br></br>
        <Route path="/" exact component={ExerciseList}></Route>
        <Route path="/edit/:id" component={EditExercise}></Route>
        <Route path="/create" component={CreateExercise}></Route>
        <Route path="/user" component={CreateUser}></Route>
      </div>
    </Router>
  );
}

export default App;
