import MyButton from './UI/button/MyButton';
import "../utils/i18next";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const PostItem = (props) => {
  const { t } = useTranslation();
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);

  function incrementLikes() {
    setCountLikes(countLikes + 1);
  }

  function incrementDislikes() {
    setCountDislikes(countDislikes + 1);
  }
  return (
    <div className="post">
      <div className="post__block">
        <div className="post__title">{props.number}. {props.post.title}</div>
        <div className="post__text">{props.post.body}</div>
      </div>
      <div className="post__area">
        <MyButton onClick={() => props.remove(props.post)}>{t("postItem.delete")}</MyButton>
        <div className="post__count">{countLikes}</div>
        <button onClick={incrementLikes} className="post__like"></button>
        <div className="post__count">{countDislikes}</div>
        <button onClick={incrementDislikes} className="post__dislike"></button>
      </div>
    </div>
  )
}

export default PostItem;