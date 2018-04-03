import React, { Component } from "react";
import "./Projects.css";
import { Row, Col } from "react-materialize";
// import API from "../../../utils/API";
// import { Card, CardTitle, Row, Col } from "react-materialize";
// import { Link } from "react-router-dom";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

//const userID = "5a8624f2fe9f971c5c565bb3";
// const matchID = "5a88b703b2711d7990ee8016";

class Projects extends Component {
    state = {
        result: [],
        search: ""
    };
    // componentDidMount() {
    //     this.getBioData(matchID);
    // };
    // getBioData = (id) => {
    //     API.getUserData(id)
    //         .then(res =>
    //             this.setState({ result: res.data }),
    //     )
    //         .catch(err => console.log(err));
    // };
    render() {
        return (
            <div className="container contents">
                <h4>Projects:</h4>
                <h5 className="link"><a href="https://bharloe.github.io/Music-Event-Search/">Knofity</a></h5>
                <a href="https://bharloe.github.io/Music-Event-Search/">
                <img className="screenshot" src="/assets/images/Knotify.png" alt="App Screenshot"></img></a>
                <p className="link"><a href="https://github.com/stephenrs6/Music-Event-Search">Github Link</a></p>
                <p>A search engine for upcoming music events and concerts in your area. 
                    Presents users with an interface that searches for and displays artists performing live in the area, 
                    as well as similar artists. For each result, a visual graphic is shown in a carousel slideshow with show information such as date, time, location, and links to purchase tickets.                    <br></br>
                    <br></br>
                    I have recently completed UC San Diego Extension's Full Stack Web Development program and aim to obtain a junior Web Developer position.
                    I obtained my Bachelor's in Psychology from UC San Diego, making me a dynamic collaborator knowledgable of the human condition, and adept at working in diverse teams.
                I'm also proficient in Mandarin Chinese at a native speaker level.</p>
            </div>
        )
    }
}
export default Projects;
