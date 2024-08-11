import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onClose, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function onBodyChangedHandler(event) {
    setEnteredBody(event.target.value);
  }

  function onAuthorChangedHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };
    onAddPost(postData);
    onClose();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={onBodyChangedHandler} />
      </p>
      <p>
        <label htmlFor='name'>Your name</label>
        <input
          type='text'
          id='name'
          required
          onChange={onAuthorChangedHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onClose}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
