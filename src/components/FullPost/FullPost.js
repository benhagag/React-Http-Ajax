import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    /**
     * We will use componentDidUpdate because we update it and mount it!
     */
    componentDidUpdate(){
        if(this.props.id){
            /**
             * Because we update the component each time we update the state we want to prevent the Http request from calling
             */
            if(!this.state.loadedPost 
                ||
                (
                    this.state.loadedPost 
                    && 
                    this.state.loadedPost.id !== this.props.id
                )
            ){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
                .then(response =>{
                    // console.log(response);
                    this.setState({loadedPost: response.data});
                });
            }
           
        }
    }

    deletePostHandler = () => {
        axios.delete(
            'https://jsonplaceholder.typicode.com/posts/'+this.props.id
        ).then(response=>{
            console.log(response);
        });
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        /**
         * Only when to componentDidupdate and the HTTP call will finish to update this.state.loadedPost
         * Then we want to render this post otherwise this.state.loadedPost will be null and that will be an error
         */
        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;