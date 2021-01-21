import { Card } from "../Card";
import { StyledCardList } from './CardList.style'

export const CardList = ({ movieList, baseImg }) => {

    return (
        <StyledCardList>
            { movieList && movieList.map(
                (movie, index) => (
                    <Card
                        key={index}
                        title={movie.title}
                        desc={movie.overview}
                        imgSrc={movie.poster_path ? baseImg+movie.poster_path : "https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792__340.jpg"}
                    />)
            )}
        </StyledCardList>
    )
}