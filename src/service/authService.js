import firebase from "firebase";
import {fbase} from "service/fbase";

// class AuthService {
//   login(authProvider) {
//     const provider = new firebase.auth[`${authProvider}AuthProvider`]();
//     return fbase.auth().signInWithPopup(provider);
//   }

//   onAuthChange(onUserChanged){
//     //onUserChanged 콜백함수 인자로 받음
//     // 사용자가 바뀌었을 때 원하는 기능을 수행
//     fbase.auth().onAuthStateChanged(user => {
//       onUserChanged(user);
//       // 전달받은 콜백함수에 사용자 정보(user)넣으면서 호출해줌
//     });
//   }

//   logout(){
//     fbase.auth().signOut();
//   }
// }

// export default AuthService;

class AuthService {
  login(authProvider) {
    const provider = new firebase.auth[`${authProvider}AuthProvider`]();
    return fbase.auth().signInWithPopup(provider);
  }

  onAuthChange(onChanged) {
    fbase.auth().onAuthStateChanged(user => {
      onChanged(user);
    });
  }

  logout() {
    fbase.auth().signOut();
  }
}

export default AuthService;
