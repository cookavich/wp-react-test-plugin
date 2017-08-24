export const findById = (list, id) => list.find(item => item.id === id);

export const removePost = (list, id) => {
    const removeIndex = list.findIndex(item => item.id === id);
    return [
        ...list.slice(0, removeIndex),
        ...list.slice(removeIndex + 1)
    ]
};

export const updatePost = (list, updated) => {
    const updatedIndex = list.findIndex(item => item.id === updated.id);
    return [
        ...list.slice(0, updatedIndex),
        updated,
        ...list.slice(updatedIndex + 1)
    ]
};