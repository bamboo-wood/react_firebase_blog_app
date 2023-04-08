import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};

const Login = (props: Props) => {
  const { setIsAuth } = props;
  const navifate = useNavigate();
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        localStorage.setItem("user", JSON.stringify(result.user));
        setIsAuth(true);
        navifate("/");
      })
      .catch((error) => {})
      .finally(() => {});
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
