import React, { Component } from "react";
import "./Resume.css";
// import { Row, Col } from "react-materialize";
// import "./BioData.css";
// import API from "../../utils/API";

// hardcoding the user ID of Peter Griffin from mongo DB
// You will need to update this ID with the correct ID from your local mongoDb instance

// const userID = "5a8624f2fe9f971c5c565bb3";

class Resume extends Component {
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
            <div className="resume">
                <object data="/assets/pdf/YaoTeStephenSungResume.pdf#view=Fit" type="application/pdf" width="80%" height="800px">
                    <iframe title="Yao Te Sung's Resume" src="/assets/pdf/YaoTeStephenSungResume.pdf#view=Fit" width="80%" height="800px">
                        This browser does not support PDFs. Please download the PDF to view it.
            <a href="/assets/pdf/YaoTeStephenSungResume.pdf#toolbar=0">Download PDF</a>
                    </iframe >
                </object>
            </div>)


    }
}
export default Resume;