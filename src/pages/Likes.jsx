import { MapContainer } from "../components";
import { useRestaurantManager } from "../context";

const Likes = () => {
  const { state } = useRestaurantManager();
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-3xl underline decoration-wavy decoration-button mb-5">
        Likes
      </h1>
      <MapContainer
        restaurants={state.likes}
        emptymsg={"Nothing liked yet, like some"}
      />
    </div>
  );
};

export { Likes };
