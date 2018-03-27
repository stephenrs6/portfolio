import React, { Component } from "react";
import "./Interests.css";
import { Row, Col } from "react-materialize";
// import API from "../../utils/API";
// import { Card, CardTitle, Row, Col } from "react-materialize";
// import { Link } from "react-router-dom";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

// const userID = "5a8624f2fe9f971c5c565bb3";

class Interests extends Component {
    // state = {
    //     result: [],
    //     search: ""
    // };
    // componentDidMount() {
    //     this.getBioData(userID);
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
            <div className="potentials-list">
            <div className="container contents">
                <h4>About Me:</h4>
                <p className="flow-text">I am a technology enthusiast and creative problem solver who is currently immersed in the art of Web Development.
                I utilize my knowledge of human-computer interactions to design User Interfaces that come intuitively for the end user.
                I'm able to build complex websites with full database back-end all the way from mock-up to roll-out.
                    <br></br>
                    <br></br>
                I have recently completed UC San Diego Extension's Full Stack Web Development program and aim to obtain a junior Web Developer position.
                I obtained my Bachelor's in Psychology from UC San Diego, making me a dynamic collaborator knowledgable of the human condition, and adept at working in diverse teams.
                I'm also proficient in Mandarin Chinese at a native speaker level.</p>
            </div>
            </div>
            )


    }
}
export default Interests;