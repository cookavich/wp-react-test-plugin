import {findById, removePost, updatePost} from './postsHelpers';

test('findById should return an item that has a particular ID', () => {
    const startPosts = [
        {id:1, title: 'one'},
        {id:2, title: 'two'},
        {id:3, title: 'three'}
    ];
    const targetPost = {id:2, title: 'two'};
    const result = findById(startPosts, 2);
    expect(result).toEqual(targetPost)

});

test('updatePost should update an item by id', () => {
    const startPosts = [
        {id:1, title: 'one'},
        {id:2, title: 'two'},
        {id:3, title: 'three'}
    ];
    const updatedPost = {id:2, name: 'four'};
    const expectedPosts = [
        {id:1, title: 'one'},
        {id:2, name: 'four'},
        {id:3, title: 'three'}
    ];

    const result = updatePost(startPosts, updatedPost);

    expect(result).toEqual(expectedPosts)
})

test('updatePost should not mutate the original array', () => {
    const startPosts = [
        {id:1, title: 'one'},
        {id:2, title: 'two'},
        {id:3, title: 'three'}
    ];
    const updatedPost = {id:2, name: 'four'};

    const result = updatePost(startPosts, updatedPost);

    expect(result).not.toBe(startPosts)
})

test('removePost should remove an item by id', () => {
    const startPosts = [
        {id:1, title: 'one'},
        {id:2, title: 'two'},
        {id:3, title: 'three'}
    ];
    const targetId = 2;
    const expectedPosts = [
        {id:1, title: 'one'},
        {id:3, title: 'three'}
    ];
    const result = removePost(startPosts, targetId);

    expect(result).toEqual(expectedPosts)
})

test('removePost should not mutate the original array', () => {
    const startPosts = [
        {id:1, title: 'one'},
        {id:2, title: 'two'},
        {id:3, title: 'three'}
    ];
    const targetId = 2;
    const result = removePost(startPosts, targetId);

    expect(result).not.toBe(startPosts)
})
