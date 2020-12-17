import Button from "components/button/button";
import React, {useRef} from "react";

const CardAddForm = ({onAdd}) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = event => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form ref={formRef}>
      <input type='text' name='name' placeholder='name' ref={nameRef} />
      <input
        type='text'
        name='company'
        placeholder='company'
        ref={companyRef}
      />
      <select name='theme' ref={themeRef}>
        <option value='dark'>Dark</option>
        <option value='light'>Light</option>
        <option value='colorful'>Colorful</option>
      </select>
      <input type='text' name='title' placeholder='title' ref={titleRef} />
      <input type='text' name='email' placeholder='email' ref={emailRef} />
      <textarea
        type='text'
        name='message'
        placeholder='message'
        ref={messageRef}
      />
      <Button name='Add' onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
