import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu , Input , Row, Col} from 'antd';

const AppLayout = ({children})=>{
    return(
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>트위터</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <Input.Search/>
                </Menu.Item>
                <Menu.Item key="signup">
                    <Link href="/signUp"><a>회원가입</a></Link>
                </Menu.Item>
             </Menu>
             <Row gutter={8}>
                 <Col xs={24} md={6}>
                     왼쪽 메뉴 
                 </Col>
                 <Col xs={24} md={12}>
                 {children}
                 </Col>
                 <Col xs={24} md={6}>
                     <a href="https://mooneedev.netlify.app/" target="_blank" rel="noreferrer noopener">Mady by moonee</a>
                 </Col>
             </Row>
        </div>
    )
}

AppLayout.propTypes={
    children : PropTypes.node.isRequired,
}

export default AppLayout;