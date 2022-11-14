import { MapCard } from "./MapCard";
import { Fragment } from "react";

const MapContainer = ({ restaurants, emptymsg }) => {
  return (
    <div className="flex flex-col mb-5">
      {restaurants.length ? (
        <Fragment>
          {restaurants.map((restaurant) => (
            <MapCard key={restaurant} restaurant={restaurant} />
          ))}
        </Fragment>
      ) : (
        <div class="flex flex-col justify-center items-center h-96 mb-3">
          <img
            src="https://i.ibb.co/Lxm326w/undraw-happy-music-g6wc.png"
            alt="empty"
            height="250"
            width="250"
          />
          <h1 class="text-normal text-gray-200 font-thin">{emptymsg}</h1>
        </div>
      )}
    </div>
  );
};

export { MapContainer };
