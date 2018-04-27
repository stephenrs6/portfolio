import React from "react";
import {Route, NavLink, BrowserRouter as Router} from "react-router-dom";
import "./Contents.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Interests from "./Interests";
import Resume from "./Resume";

const Contents = (props) => (
  <Router>
    <div>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/skills">SKILLS</NavLink>
          </li>
          <li>
            <NavLink to="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="/interests">INTERESTS</NavLink>
          </li>
          <li>
            <NavLink to="/resume">RESUME</NavLink>
          </li>
        </ul>
      </div>
      <div className="private-content">
        <Route exact path="/" component={About}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/interests" component={Interests}/>
        <Route exact path="/resume" component={Resume}/>
      </div>
    </div>
  </Router>
);

export default Contents;