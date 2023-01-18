import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
function Home() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/categories").then((response) => {
            setPost(response.data);
        });
    }, []);
    return (
        <section>
            <div>
                {
                    post.map((item) => {
                        return (
                            <div>
                                <h2>{item.id}</h2>
                                <p>{item.description}</p>
                                <p>{item.name}</p>
                                <Link to={`/detail/${item.id}`}><button>addd</button></Link>
                            </div>

                        )


                    })
                }
            </div>
        </section>
    )
}

export default Home