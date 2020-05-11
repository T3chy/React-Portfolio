import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class landPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                <img src="https://gdurl.com/7o2C" alt="profpic" className="avatar-img"/>
            <div className="banner-text">
                <h1>Elam Day-Friedland</h1>
                <hr/>
                <p>
                    Python/R | C++ | JavaScript/React | DIYBio Machines
                </p>
                <div className="social-links">
                {/* github */}
                <a href="https://github.com/T3chy"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github-square"></i>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/channel/UCxSICwLtdLZGmkAK6LY2ClA"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube-square"></i>
                </a>
                {/* LinkdIn */}
                <a href="https://www.linkedin.com/in/elam-day-friedland-1100501a5/"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/ellamaaaa/"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram"></i>
                </a>
                </div>
            </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}
export default landPage;
