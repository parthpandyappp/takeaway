const restaurantReducer = (state, action) => {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, restaurant_name: action.payload };
        case "ADD_RESTAURANT":
            return {
                ...state,
                restaurants: [
                    ...state.restaurants,
                    { name: action.payload, created: new Date() },
                ],
            };
        default:
            return state;
    }
}

const initRestaurant = {
    restaurant_name: "",
    restaurants: [],
    bookmarks: []
}

export { restaurantReducer, initRestaurant }