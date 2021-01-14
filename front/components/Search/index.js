import React, { useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import { useSelector } from "react-redux";
import { getItem, setItem, removeItem } from "../../util/localStorage";
import { SearchIcon } from "../Icons";
import useInput from "../../hooks/useInput";
import SearchHistory from "../SearchHistory";
import styled from "styled-components";

const Search = ({ keyword }) => {
  const me = useSelector((state) => state.user.me);
  const [history, setHistory] = useState([]);
  const [value, setValue, setter] = useInput(keyword);

  useEffect(() => {
    setHistory(getItem("SearchHistory"));
  }, []);

  useEffect(() => {
    setter(keyword); // keyword props 바뀔때마다 setter로 value 변경
  }, [keyword]);

  const onSubmitSearch = useCallback(
    (e) => {
      e.preventDefault();
      if (me) {
        setItem("SearchHistory", value); // 검색어 등록
        setHistory(getItem("SearchHistory"));
      }
      Router.push(`/hashtag/${value}`);
    },
    [value]
  );

  const onClickHistory = useCallback((value) => {
    Router.push(`/hashtag/${value}`); // 클릭한 검색어로 가기
  }, []);

  const onRemove = useCallback((e, id) => {
    // 특정 검색어 삭제
    e.stopPropagation();
    removeItem("SearchHistory", id);
    setHistory(getItem("SearchHistory"));
  }, []);

  return (
    <>
      <Container onSubmit={onSubmitSearch}>
        <SearchInput value={value} onChange={setValue} />
        <SearchButton disabled={value.length === 0 || value === keyword}>
          <SearchIcon />
        </SearchButton>
        <HistoryContainer>
          <SearchHistory
            data={history}
            onRemove={onRemove}
            onClick={onClickHistory}
          />
        </HistoryContainer>
      </Container>
    </>
  );
};

export const Container = styled.form`
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  padding: ${({ theme }) => `${theme.paddings.xl} ${theme.paddings.base}`};
  background-color: ${({ theme }) => theme.colors.white};
`;

const HistoryContainer = styled.div.attrs({ tabindex: "0" })`
  display: none;
  flex-direction: column;
  width: 100%;
  -webkit-box-shadow: 1px 6px 18px -9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 6px 18px -9px rgba(0, 0, 0, 0.75);
  box-shadow: 1px 6px 18px -9px rgba(0, 0, 0, 0.75);
  z-index: 20;

  &:hover {
    display: flex;
  }

  &:focus-within {
    display: flex;
  }
`;

const SearchInput = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 35px;
  padding: ${({ theme }) => theme.paddings.small};
  margin-top: ${({ theme }) => theme.margins.small};

  border: none;
  border-radius: 5px;

  font-size: ${({ theme }) => theme.fontSizes.base};
  background-color: ${({ theme }) => theme.colors.gray_3};
  z-index: 20;

  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.blue_1};
  }

  &:focus ~ ${HistoryContainer} {
    display: flex;
  }
`;

const SearchButton = styled.button.attrs({ type: "submit" })`
  position: absolute;
  top: 15px;
  right: 0px;
  height: 34px;

  padding: ${({ theme }) => `${theme.paddings.xsmall} ${theme.paddings.small}`};
  margin-top: ${({ theme }) => theme.margins.small};
  margin-right: ${({ theme }) => theme.margins.xsmall};

  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue_1};

  cursor: pointer;
  z-index: 100;
`;

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default Search;
