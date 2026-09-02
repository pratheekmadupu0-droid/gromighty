import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // If there is no hash ID in the URL, instantly scroll to the top of the page
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } else {
      // If navigating with a specific section hash (#services, #contact, etc.)
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }
      }, 100);
    }
  }, [pathname, search, hash]);

  return null;
}
