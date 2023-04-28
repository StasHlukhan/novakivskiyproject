import React, { useState } from 'react'
import PostItem from '../Posts/PostItem';
import { useHistory, useLocation } from "react-router-dom";
import './MorePosts.css'

import { useNavigate } from 'react-router-dom'

function MorePosts() {
   const router = useNavigate()
  const [posts,setPosts] = useState([{id:1, title: '7 картин - 7 фактів'},
  {id:2, title: 'Спільне між студією Гіблі і школою Новаківського'},
  {id:3, title: 'Повість “Розмахом могутніх крил”'},
  {id:4, title: 'Завітайте в Арт Галерею' }
])
 
    const location = useLocation();
    const currentPostId = location.pathname.match(/\/posts\/(\d+)/)[1];
    const newPosts = posts.filter(post => post.id !== parseInt(currentPostId));
    
  return (
    <div className='more_posts'>
        <div className="more_posts_pos">
          <h2 className='more_title'>Більше статей</h2>
          <div className="more_posts_list">
          {newPosts.map(post =>
                <div  onClick={()=>{router(`/posts/${post.id}`)}} key={post.id} className={`more more_post-${post.id}`}>
                
                  
                  <PostItem  post={post} /> 
                </div>
              )}
          </div>
        </div>
    </div>
  )
}

export default MorePosts