import React from "react"
import { Tabs, Tab, Grid, Cell, Card,CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        activeTab: 0
    };
    }
    
    
     toogleCategories(){
       //Django Projects
        if (this.state.activeTab === 0){
            return(
            <div className = "projects-grid">
                    {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://i2.wp.com/www.skysilk.com/blog/wp-content/uploads/2017/11/python-django-logo.jpg?w=1280&ssl=1) center / cover'}} ></CardTitle>
            <CardText>
              <strong style={{fontSize:'20px'}}>Django-Covid Tracker Web Application</strong>
              <br /> <br/>
              Used the Django framework to develop a Covid Tracker web application which has a search option where on entering the country in the search bar you can view the number of cases, recovered cases, number of deaths. Apart from viewing the numbers you can also visualize using Bar-charts, Pie-charts the statistics which was built using the Plotly library of Python.<br />
            </CardText>
            <CardActions border>
              <Button colored style={{textAlign:"center"}}><a href="https://mydjangocovidapp.herokuapp.com/ ">View Application</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br/>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://i2.wp.com/www.skysilk.com/blog/wp-content/uploads/2017/11/python-django-logo.jpg?w=1280&ssl=1) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>Django-E-commerce Web Application</strong>
              <br /> <br/>
              
              Used the Django framework to develop an E-commerce web application based on a wireframe. Designed the front-end alone. Code can be viewed on Github<br /><br /><br /><br /><br /><br />
            </CardText>
            <CardActions border>
              <Button colored style={{textAlign:"center"}}><a href="https://github.com/swatimani16/django-ecommerce-website ">View Application Code</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br/>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}><br/>
            <CardTitle style={{color: 'white', height: '100px', background: 'url(https://i2.wp.com/www.skysilk.com/blog/wp-content/uploads/2017/11/python-django-logo.jpg?w=1280&ssl=1) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>Django-Blog Web application</strong>
              <br /> <br/>
              Used the Django framework to develop a simple Blog web application using Sqlite 3 as the database and with the use of static files. 
              A login was created for the user and authentication was incorporated.Sign up form was designed for new users. Updation of user account as possible as well as uploading of images was added a field for the users.
              Models were created and the migrated into the database as Django uses ORM. Models had a filed for storing the images corresponding to each user profile.
              Pagination was integrated in the application inorder to display only a certain number of blogs on a single page.
              Code can be viewed on Github
            </CardText>
            <CardActions border>
              <Button colored style={{textAlign:"center"}}><a href="https://github.com/swatimani16/Django-blogapp ">View Application Code</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <br/>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}><br/>
            <CardTitle style={{color: 'white', height: '100px', background: 'url(https://i2.wp.com/www.skysilk.com/blog/wp-content/uploads/2017/11/python-django-logo.jpg?w=1280&ssl=1) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>Django-Web Scrapping Cnn Financial Website</strong>
              <br /> <br/>
              Used the Django framework to develop a web application which performed <strong>Web Scrapping</strong> on the cnn financial website using the Beautiful soup module 
              of Python, requests and urllib libraries in python to extract data from the website using the HTML elements, tags and classes, ids.
              The page will auto-refresh every 5 seconds to provide the most accurate reading from the website.
              Apart from the statistics in numbers, Plotting of the various charts is also done to view it graphically. Currently working on analysing and making candle charts to provide a more easy user interface.
              Code can be viewed on Github
            </CardText>
            <CardActions border>
              <Button colored style={{textAlign:"center"}}><a href="https://github.com/swatimani16/django-stockapp ">View Application Code</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
          )

        }
        // ReactJs Projects
        else if(this.state.activeTab === 1){
          return(
            <div className = "projects-grid">
          {/* Portfolio app */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbqcPellfs9fFx0D5Uxaipxw5vsJtxQQzKqUcnlM8dPYY7DJY8) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>ReactJs- Personal Portfolio</strong>
              <br /> <br/>
              Developed a personal portfolio website using React framework, react-mdl components and CSS for styling the various components.
              Incorporated routing using the react-router-dom links inorder to route through the website(Links, BrowserRoutering and Switch).
              The routes available are to the resume, projects, about me, contact and home page.
              The application is deployed onto Github using gh-pages.<br /><br /><br /><br /><br />
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/swatimani16/reactportfolio/tree/master">View Code</a></Button>
              <Button colored><a href="http://swatimani16.github.io/reactportfolio">View Portfolio</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
            <br/>
          {/* Recipe builder app 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbqcPellfs9fFx0D5Uxaipxw5vsJtxQQzKqUcnlM8dPYY7DJY8) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>ReactJs- Recipe Builder application</strong>
              <br /> <br/>
              Designed and Developed a Recipe Builder application using <strong>ReactJs by fetching data from an external API</strong>.
              There is a search bar where-in you can enter an ingredient name, upon hitting the search button you will get a result of all the recipes that can be made using that one ingredient.
              The application is deployed onto Github using gh-pages.<br /><br /><br /><br /><br /><br />
            </CardText>
            <CardActions border>
            <Button colored><a href="https://github.com/swatimani16/recipeapp-react">View Code</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
          )
        }

        //Full- stack Web Application
        else if(this.state.activeTab === 2){
        return(
          <div className = "projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', height: '200px', background: 'url(https://i2.wp.com/www.skysilk.com/blog/wp-content/uploads/2017/11/python-django-logo.jpg?w=1280&ssl=1) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>Quiz Web Application- <br/>Angular-Django REST</strong>
              <br /> <br/>
              Designed and developed a Quiz Web application using <strong>Angular 10 as the front-end and Django REST framework to design APIs</strong> for fetching the data from the backend.<br/>
              Used Sqlite 3 as the database for development and PostgreSQL during production while deploying the web application on Heroku.<br/>
              The home page shows a navigation bar on the top where the user on clicking the Open Quiz button can choose the category of quiz he wants to attempt,
              and choose the Single option from the drop down box, upon selection, the quiz of the choosen criteria will open up.<br/>
              After every question there is a submit button, on clicking that a dialog box will pop-up displaying the answer you choose, whether the answer was correct/incorrect<br/>
              the actual correct answer as well as the number of questions you got correct uptil that time on that particular quiz.

              <br /><br />
            </CardText>
            <CardActions border>
            <Button colored><a href="https://quizappangular.herokuapp.com/">View Application</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          </div>
        )
        }
        // Academic Projects
        else if(this.state.activeTab === 3){
            return(
                <div className = "projects-grid">
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://images.yourstory.com/production/document_image/mystoryimage/tfbjfd5b-Web-Application-Development.jpg?fm=png&auto=format&w=800) center / cover'}} ></CardTitle>
            <CardText>
            <strong style={{fontSize:'20px'}}>Website for a Spanish NGO</strong>
              <br /> <br/>
              Developed a web application for a Spanish NGO using HTML,CSS,Javascript. Re-designed the website using MVC codeignitor. <br />
              Volunteers were able to donate, participate in events as well as volunteer, agents had the privilage to Add, Delete, Update any event. A blog page using Wordpress was also a part of the website.<br />
              Validation of both Client-side and Server-side was done using Javascript.

            </CardText>
            <CardActions border>
            <Button colored><a href="">View Application Code</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <br/>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuj45p1fkSf9ZogK1eJCCSpfmvoCPVz28uWhvUsolUatcQDlQ5) center / cover'}} > </CardTitle>
                    <CardText>
                    <strong style={{fontSize:'20px'}}>Implementation of a distributed File system</strong>
                    <br /> <br/>
                    • One server and Three Clients, clients designated a directory to behave as a shared directory over their system, whenever a file is added to any of the clients directory, it will be automatically detected and notified to the other clients and added to their shared directory.
                    <br />• If any client modifies a file in their directory, the update was made in the shared directory as well.
                    <br />• If a file is deleted in any client’s directory, then a vote request was sent, if all the clients vote a ‘yes’, then the delete operation was committed otherwise the file was restored back in the folder from where it was deleted. An additional aspect was that of a timer being added, which if expired then the Server itself would commit the delete operation and the file would be deleted from all the clients.
                    <br />• User-name was to be entered and checked for duplication, then displayed on the Tkinter GUI.<br/>
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/swatimani16/distributed-Systems">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
         <br/>
         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} ></CardTitle>
                    <CardText>
                    <strong style={{fontSize:'20px'}}>Secure Programming</strong>
                    <br /> <br/>
                    • Learnt about the major Security bugs in software design and code, solutions to fix the bugs, usage static analysis tools.
                <br />• Hands-on practice of Buffer Overflow, Format String Attack, Input validation, Error Handling and protection mechanisms.
                <br />• Performed Attack on sample websites (Cross-site Scripting (XSS), Cross-site Shell Request Forgery), and found countermeasures to prevent the attack.
                <br />• SQL Injection: Various ways to Attack on sample database and prevention techniques to make the databases secure and reliable.<br/><br/><br/>
            </CardText>
            <CardActions border>
              {/* <Button colored><a href="https://github.com/swatimani16/distributed-Systems">GitHub</a></Button> */}
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          </div>
            )
        }
        // AWS- EC2
        else if(this.state.activeTab === 4){
          return(
          <div>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} ></CardTitle>
          <CardText>
          <strong style={{fontSize:'20px'}}>Python-Flask Deployed on AWS EC2</strong>
                    <br /> <br/>
          Developed a Python Flask Web Application on Titanic dataset on AWS EC2 and Visualized the Earthquake dataset.<br />
          Performed CRUD operations on AWS RDS, SQLite.<br />
          AWS Autoscaling->Loading traffic with Jmeter, Scaling up and down the AWS EC2 instances based on the generated traffic.

          </CardText>
          <CardActions border>
            <Button colored><a href="https://github.com/swatimani16/AWS">GitHub</a></Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
          </Card>
          </div>
          )
        }
        
        // Machine learning and Data Mining Projects
        else if(this.state.activeTab === 5){
            return(
                <div className = "projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Kmeans Clustering</CardTitle>
                    <CardText>
                    Developed the Kmeans Clustering algorithm from scratch without using any of the inbuilt libraries.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/swatimani16/KMeans">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
           
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShduV8SLDuC5hbuxOMxfVy1DMxrmZOVNgimb3IXx5FfKXoyy1N) center / cover'}} ></CardTitle>
                    <CardText>
                    Developed the Kernel Density Function from scratch without using any of the inbuilt libraries.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/swatimani16/kernel-density-function">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq7dMbNP6WVOJAReFZatfzaePx-bW3bdI_CGTvtvZSc7PI9olP) center / cover'}} ></CardTitle>
                    <CardText>
                    Developed the Naive Bayes algoritm from scratch using numpy,pandas, Matplotlib.<br/>
                    Calculated the Area Under the curve(AUC),ROC plotting.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/swatimani16/kernel-density-function">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJONmxVJTVCaeNKk8uEBMd-cEfhDAmelwNDCuNz0eJIMUg-rRT) center / cover'}} ></CardTitle>
                    <CardText>
                    Developed the Logistic regression online and batch process using numpy,pandas.<br/>
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/swatimani16/Logistic-Regression-Online-Process">GitHub-Online process</a></Button>
              <Button colored><a href="https://github.com/swatimani16/Logistic-Regression-Batch-Process">GitHub-Batch process</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                     <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXVmQALrlHUsXQF7OeA8e47CVRpEpuEC3Bkp-fuSSD5CRSunJj) center / cover'}} >Polynomial Regression</CardTitle>
                    <CardText>
                    Developed the Polynomial regression using numpy,Matplotlib.<br/>
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/swatimani16/Polynomial-Regressionline-Process">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
            )
        }
    }
    render(){
    return(
        <div>
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
            <Tab>Python - Web Applications(Django)</Tab>
            <Tab>ReactJs</Tab>
            <Tab>Full-stack Web application</Tab>
            <Tab>Academic Projects</Tab>
            <Tab>AWS EC2</Tab>
            <Tab>Data science Projects</Tab>
            </Tabs>
            
                <Grid >
                <Cell col={12}>
                   <div className="content">
                   {this.toogleCategories()}
                       </div>
                </Cell>
                </Grid>
        </div>
    );
}
}

export default Projects;