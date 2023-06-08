import { useSelector } from "react-redux";

const useAuth = () => {
  const { user } = useSelector((state) => state.authenticatedUser);
  if (user?.Token && user?.email) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
