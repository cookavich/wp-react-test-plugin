import React from 'react';
import Radium from 'radium';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            errorMessage: '',
            newTitle: this.props.post.title.rendered
        };
        this.toggleEditPost = this.toggleEditPost.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * Toggles whether or not a post is being edited.
     * Needed for setting UI state.
     * @param event
     */
    toggleEditPost(event) {
        event.preventDefault();
        this.setState({editing: !this.state.editing});
    }

    /**
     * Keeps track of the updated title
     * @param event
     */
    handleChange(event) {
        this.setState({newTitle: event.target.value})
    }

    render() {
        return (
            <div className="post" style={PostStyles.post}>
                <div style={PostStyles.titleContainer}>

                {this.state.editing
                ?    <form
                        style={PostStyles.titleForm}
                        onSubmit={(event) => {
                        this.props.handleUpdate(this.props.post.id, this.state.newTitle, event);
                        this.toggleEditPost(event);
                    }}>
                        <input value={this.state.newTitle} onChange={this.handleChange} required />
                        <input
                            type="submit"
                            value="Save Title"
                            className="button button-primary"
                            style={PostStyles.savePost}
                        />
                    </form>
                :   <h1 style={PostStyles.title}>{this.props.post.title.rendered}</h1>}

                    <div>
                    {this.state.editing
                    ?   null
                    :   <a onClick={this.toggleEditPost}
                            className="button activate"
                            style={PostStyles.editPost}>
                            Edit Title
                        </a>}

                        <a
                            onClick={(event) => this.props.handleRemove(this.props.post.id, event)}
                            className="button"
                            style={PostStyles.deletePost}>
                            Delete Post
                        </a>
                    </div>

                </div>

                {this.props.post.featured_media
                ?   <img style={PostStyles.featuredImage}
                        className="featured-image"
                        src={this.props.post._embedded['wp:featuredmedia'][0].source_url} />
                :   null}

                <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}/>
            </div>
        )
    }
}

export default Post = Radium(Post);

const PostStyles = {
    post: {
        padding: 16,
        maxWidth: 700
    },
    titleContainer: {
        paddingTop: 16,
        paddingBottom: 16
    },
    title: {
      paddingRight: 24,
    },
    titleForm: {
        paddingBottom: 16,
    },
    featuredImage: {
        width: '70%',
        height: 'auto'
    },
    deletePost: {
        color: '#a00',
        textDecoration: 'none',
        borderColor: 'transparent',
        boxShadow: 'none',
        background: '0 0',
        ':hover': {
            background: '#d54e21',
            color: '#fff',
            borderColor: '#d54e21',
        }
    },
    editPost: {
        marginRight: 16
    },
    savePost: {
        marginLeft: 16
    }
};