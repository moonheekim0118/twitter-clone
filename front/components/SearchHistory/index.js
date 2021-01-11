import React from 'react';
import styled from 'styled-components';
import { RedCloseIcon } from '../Icons';

const SearchHistory = ({ data, onRemove, onClick }) => {
    return (
        <>
            {data.length === 0 ? (
                <span>해시태그를 검색하세요!</span>
            ) : (
                data.slice(0, 5).map((item) => (
                    <HistoryTab key={item.id} onClick={onClick}>
                        <span>{item.value}</span>
                        <RedCloseIcon onClick={(e) => onRemove(e, item.id)} />
                    </HistoryTab>
                ))
            )}
        </>
    );
};

export default SearchHistory;

const HistoryTab = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${({ theme }) => theme.paddings.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_4};
    border-left: 1px solid ${({ theme }) => theme.colors.gray_4};
    border-right: 1px solid ${({ theme }) => theme.colors.gray_4};
    cursor: pointer;

    &:last-child {
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.hover};
    }
`;
