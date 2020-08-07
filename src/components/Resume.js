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
                    <img src="/WhatsApp Image 2020-08-06 at 23.05.14.jpeg" alt="avatar" style={{height: "400px"}} />
                </div>
                <h2 style={{paddingTop:"2em"}}>Swati Mani</h2>
                <h4 style={{color:"grey"}}>Web Application Developer | Software Developer</h4>
                <hr style={{borderTop:"3px solid #833fb2",width: "50%"}} />
                <p><strong>Master in Computer Science from the University of Texas, Arlington graduated in May 2020.</strong><br />
An eager learner of new technology and having the motivation to work hard.<br />
<br />
Domain skills:         Python developer(Object Oriented language), Django REST API, ReactJS, Angular, Full-stack Developer<br />
Programming Languages: Python, Java (core)<br />
Web technologies:      HTML5,CSS3, JavaScript(ES6), ReactJs<br />
Frameworks and Database: Django, Flask, MySQL
Databases:             SQL (MySql), sqLite<br />
Cloud servers:         AWS<br />
Tools & IDEs: Jupyter Notebook, PyCharm, Git, XAMPP, Jmeter, Numpy, Pandas, Scipy, Eclipse, Brackets, Git version control, unittest<br/>
</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                <h5 >Address</h5>
                <p>1324 Hidden Ridge Apartments, 75038</p>
                <h5>Phone</h5>
                <p>+1 682-360-5387</p>
                <h5>Email id: </h5>
                <p>swati.mani@mavs.uta.edu</p>
                <h5>LinkedIn: </h5>
                <a href="https://www.linkedin.com/in/swati-350793a7/">Swati Mani</a>
                <h5>Web</h5>
                <a href="http://swatimani16.github.io/reactportfolio/">My Portfolio</a>
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
               progress={80}
            />
            <Skills 
               skill = "Django framework"
               progress={80}
            />
            <Skills 
               skill = "Django REST framework"
               progress={70}
            />
            <Skills 
               skill = "ReactJs"
               progress={50}
            />
            <Skills 
               skill = "Angular 10"
               progress={50}
            />
            <Skills 
               skill = "Javascript"
               progress={60}
            />
            <Skills 
               skill = "Git(version control)"
               progress={80}
            />
            <Skills 
               skill = "Core Java"
               progress={50}
            />
            <Skills 
               skill = "HTML/CSS"
               progress={70}
            />
            <Skills 
               skill = "MySQL"
               progress={60}
            />
            <Skills 
               skill = "AWS(EC2)"
               progress={30}
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