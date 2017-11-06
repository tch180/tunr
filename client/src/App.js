import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ArtistList from "./components/ArtistList";
import Artist from "./components/Artist";
import NavBar from './components/NavBar'

import "./App.css";




class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                 <div>
                        <div>
                           <NavBar/>
                        </div>
                  </div>
                <Route exact path="/" component={ArtistList}/>
                <Route path="/artist/:id" component={Artist}/>
                </div>
            </Router>
        );
    }
}

export default App;
