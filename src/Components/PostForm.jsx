import React, { useEffect, useState } from 'react'
import * as apiServices from "../Services/apiServices";

const PostForm = ({onSubmit}) => {
  const initalValues = {
    name:"",
    email:"",
    phone:"",
  }
  const [formData,setFormData] = useState(initalValues);
  const [formErrors,setFormErrors] = useState({});


  const handleChange=(e)=>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
    console.log("FormData",formData)
  }
  const validate = (values)=>{
    const error = {};
    const regex = ''
    if (!values.name) {
      error.name = "UserName Is Required"
    }
    if(!values.email){
      error.email = "Email Is Required"
    }
    if(!values.phone){
      error.phone = "Phone Must be character less then 12"
    }
    return error

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formData));
    onSubmit(formData)  
    // setSubmit(true)

  }
  // const handleSubmit =(e)=>{
  //   e.preventDefault();
  //   onSubmit(form)
  //   setPost({
  //     name:'',
  //     email:'',
  //     phone:'',
  //   })
  //   console.log(post)

  // }
  return (
    <div>
    <h2>Add Post</h2>
    <pre>{JSON.stringify(formData,undefined,2)}</pre>
    <div className='w-full max-w-xs flex justify-center'>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={handleChange} value= {formData.name}  name = "name"/>
        </div>

        <div className='mb-6'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} name = "email"/>
        </div>

        <div className='mb-6'>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Phone</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="Phone" onChange={handleChange} value = {formData.phone} name = "phone"/>
        </div>
        <div className='flex'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Submit</button>
        </div>

      </form>
    </div>

  </div>
  )
}

export default PostForm