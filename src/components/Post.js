import React from 'react';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            newTitle: this.props.post.title.rendered
        };
        this.toggleEditPost = this.toggleEditPost.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEditPost(event) {
        event.preventDefault();
        this.setState({editing: !this.state.editing});
    }

    handleChange(event) {
        this.setState({newTitle: event.target.value})
    }

    render() {
        return (
            <div className="post" style={PostStyles.post}>
                {this.state.editing
                ?    <form onSubmit={(event) => {
                        this.props.handleUpdate(this.props.post.id, this.state.newTitle, event);
                        this.toggleEditPost(event);
                    }}>
                        <label>
                            New Title:
                            <input value={this.state.newTitle} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Save Title" />
                    </form>
                :   <h1><a onClick={ this.toggleEditPost}>{this.props.post.title.rendered}</a></h1>}

                {this.props.post.featured_media
                ?   <img
                        style={PostStyles.featuredImage}
                        className="featured-image"
                        src={this.props.post._embedded['wp:featuredmedia'][0].source_url}
                    />
                :   null}

                <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}/>

                <a onClick={(event) => this.props.handleRemove(this.props.post.id, event)}>Delete Post</a>
            </div>
        )
    }
}

const PostStyles = {
    post: {
        padding: '16px'
    },
    featuredImage: {
        maxWidth: '100%'
    }
};