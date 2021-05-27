import { useReducer, useState } from "react";
import PostList from "./PostList";

export const ACTIONS = { ADD_POST: "add-post", DELETE_POST: "delete-post" };

const myReducer = (Posts, action) => {
  switch (action.type) {
    case ACTIONS.ADD_POST:
      return [...Posts, newPost(action.payload.message, action.payload.name)];
    case ACTIONS.DELETE_POST:
      return Posts.filter((post) => post.id !== action.payload.id);
  }
};

const newPost = (message, name) => {
  return { id: Date.now(), message: message, name: name };
};

const Reviews = () => {
  const [message, setmessage] = useState("");
  const [name, setName] = useState("");
  const [Posts, dispatch] = useReducer(myReducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS.ADD_POST,
      payload: { message: message, name: name },
    });
    setmessage("");
    setName("");
  };

  return (
    <>
      <section className="reviews">
        <form onSubmit={handleSubmit}>
          <h2>Post your review of this portfolio:</h2>
          <div>
            
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            
            <input
              required
              type="textarea"
              value={message}
              onChange={(e) => setmessage(e.target.value)}
              placeholder="I Think it's great..."
            />
          </div>
          <button type="submit">Post</button>
        </form>

        {Posts.map((post) => {
          return <PostList post={post} key={post.id} dispatch={dispatch} />;
        })}
      </section>
    </>
  );
};

export default Reviews;
