import React from 'react';
import {Switch, Route } from 'react-router-dom';
import landPage from './landpage';
import about from './about';
import resume from './resume';
import projects from './projects';
import contact from './contact';
const Main = () => (
    <Switch>
        <Route exact path="/ReactPortfolio/" component={landPage} />
        <Route exact path="/ReactPortfolio/about/" component={about} />
        <Route exact path="/ReactPortfolio/projects/" component={projects} />
        <Route exact path="/ReactPortfolio/resume/" component={resume} />
        <Route exact path="/ReactPortfolio/contact/" component={contact} />
    </Switch>
)
export default Main;