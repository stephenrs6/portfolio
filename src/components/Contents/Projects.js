import React, { Component } from "react";
import "./Contents.css";

class Projects extends Component {
    state = {
        result: [],
        search: ""
    };

    render() {
        return (
            <div className="container contents">
                <h4>Projects:</h4>
                <h5 className="link"><a href="https://github.com/stephenrs6/Music-Event-Search">Knotify</a></h5>
                <a href="https://bharloe.github.io/Music-Event-Search/"><img className="screenshot" src="/assets/images/knotify.png" alt="App Screenshot"></img></a>
                <p><a className="link" href="https://github.com/stephenrs6/Music-Event-Search">Github Link</a></p>
                <p>A search engine for upcoming music events and concerts in your area.
                Presents users with an interface that searches for and displays artists performing live in the area,
                    as well as similar artists. For each result, a visual graphic is shown in a carousel slideshow with show information such as date, time, location, and links to purchase tickets. 
                    </p>
                    <p><i><sub>* UPDATE: The MusicGraph API is currently down, leading to no search results based on how we designed the JSON flow. To generate results, feel free to input artists into the "artists" array, and run the "searchBandsinTown" function with the array passed in as a parameter (loop through the array).</sub></i></p>
                <br></br>
                <br></br>
                <h5 className="link"><a href="http://rating-reader.herokuapp.com/">Rating Reader</a></h5>
                <a href="http://rating-reader.herokuapp.com/"><img className="screenshot" src="/assets/images/ratingreader.png" alt="App Screenshot"></img></a>
                <p className="link"><a href="https://github.com/stephenrs6/rating-reader">Github Link</a></p>
                <p>An app with database that stores ratings and reviews for anything one desires. Has user account register and login functionality. Can search for reviews based off of category, item name, or username. Can be used for online store product reviews, or an app like Yelp. </p>
                <br></br>
                <br></br>
                <h5 className="link"><a href="https://stephenrs6.github.io/Train-Scheduler/">Train Scheduler</a></h5>
                <a href="https://stephenrs6.github.io/Train-Scheduler/"><img className="screenshot" src="/assets/images/trains.png" alt="App Screenshot"></img></a>
                <p className="link"><a href="https://github.com/stephenrs6/Train-Scheduler">Github Link</a></p>
                <p>Similar to a jumbotron at the train station, this application incorporates Moment.js and a simple database to host arrival and departure data. Provides up-to-date information about various trains, namely their arrival times, and how many minutes from now will the next train arrive. Users may enter additional trains to track.</p>
                <br></br>
                <br></br>
                <h5 className="link"><a href="https://stephenrs6.github.io/Gem-Collector/">Gem Collector</a></h5>
                <a href="https://stephenrs6.github.io/Gem-Collector/"><img className="screenshot" src="/assets/images/gems.png" alt="App Screenshot"></img></a>
                <p className="link"><a href="https://github.com/stephenrs6/Gem-Collector">Github Link</a></p>
                <p>A simple Javascript game. Players collect different colored gems of different unknown values, and attempt to match a predetermined value to win.</p>
                <br></br>
                <br></br>
                <h5 className="link"><a href="https://stephenrs6.github.io/Trivia-Game">Geography Trivia Game</a></h5>
                <a href="https://stephenrs6.github.io/Trivia-Game"><img className="screenshot" src="/assets/images/trivia.png" alt="App Screenshot"></img></a>
                <p className="link"><a href="https://github.com/stephenrs6/Trivia-Game">Github Link</a></p>
                <p>A simple Geography Trivia game using JavaScript for the logic and jQuery to manipulate HTML.</p>
                <br></br>
                <br></br>
                <h5 className="link"><a href="https://yts-portfolio.herokuapp.com">This Website</a></h5>
                
                <p className="link"><a href="https://github.com/stephenrs6/portfolio">Github Link</a></p>
                <p>Reactjs portfolio</p>
            </div>
        )
    }
}
export default Projects;
