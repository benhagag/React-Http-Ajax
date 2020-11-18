import React, { Component } from 'react';

// importing the axios instance from axios file
import axios from '../../../axios';
import Post from '../../../components/Post/Post'; 

import './Posts.css';

class Posts extends Component{

    state = {
        posts: []
    };

    componentDidMount(){
        axios.get('/posts')
            .then(reposne => {
                const posts = reposne.data.slice(0, 4); // Get the 4 first object data
                const updatePosts = posts.map(post=>{
                    return {
                        ...post, //spread operator
                        author: 'Ben'
                    }
                })
                // Call this.setState inside .then()
                this.setState({posts: updatePosts});
                // console.log(reposne);
            })
            .catch(error => {
                // console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => this.setState({selectedPostId: id});

    render(){

        let posts = <p style={{textAlign: 'center'}}>Somehting went wrong!</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post =>{
                return <Post 
                            title={post.title} 
                            author={post.author}
                            key={post.id}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
            });
        }

        return(
            <section className="Posts">
             {posts}
            </section>
        );
    }
}

export default Posts;