import Footer from '../components/Footer';
// import Header from '../components/Header';
import MyModal from '../components/UI/MyModal/MyModal';
import PostForm from '../components/PostForm';
import { useState } from 'react';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import avatar from '../images/header/avatar.svg';
import { Link } from 'react-router-dom';
import "../utils/i18next";
import { useTranslation } from 'react-i18next';


const Posts = () => {

  const { t } = useTranslation();

  const [posts, SetPosts] = useState([
    {id: 1, title: '1', body: '1'},
    {id: 2, title: '2', body: '2'},
    {id: 3, title: '3', body: '3'}
  ]);
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    SetPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    SetPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <div className="header">
      <div className="header__block">
        <p className="header__logo">{t("posts.logo")}</p>
        <div className="header__area">
          <MyButton onClick={() => setModal(true)}>{t("posts.create")}</MyButton>
          <div className="header__part">
            <p className="header__name">{t("posts.user")}</p>
            <div className="header__list">
              <p className="header__item">{t("posts.profile")}</p>
              <p className="header__item">{t("posts.myPosts")}</p>
              <Link to="/login">
                <p className="header__item">{t("posts.exit")}</p>
              </Link>
            </div>
            <img src={avatar} alt="аватар" className="header__img" />
          </div>
        </div>
      </div>
    </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title={t("posts.list")}/>
        : <h1 className='list'>{t("posts.listNotFound")}</h1>
      }
      <Footer />
    </div>
  )
}

export default Posts;