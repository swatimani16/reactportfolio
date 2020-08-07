import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from "react-mdl";
import Main from "./components/main.js";

import {Link} from "react-router-dom";

function App(){
  
  return (
    <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/reactportfolio/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer className="header-color" title={<Link style={{textDecoration: 'none', color: '#000000'}} to="/reactportfolio/">My Portfolio</Link>} scroll>
            <Navigation>
                <Link to="/aboutme" style={{color: '#000000'}}>About me</Link>
                <Link to="/resume" style={{color: '#000000'}}>Resume</Link>
                <Link to="/projects" style={{color: '#000000'}}>Projects</Link>
                <Link to="/contact" style={{color: '#000000'}}>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div> 
  );
  }


export default App;
