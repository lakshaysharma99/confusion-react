import { createStore, combineReducers, applyMiddleware } from "redux";
import { Dishes } from "./dishesh";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            //this is how combineReducer function 
            //maps the reducers to the properties
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}