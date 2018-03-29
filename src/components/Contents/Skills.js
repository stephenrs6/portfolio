import React, { Component } from "react";
import "./Skills.css";
// import API from "../../../utils/API";
import { Row, Input, Button, Icon } from "react-materialize";

class Skills extends Component {
    state = {
        result: [],
        search: ""
    };
    render() {
        return (
            <div className="devicons">
                <h4>Technologies &amp; Tools utilized:</h4>
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-javascript-plain colored"></i>
                <i class="devicon-nodejs-plain-wordmark colored"></i>
                <i class="devicon-mongodb-plain-wordmark colored"></i>
                <i class="devicon-react-original-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <i class="devicon-jquery-plain-wordmark colored"></i>
                <i class="devicon-mysql-plain-wordmark colored"></i>
                <i class="devicon-heroku-plain-wordmark colored"></i>
                <i class="devicon-bootstrap-plain-wordmark colored"></i>
                <br></br>
                <h4>Workflow:</h4>
                <ul>
                    <li>Mobile-First, Responsive Design</li>
                    <li>Cross-browser testing &amp; Debugging</li>
                    <li>Self-organized Cross Functional Teams</li>
                    <li>Agile Development &amp; Scrum Methodologies</li>
                </ul>

            </div>

        )
    }
}
export default Skills;