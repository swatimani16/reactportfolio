import React from "react"
import {Grid, Cell} from "react-mdl"
import Education from "./education.js";
import Skills from "./skills.js"
import Certifications from "./certifications.js"


function Resume(){
    return(
        <div>
        <Grid>
            <Cell col={4}>
                <div style={{textAlign: "center"}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ9ThJvZlkyfYDy2Fb6-2eC92nUZP01SPXFsG13EZ_6FnYIg_D" alt="avatar" style={{height: "200px"}} />
                </div>
                <h2 style={{paddingTop:"2em"}}>Swati Mani</h2>
                <h4 style={{color:"grey"}}>Developer</h4>
                <hr style={{borderTop:"3px solid #833fb2",width: "50%"}} />
                <p>Master in Computer Science student specializing in Artificial Intelligence and Databases and graduating in May 2020.<br />
I am always eager to learn new technologies and gain knowledge.<br />
<br />
Domain skills:         Cloud Computing|Machine learning<br />
Programming Languages: Python, Java (core)<br />
Cloud servers:         AWS,Azure<br />
Web technologies:      HTML,CSS,NodeJs, JavaScript, ReactJs<br />
GUI:                   Tkinter, Java Swings<br />
Databases:             SQL (MySql)<br />
Frameworks:            Flask<br />
Tools:                 Git,Jmeter,Xampp,Eclipse,Pycharm<br /></p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5 >Address</h5>
                <p>507 Summit Avenue, Arlington,Texas, 76013</p>
                <h5>Phone</h5>
                <p>+1 682-360-5387</p>
                <h5>Email id: </h5>
                <p>swati.mani@mavs.uta.edu</p>
                <h5>LinkedIn: </h5>
                <a href="https://www.linkedin.com/in/swati-mani-350793a7/">Swati Mani</a>
                <h5>Web</h5>
                <a href="https://swatimani.github.io">My Portfolio</a>
                <hr style={{borderTop:"3px solid #833fb2",width: "50%"}} />
            </Cell>
            <Cell className="resume-right-col" col={8}> 
            <h2 >Education</h2>
            


            <Education 
            startYear = {2018}
            endYear = {2020}
            schoolName="University of Texas at Arlington"
            schoolDescription="Master's in Computer Science majoring in Artificial intelligence and Database Systems
                             GPA: 3.7/4.0"
            
            />

            <Education 
            startYear = {2014}
            endYear = {2018}
            schoolName="Savitribai Phule Pune University"
            schoolDescription="Bachelor in Engineering- Electronics and Telecommunication   GPA: 3.6/4.0"
            
            />
            <hr style={{borderTop:"3px solid #e22947"}}/>
            <h2>Skills</h2>
            <Skills 
               skill = "Python"
               progress={85}
            />
            <Skills 
               skill = "Javascript"
               progress={65}
            />
            <Skills 
               skill = "Core Java"
               progress={65}
            />
            <Skills 
               skill = "HTML/CSS"
               progress={60}
            />
            <Skills 
               skill = "MySQL"
               progress={60}
            />
            <Skills 
               skill = "AWS(EC2)"
               progress={40}
            />
            <h2>Certifications</h2>
            <Certifications 
               name="Web Development Bootcamp using HTML/CSS - Udemy"
               url=""
            />
            <Certifications 
               name="Responsive Web Design- FreeCodeCamp"
               url="https://www.freecodecamp.org/certification/fcccabd26c7-fe8c-45d0-8535-c9f2c8733b81/responsive-web-design"
            />
            <Certifications 
               name="Front-end Libraries(Bootstrap,ReactJS)- FreeCodeCamp"
               url="https://www.freecodecamp.org/certification/fcccabd26c7-fe8c-45d0-8535-c9f2c8733b81/front-end-libraries"
            /> 
            </Cell>
        </Grid>
        
        </div>
    );
}

export default Resume;