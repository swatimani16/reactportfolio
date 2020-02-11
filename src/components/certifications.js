import React from "react"
import {Grid,Cell} from "react-mdl"

function Certifications(props){
     return(
        <div>
        <Grid>
            <Cell col={6}>
                <ul>
               <li>{props.name}</li>
               </ul>
            </Cell>
            <Cell col={6}>
                <h5 style={{marginTp:"0px",display: props.url ? "block" : "none"}}>Url</h5>
                <a href={props.url}>{props.url}</a>
            </Cell>
        </Grid>
    </div>
     )
}

export default Certifications;