import React from "react"
import {Grid, Cell} from "react-mdl";

function Landingpage(){
    return(
        <div style={{width: "100%", margin: "auto"}}>
           <Grid className="landing-grid">
            <Cell col={12}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ9ThJvZlkyfYDy2Fb6-2eC92nUZP01SPXFsG13EZ_6FnYIg_D" alt ="avatar" className="avatar-img"/>
            <br/><br /><br /><br />
            
            <div className="banner-text">
              <h1>Full-stack Web Developer| Cloud Computing| React JS| Machine Learning </h1>
              <hr />
              <p>HTML/CSS | Javascript | ReactJs | Python | SQL | AWS | Python-Flask | Java | Machine Learning </p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a href="https://www.linkedin.com/in/swati-mani-350793a7/" target="_blank" rel="nooperner noreferrer">
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