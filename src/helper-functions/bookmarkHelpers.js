const isBookmarked = (bookmarks, restaurant) => {
    return bookmarks.some((bookmark) => bookmark === restaurant)
}

export { isBookmarked };