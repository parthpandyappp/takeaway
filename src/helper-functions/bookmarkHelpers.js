const isBookmarked = (bookmarks, restaurant) => {
    return bookmarks.some((bookmark) => bookmark.name === restaurant.name)
}

export { isBookmarked };