import { MapContainer, Search } from "../components";
import { useRestaurantManager } from "../context";

const Home = () => {
  const { state } = useRestaurantManager();

  return (
    <div className="flex flex-col justify-center">
      <Search />
      <MapContainer
        restaurants={state.restaurants}
        emptymsg={"No maps to show, add some!"}
      />
    </div>
  );
};

export { Home };
