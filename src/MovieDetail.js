import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { StyledMovieImage } from "./components/Card/Card.style";

const movieBaseUrl = "https://api.themoviedb.org/3/movie/"
const apiKey = "7fc8d00ab1302c6aa7da237d2810116e";  //temporary
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export default function MovieDetail() {

    const [movData, setMovData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(movieBaseUrl + id, {
            params: {
                api_key: apiKey
            }
        })
            .then(res => setMovData(res?.data))
            .catch()
            .finally(console.log(movData));

    }, []);

    return (
        <div style={{ padding:"50px", display: "flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap" }}>
            <img style={{ padding: "30px", width:"300px" }} src={baseImageUrl + movData?.poster_path} alt={"Movie Poster"} />
            <div style={{width: "300px"}}>
                <h1>{movData.original_title}</h1>
                <p>{movData.overview}</p>
            </div>
        </div>
    )
}