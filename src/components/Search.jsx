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
      <div className="flex gap-2 justify-center items-center mt-7">
        <div className="flex flex-col gap-3">
          <input
            className=" px-3 py-1.5 border-2 border-solid border-para rounded text-base font-normal text-gray-700 focus:outline-none  w-64"
            type="search"
            name="search-restaurant"
            onChange={(e) => handleChange(e)}
            value={state.restaurant_name}
            autocomplete="off"
          />
          {suggestions &&
            suggestions.map((suggestion) => (
              <p
                className="shadow px-1 py-1 text-left w-64 text-sm text-headline cursor-pointer"
                onClick={() =>
                  dispatch({ type: "SET_NAME", payload: suggestion })
                }
              >
                {suggestion}
              </p>
            ))}
        </div>

        <button
          className="bg-button text-buttontxt px-4 py-1.5 rounded self-baseline"
          onClick={() => {
            dispatch({
              type: "ADD_RESTAURANT",
              payload: state.restaurant_name,
            });
            dispatch({ type: "SET_NAME", payload: "" });
            setSuggestions([]);
          }}
        >
          Add
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-2"></div>
    </Fragment>
  );
};

export { Search };
