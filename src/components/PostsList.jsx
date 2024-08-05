import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal"
import classes from "./PostsList.module.css"
import { useState } from "react";

function PostsList({listAuth, newAuth, isPosting, onStopPosting}) {
    
    function onBodyChangedHandler(event){
        newAuth.body = event.target.value;
    }

    function onAuthorChangedHandler(event){
        newAuth.author = event.target.value;
    }

    return(
        <>
            { isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onAuthorHandler={onAuthorChangedHandler} onBodyHandler={onBodyChangedHandler}/>
            </Modal>)  }
            
            <ul className={classes.posts}>
                {listAuth.map(
                    item => (
                        <li><Post author={item.author} body={item.body} /></li>
                    )
                )}
            </ul>
        </>
    ) 
}

export default PostsList;