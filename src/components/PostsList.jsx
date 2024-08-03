import Post from "./Post";
import classes from "./PostsList.module.css"

function PostsList(props) {
    const ListAuth = props;
    return(
        <ul className={classes.posts}>
            {props.ListAuth.map(
                item => (
                    <li><Post author={item.author} body={item.body} /></li>
                )
            )}
        </ul>
    ) 
}

export default PostsList;