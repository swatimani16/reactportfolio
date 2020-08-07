import React from "react"
import {Grid, Cell} from "react-mdl";

function Landingpage(){
    return(
        <div style={{width: "100%", margin: "auto"}}>
           <Grid className="landing-grid">
            <Cell col={12}>
            <img src="/WhatsApp Image 2020-08-06 at 23.05.14.jpeg" alt ="avatar" className="avatar-img" style={{height: "370px", width: "370px"}} className = "center"/>
            
            
            <div className="banner-text">
              <h1>Full-stack Web Developer | Python Developer | Django | Django REST framework| ReactJS | Angular </h1>
              <hr />
              <p>Python | Django framework | Django REST framework | ReactJs | SQL | AWS | Python-Flask |<br/><br/>| Java | Angular </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/swati-350793a7/" target="_blank" rel="nooperner noreferrer">
                  <i className="fa fa-linkedin-square "  aria-hidden="true" />
                </a>
                {/*Github*/}
                <a href="https://github.com/swatimani16" target="_blank" rel="nooperner noreferrer">
                  <i className="fa fa-github-square "  aria-hidden="true" />
                </a>
                {/*Freecodecamp*/}
                <a href="https://www.freecodecamp.org/fcccabd26c7-fe8c-45d0-8535-c9f2c8733b81" target="_blank" rel="nooperner noreferrer">
                  <i className="fa fa-free-code-camp "  aria-hidden="true" />
                </a>
              </div>
            </div>

            </Cell>
             </Grid>
        </div>
    );
  }


export default Landingpage;