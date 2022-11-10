const isBookmarked = (bookmarks, restaurant) => {
    console.log("BOOK: ", bookmarks, restaurant)
    return bookmarks.some((bookmark) => bookmark.name === restaurant.name)
}

export { isBookmarked };