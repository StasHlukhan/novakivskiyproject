import React from 'react'
import { Route, Routes,useRoutes } from 'react-router-dom';
import PostsPage from '../Posts/PostsPage';
import Article1 from '../Article/Article1';
import Article2 from '../Article/Article2';
import Article3 from '../Article/Article3';
function AppRouter() {
  return (
    <div>
        <Routes>
            <Route path='/posts' element={<PostsPage></PostsPage>}></Route>
            <Route  path='/posts/1' element={<Article1></Article1>}></Route>
            <Route  path='/posts/2' element={<Article2></Article2>}></Route>
            <Route  path='/posts/3' element={<Article3></Article3>}></Route>
        </Routes>
    </div>
  )
}

export default AppRouter