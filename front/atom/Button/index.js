import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const TransparentButton= styled.button`
    border:1px solid ${({theme})=>theme.colors.blue_1} ;
    background-color:${({theme})=>theme.colors.white};
    color:${({theme})=>theme.colors.blue_1};
    font-size:${(props)=>props.size};
    font-weight:bold;
    padding:${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.xxl};
    cursor:pointer;
    border-radius:24px;
    transition: 0.2s background-color ease-in-out;

    &:hover{
        background-color:${({theme})=>theme.colors.hover} ;
    }
`;

export const FullButton = styled.button`
    border:none;
    background-color:${({theme})=>theme.colors.blue_1} ;
    color:${({theme})=>theme.colors.white};
    font-size:${(props)=>props.size};
    padding:${({theme})=>theme.paddings.small} ${({theme})=>theme.paddings.xxl};
    cursor:pointer;
    font-weight:${(props)=>props.weight};
    border-radius:${(props)=>props.radius};
    transition: 0.2s background-color ease-in-out;
    width:${(props)=>props.width};

    &:hover{
        background-color:${({theme})=>theme.colors.blue_2} ;
    }

    &:disabled{
        background-color:${({theme})=>theme.colors.disabled};
        cursor:default;
    }
`;


const BUTTONSTYLE = {
    'trans':TransparentButton, // 투명 
    'full':FullButton,  // 색 채워짐 
};

const Button=({children, style , onClick, disabled, type})=>{
    const SpecificButton = BUTTONSTYLE[style.back];
    return(
         <SpecificButton onClick={onClick} size={style.size} weight={style.weight}
          disabled={disabled} radius={style.radius} width={style.width} type={type}>
              {children}
        </SpecificButton>
    );
};

Button.defaultProps={
    onClick:()=>{},
    disabled:false,
    type:'submit',
    style:{
        size:'1rem',
        radius:'5px',
        weight:'none',
        width:'',
    }
};

Button.propTypes={
    style:PropTypes.shape({
        back:PropTypes.string,
        size:PropTypes.string,
        radius:PropTypes.string,
        weight:PropTypes.string,
        width:PropTypes.string,
    }).isRequired,
    onClick:PropTypes.func.isRequired,
    disabled:PropTypes.bool.isRequired,
    type:PropTypes.string.isRequired,
}


export default Button;