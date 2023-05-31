import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [movie, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
  };
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div
      className={styles.body}
      style={{
        backgroundImage: `url(${movie.background_image_original})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <img
          className={styles.img}
          src={movie.large_cover_image}
          alt={movie.title}
        />
        <div className={styles.desc}>
          <h1>{movie.title}</h1>
          <button>
            <a href={movie.url}>Watch!</a>
          </button>
          <p>
            {movie.description_intro != undefined
              ? movie.description_intro.length > 600
                ? movie.description_intro.slice(0, 600) + "..."
                : movie.description_intro
              : null}
          </p>
          <div>
            {movie.genres?.map((g, index) => (
              <div key={index}>{g}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
