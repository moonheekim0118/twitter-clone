import React from 'react';
import { List,Button , Card } from 'antd';
import {StopOutlined} from '@ant-design/icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const ListWrapper = styled(List)`
    margin-bottom:20px;
`

const LoadMoreButton = styled.div`
    text-align:center;
    margin:10px 0;
`

const ListItemWrapper =styled(List.Item)`
    margin-top:20px;
`

const FollowList=({header,data})=>{
    return(
        <ListWrapper
            grid={{guttuer:4, xs:2, md:3}}
            size="small"
            header={<div>{header}</div>}
            loadMore={<LoadMoreButton><Button>더보기</Button></LoadMoreButton>}
            bordered
            dataSource={data}
            renderItem={(item)=>(
                <ListItemWrapper>
                    <Card actions={[<StopOutlined key="stop"/>]}>
                        <Card.Meta description={item.nickname}/>
                    </Card>
                </ListItemWrapper>
            )}
        />
    )
}


FollowList.propTypes = {
    header:PropTypes.string.isRequired,
    data:PropTypes.array.isRequired
}

export default FollowList;