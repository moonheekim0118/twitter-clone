import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import SearchHistory from '../SearchHistory';
import { getItem, setItem, removeItem } from '../../util/localStorage';
import { Container, SearchInput, SearchButton, HistoryWrapper } from './style';
import { SearchIcon } from '../Icons';

const Search = ({ keyword }) => {
    const me = useSelector((state) => state.user.me);
    const [history, setHistory] = useState([]);
    const [value, setValue, setter] = useInput(keyword);

    useEffect(() => {
        setHistory(getItem('SearchHistory'));
    }, []);

    useEffect(() => {
        // keyword props 바뀔때마다 setter로 value 변경
        setter(keyword);
    }, [keyword]);

    const onSubmitSearch = useCallback(
        (e) => {
            // 검색어 submit
            e.preventDefault();
            if (me) {
                // 검색어 등록
                setItem('SearchHistory', value);
                setHistory(getItem('SearchHistory'));
            }
            Router.push(`/hashtag/${value}`);
        },
        [value]
    );

    const onClickHistory = useCallback((value) => {
        // 클릭한 검색어로 가기
        Router.push(`/hashtag/${value}`);
    }, []);

    const onRemove = useCallback((e, id) => {
        // 특정 검색어 삭제
        e.stopPropagation();
        removeItem('SearchHistory', id);
        setHistory(getItem('SearchHistory'));
    }, []);

    return (
        <>
            <Container onSubmit={onSubmitSearch}>
                <SearchInput value={value} onChange={setValue} />
                <SearchButton
                    disabled={value.length === 0 || value === keyword}>
                    <SearchIcon />
                </SearchButton>
                <HistoryWrapper>
                    <SearchHistory
                        data={history}
                        onRemove={onRemove}
                        onClick={onClickHistory}
                    />
                </HistoryWrapper>
            </Container>
        </>
    );
};

Search.propTypes = {
    keyword: PropTypes.string.isRequired,
};

export default Search;
