import React from 'react';

/**
 *  withRouter  - 
 * Is a higher order component which we use by wrapping our export with it
 * It allows us to get the Router props from closest route's match (Posts)
 * */ 
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
    console.log(props);
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>

    );
}
 
export default withRouter(post);