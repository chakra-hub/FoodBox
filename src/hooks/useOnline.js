import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);

  const handleOnline = () => {
    setOnline(true);
  };
  const handleOffline = () => {
    setOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", () => {
      handleOnline();
    });
    window.addEventListener("offline", () => {
      handleOffline();
    });

    return () => {
      window.removeEventListener("offline", () => {
        handleOffline();
      });
      window.removeEventListener("online", () => {
        handleOnline();
      });
    };
  }, []);

  return online;
};

export default useOnline;
