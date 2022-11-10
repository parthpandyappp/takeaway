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
        case "ADD_BOOKMARK":
            return {
                ...state, bookmarks: [
                    ...state.bookmarks, action.payload
                ]
            };
        case "REMOVE_FROM_BOOKMARKS":
            return {
                ...state, bookmarks: state.bookmarks.filter(bookmark => bookmark.name !== action.payload)
            }
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