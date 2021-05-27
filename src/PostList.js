import {ACTIONS} from "./reviews"
const PostList = ({post, dispatch}) => {
    return(<>
    <div className="Each_Post">
              <h1>{post.name}</h1>
              <p>{post.message}</p>
              <button onClick={()=>{dispatch({type:ACTIONS.DELETE_POST, payload:{id: post.id}})}}>Delete</button>
            </div>
    </>)
}

export default PostList;