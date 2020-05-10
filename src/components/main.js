import React from 'react';
import { Route } from 'react-router-dom';
import landPage from './landpage';
import about from './about';
import resume from './resume';
import projects from './projects'
import contact from './contact'
const Main = () => (
    <switch>
        <Route exact path="/" component={landPage} />
        <Route path="/about" component={about} />
        <Route path="/projects" component={projects} />
        <Route path="/resume" component={resume} />
        <Route path="/contact" component={contact} />
    </switch>
)
export default Main;