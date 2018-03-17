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
            <div className="potentials-list">
                <p>interests</p>
            </div>
            )


    }
}
export default Interests;