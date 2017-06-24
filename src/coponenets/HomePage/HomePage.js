import React,{Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component{
    render(){
        return(
        <div className="jumbotron">
            <h1> project app using react redux in es6</h1>
             <Link to="about" className="btn btn-primary btn-lg">learn more</Link>
        </div>
        );
    }
}

export default HomePage;