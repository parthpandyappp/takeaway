import { Fragment } from "react";
import { useRestaurantManager } from "../context";
import { isBookmarked, isLiked } from "../helper-functions";
import {
  BsBookmark,
  BsHeart,
  BsFillBookmarkFill,
  BsFillHeartFill,
} from "react-icons/bs";
import { RiDeleteBin7Line, RiRestaurant2Line } from "react-icons/ri";

const MapCard = ({ restaurant }) => {
  const { state, dispatch } = useRestaurantManager();

  return (
    <Fragment>
      <div class="flex justify-center items-center mt-3">
        <div class="p-2 border-2 border-solid w-3/6 rounded">
          <div class="flex flex-col">
            <div class="flex  justify-between">
              <h1 class="flex gap-1 items-center text-xl">
                <RiRestaurant2Line />
                {restaurant.name}
              </h1>
              <div class="flex gap-1">
                {isBookmarked(state.bookmarks, restaurant) ? (
                  <BsFillBookmarkFill
                    className="text-xl text-button cursor-pointer"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_BOOKMARKS",
                        payload: restaurant.name,
                      })
                    }
                  />
                ) : (
                  <BsBookmark
                    className="text-xl text-button cursor-pointer"
                    onClick={() =>
                      dispatch({ type: "ADD_BOOKMARK", payload: restaurant })
                    }
                  />
                )}

                {isLiked(state.likes, restaurant) ? (
                  <BsFillHeartFill
                    className="text-xl text-button cursor-pointer"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_LIKES",
                        payload: restaurant.name,
                      })
                    }
                  />
                ) : (
                  <BsHeart
                    className="text-xl text-button cursor-pointer"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_LIKES", payload: restaurant })
                    }
                  />
                )}
                <RiDeleteBin7Line
                  className="text-xl text-red cursor-pointer"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_RESTAURANT",
                      payload: restaurant.name,
                    })
                  }
                />
              </div>
            </div>
            <iframe
              title="map"
              src={`https://datastudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B"ds2.name2":"${restaurant.name}"%7D`}
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { MapCard };
