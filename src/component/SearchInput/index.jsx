import React, { useEffect, useRef } from 'react'

/*  Style */
import style from './style.module.css'
import { FiSearch } from "react-icons/fi";

/* Redux */
import { useDispatch } from 'react-redux';
import { getProjects } from '../../redux/Project/actionProject';

function SearchInput() {

  const inputRef = useRef(); 
  const dispatch = useDispatch();

  useEffect(()=> {
    inputRef.current.focus();
  },[])
  
  const UpdateSearch = (inputTxt) => {
    if (inputTxt == "") return dispatch(getProjects());
    if (inputTxt.length < 2) return;
    
    dispatch(getProjects(inputTxt));
  }

  return (<>
    <div className = {style.inputSearchContainer}>
      <input
        ref={inputRef}
        type="search" 
        maxLength="800"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        placeholder="Search Customer"
        onInput={e => UpdateSearch(e.target.value)} 
      />
      <div className={style.search}>
        <FiSearch className={style.searchIcon}/>
      </div>
    </div>
  </>)
}

export default SearchInput
