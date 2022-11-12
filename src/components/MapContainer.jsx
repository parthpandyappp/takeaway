import { useRestaurantManager } from "../context";
import { MapCard } from "./MapCard";

const MapContainer = () => {
  const { state } = useRestaurantManager();
  return (
    <div>
      {state.restaurants &&
        state.restaurants.map((restaurant) => (
          <MapCard restaurant={restaurant} />
        ))}
    </div>
  );
};

export { MapContainer };
