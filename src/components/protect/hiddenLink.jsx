import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/features/auth/authSlice";
import { selectOrder } from "../../redux/features/auth/orderSlice";


export const ShowOnLogin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

export const ShowOnLogout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return <>{children}</>;
  }
  return null;
};

export const AdminLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.role === "admin") {
    return <>{children}</>;
  }
  return null;
};

export const AdminAuthorLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && (user?.role === "admin" || user?.role === "Collector")) {
    return <>{children}</>;
  }
  return null;
};

export const SellerLink = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.role === "Seller") {
    return <>{children}</>;
  }
  return null;
};

export const Verified = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (isLoggedIn && user?.isVerified === true) {
    return <>{children}</>;
  }
  return null;
};

export const Collector = ({ children }) => {
  const user = useSelector(selectUser);

  if (user?.role === "Collector") {
    return <>{children}</>;
  }
  return null;
};