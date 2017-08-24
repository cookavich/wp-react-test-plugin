import React from 'react';
import {toggleEditPost} from '../lib/postsHelpers';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            newTitle: this.props.post.title.rendered
        };
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
            <div>
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
                :   <h1><a onClick={(event) => this.toggleEditPost}>{this.props.post.title.rendered}</a></h1>}

                {/*{this.props.post.featured_media*/}
                {/*? <img src={this.props.post._embedded['wp:featuredmedia'][0].media_details.sizes["full"].source_url}/>*/}
                {/*: null}*/}
                <div dangerouslySetInnerHTML={{__html: this.props.post.content.rendered}}/>
                <a onClick={(event) => this.props.handleRemove(this.props.post.id, event)}>Delete Post</a>
            </div>
        )
    }
}