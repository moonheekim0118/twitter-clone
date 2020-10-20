import React, { useEffect,useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useSelector , useDispatch } from 'react-redux';
import { hideAlertAction } from '../../actions/ui';
import { useRouter } from 'next/router'
import Menu from './Menu';
import Alert from '../Alert';
import UserProfileModal from '../Modals/UserProfileModal';
import PostFormModal from '../Modals/PostFormModal';
import { SearchBar, SearchInput,Header,Main,Side,Footer,BackButton, Description,DescriptionWithoutLink } from './style';

const AppLayout = ({pageName,children})=>{
    const isLoggedIn = useSelector((state)=> state.user.isLoggedIn);
    const {showProfileModal ,showPostModal, showAlert } =useSelector(state=>state.ui);
    const dispatch = useDispatch();
    const router = useRouter()

    useEffect(()=>{
        if(showAlert){
            const timer = setTimeout(()=>dispatch(hideAlertAction()),5000);
            return()=>clearTimeout(timer);
        }
    },[showAlert]);

    const onClickBack=useCallback(()=>{
        router.back()
    },[]);

    return(
        <>
            {isLoggedIn && showProfileModal&& <UserProfileModal/>}
            {isLoggedIn && showPostModal && <PostFormModal/> } 
            <Alert/>
            <Header>
             {pageName==="Home"? <Link href="/"><Description>{pageName}</Description></Link> : 
             <DescriptionWithoutLink><BackButton onClick={onClickBack} /><span>{pageName}</span></DescriptionWithoutLink>}
            </Header>
            <div>
                <Menu isLoggedIn={isLoggedIn}/>
                <Main>{children}</Main>
                <Side>
                    <SearchBar>
                        <SearchInput enterButton/> 
                    </SearchBar>
                </Side>
            </div>
            <Footer><a href="https://mooneedev.netlify.app/" target="_blank" rel="noreferrer noopener">Mady by moonee</a></Footer>
        </>
    )
}

AppLayout.propTypes={
    pageName: PropTypes.string.isRequired,
    children : PropTypes.node.isRequired,
}

export default AppLayout;