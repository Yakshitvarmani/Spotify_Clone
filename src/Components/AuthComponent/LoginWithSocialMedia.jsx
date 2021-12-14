import firebase from "firebase";
export let GoogleProvider = new firebase.auth.GoogleAuthProvider();
export let FacebookProcider = new firebase.auth.FacebookAuthProvider();

let socialLogin = async provider => {
  try {
    let DATA = await firebase.auth().signInWithPopup(provider);
    return DATA.user;
  } catch (err) {
    return err;
  }
};

export default socialLogin;
