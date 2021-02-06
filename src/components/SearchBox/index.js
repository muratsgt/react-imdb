import {useState, useRef, useContext} from "react";
import { StyledSearchBox, StyledSearchInput, StyledSearchButton } from "./SearchBox.style";
import {MovieContext} from "../../Movies";

export const SearchBox = () => {

    // const [inputValue, setInputValue] = useState("");
    // bunun yerine useRef ile daha kolay yapabilirz
    const {setSearchText} = useContext(MovieContext);
    const inputRef = useRef();

    return (
        <StyledSearchBox>
            {/* <StyledSearchInput color="red" isLive onChange={(e)=>setInputValue(e.target.value)}/> */}
            <StyledSearchInput ref={inputRef} color="red" isLive />
            <StyledSearchButton onClick={() => {setSearchText(inputRef?.current?.value)}}> Search</StyledSearchButton>
        </StyledSearchBox>
    )
}