// src/components/PostList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../actions/postActions";
import { Link } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
