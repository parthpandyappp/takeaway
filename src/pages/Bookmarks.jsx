import { MapContainer } from "../components";
import { useRestaurantManager } from "../context";

const Bookmarks = () => {
  const { state } = useRestaurantManager();
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-3xl underline decoration-wavy decoration-button mb-5">
        Bookmarks
      </h1>
      <MapContainer
        restaurants={state.bookmarks}
        emptymsg={"No bookmarks added, add some"}
      />
    </div>
  );
};

export { Bookmarks };
