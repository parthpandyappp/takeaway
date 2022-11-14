import toast from "react-hot-toast";

const toastStyle = {
    backgroundColor: "#b8c1ec",
    padding: "16px",
    color: "#232946",
}

const notifyAdded = (restaurant) =>
    toast.success(
        (t) => (
            <span>
                <b>Map of {restaurant} has been added to the dashboard</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemoved = (restaurant) =>
    toast.success(
        (t) => (
            <span>
                <b>Map of {restaurant} has been removed from the dashboard</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemovedFromBookmarks = (restaurant) =>
    toast.success(
        (t) => (
            <span>
                <b>Map of {restaurant} has been removed from Bookmarks</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyAddedToBookmarks = (restaurant) =>
    toast.success(
        (t) => (
            <span>
                <b>Map of {restaurant} has been added to Bookmarks</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyRemovedFromLikes = (restaurant) =>
    toast.success(
        (t) => (
            <span>
                <b>Map of {restaurant} has been removed from Likes</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyAddedToLikes = (restaurant) =>
    toast.success(
        (t) => (
            <span>
                <b>Map of {restaurant} has been added to Likes</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyToLogin = () =>
    toast.success(
        (t) => (
            <span>
                <b>Login to add maps to the dashboard</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyError = (err) =>
    toast.error(
        (t) => (
            <span>
                <b>{err}</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyLoggedOut = (user) =>
    toast.success(
        (t) => (
            <span>
                <b>{user} logged out Succesfully</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );

const notifyLoggedIn = (user) =>
    toast.success(
        (t) => (
            <span>
                <b>Succesfully signed in as {user}</b>
            </span>
        ),
        {
            style: toastStyle
        }
    );


export { notifyAdded, notifyRemoved, notifyAddedToBookmarks, notifyRemovedFromBookmarks, notifyAddedToLikes, notifyRemovedFromLikes, notifyToLogin, notifyError, notifyLoggedOut, notifyLoggedIn }