import React from "react"
import {Grid, Cell, List,ListItem,ListItemContent} from "react-mdl"

function Contact(){
    return(
        <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>
                <h2>Swati Mani</h2>
                <img src="/WhatsApp Image 2020-08-06 at 23.05.14.jpeg" alt="avatar" style={{height: "250px"}}/>
                <p style={{width: "75%", margin:"auto", paddingTop:"1em"}}>
                <strong>Master in Computer Science from the University of Texas, Arlington graduated in May 2020.</strong><br />
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
            </Cell>
            <Cell col={6}>
                <h2>Contact Me</h2>
                <hr />
            <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}><i className=" fa fa-phone-square" aria-hidden="true"/>+1 682-360-5387</ListItemContent>
                   </ListItem>
                   <ListItem>
                    <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}><i className=" fa fa-envelope" aria-hidden="true"/>swati.mani@mavs.uta.edu</ListItemContent>
                   </ListItem>
                   <ListItem>
                    <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}><i className=" fa fa-skype" aria-hidden="true"/>My Skype id: live:swatimani16</ListItemContent>
                   </ListItem>
                </List>
            </div>



            </Cell>
        </Grid>
        </div>
    );
}

export default Contact;