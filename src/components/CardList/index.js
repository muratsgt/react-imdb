import { useContext} from "react";
import { Card } from "../Card";
import { StyledCardList } from './CardList.style'
import {MovieContext} from "../../App";


export const CardList = () => {
    const { movieData, baseImageUrl } = useContext(MovieContext);

    return (
        <StyledCardList>
            { movieData && movieData.map(
                (movie, index) => (
                    <Card
                        key={index}
                        title={movie.title}
                        desc={movie.overview}
                        imgSrc={movie.poster_path ? baseImageUrl+movie.poster_path : "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792__340.jpg"}
                    />)
            )}
        </StyledCardList>
    )
}