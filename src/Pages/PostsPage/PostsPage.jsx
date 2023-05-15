import React, { useState } from 'react';

import PostList from '../../components/Posts/PostList';
import '../../components/Posts/Posts.css'
import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const PostsPage = () => {
  const { t, i18n } = useTranslation();

  
  const [posts,setPosts] = useState([{id:1, title: t('article1'), category: 'food' },
  {id:2, title: t('article2'), category: 'travel' },
  {id:3, title: t('article3'), category: 'food' }
])
useEffect(() => {
  // Update the title value in each post to the new translated value
  const updatedPosts = posts.map(post => {
    let title;
    if (post.id === 1) {
      title = t('article1');
    } else if (post.id === 2) {
      title = t('article2');
    } else if (post.id === 3) {
      title = t('article3');
    }
    return { ...post, title };
  });
  setPosts(updatedPosts);
}, [i18n.language]);

 
  
     

  return(
    <div>
      
        <div className="post_page">
          <h2 className='post_title'>{t('posts')}</h2>
          
          <PostList  posts={posts}></PostList>
        </div>
        
    </div>
  )
};

export default PostsPage;
 // const [filter,setFilter] = useState({category:''})
  // const [fileteredPosts,setFilterteredPosts] = useState(posts)
  // const [ currentCategory,setCurrentCategory] = useState('all') 
  // const filterPosts = (category) =>{
  //   if(category === 'all'){
  //     setFilterteredPosts(posts)
  //   }else{
  //     setFilterteredPosts(posts.filter(post => post.category === category))
  //   }
  //   setCurrentCategory(category)
  // }
  {/* <PostFilter filterPosts={filterPosts}></PostFilter> */}