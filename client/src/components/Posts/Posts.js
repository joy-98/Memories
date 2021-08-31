import Post from "./Post/Post";
import useStyles from './Styles'

const Posts = () => {
    const classes = useStyles()
    return (
        <div> 
            <Post />
            <Post />
        </div>
    );
}

export default Posts;