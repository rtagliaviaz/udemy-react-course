import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Posts = (props) => {
  const id = props.match.params.post_id
  const [post, setPost] = useState([])
  useEffect(() => {
    (async()=>{
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost(res.data)
    })()
  }, [])
 
  return (
    <div>
      <div className="card">
        <div className="card-header">
          {id}
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </div>
  )
}

export default Posts
