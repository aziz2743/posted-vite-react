import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({ isPosting, onStopPosting }) {

  useEffect( () => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json(response);
      setPosts(resData.posts);
    }

    fetchPosts();
  }, 
  [])

  const [posts, setPosts] = useState([]);

  function addNewPostHandler(postData) {
    fetch('http://localhost:8080/posts',
      {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-type': 'application/json'
        }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onClose={onStopPosting} onAddPost={addNewPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={uuidv4()} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
