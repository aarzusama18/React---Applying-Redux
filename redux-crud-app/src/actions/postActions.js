// src/actions/postActions.js
import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POST = "FETCH_POST";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

const API_URL = "http://localhost:5000/posts";

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await axios.get(`${API_URL}/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const createPost = (post) => async (dispatch) => {
  const response = await axios.post(API_URL, post);
  dispatch({ type: CREATE_POST, payload: response.data });
};

export const updatePost = (id, post) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  dispatch({ type: UPDATE_POST, payload: response.data });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};
