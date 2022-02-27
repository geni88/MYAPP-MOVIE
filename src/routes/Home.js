import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
        setMovies(json.data.movies);
        console.log(json);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div >
            {loading ? (
                <h1>...loading</h1>
            ) : (
                <div>
                    <h1>이 좋아하는 영화모음</h1>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            rating={movie.rating}
                            year={movie.year}
                            genres={movie.genres && movie.genres}
                            image={movie.medium_cover_image}
                            summary={movie.summary}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default Home;
