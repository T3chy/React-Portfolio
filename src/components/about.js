import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class about extends Component {
    render(){
        return(
            <div><h1>about page</h1>
            <p>Under Construction! In the meantime, check out my <Link to="/ReactPortfolio/projects/">Projects</Link> </p>
            </div>
        )
    }
}
export default about;