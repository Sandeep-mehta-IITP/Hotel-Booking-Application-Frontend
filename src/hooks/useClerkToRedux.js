import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../APP/Slices/userSlice";

export const useClerkToRedux = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);


  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserData());
    }
  }, [isAuthenticated, dispatch]);

  return null;
};
