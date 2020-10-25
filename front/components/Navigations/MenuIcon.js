import Link from 'next/link';
import PropTypes from 'prop-types';
import { HomeIcon,LoginIcon,ProfileIcon,SignupIcon } from '../Icons';

const MenuIcon=({where,id})=>{
    if(where==="home"){
        return( <Link href="/"><a><HomeIcon/></a></Link>)
    }
    if(where==="Login"){
        return( <Link href="/login"><a><LoginIcon/></a></Link>)
    }
    if(where==="Signup"){
        return( <Link href="/signUp"><a><SignupIcon/></a></Link>)
    }
    return(
        <Link href={`/user/${id}`}><a><ProfileIcon/></a></Link>
    )
};

MenuIcon.defaultProps={
    id:0,
};

MenuIcon.propTypes={
    where:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
}


export default MenuIcon;