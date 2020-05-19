import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class contact extends Component {
    render(){
        return(
           <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Elam Day-Friedland</h2>
                    <img
                    src="https://gdurl.com/7o2C" alt="avatar" style={{height:'250px'}}
                    />
                    <p style={{width:'75%',height:'50%',margin:'auto',paddingTop:'1em'}}> 
                    Let's make something awesome!
                    </p>
                    </Cell>
                <Cell col={6}>
                <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                <i className='fa fa-envelope-square' aria-hidden="true" />
                                 elam (at) elamdayfriedland (dot) com
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                            <a href="https://www.linkedin.com/in/elam-day-friedland-1100501a5/"target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin"></i>
                </a>
                                Message me on LinkedIn!
                                </ListItemContent>
                        </ListItem>

                        </List>
                        </div>
                </Cell>
            </Grid>
           </div>
        )
    }
}
export default contact;