# 트위터 클론 프로젝트

- 트위터를 클론하며 `리액트-서버사이드렌더링`을 학습하기 위한 프로젝트입니다.
- http://twitcloneproject.xyz (closed server)
- [배포과정 블로그에 정리](https://mooneedev.netlify.app/Infra/AWS-EC2%20%EB%B0%B0%ED%8F%AC%20%EA%B3%BC%EC%A0%95%20%EC%A0%95%EB%A6%AC/)

<br/>

# 📌 데모
<br/>

### 회원가입 <br/>

<img src="./demo/signup.gif?raw=true"/>

### 포스트 작성 수정 삭제 및 리트윗 <br/>

<img src="./demo/post.gif?raw=true">
<img src="./demo/postmodal.gif?raw=true">
<img src="./demo/SinglePost.gif?raw=true"/>
<img src="./demo/Retweet.gif?raw=true"/>

### 내 프로필 수정 <br/>

<img src="./demo//profileEdit.gif?raw=true"/>

### 유저 프로필 페이지 <br/>

<img src="./demo/follow.gif?raw=true"/>
<img src="./demo/UserProifle.gif?raw=true"/>


### 해시태그 검색 <br/>

<img src="./demo/hashtag.gif?raw=true"/>


### device 별 레이아웃 ( 실제 트위터 기준 )
### - 태블릿 & pc small <br/>

<img src="./demo/tablet.png?raw=true"/>

### - 모바일 <br/>
<p align="center">
  <kdb><img src="./demo/mobile.png?raw=true" width="350"></kdb>
  <kdb><img src="./demo/mobile2.png?raw=true" width="350"></kdb>
</p>

<br/>

# 📌환경 설정 및 실행 방법

###  1. 깃 클론 , 모듈 설치 

```javascript
git clone -b dev --single-branch https://github.com/moonheekim0118/twitter-clone
cd twitter-clone/front
npm install
cd twitter-clone/back
npm install
```


### 2. DB 설정

```javascript
cd twitter-clone/back
vim .env
> 
COOKIE_SECRET=쿠키 시크릿 입력 
DB_PASSWORD=디비 패스워드 입력
```



### 3. 실행명령어

```javascript
프론트엔드
npm run build  
npm run dev

백엔드
npm start
```





# 📌사용 기술 스택

#### 공통

- ![](https://img.shields.io/badge/-JavaScript-yellow?logo=javascript&logoColor=white)
- ![](https://img.shields.io/badge/-NPM-red?logo=NPM)

#### 프론트엔드

- ![](https://img.shields.io/badge/-React-informational?logo=React&logoColor=white)
- ![](https://img.shields.io/badge/-Next.js-lightgrey?logo=next.js)
- ![](https://img.shields.io/badge/-styled--components-ff69b4?logo=styled-components&logoColor=white)
- ![](https://img.shields.io/badge/-webpack-blue?logo=webpack)
- ![](https://img.shields.io/badge/-babel-yellow?logo=babel&logoColor=white)
- 

#### 백엔드

- ![](https://img.shields.io/badge/-Node.Js-green?logo=Node.Js&logoColor=white)
- ![](https://img.shields.io/badge/-Express-blueviolet?logo=Node.js&logoColor=white)
- ![](https://img.shields.io/badge/-Sequelize-orange?logo=Node.js&logoColor=white)
- ![](https://img.shields.io/badge/-passport-yellowgreen?logo=node.js&logoColor=white)
- ![](https://img.shields.io/badge/-MySQL-inactive?logo=mysql&logoColor=white)

#### 배포

- ![](https://img.shields.io/badge/-EC2-black?logo=Amazon-AWS)

- ![](https://img.shields.io/badge/-S3-navy?logo=Amazon-aws)





# 📌기능 구현 상세

- [x] 어플리케이션 전체 서버사이드렌더링(SSR) 구현
- [x] 유저 회원가입 , 로그인 구현
- [x] 유저 닉네임 변경 및 프로필 사진 (아바타) 변경 구현
- [x] 포스트 작성 / 수정 / 삭제 구현 (이미지 4개까지 추가 가능)
- [x] 유저가 업로드한 이미지는 AWS S3에 업로드하도록 구현
- [x] 포스트 좋아요 / 리트윗 / 댓글 작성 및 삭제 구현 
- [x] 포스트 / 팔로잉 리스트 로딩시 인피니트 스크롤링 구현
- [x] 해시태그 최근 검색어 구현 

<br/>

### 동적 라우팅

- 유저별 프로필 페이지 /user/[userId]  / 해당 유저가 작성 및 리트윗한 포스트 목록 
  - 해당 유저가 좋아요한 게시글 목록 /user/[userId]/likes
  - 해당 유저가 팔로잉한 유저 목록 /user/[userId]/followings
  - 해당 유저를 팔로잉한 유저 목록 /user/[userId]/followers
- 단일 포스트 페이지
  - /post/[postId] 
- 특정 해시태그 목록
  - /hashtag/[tag]

<br/>

### 리덕스 상태 구조

- **post** : 포스트 작성 / 삭제 / 수정 / 좋아요 / 리트윗 / 댓글 작성 및 삭제 
- **commonUser** : 유저 프로필 페이지 방문시 해당 유저 정보 / 해당 유저 팔로우 ,팔로잉 리스트
- **user** : 로그인 / 로그아웃 / 현재 로그인한 유저 정보 (me) / 프로필사진 소스 (변경시 사용)
- **ui** : Alert show

<br/>

### 포스트 및 팔로잉 팔로워 리스트 로딩시 인피니트 스크롤링 구현 

- 처음 서버사이드 렌더링으로 해당되는 정보를 5개/10개 씩 불러오고 이후 특정 스크롤 지점에 가면 5개/10개씩 더 불러오는 방법으로 구현

- 포스트를 로딩하는 모든 페이지와 유저 팔로잉 / 팔로워 목록에서 구현

<br/>


### 커스텀 아바타 컴포넌트 구현

- 기존의 antd 아바타 컴포넌트를 대체하여 커스텀 아바타 컴포넌트 구현
- Props
  - user : 유저 정보 
  - size : 아바타 사이즈 
  - isLink : true -> 아바타 컴포넌트 클릭시 해당 유저 페이지 /user/[userId] 로 라우팅 
  - isMyPic : true -> 아바타 이미지 수정 가능

<br/>

# 📌리팩토링 과정 (..ing)

## 모달창 구현 과정
### 첫번째 시도
- nested 컴포넌트 내부에서 모달창을 띄워주어야 하므로, 리덕스를 이용하여 SHOW_MODAL , HIDE_MODAL 액션을 디스패치
- showModal 상태가 되면 레이아웃 내 body 에서 해당 모달창을 불러오도록 구현함
### 문제점
- 모달창이 띄워지고 사라지는 연산에서 불필요하게 모든 레이아웃이 리플로우 됨
- 모달창이 필요없는 페이지에서도 모달창을 위한 상태를 관리하게 됨

</br>

### 현재 채택한 구현방법
- Portal 을 사용하여 해당 모달 오픈 요청 이벤트가 발생하면 해당 모달창 컴포넌트를 body에 붙여주도록 구현
- 이에 따라 모달창이 필요한 곳에서 모달 오픈 / 클로즈를 정할 수 있음
- 기존에 만든 여러개의 모달 컴포넌트를 하나의 컴포넌트 아래에서 관리하도록 수정
  - 모달 컨텐츠는 모달 컴포넌트의 children으로 넣어줌
- Overaly 의 background-color를 props로 지정 가능하도록 구현

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Overaly = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    position:fixed;
    z-index:5000;
    background-color:${(props)=>props.color==='black'?'rgba(0,0,0,0.5)':'none'}; 
`;


const Modal = ({onClose, color, children}) => {
    const root = document.getElementById('root');

    return(
        ReactDOM.createPortal((
            <>
                <Overaly color={color} onClick={onClose}/>
                {children}
            </>)
        ,root)
    )
};


Modal.propTypes={
    onClose: PropTypes.func.isRequired,
    children : PropTypes.node.isRequired,
    color: PropTypes.string.isRequired,
}


export default Modal;
```

<br />

## 버튼 컴포넌트 구현 과정
### 첫번째 시도
- 스타일링만 달리한 버튼 컴포넌트 2개를 globalStyle.js 파일에서 export 해줌

### 문제점
- 버튼의 스타일링을 더 자유롭게 하고싶었고, onClick 이벤트나 disabled 프로퍼티도 모든 버튼의 공통이므로 하나의 props로 받으면 좋겠다고 판단.

### 현재 채택한 구현 방법
- 버튼 컴포넌트를 따로 구현
- props
  - type 
  - onClick
  - disabled
  - style:{ size, radius,width,back(색상) } 
 
 
 <br />
 
 ##  네비게이터 구현 과정
 ### 첫번째 시도
 - 네비게이션 바 내부의 네비게이터 별로 아이콘과 라우팅 주소가 다르므로 컴포넌트를 모두 분리함
 ### 문제점
 - 각각 컴포넌트들이 같은 역할을 하는 것을 발견, 따라서 같은 컴포넌트로 묶어주면 좋겠다고 판단
 
<br/>

### 현재 채택한 구현 방법
- props로 where(=네비게이터 이름) , as (=네비게이터 실주소), href (=네비게이터 라우팅 방식) 를 받아옴
- where에 따른 icon 분리
```javascript
const ICONS={
    'Home':HomeIcon,
    'Login':LoginIcon,
    'Profile':ProfileIcon,
    'Signup':SignupIcon,
};
```
 
