import React, { Fragment, useState } from 'react'
import { RouteComponentProps, navigate } from '@reach/router'

import { TextInput, Button } from 'react-materialize'
import BackButton from '../components/back-button'

import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'

import '../styles/default.css'

const ADD_POST = gql`
  mutation postCreate($url: String!, $hashTags: [String!]) {
    postCreate(input: { url: $url, hashTags: $hashTags }) {
      post {
        id
        isLiked
        author {
          id
          name
        }
        url
        title
        description
        previewImage
      }
    }
  }
`

interface AddContentProps extends RouteComponentProps {}

const AddContent: React.FC<AddContentProps> = () => {
  const [formData, setFormData] = useState({ url: '', hashTags: '' })

  const [addPost] = useMutation(ADD_POST, {
    variables: {
      url: formData.url,
      hashTags: formData.hashTags.split(',').map(hashTag => hashTag.trim()),
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  return (
    <Fragment>
      <BackButton />
      <TextInput id="url" label="url" value={formData.url} onChange={handleChange} />
      <TextInput id="hashTags" label="hashTags" value={formData.hashTags} onChange={handleChange} />
      <Button
        onClick={async () => {
          await addPost()
          setFormData({ url: '', hashTags: '' })
          navigate(-1)
        }}
      >
        Save
      </Button>
    </Fragment>
  )
}

export default AddContent
