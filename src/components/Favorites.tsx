import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import EventContainer from "./EventContainer";
import "./Favorites.css";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div className="Favorites">
      <EventContainer events={favorites} />
    </div>
  );
};

export default Favorites;
