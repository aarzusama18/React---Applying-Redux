// src/components/CreatePost.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost, fetchPost } from "../actions/postActions";
import { useNavigate, useParams } from "react-router-dom";

const CreatePost = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) => state.posts.post);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      setTitle(post.title || "");
      setContent(post.content || "");
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content };

    if (id) {
      dispatch(updatePost(id, newPost));
    } else {
      dispatch(createPost(newPost));
    }
    navigate("/");
  };

  return (
    <div>
      <h1>{id ? "Edit Post" : "Create Post"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">{id ? "Update Post" : "Create Post"}</button>
      </form>
    </div>
  );
};

export default CreatePost;
