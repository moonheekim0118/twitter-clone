import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { Container,SearchInput,HistoryTab,SearchButton,HistoryWrapper } from './style';
import { RedCloseIcon , SearchIcon } from '../Icons';

const Search=({keyword})=>{
    const me = useSelector(state=>state.user.me);
    const [history, setHistory]=useState([]);
    const [value, setValue , setter]= useInput(keyword);

    useEffect(()=>{ // keyword props 바뀔때마다 setter로 value 변경
        setter(keyword);
    },[keyword])

    useEffect(()=>{ // 처음 불러오기 
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory"))||[];
        setHistory(searchHistory);
    },[]);

    const onSubmitSearch=useCallback((e)=>{ // 검색어 submit 
        e.preventDefault();
        if(me){ // 검색어 등록
            const historyLength = JSON.parse(localStorage.getItem("historyLength"))||0;
            let searchHistory = JSON.parse(localStorage.getItem("searchHistory"))||[];
            localStorage.setItem("historyLength",JSON.stringify(historyLength+1));
            searchHistory=searchHistory.filter((item)=>item.value!==value); // 중복삭제         
            searchHistory.unshift({key:historyLength+1, value:value});
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        }
        Router.push(`/hashtag/${value}`);
        
    },[value]);

    const onClickHistory =useCallback((value)=>{ // 클릭한 검색어로 가기 
        Router.push(`/hashtag/${value}`);
    },[]);

    const onRemove=useCallback((e,key)=>{ // 특정 검색어 삭제 
        e.stopPropagation();
        let searchHistory = JSON.parse(localStorage.getItem("searchHistory"))||[];
        searchHistory=searchHistory.filter((item)=>item.key!==key); // 삭제
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        setHistory(searchHistory); // 변경
    },[]);
    
    return(
        <>
            <Container onSubmit={onSubmitSearch}>
                <SearchInput value={value} onChange={setValue}/> 
                <SearchButton disabled={value.length===0 || value===keyword}><SearchIcon/></SearchButton>
                <HistoryWrapper>
                    {history.length ===0 && <span>해시태그를 검색해보세요!</span>}
                    {history.slice(0,5).map(item=>
                    <HistoryTab onClick={onClickHistory.bind(this,item.value)}
                     key={item.key}><span>{item.value}</span> 
                     <RedCloseIcon onClick={(e)=>onRemove(e,item.key)}/></HistoryTab>)}   
                </HistoryWrapper>
            </Container>
        </>
    )
};


Search.propTypes={
    keyword: PropTypes.string.isRequired,
}


export default Search;