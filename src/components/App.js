import React from 'react';
import './App.css';
import {getPosts, deletePost, savePost} from '../lib/postsService'
import {findById, removePost, updatePost} from '../lib/postsHelpers';
import Post from "./Post";

export default class App extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		posts: []
		};
    	this.handleRemove = this.handleRemove.bind(this);
    	this.handleUpdate = this.handleUpdate.bind(this);
	}

	componentDidMount() {
        getPosts()
			.then(res => {
                this.setState({
                    posts: res.data
                })
            });
	}

	handleRemove(id, event) {
    	event.preventDefault();
    	const updatedPosts = removePost(this.state.posts, id);
    	this.setState({posts: updatedPosts});
    	deletePost(id);
	}

	handleUpdate(postId, postTitle, event) {
        event.preventDefault();
        console.log('posts',this.state.posts);
		const updatedPost = findById(this.state.posts, postId);
		updatedPost.title.rendered = postTitle;
        const updatedPosts = updatePost(this.state.posts, updatedPost);
		this.setState({posts: updatedPosts});
		savePost(updatedPost);
	}

	render() {
		return (
			<div>
				{this.state.posts && this.state.posts.map((post, index) => (
					<Post
						key={index}
						post={post}
						handleRemove={this.handleRemove}
						handleUpdate={this.handleUpdate}
					/>
				))}
			</div>
		);
	}
}