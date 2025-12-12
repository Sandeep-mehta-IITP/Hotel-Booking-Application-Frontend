import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setClerkUser, clearClerkUser } from "../APP/Slices/uiSlice";

export const useClerkToRedux = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      dispatch(
        setClerkUser({
          user,
          isLoaded,
          isSignedIn,
        })
      );
    } else {
      dispatch(clearClerkUser());
    }
  }, [user, isLoaded, isSignedIn, dispatch]);
};
