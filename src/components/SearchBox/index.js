import {useState} from "react";
import { StyledSearchBox, StyledSearchInput, StyledSearchButton } from "./SearchBox.style";

export const SearchBox = ({setSearch}) => {

    const [inputValue, setInputValue] = useState("");


    return (
        <StyledSearchBox>
            <StyledSearchInput color="red" isLive onChange={(e)=>setInputValue(e.target.value)}/>
            <StyledSearchButton onClick={() => {setSearch(inputValue)}}> Search</StyledSearchButton>
        </StyledSearchBox>
    )
}