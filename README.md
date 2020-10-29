# 트위터 클론 풀스텍 프로젝트

- 트위터를 클론하며 `리액트-서버사이드렌더링`을 학습하기 위한 프로젝트입니다.
- 개발에만 집중하고자 클론 프로젝트를 선택했습니다.
- http://twitcloneproject.xyz (closed server)



# 📌 데모

### 회원가입 <br/>

<img src="./demo/signup.gif?raw=true"/>

### 포스트 작성 수정 삭제 및 리트윗 <br/>

<img src="./demo/post.gif?raw=true">
<img src="./demo/postmodal.gif?raw=true">
<img src="./demo/SinglePost.gif?raw=true"/>
<img src="./demo/Retweet.gif?raw=true"/>

### 내 프로필 수정 <br/>

<img src="./demo/editProfile.gif?raw=true"/>

### 유저 프로필 페이지 <br/>

<img src="./demo/follow.gif?raw=true"/>
<img src="./demo/UserProifle.gif?raw=true"/>


### 해시태그 검색 <br/>

<img src="./demo/hashtag.gif?raw=true"/>


### device 별 레이아웃 ( 실제 트위터 기준 )
#### 태블릿 & pc small <br/>

<img src="./demo/tablet.png?raw=true"/>

#### 모바일 <br/>
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

### 

### 2. DB 설정

```javascript
cd twitter-clone/back
vim .env
> 
COOKIE_SECRET=쿠키 시크릿 입력 
DB_PASSWORD=디비 패스워드 입 
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



### 동적 라우팅

- 유저별 프로필 페이지 /user/[userId]  / 해당 유저가 작성 및 리트윗한 포스트 목록 
  - 해당 유저가 좋아요한 게시글 목록 /user/[userId]/likes
  - 해당 유저가 팔로잉한 유저 목록 /user/[userId]/followings
  - 해당 유저를 팔로잉한 유저 목록 /user/[userId]/followers
- 단일 포스트 페이지
  - /post/[postId] 
- 특정 해시태그 목록
  - /hashtag/[tag]



### 리덕스 상태 구조

- **post** : 포스트 작성 / 삭제 / 수정 / 좋아요 / 리트윗 / 댓글 작성 및 삭제 
- **commonUser** : 유저 프로필 페이지 방문시 해당 유저 정보 / 해당 유저 팔로우 ,팔로잉 리스트
- **user** : 로그인 / 로그아웃 / 현재 로그인한 유저 정보 (me) / 프로필사진 소스 (변경시 사용)
- **ui** : 포스트 작성 모달창 show / 포스트 수정 모달창 show / 유저 프로필 모달창 show / Alert show 



### 포스트 및 팔로잉 팔로워 리스트 로딩시 인피니트 스크롤링 구현 

- 처음 서버사이드 렌더링으로 해당되는 정보를 5개/10개 씩 불러오고 이후 특정 스크롤 지점에 가면 5개/10개씩 더 불러오는 방법으로 구현

- 포스트를 로딩하는 모든 페이지와 유저 팔로잉 / 팔로워 목록에서 구현



### 리덕스를 이용한 모달창 및 Alert 창 구현

<img src="./demo/ModalExp.jpg?raw=true"/>



### 커스텀 아바타 컴포넌트 구현

- 기존의 antd 아바타 컴포넌트를 대체하여 커스텀 아바타 컴포넌트 구현
- Props
  - imageSrc : 유저 정보에 담겨진 profilepic 소스 
  -  userId : 유저 페이지로 넘어가기 위한 userId
  - userNickname : profilepic 소스가 null일 경우를 위한 닉네임 
  - isLink : true -> 아바타 컴포넌트 클릭시 해당 유저 페이지 /user/[userId] 로 라우팅 
  - isMyPic : true -> 아바타 이미지 수정 가능

- globalStyle에 AvatarWrapper의 props를 이용해 avatar 사이즈 조절 가능 

