import { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import useStyles from './Styles'
import { createPost } from '../../actions/posts'

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [state, setState] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(state))
        setState({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    const handleClear = () => {

    }

    return (
        <div>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">Creating a Memory</Typography>
                    <TextField name="creator" variant="outlined" label="Creator" value={state.creator} fullWidth onChange={(e) => setState({ ...state, creator: e.target.value })} />
                    <TextField name="title" variant="outlined" label="Title" value={state.title} fullWidth onChange={(e) => setState({ ...state, title: e.target.value })} />
                    <TextField name="message" variant="outlined" label="Message" value={state.message} fullWidth onChange={(e) => setState({ ...state, message: e.target.value })} />
                    <TextField name="tags" variant="outlined" label="Tags" value={state.tags} fullWidth onChange={(e) => setState({ ...state, tags: e.target.value })} />
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