import styled, {css} from "styled-components";

export const StyledButton = styled.button`
    border-radius: 0.2rem;
`;

export const StyledSearchButton = styled(StyledButton)`
    cursor: pointer;
`;

export const StyledSearchInput = styled.input`

    ${ p => p.isLive && css`
        background-color: pink;
    ` }

    color: ${p => p.color};
    border-radius: 0.3rem;
    margin-right: 0.5rem;

`;

export const StyledSearchBox = styled.div`
    margin: 2rem;

    /* input {
        color: blue;
        border-radius: 0.3rem;
        margin-right: 0.5rem;
    } */ // bu sekilde de yazilabiliyor

    ${StyledSearchInput} {
        color: gray
    }



`;


// template string literals  ` ${} `