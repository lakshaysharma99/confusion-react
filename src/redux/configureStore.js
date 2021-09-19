import { createStore, combineReducers } from "redux";
import { Dishes } from "./dishesh";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            //this is how combineReducer function 
            //maps the reducers to the properties
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}