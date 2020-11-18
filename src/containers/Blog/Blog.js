import React, { Component } from 'react';
// import axios from 'axios';

// importing the axios instance from axios file
import axios from '../../axios'; 

import Post from '../../components/Post/Post';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
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
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => this.setState({selectedPostId: id});

    render () {
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
        return (
            <div className="Blog">
                <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">New Post</a>
                        </li>
                    </ul>
                </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;