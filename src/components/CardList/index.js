import React, { useEffect, useState } from 'react';
import { Card } from "../Card";
import axios from "axios";

const apiKey = "7fc8d00ab1302c6aa7da237d2810116e";  //temporary
const baseURL = "https://api.themoviedb.org/3/search/movie";

export const CardList = () => {

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        axios.get(baseURL, {
            params: {
                api_key: apiKey,
                page: 1,
                query: "Star Wars"  // TODO: input from user
            }
        })
            .then((response) => {
                setMovieData(response.data.results);
                console.log(response);
            })
            .catch((err) => console.log(err));

    }, []);

    // useEffect - Axios API call
    // 7fc8d00ab1302c6aa7da237d2810116e
    // https://api.themoviedb.org/3/search/movie?
    // api_key=<<api_key>>
    // &language=en-US
    // &page=1
    // &include_adult=false
    // &query=test

    // useState
    // data mapping



    return (
        <>
            { movieData && movieData.map(movie => {
                return <Card key={movie.id} title={movie.title} desc={movie.overview} />
            })}
        </>
    )
}