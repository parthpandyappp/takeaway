import { restaurantReducer, initRestaurant } from "../reducers";
import { useContext, createContext, useReducer } from "react";

const restaurantContext = createContext(null);

const RestaurantManager = ({ children }) => {

    const [state, dispatch] = useReducer(restaurantReducer, initRestaurant)
    console.log(state)


    return (
        <restaurantContext.Provider value={{ state, dispatch }}>
            {children}
        </restaurantContext.Provider>
    )
}

const useRestaurantManager = () => useContext(restaurantContext);
export { useRestaurantManager, RestaurantManager };