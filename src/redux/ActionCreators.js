import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { actions } from 'react-redux-form';
import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});