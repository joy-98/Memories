import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@material-ui/core'
import Post from "./Post/Post";
import useStyles from './Styles'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container spacing={3} alignItems='stretch'>
                {posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;