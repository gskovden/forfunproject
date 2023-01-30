import like from '../images/post/like.svg';
import dislike from '../images/post/dislike.svg';

const Post = () => {
  return (
    <div className="post">
      <div className="post__block">
        <div className="post__title">Название</div>
        <div className="post__text">Текст</div>
      </div>
      <div className="post__area">
        <img src={like} alt="like" className="post__like" />
        <img src={dislike} alt="dislike" className="post__dislike" />
      </div>
    </div>
  )
}

export default Post;