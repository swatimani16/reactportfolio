import React from "react";
import {Grid,Cell} from "react-mdl"



function Education(props){
    return(
    <div>
        <Grid>
            <Cell col={4}>
    <p>{props.startYear}-{props.endYear}</p>
            </Cell>
            <Cell col={8}>
                <h4 style={{marginTp:"0px"}}>{props.schoolName}</h4>
                <p>{props.schoolDescription}</p>
            </Cell>
        </Grid>
    </div>
    )
}

export default Education;