import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl';
import {CopyToClipboard} from 'react-copy-to-clipboard';
class projects extends Component {
    constructor(props){
        super(props)
        this.state = { activeTab: 0}
    }

    // tried to use a switch here but it didnt work so if satemeent time baby 
    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1125346661%2F960x0.jpg%3Ffit%3Dscale) center / cover'}}>TweetStock</CardTitle>
                    <CardText>A visual comparison between tweet polarity and stock price</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/T3chy/TweetStonk">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={"https://github.com/T3chy/TweetStonk"}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000000', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2018/08/neuroevolution-hero.png) center / cover'}}>NN_From_Scratch</CardTitle>
                    <CardText>An artifical neural network written from scratch with only NumPY and base python libraries</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/T3chy/NN_From_Scratch">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={"https://github.com/T3chy/NN_From_Scratch"}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://static-18.sinclairstoryline.com/resources/media/65c19cc6-b86e-4edf-8121-cf883f4673bd-large16x9_HEADLINES.jpg?1580895495669) center / cover'}}>Wordsoftheday</CardTitle>
                    <CardText>A script that displays the top n words used in headlines from popular news publishers</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/T3chy/Wordoftheday">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={"https://github.com/T3chy/Wordoftheday"}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000000', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdiwevhy3PTI34Pv2LICDnkT23Ehb8KVEv9YJ1GqBjMKLkbLXu&usqp=CAU) center / cover'}}>Portfolio_mgmt</CardTitle>
                    <CardText>A fun CSV based portfolio managment script (work in progress)</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/T3chy/stonks">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={"https://github.com/T3chy/stonks"}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                </div>
            )
            }
        else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>This Website!</CardTitle>
                    <CardText>This website was built from the ground up in JavaScript and html using the React framework</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/T3chy/ReactPortfolio">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={"https://github.com/T3chy/ReactPortfolio"}>
                    <IconButton name="share" />
          </CopyToClipboard>

                    </CardMenu>
                </Card>
                </div>

            )
        }
        else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://news.fullerton.edu/2019sp/_images/DNA.jpg) center / cover'}}>DIY PCR Machine</CardTitle>
                    <CardText>A wifi-accessible PCR thermocycler made out of an arduino, a cartrige heater, a cpu heatsink, and a block of aluminium!</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/T3chy/PCR">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={"https://github.com/T3chy/PCR"}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/d/da/171879main_LimbFlareJan12_lg.jpg) center / cover'}}>WiFi HeatBlock</CardTitle>
                    <CardText>A wifi-enabled arduino-controlled heatblock for ependorf tubes</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer"href="https://google.com">
                    <Button colored>WIP</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={""}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://banner2.cleanpng.com/20171220/xuw/question-mark-png-5a3a4de2876092.08833120151377046655451133.jpg) center / cover'}}>Wordsoftheday</CardTitle>
                    <CardText>TBD- maybe a nanodrop spectrometer</CardText>
                    <CardActions border>
                    <a target="_blank" rel="noopener noreferrer" href="https://google.com">
                    <Button colored>TBD</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                    <CopyToClipboard onCopy={this.onCopy} text={""}>
                    <IconButton name="share" />
          </CopyToClipboard>
                    </CardMenu>
                </Card>
                </div>
            )
        }
    }




    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}ripple>
                <Tab>Python/R</Tab>
                <Tab>JavaScript</Tab>
                <Tab>DIYBio</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()} </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default projects;
