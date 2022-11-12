import { MapContainer, Search } from "../components";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Search />
      <MapContainer />
    </div>
  );
};

export { Home };
