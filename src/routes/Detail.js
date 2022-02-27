import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setInfo(json.data.movie)
        setLoading(false)
    };
    console.log(info);
    console.log(info.genres)
    useEffect(() => {
        getMovie();
    }, [])

    return <div>
        {loading ? (<h1>...loading</h1>
        ) : (
            <div>
                <h1>{info.title}</h1>
                <p>토렌트파일 주소</p>
                <ul>
                    {info.torrents && info.torrents.map((torrent) =>
                        <li key={torrent.url} ><a href={torrent.url}>{torrent.url}</a></li>
                    )}
                </ul>
                <img src={info.medium_cover_image}></img>
                <p>출시년도: {info.year} 별점: {info.rating}  상영시간: {info.runtime}분</p>

                <p>장르</p>
                <ul>
                    {info.genres && info.genres.map((g) => <li key={g}>{g}</li>)}
                </ul>

                <p>{info.description_intro}</p>
            </div>
        )
        }

    </div>

}

export default Detail;