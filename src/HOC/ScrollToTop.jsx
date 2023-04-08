import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTop({ children }) {
    const navigate=useNavigate();

  useEffect(() => {
    //history.listen() returns a function to remove the event-listener
    const unlisten = navigate((location) => {
      window.scrollTo(0, 0);
    });

    //useEffect cleanup [remove the event-listener]
    return () => {
      unlisten();
    };
  }, [navigate]);
  return <>{children}</>;
}

export default ScrollToTop;
