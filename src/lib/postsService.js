import axios from 'axios';

const apiUrl = 'http://localhost/wp-json/wp/v2/posts';

/**
 * Retrieves the five most recent posts
 */
export const getPosts = () => axios.get(`${apiUrl}?per_page=5&_embed`);

/**
 * Deletes a post based on id
 * @param id
 */
export const deletePost = (id) => {
    axios.delete(`${apiUrl}/${id}`, {headers: {'X-WP-Nonce': WpSettings.nonce}});
}

/**
 * Saves an updated post title
 * @param post
 */
export const savePost = (post) => {
    axios.put(`${apiUrl}/${post.id}`, {'title': post.title.rendered}, {headers: {'X-WP-Nonce': WpSettings.nonce}})
}