// POST 관련 액션
import faker from 'faker';
import shortid from 'shortid';

export const LOAD_POST_REQUEST ='LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS='LOAD_POST_SUCCESS';
export const LOAD_POST_FAIL='LOAD_POST_FAIL';


export const ADD_POST_REQUEST ='ADD_POST_REQUEST';
export const ADD_POST_SUCCESS='ADD_POST_SUCCESS';
export const ADD_POST_FAIL='ADD_POST_FAIL';

export const REMOVE_POST_REQUEST='REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS='REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAIL='REMOVE_POST_FAIL';


// COMMENT


export const ADD_COMMENT_REQUEST ='ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS='ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL='ADD_COMMENT_FAIL';


// Dummy data generator
export const generateDummyPost=(number)=> Array(number).fill().map((v,i)=>({
    id:shortid.generate(),
    User:{
        id:shortid.generate(),
        nickname:faker.name.findName()
    },
    content:faker.lorem.paragraph(),
    Images:[{
        id:shortid.generate(),
        src:faker.image.image()
    }],
    Comments:[{
        User:{
            id:shortid.generate(),
            nickname:faker.name.findName()
        },
        content:faker.lorem.sentence(),
    }],
}))
