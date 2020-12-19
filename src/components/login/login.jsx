import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({authService}) => {
  const history = useHistory();
  const goToMaker = userId => {
    history.push({
      pathname: "/maker",
      state: {id: userId},
    });
  };
  const onLogin = event => {
    authService
      .login(event.currentTarget.innerText)
      .then(result => goToMaker(result.user));
  };
  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMaker(user.uid);
    });
  });
  return (
    <section className={styles.container}>
      <Header />
      <section className={styles.login}>
        <h2 className={styles.login_text}>LOGIN</h2>
        <ul className={styles.login_inner}>
          <li className={styles.login_button} onClick={onLogin}>
            Google
          </li>
          <li className={styles.login_button} onClick={onLogin}>
            Github
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
