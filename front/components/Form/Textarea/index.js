import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const Textarea = ({ text, onChange, placeholder }) => {
    return (
        <Container
            name="content"
            value={text}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

const Container = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    resize: none;
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export default Textarea;
