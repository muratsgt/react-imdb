// import styles from "./Card.module.css";   module olarak cagirinca
import "./Card.style.css"; // normal caigirinca
// import "./Card.style.scss";
import { StyledCardWrapper, StyledMovieImage, StyledText } from "./Card.style";


// const cardStyle = {
//     color: "blue",
//     backgroundColor: "yellow"
// }

export const Card = (props) => {

    return (
        <div>
            {/* <div className={styles.cardWrapper}>
                <p>CARD</p>
            </div> */}
            {/* 
            <div className="card-wrapper">
                <p>CARD</p>
            </div> */}

            <StyledCardWrapper>
                <StyledMovieImage src={props.imgSrc} alt={"Movie Poster"}/>
                <StyledText>{props.title}</StyledText>
            </StyledCardWrapper>

        </div>
    )
}
