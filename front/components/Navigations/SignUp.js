import React from 'react';
import Link from 'next/link';
import {MenuItemWrapper, Detail, Description,SignupIcon} from  '../Styles';

const SignUp=()=>{
    return(
        <MenuItemWrapper>
            <Link href="/signUp"><a><SignupIcon/></a></Link>
            <Detail>
                <Link  href="/signUp"><Description>SignUp</Description></Link>
            </Detail>
        </MenuItemWrapper>
    );

}

export default SignUp; 