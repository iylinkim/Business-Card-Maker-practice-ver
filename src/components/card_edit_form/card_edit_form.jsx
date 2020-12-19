import Button from "components/button/button";
import React, {useRef} from "react";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({card, updateCard, deleteCard, ImageFileInput}) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {name, company, title, email, message, theme, fileName} = card;

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={onChange}
        ref={nameRef}
      />
      <input
        type='text'
        name='company'
        value={company}
        onChange={onChange}
        ref={companyRef}
      />
      <select name='theme' ref={themeRef}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input
        type='text'
        name='title'
        value={title}
        onChange={onChange}
        ref={titleRef}
      />
      <input
        type='text'
        name='email'
        value={email}
        onChange={onChange}
        ref={emailRef}
      />
      <textarea
        type='text'
        name='message'
        value={message}
        onChange={updateCard}
        ref={messageRef}
      />
      <div className={styles.fileInput}>
        <ImageFileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name='Delete' onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
