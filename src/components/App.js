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

    /**
	 * Removes the post
     * @param id
     * @param event
     */
	handleRemove(id, event) {
    	event.preventDefault();
    	const updatedPosts = removePost(this.state.posts, id);
    	this.setState({posts: updatedPosts});
    	deletePost(id);
    	// refreshes our collection of posts after one is deleted
        getPosts()
            .then(res => {
                this.setState({
                    posts: res.data
                })
            });
	}

    /**
	 * Updates the post title
     * @param postId
     * @param postTitle
     * @param event
     */
	handleUpdate(postId, postTitle, event) {
        event.preventDefault();
		const updatedPost = findById(this.state.posts, postId);
		// updates the title of the post
		updatedPost.title.rendered = postTitle;
        const updatedPosts = updatePost(this.state.posts, updatedPost);
		this.setState({posts: updatedPosts});
		savePost(updatedPost);
	}

	render() {
		return (
			<div className="posts wp-core-ui" style={PostsStyles.posts}>
				{this.state.posts && this.state.posts.map((post, index) => (
					<Post
						key={post.id}
						post={post}
						handleRemove={this.handleRemove}
						handleUpdate={this.handleUpdate}
					/>
				))}
			</div>
		);
	}
}

const PostsStyles = {
    posts: {
    	padding: 16,
        display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	}
};