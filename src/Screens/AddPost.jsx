import React, { useState } from 'react'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import PostForm from '../Components/PostForm'
import { CreatePost } from '../Services/apiServices'
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPost = () => {
  const queryClient  = useQueryClient();
  const navigate = useNavigate()
  const createPostMutation = useMutation({
    mutationFn:CreatePost,
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey:['posts']})
      navigate('/user-list')
    }
    
  })

  const handleAddPost = (post)=>{
    createPostMutation.mutate({
      id:uuidv4(),
     
      ...post
    })
  }

  return (
    <>
    
    <PostForm onSubmit  = {handleAddPost}/>
    <ToastContainer />
    </>


  )
}

export default AddPost