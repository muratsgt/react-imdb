// import styles from "./Card.module.css";   module olarak cagirinca
import "./Card.style.css"; // normal caigirinca
// import "./Card.style.scss";
import { StyledCardWrapper,StyledDescription ,StyledText } from "./Card.style";


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
                <StyledText>{props.title}</StyledText>
                <StyledDescription>{props.desc}</StyledDescription>
            </StyledCardWrapper>

        </div>
    )
}
