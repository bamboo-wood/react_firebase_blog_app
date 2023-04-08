import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

type Props = {
  setIsAuth: (isAuth: boolean) => void;
};

const Logout = (props: Props) => {
  const { setIsAuth } = props;
  const navifate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setIsAuth(false);
        navifate("/");
      })
      .catch((error) => {})
      .finally(() => {});
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
