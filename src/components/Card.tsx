import { Link } from "react-router-dom";
import Event from "../models/Event";
import "./Card.css";
import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";

interface Props {
  event: Event;
}

const Card = ({ event }: Props) => {
  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);
  return (
    <div className="Card">
      <Link to={`/events/details/${encodeURIComponent(event.id)}`}>
        <img src={event.images[2].url} alt={event.name} id="image" />
      </Link>
      <h2>{event.name}</h2>
      <p>{event.dates.start.localDate}</p>
      <p>{event.dates.start.localTime}</p>
      <p>{event._embedded.venues[0].city.name}</p>

      <Link to={`/events/details/${encodeURIComponent(event.id)}`}>
        <button className="input-styles btn">Portal</button>
      </Link>
      {isFav(event.id) ? (
        <i
          className="fa-solid fa-hand-spock"
          onClick={() => removeFavorite(event.id)}
        ></i>
      ) : (
        <i
          className="fa-regular fa-hand-spock"
          onClick={() => addFavorite(event)}
        ></i>
      )}
    </div>
  );
};

export default Card;
