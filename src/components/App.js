import React from 'react';
import './App.css';
import {getPosts, deletePost} from '../lib/postsService'
import {removePost} from '../lib/postsHelpers';

export default class App extends React.Component {
    constructor(props) {
    	super(props);
    	this.state = {
    		posts: []
		};
	}

	componentDidMount() {
        getPosts()
			.then(res => {
                this.setState({
                    posts: res.data
                })
            });
	}

	handleRemove(id, event){
    	event.preventDefault();
    	const updatedPosts = removePost(this.state.posts, id);
    	this.setState({posts: updatedPosts});
    	deletePost(id);
	}

	render() {
		return (
			<div>
				{this.state.posts && this.state.posts.map((post, index) => (
					<div key={index}>
						<h1>{post.title.rendered}</h1>
						<a onClick={this.handleRemove.bind(this, post.id)}>Delete Post</a>
					</div>
				))}
			</div>
		);
	}
}