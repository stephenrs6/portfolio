import React, { Component } from "react";
import "./Resume.css";
import { Row, Col } from "react-materialize";
// import "./BioData.css";
// import API from "../../utils/API";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

// const userID = "5a8624f2fe9f971c5c565bb3";

class Resume extends Component {
    state = {
        result: [],
        search: ""
    };
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
            <div className="contact-list">
                <p>resume</p>
            </div >)


    }
}
export default Resume;