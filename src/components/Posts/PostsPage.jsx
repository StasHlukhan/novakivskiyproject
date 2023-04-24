import React, { useState } from 'react';
import PostFilter from './PostFilter';
import PostList from './PostList';
import './Posts.css'
import NavBar from '../NavBar/NavBar';
const PostsPage = () => {

  
  const [posts,setPosts] = useState([{id:1, title: '7 картин - 7 фактів', category: 'food' },
  {id:2, title: 'Що спільного між знаменитою японською студією Гіблі та Мистецькою Школою Олекси Новаківського?', category: 'travel' },
  {id:3, title: 'Повість “Розмахом могутніх крил”', category: 'food' }
])
  const [filter,setFilter] = useState({category:''})
  const [fileteredPosts,setFilterteredPosts] = useState(posts)
  const [ currentCategory,setCurrentCategory] = useState('all')

  const filterPosts = (category) =>{
    if(category === 'all'){
      setFilterteredPosts(posts)
    }else{
      setFilterteredPosts(posts.filter(post => post.category === category))
    }
    setCurrentCategory(category)
  }
    
     

  return(
    <div>
      
        <div className="post_page">
          <h2 className='post_title'>Статті</h2>
          {/* <PostFilter filterPosts={filterPosts}></PostFilter> */}
          <PostList  posts={fileteredPosts}></PostList>
        </div>
        
    </div>
  )
};

export default PostsPage;
