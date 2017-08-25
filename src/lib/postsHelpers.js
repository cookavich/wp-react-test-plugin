/**
 * Returns a post from the posts collection based on ID
 * @param list array
 * @param id integer
 */
export const findById = (list, id) => list.find(item => item.id === id);

/**
 * Removes a post from the posts collection
 * @param list
 * @param id
 * @returns {[*,*]}
 */
export const removePost = (list, id) => {
    // index of the post to remove
    const removeIndex = list.findIndex(item => item.id === id);
    // returns a new array by returning the sliced array
    // from right before the removed item and immediately after
    return [
        ...list.slice(0, removeIndex),
        ...list.slice(removeIndex + 1)
    ]
};

/**
 * Updates a post in the posts collection
 * @param list
 * @param updated
 * @returns {[*,*,*]}
 */
export const updatePost = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id);
    // inserts the updated post in the array at its original index
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
};