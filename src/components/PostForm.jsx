import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import { useState } from "react";
import "../utils/i18next";
import { useTranslation } from 'react-i18next';

const PostForm = ({create}) => {
  const { t } = useTranslation();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    SetPost({title: '', body: ''});
  }

  const [post, SetPost] = useState({title: '', body: ''});
  return (
    <form>
    <MyInput 
      value={post.title}
      onChange={e => SetPost({...post, title: e.target.value})}
      type="text"
      placeholder={t("postForm.placeholderTitle")}
    />
    <MyInput
      value={post.body}
      onChange={e => SetPost({...post, body: e.target.value})}
      type="text"
      placeholder={t("postForm.placeholderText")}
    />
    <MyButton onClick={addNewPost}>{t("postForm.create")}</MyButton>
  </form>
  )
}

export default PostForm;