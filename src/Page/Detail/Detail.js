
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams  } from "react-router-dom";
import axios from "axios"
function Detail() {
    const [post, setPost] = useState([]);
    let { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`https://northwind.vercel.app/api/categories/${id}`).then((response) => {
            setPost(response.data);
        });
    }, []);
  return (
    <div>
        <h1>{post.id}</h1>
        <h3>{post.description}</h3>
        <h3>{post.name}</h3>
        <button onClick={()=>{navigate("/")}}>ADD</button>
    </div>
  )
}

export default Detail