import classes from './NewPost.module.css';

function NewPost({ onAuthorHandler, onBodyHandler, onCancel, onSubmit }) {
  return (
    <form className={classes.form} >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button onClick={onSubmit}>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;