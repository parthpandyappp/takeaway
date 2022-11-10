import { Fragment } from "react";
import { useRestaurantManager } from "../context";
import { isBookmarked, isLiked } from "../helper-functions";

const MapCard = ({ restaurant }) => {
  const { state, dispatch } = useRestaurantManager();

  return (
    <Fragment>
      <div style={{ border: "1px solid black", padding: "1rem" }}>
        {restaurant.name}
        <button onClick={()=>dispatch({type:"REMOVE_RESTAURANT", payload:restaurant.name})}>Remove</button>
        {isBookmarked(state.bookmarks, restaurant) ? (
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_BOOKMARKS",
                payload: restaurant.name,
              })
            }
          >
            Remove from Bookmarks
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "ADD_BOOKMARK", payload: restaurant })
            }
          >
            Bookmark
          </button>
        )}
        {isLiked(state.likes, restaurant) ? (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_LIKES", payload: restaurant.name })
            }
          >
            Remove from likes
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_LIKES", payload: restaurant })
            }
          >
            Like
          </button>
        )}
        <iframe
          title="map"
          width="800"
          height="450"
          src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B"ds2.name2":"${restaurant.name}"%7D`}
        ></iframe>
      </div>
    </Fragment>
  );
};

export { MapCard };
