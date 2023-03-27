import axios from "axios"

const Api = axios.create({
    baseURL: "http://localhost:3000"
})
export const CreatePost = async(createUser)=>{
    return await Api.post("/posts",createUser)
}
export const getUsers=async()=>{
    const response = await Api.get("/posts")
    return response.data
}


