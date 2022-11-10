const isLiked = (likes, restaurant) => {
    console.log("Likes: ", likes, restaurant.name)
    return likes.some(like => like.name === restaurant.name)
}

export { isLiked };