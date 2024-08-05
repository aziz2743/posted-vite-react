import classes from './NewPost.module.css';

function NewPost({ onAuthorHandler, onBodyHandler}) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorHandler}/>
      </p>
    </form>
  );
}

export default NewPost;