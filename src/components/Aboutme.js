import React from "react"
import {Grid,Cell} from "react-mdl"


function Aboutme(){
    return(
        <div className="aboutme-body">
        
            <Cell col={12}>
                <h2 style={{color:"#800080",textAlign: "center",textAlign: "center"}}>Swati Mani</h2>
                <img src="/WhatsApp Image 2020-08-06 at 23.05.14.jpeg" alt="avatar" style={{height: "370px", width: "370px"}} className = "center"/>
                <p style={{width: "75%", margin:"auto", paddingTop:"1em"}}>
                <h5 style={{color: "#8A2BE2",textAlign: "center"}}>Master's in Computer Science having graduated in May 2020 from the University of Texas, Arlington, TX</h5><hr />
                <h5 style={{textAlign: "center"}}>I an eager learner of new technologies and always ready to gain knowledge.</h5>
                <p style={{justifyContent: "center"}}>
                  I live in Irving, Texas, USA, originally from India. Developing something that can be visualised, amuses me, so is Web application development. Like there is rhythm in dance I like to have rhythm in my life.
                  Professionally, I am looking for exciting opportunities in Web Development using Python and its frameworks like Django, Django REST framework and Software Development, where I can best utilize my skills and strengths to accomplish the organization’s goals and objectives and at the same time get an opportunity to expand my knowledge base.
                  Apart from my educational projects, I have worked on developing Python based Web applications like Covid tracker web app, Blog web application as well as a Full-stack web application using Angular 10 as the front-end and Django REST API to design the API to fetch data from the backend. You can view these deployed projects in the project section of this website.
                  I have working knowledge of deploying a Flask web application on AWS EC2 and performing autoscaling based upon the variation in the traffic entering the website.
                  I am looking forward to working on exciting and challenging projects where I can enhance my knowledge as well as contribute in the team and company I will be working with.
                </p>
                </p>
            </Cell>
            
            </div>
    );
}

export default Aboutme;