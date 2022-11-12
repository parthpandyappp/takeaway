const isLiked = (likes, restaurant) => {
    return likes.some(like => like.name === restaurant.name)
}

export { isLiked };