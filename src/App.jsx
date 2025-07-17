// src/App.jsx
import { useEffect } from "react";
import AppRoutes from "./AppRoutes.jsx";
import useAuthStore from "./store/useAuthStore.js";


const App = () => {
  const fetchUserOnLoad = useAuthStore((state) => state.fetchUserOnLoad);
  const authLoading = useAuthStore((state) => state.authLoading);

  useEffect(() => {
    fetchUserOnLoad();
  }, []);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-700">
        Checking login status...
      </div>
    );
  }

  return <AppRoutes />;
};

export default App;
