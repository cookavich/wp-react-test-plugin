import axios from 'axios';

const apiUrl = 'http://localhost/wp-json/wp/v2/posts';

export const getPosts = () => axios.get(`${apiUrl}?per_page=5`);

export const deletePost = (id) => {
    axios.delete(`${apiUrl}/${id}`, {headers: {'X-WP-Nonce': WpSettings.nonce}});
};