import React from "react";
import { useDispatch } from "react-redux";
import { changeInputDelay } from "../../store/data/actions";
import { StyledDiv } from "./SearchBar.style";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const changeInp = (event: { target: { value: string } }) => {
    dispatch(changeInputDelay(event.target.value));
  };
  return (
    <StyledDiv>
      <input
        type="text"
        placeholder="Search..."
        onChange={changeInp}
      />
    </StyledDiv>
  );
};
