import axios from "axios";
import { useRestaurantManager } from "../context";
import { useState, useEffect, Fragment } from "react";

const Search = () => {
  const { state, dispatch } = useRestaurantManager();
  const [restaurants, setRestaurants] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view",
          headers: {
            authorization: "Bearer keyfXgn8PL6pB3x32",
          },
        });
        setRestaurants(
          res.data.records.map((restaurant) => restaurant.fields.Name)
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChange = (e) => {
    let matches = [];
    if (e.target.value.length > 0) {
      matches = restaurants.filter((restaurant) => {
        const regex = new RegExp(`${e.target.value}`, "gi");
        return restaurant.match(regex);
      });
    }
    setSuggestions(matches);
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  return (
    <Fragment>
      <div className="flex gap-2">
        <input
          className="rounded"
          type="search"
          name="search-restaurant"
          onChange={(e) => handleChange(e)}
          value={state.restaurant_name}
          autocomplete="off"
        />
        <button
          className="bg-button text-buttontxt px-4 py-1 rounded"
          onClick={() =>
            dispatch({ type: "ADD_RESTAURANT", payload: state.restaurant_name })
          }
        >
          Add
        </button>
      </div>

      {suggestions &&
        suggestions.map((suggestion) => (
          <p
            onClick={() => dispatch({ type: "SET_NAME", payload: suggestion })}
          >
            {suggestion}
          </p>
        ))}
    </Fragment>
  );
};

export { Search };
