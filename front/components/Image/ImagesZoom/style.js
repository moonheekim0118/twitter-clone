import styled  from 'styled-components';
import { CloseCircleOutlined , RightCircleOutlined, LeftCircleOutlined, MinusOutlined} from '@ant-design/icons';

export const Wrapper = styled.div`
    z-index:7000;
`;

export const IndicatorWrapper= styled.div`
    position: fixed;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -30%);
    font-size:2rem;
    color:#fff;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    z-index:7000;
`;

export const Indicator = styled(MinusOutlined)`
    font-size:3rem;
    color:${props=>props.color==='true' ? '#fff' : '#bfbfbf'};
    cursor:pointer;
`;

export const LeftButton = styled(LeftCircleOutlined)`
    position:fixed;
    top: 50%;
    left: 0;
    transform: translate(20%, -50%);
    font-size:2rem;
    color:#fff;
    cursor:pointer;
    z-index:7000;
`

export const RightButton = styled(RightCircleOutlined)`
    position:fixed;
    top: 50%;
    right: 0;
    transform: translate(-20%, -50%);
    font-size:2rem;
    color:#fff;
    cursor:pointer;
    z-index:7000;
`;


export const Overaly = styled.div`
    position:fixed;
    z-index:5000;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(0,0,0,0.5);
`;

export const CloseButton =styled(CloseCircleOutlined)`
    position:fixed;
    font-size:2rem;
    color:#fff;
    left:0;
    top:0;
    padding:10px;
    line-height:14px;
    cursor:pointer;
    z-index:7000;
`

export const ImageWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index:7000;
    transform: translate(-50%, -50%);
    & img {
        margin: 10px auto;
        max-height:70vmax;
        max-width:70vmin;
    }
`;