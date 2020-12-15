import Footer from "components/footer/footer";
import Header from "components/header/header";
import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import styles from "./maker.module.css";

// const Maker = ({authService}) => {
//   const history = useHistory();
//   const onLogout = () => {
//     authService.logout();
//   };

//   useEffect(() => {
//     authService.onAuthChange(user => {
//       if (!user) {
//         history.push("/");
//       }
//     });
//   });
//   return (
//     <section className={styles.maker}>
//       <Header onLogout={onLogout} />
//       <Footer />
//     </section>
//   );
// };

// export default Maker;

const Maker = ({authService}) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;