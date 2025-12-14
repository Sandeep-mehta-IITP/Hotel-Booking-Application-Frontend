import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { setClerkUser, clearClerkUser } from "../APP/Slices/uiSlice";
import { fetchUserData } from "../APP/Slices/userSlice";

export const useClerkToRedux = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoaded && user) {
      const combinedUser = {
        id: user.id,
        username: user.username || null,
        email: user.primaryEmailAddress?.emailAddress || null,
        imageUrl: user.imageUrl || null,
        role: user.publicMetadata?.role || null,
        isSignedIn,
        recentlySearchedCities:
          user.publicMetadata?.recentlySearchedCities || [],
      };

      dispatch(setClerkUser(combinedUser));
      dispatch(fetchUserData());
    }
  }, [user, isLoaded, isSignedIn, dispatch]);

  return null;
};
