import * as api from "../api";

//Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {}
};
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("post created", post);
    console.log("post created", data);

    dispatch({ type: "CREATE_POST", payload: data });
    // dispatchEvent({ type: "CREATE_POST", payload: data });
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
