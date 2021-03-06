import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import PostCard from "../PostCard";
import { LoadingIcon } from "../../Icons";

const PostsList = ({ posts, loading }) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      {loading ? (
        <Container>
          <LoadingIcon />
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const Container = styled.div`
  text-align: center;
`;

export default PostsList;
