import React, { FC } from 'react'
import gql from 'graphql-tag'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form'
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import { usePostFormDialog_PostCreateMutation } from '../../generated/graphql'
import { useCurrentUserContext } from '../../hooks/useCurrentUser'

interface PostFormDialogProps {
  open: boolean
  onClose: () => void
  refetchPost: any
  userId?: string
}

const PostFormDialog: FC<PostFormDialogProps> = ({ open, onClose, userId, refetchPost }) => {
  const { register, handleSubmit } = useForm()
  const { enqueueSnackbar } = useSnackbar()
  const [postCreate] = usePostFormDialog_PostCreateMutation()
  const { currentUser } = useCurrentUserContext()
  const isCurrentUser = userId === currentUser?.id

  const onSubmit = async data => {
    if (!isCurrentUser) {
      enqueueSnackbar('please login for posting', { variant: 'error' })
      onClose()
      return
    }

    let hashTags
    if (data.hashtags) {
      hashTags = data.hashtags.split(/,|\s|\//).filter(tag => tag)
    }
    await postCreate({
      variables: {
        input: {
          url: data.url,
          hashTags,
        },
      },
    })

    enqueueSnackbar('posting success', { variant: 'success' })
    await refetchPost()
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="post-form-dialog">
      <DialogTitle id="post-form-dialog">Add Post</DialogTitle>
      <DialogContent>
        <DialogContentText>You can upload your post url with hash tags :)</DialogContentText>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoFocus
            margin="dense"
            name="url"
            label="url"
            type="url"
            fullWidth
            required
            inputRef={register({ required: true })}
          />
          <TextField
            margin="dense"
            name="hashtags"
            label="hash tags"
            fullWidth
            helperText="separate tags with 'comma' or 'space' or 'slash'"
            inputRef={register}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} color="primary" type="submit">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default PostFormDialog

gql`
  mutation PostFormDialog_PostCreate($input: PostCreateInput!) {
    postCreate(input: $input) {
      post {
        id
      }
    }
  }
`
