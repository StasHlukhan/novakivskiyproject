import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import PostsPage from '../Posts/PostsPage';
import Article1 from '../Article/Article1';
import Article2 from '../Article/Article2';
import Article3 from '../Article/Article3';
import Donate from '../Donate/Donate';
import ArtGallery from '../ArtGallery/ArtGallery';
import MainPage from '../MainPage/MainPage';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
function AppRouter() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="" element={<MainPage />}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/posts/1" element={<Article1 />}></Route>
        <Route path="/posts/2" element={<Article2 />}></Route>
        <Route path="/posts/3" element={<Article3 />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
        <Route path="/art_gallery" element={<ArtGallery />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRouter;
