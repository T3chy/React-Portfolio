import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content,} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';
function App() {
  return (
<div className="demo-big-content">
    <Layout>
        
    <Header title="Portfolio" scroll className="header-color" onClick="/">
                <Navigation>
                <Link to="/ReactPortfolio/">Home</Link>
                    <Link to="/ReactPortfolio/?p=/about/">About Me</Link>
                    <Link to="/ReactPortfolio/?p=/projects/">Projects</Link>
                    <Link to="/ReactPortfolio/?p=/resume/">Resume</Link>
                    <Link to="/ReactPortfolio/?p=/contact/">Contact</Link>
                </Navigation>
            </Header>

        <Drawer title="Portfolio" scroll className="header-color" onClick="/">
            <Navigation>
            <Link to="/ReactPortfolio/">Home</Link>
            <Link to="/ReactPortfolio/?p=/about/">About Me</Link>
                    <Link to="/ReactPortfolio/?p=/projects/">Projects</Link>
                    <Link to="/ReactPortfolio/?p=/resume/">Resume</Link>
                    <Link to="/ReactPortfolio/?p=/contact/">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

  );
}

export default App;
