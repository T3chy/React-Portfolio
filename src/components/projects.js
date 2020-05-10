import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardActions,Button,CardMenu,IconButton, CardText} from 'react-mdl';
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
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://i.ytimg.com/vi/if-2M3K1tqk/maxresdefault.jpg) center / cover'}}>TweetStock</CardTitle>
                    <CardText>A comparison between tweet polarity and stock price</CardText>
                    <CardActions border>
                    <a href="https://github.com/T3chy/TweetStonk">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2018/08/neuroevolution-hero.png) center / cover'}}>NN_From_Scratch</CardTitle>
                    <CardText>An artifical neural network written from scratch with only NumPY and base python libraries</CardText>
                    <CardActions border>
                    <a href="https://github.com/T3chy/NN_From_Scratch">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height: '176px', background: 'url(https://static-18.sinclairstoryline.com/resources/media/65c19cc6-b86e-4edf-8121-cf883f4673bd-large16x9_HEADLINES.jpg?1580895495669) center / cover'}}>Wordsoftheday</CardTitle>
                    <CardText>A script that displays the top n words used in headlines from popular news publishers</CardText>
                    <CardActions border>
                    <a href="https://github.com/T3chy/Wordoftheday">
                    <Button colored>GitHub</Button>
                    </a>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
            }
        else if(this.state.activeTab === 1){
            return(
            <div><h1>R time baby</h1></div>

            )
        }
        else if(this.state.activeTab === 2){
            return(
            <div><h1>JS time baby</h1></div>

            )
        }
        else if(this.state.activeTab === 3){
            return(
            <div><h1>Arduino time baby</h1></div>

            )
        }
    }




    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})}ripple>
                <Tab>Python</Tab>
                <Tab>R</Tab>
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
