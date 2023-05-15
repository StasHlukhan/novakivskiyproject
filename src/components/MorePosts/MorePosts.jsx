import React, { useState } from 'react';
import PostItem from '../Posts/PostItem';
import { useHistory, useLocation } from 'react-router-dom';
import './MorePosts.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function MorePosts() {
  const router = useNavigate();
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState([
    { id: 1, title: '7 картин - 7 фактів' },
    { id: 2, title: 'Спільне між студією Гіблі і школою Новаківського' },
    { id: 3, title: 'Повість “Розмахом могутніх крил”' },
    { id: 4, title: 'Завітайте в Арт Галерею' },
  ]);

  const location = useLocation();
  const currentPostId = location.pathname.match(/\/posts\/(\d+)/)[1];
  const newPosts = posts.filter((post) => post.id !== parseInt(currentPostId));
  useEffect(() => {
    // Update the title value in each post to the new translated value
    const updatedPosts = newPosts.map((post) => {
      let title;
      if (post.id === 1) {
        title = t('article1');
      } else if (post.id === 2) {
        title = t('article2_extra');
      } else if (post.id === 3) {
        title = t('article3');
      } else if (post.id === 4) {
        title = t('article4');
      }
      return { ...post, title };
    });
    setPosts(updatedPosts);
  }, [i18n.language]);
  return (
    <div className="more_posts">
      <div className="more_posts_pos">
        <h2 className="more_title">{t('more_posts')}</h2>
        <div className="more_posts_list">
          {newPosts.map((post) => (
            <div
              onClick={() => {
                if (post.id === 4) {
                  router('/art_gallery');
                } else {
                  router(`/posts/${post.id}`);
                }
              }}
              key={post.id}
              className={`more more_post-${post.id}`}
            >
              <PostItem post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MorePosts;
