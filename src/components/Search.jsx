import { useRestaurantManager } from "../context";

const Search = () => {
  const { state, dispatch } = useRestaurantManager();

  console.log("STATE: ", state);
  return (
    <div>
      <input
        type="search"
        name="search-restaurant"
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button
        onClick={() =>
          dispatch({ type: "ADD_RESTAURANT", payload: state.restaurant_name })
        }
      >
        Add
      </button>
    </div>
  );
};

export { Search };
