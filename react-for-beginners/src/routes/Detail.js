import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

function Detail(){
    const [movie,setMovies] = useState([]);
    const {id} = useParams();
    const getMovie = async() =>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovies(json.data.movie)
    }
    console.log(movie);
    useEffect(()=>{
      getMovie();
    }, []);
    
    return (
        <div>
            <div>
        
            {/* <Movie
              key={movie.id}
              id={movie.id}
              mediumCoverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            /> */}

        </div>
            <h1>{id}</h1>
            <h2>hello</h2>
        </div>
    )
}

export default Detail;