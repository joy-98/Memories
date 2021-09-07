import { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './Styles'
import { createPost, updatePost } from '../../actions/posts'

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const post = useSelector((state) => currentId ? state.posts.find((post) => post._id === currentId) : null)
    const [state, setState] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    useEffect(() => {
        if (post) {
            setState(post)
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId) {
            dispatch(updatePost(currentId, state))
        } else {
            dispatch(createPost(state))
        }
        handleClear()
    }

    const handleClear = () => {
        setCurrentId(null)
        setState({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete='off' className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId ? 'Edit' : 'Creating'} a Memory</Typography>
                    <TextField required name="creator" variant="outlined" label="Creator" value={state.creator} fullWidth onChange={(e) => setState({ ...state, creator: e.target.value })} />
                    <TextField required name="title" variant="outlined" label="Title" value={state.title} fullWidth onChange={(e) => setState({ ...state, title: e.target.value })} />
                    <TextField required name="message" variant="outlined" label="Message" value={state.message} fullWidth onChange={(e) => setState({ ...state, message: e.target.value })} />
                    <TextField required name="tags" placeholder="Example: happy,fun,pizza" variant="outlined" label="Tags" value={state.tags} fullWidth onChange={(e) => setState({ ...state, tags: e.target.value.split(',') })} />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setState({ ...state, selectedFile: base64 })}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant='contained' color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <Button variant='contained' color="secondary" size="small" onClick={handleClear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </div>
    );
}

export default Form;