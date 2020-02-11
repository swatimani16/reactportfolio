import React from "react"
import {Grid,Cell} from "react-mdl"


function Aboutme(){
    return(
        <div className="aboutme-body">
        <Grid className="aboutme-grid">
            <Cell col={6}>
                <h2 style={{color:"#800080"}}>Swati Mani</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ9ThJvZlkyfYDy2Fb6-2eC92nUZP01SPXFsG13EZ_6FnYIg_D" alt="avatar" style={{height: "250px"}}/>
                <p style={{width: "75%", margin:"auto", paddingTop:"1em"}}>
                <h5 style={{color: "#8A2BE2"}}>Master's in Computer Science specializing in Artificial Intelligence and Databases and graduating in May 2020.</h5><hr />
                <h5>I an eager learner of new technologies and always ready to gain knowledge.</h5>
                <p>
                  I live in Arlington, Texas, USA, originally from India. My passion is dancing, I am a professional classical dancer. Like there is rhythm in dance I like to have rhythm in my life. I love to live every moment to the fullest. 
                  Professionally, I am looking for exciting opportunities in Cloud Computing, Machine Learning, Software Development, where I can best utilize my skills and strengths to accomplish the organization’s goals and objectives and at the same time get an opportunity to expand my knowledge base.
                  Apart from my educational projects, I have earned certifications in Web-Development and in the Front-end Framework of Reactjs.
                  Further I would like to mention that this portfolio site has been made using Reactjs and am further working on it inorder to master it.
                  My resume and other projects can be viewed on the Resume and Projects pages of this website.
                </p>
{/* Domain skills:         Cloud Computing|Machine learning<br />
Programming Languages: Python, Java (core)<br />
Cloud servers:         AWS,Azure<br />
Web technologies:      HTML,CSS,NodeJs, JavaScript, ReactJs<br />
GUI:                   Tkinter, Java Swings<br />
Databases:             SQL (MySql)<br />
Frameworks:            Flask<br />
Tools:                 Git,Jmeter,Xampp,Eclipse,Pycharm<br /> */}
                </p>
            </Cell>
            </Grid>
            </div>
    );
}

export default Aboutme;