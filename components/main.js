import React from "react";
import {Switch, Route} from "react-router-dom";
import Landingpage from "./Landingpage";


const Main = () => (
<Switch>
    <Route exact path = "/" component={Landingpage}/>
    


</Switch>
);


export default Main;