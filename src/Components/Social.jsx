import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./Firebase/Firebase.config.js";
import { useState } from "react";
const Social = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();
  const handlrGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithub = () => {
    signInWithPopup(auth, GithubProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="mt-6 flex justify-center items-center">
        {user ? (
          <button className="btn btn-primary" onClick={handleSignOut}>
            sign out
          </button>
        ) : (
          <div className="flex gap-5">
            <button onClick={handlrGoogle} className="btn  btn-primary">
              Login with Google
            </button>
            <button onClick={handleGithub} className="btn  btn-primary">
              Github
            </button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto">
        {user && (
          <div>
            <h2 className="text-2xl ">
              Name: <small>{user.displayName}</small>
            </h2>
            <h3 className="text-2xl ">
              Email: <small>{user.email}</small>
            </h3>
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
