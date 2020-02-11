import React from "react"
import {Grid, Cell, List,ListItem,ListItemContent} from "react-mdl"

function Contact(){
    return(
        <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>
                <h2>Swati Mani</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJ9ThJvZlkyfYDy2Fb6-2eC92nUZP01SPXFsG13EZ_6FnYIg_D" alt="avatar" style={{height: "250px"}}/>
                <p style={{width: "75%", margin:"auto", paddingTop:"1em"}}>
                Master in Computer Science student specializing in Artificial Intelligence and Databases and graduating in May 2020.<br />
I am always eager to learn new technologies and gain knowledge.<br />
<br />
Domain skills:         Cloud Computing|Machine learning<br />
Programming Languages: Python, Java (core)<br />
Cloud servers:         AWS,Azure<br />
Web technologies:      HTML,CSS,NodeJs, JavaScript, ReactJs<br />
GUI:                   Tkinter, Java Swings<br />
Databases:             SQL (MySql)<br />
Frameworks:            Flask<br />
Tools:                 Git,Jmeter,Xampp,Eclipse,Pycharm<br />
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