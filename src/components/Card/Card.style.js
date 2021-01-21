import styled from "styled-components";


export const StyledCardWrapper = styled.div`
    margin: 10px;
    padding: 0px;
    width: 150px;
    height: 250px;
    border: 1px solid rebeccapurple;
    border-radius: 10px;
    box-shadow: 3px 3px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.1s;
    overflow: hidden;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.2);
    }
`;

export const StyledText = styled.h1`
    color: blue;
    font-size: 0.8rem;
`;

export const StyledDescription = styled.p`
    color: black;
    font-size: 0.5rem;
`;

export const StyledMovieImage = styled.img`
    object-fit: cover;
    width: 150px;
    height: auto;
`;