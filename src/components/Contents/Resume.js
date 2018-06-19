import React, { Component } from "react";
import "./Contents.css";

class Resume extends Component {

    render() {
        return (
            <div className="resume">
                <object data="/assets/pdf/YaoTeSungTechnicalResume.pdf#view=Fit" type="application/pdf" width="80%" height="800px">
                    <iframe title="Yao Te Sung's Technical Resume" src="/assets/pdf/YaoTeSungTechnicalResume.pdf#view=Fit" width="80%" height="800px">
                        This browser does not support PDFs. Please download the PDF to view it.
            <a href="/assets/pdf/YaoTeSungTechnicalResume.pdf#toolbar=0">Download PDF</a>
                    </iframe >
                </object>
            </div>)


    }
}
export default Resume;