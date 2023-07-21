import { useEffect, useState } from "react";
import "./Selected.css";
import { KEY } from "../../../App";
import Rating from "../../Rating/Rating";
import Loader from "../../ToggleButton/Loader/Loader";
const SelectedId = ({ selectedId, movieClose }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Realeased: realeased,
    Actors: actors,
    Director: director,
    Genre: genre,
    Ratings: ratings,
  } = movie;

  useEffect(() => {
    async function details() {
      setIsLoading(true);
      const resp = await fetch(
        ` http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await resp.json();
      setMovie(data);
      setIsLoading(false);
    }
    details();
  }, [selectedId]);
  return (
    <div>
      <div className="details">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <header>
              <button className="btn-back" onClick={movieClose}>
                x
              </button>
              <img src={poster} alt={title} />
              <div className="details-overview ">
                <h2>{title} </h2>
                <p>
                  {" "}
                  {realeased} &bull; {runtime}
                </p>
                <p>{genre}</p>
                <p>{imdbRating} rating</p>
              </div>
            </header>
            <section>
              <div className="rating">
                {" "}
                <Rating maxRating={10} size={20} />{" "}
              </div>

              <p>
                <em>{plot}</em>
              </p>
              <p>actors:- {actors}</p>
              <p>directed by {director}</p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedId;
