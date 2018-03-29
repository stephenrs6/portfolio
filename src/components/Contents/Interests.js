import React, { Component } from "react";
import "./Interests.css";
// import { Row, Col } from "react-materialize";
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
            <div className="container contents">
                <h4>Interests:</h4>
                <p className="flow-text">Apart from coding, I enjoy contributing and advocating for mental health issues. I take a lot of interest in Psychology and neuroscience.
                Mental health is just as important as physical health, and I feel I have a good grasp on the fundamentals of the human condition.
                Understanding what motivates an individual to get up in the morning and pursue his dream allows me to ensure that my team adapts to each other, and runs like a cohesive unit.
                    <br></br>
                    <br></br>
                    Speaking of communities -- as a hobby, I have experience in fostering multiple positive online video-game communities, consisting of 10 ~ 50 members, across various game titles. This has given me advantages when put in a managerial role.
                    <br></br>
                    <br></br>
                    I attribute most of my versatility to my background, having lived on 3 different continents growing up. I'm a global citizen with an open mind, aware of the many varying traits and characteristics of different cultures.
                    I make it an emphasis of my life to be both book-smart and street-smart, so to achieve this duality -- in addition to being an avid reader -- I have travelled to many different countries to gain insight on the world.
                </p>
            </div>
            )


    }
}
export default Interests;