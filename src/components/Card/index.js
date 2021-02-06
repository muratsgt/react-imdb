// import styles from "./Card.module.css";   module olarak cagirinca
import "./Card.style.css"; // normal caigirinca
// import "./Card.style.scss";
import { StyledCardWrapper, StyledMovieImage, StyledText } from "./Card.style";
import {useHistory} from "react-router-dom";

// const cardStyle = {
//     color: "blue",
//     backgroundColor: "yellow"
// }

export const Card = (props) => {

    const history = useHistory();

    return (
        <div>
            {/* <div className={styles.cardWrapper}>
                <p>CARD</p>
            </div> */}
            {/* 
            <div className="card-wrapper">
                <p>CARD</p>
            </div> */}

            <StyledCardWrapper onClick={()=>history.push("/detail/" + props.id)}>
                <StyledMovieImage src={props.imgSrc} alt={"Movie Poster"}/>
                <StyledText>{props.title}</StyledText>
            </StyledCardWrapper>

        </div>
    )
}
