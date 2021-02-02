import React, { useEffect, useState, createContext } from 'react';
import './App.css';
import { CardList } from "./components/CardList";
import { SearchBox } from './components/SearchBox';
import axios from "axios";


const apiKey = "7fc8d00ab1302c6aa7da237d2810116e";  //temporary
const baseURL = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

export const MovieContext = createContext();

function App() {

  const [movieData, setMovieData] = useState([]);
  const [searchText, setSearchText] = useState("war");

  useEffect(() => {
    axios.get(baseURL, {
      params: {
        api_key: apiKey,
        page: 1,
        query: searchText  // TODO: input from user
      }
    })
      .then((response) => {
        setMovieData(response?.data?.results); // ? this makes it optional
        console.log(response);
      })
      .catch((err) => console.log(err))
      .finally();

  }, [searchText]);

  return (
    <div className="App">
      <MovieContext.Provider value={{movieData, baseImageUrl, setSearchText}}>
        <SearchBox />
        <CardList />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
