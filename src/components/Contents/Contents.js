import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./Contents.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Interests from "./Interests";
import Resume from "./Resume";

const Contents = (props) => (
<HashRouter>
            <div>
                <div className ="navbar">
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
                    {/* <Route path="/" component={Placeholder} /> */}
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/interests" component={Interests} />
                    <Route path="/resume" component={Resume} />
                </div>
            </div>
        </HashRouter>
);

export default Contents;