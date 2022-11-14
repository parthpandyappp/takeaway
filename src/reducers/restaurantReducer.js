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
        case "REMOVE_RESTAURANT":
            return {
                ...state, restaurants: state.restaurants.filter(restaurant => restaurant.name !== action.payload)
            };
        case "ADD_BOOKMARK":
            return {
                ...state, restaurants: state.restaurants.filter(restaurant => restaurant.name !== action.payload.name), bookmarks: [
                    ...state.bookmarks, action.payload
                ]
            };
        case "REMOVE_FROM_BOOKMARKS":
            return {
                ...state, bookmarks: state.bookmarks.filter(bookmark => bookmark.name !== action.payload)
            }
        case "ADD_TO_LIKES":
            return { ...state, likes: [...state.likes, action.payload] }
        case "REMOVE_FROM_LIKES":
            return { ...state, likes: state.likes.filter(like => like.name !== action.payload) }
        default:
            return state;
    }
}

const initRestaurant = {
    restaurant_name: "",
    restaurants: [],
    bookmarks: [],
    likes: []
}

export { restaurantReducer, initRestaurant }