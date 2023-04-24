import React from 'react'
import './Posts.css'


import { useNavigate } from 'react-router-dom'
function PostItem(props) {
  const router = useNavigate()
    
  return (
    <div>
     <div className={`item item-${props.post.id}`} >
          <div className={`title-${props.post.id}`}>
            {props.post.title}
          </div>  
          <div onClick={()=>{router(`/posts/${props.post.id}`)}} className="item_button">
            <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28.5" stroke="white" strokeWidth="3"/>
              <path d="M43.8765 31.776C44.6576 30.995 44.6576 29.7287 43.8765 28.9476L31.1486 16.2197C30.3676 15.4386 29.1012 15.4386 28.3202 16.2197C27.5391 17.0007 27.5391 18.2671 28.3202 19.0481L39.6339 30.3618L28.3202 41.6755C27.5391 42.4566 27.5391 43.7229 28.3202 44.504C29.1012 45.285 30.3676 45.285 31.1486 44.504L43.8765 31.776ZM17.998 32.3618L42.4623 32.3618L42.4623 28.3618L17.998 28.3618L17.998 32.3618Z" fill="white"/>
            </svg>
          </div> 
        </div>
    </div>
  )
}

export default PostItem