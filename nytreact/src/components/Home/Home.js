import React, {Component} from "react";
import "./Home.css";
import Form from "../SearchForm/SearchForm";

class Home extends Component {
    state = {
        title: "",
        date: "", 
        url: "",
        articles: [],
        saved: []
    };

    render() {
        <div className="container">
            <div className="jumbotron">
                <div>
                    New York Times Search
                </div>
            </div>
            <div className="row">
                <Form />
            </div>
        </div>
    }
}


export default Home; 