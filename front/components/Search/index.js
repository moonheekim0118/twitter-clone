import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import { Container,SearchInput,HistoryTab,SearchButton,HistoryWrapper,RemoveButton } from './style';
import { SearchOutlined  } from '@ant-design/icons'; 
// 최근 검색어 보여주기
// 검색 누르면   window.open(`/hastag/${e.target.value}`,'_self'); 로 페이지 보내주기.
// 현재 검색 상태라면,  Search value에 현재 검색한 검색어 보여주기
// onSearch 이벤트
// defaultValue -- initial Value

const Search=({keyword})=>{
    const me = useSelector(state=>state.user.me);
    const [history, setHistory]=useState([]);
    const [value, setValue]= useInput(keyword);

    useEffect(()=>{
        const searchHistory = JSON.parse(localStorage.getItem("searchHistory"))||[];
        setHistory(searchHistory);
    },[]);

    const onSubmitSearch=useCallback((e)=>{
        e.preventDefault();
        if(me){ // 검색어 등록
            const historyLength = JSON.parse(localStorage.getItem("historyLength"))||0;
            let searchHistory = JSON.parse(localStorage.getItem("searchHistory"))||[];
            localStorage.setItem("historyLength",JSON.stringify(historyLength+1));
            searchHistory=searchHistory.filter((item)=>item.value!==value); // 중복삭제         
            searchHistory.unshift({key:historyLength+1, value:value});
            localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        }
        window.open(`/hashtag/${value}`,'_self')
        
    },[value]);

    const onClickHistory =useCallback((value)=>{ // 클릭한 검색어로 가기 
        window.open(`/hashtag/${value}`,'_self')
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
                <SearchButton><SearchOutlined/></SearchButton>
                <HistoryWrapper>
                    {history.length ===0 && <span>해시태그를 검색해보세요!</span>}
                    {history.slice(0,5).map(item=>
                    <HistoryTab onClick={onClickHistory.bind(this,item.value)}
                     key={item.key}><span>{item.value}</span> 
                     <RemoveButton onClick={(e)=>onRemove(e,item.key)}/></HistoryTab>)}   
                </HistoryWrapper>
            </Container>
        </>
    )
};


Search.propTypes={
    keyword: PropTypes.string.isRequired,
}


export default Search;