import React from 'react';
import Button from '../../../atom/Button';
import { LoadingIcon } from '../../Icons';

const SubmitButton = ({ onClick, disabled, loading, title }) => {
    return (
        <Button
            onClick={onClick}
            disabled={disabled}
            style={{
                back: 'full',
                radius: '24px',
                weight: 'bold',
            }}>
            {loading ? <LoadingIcon /> : title}
        </Button>
    );
};

export default SubmitButton;
