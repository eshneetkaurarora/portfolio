import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function RouteScroll() {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useLayoutEffect(() => {
    // On browser back/forward, let the browser restore the previous scroll
    // position instead of forcing a jump to the top or a section.
    if (navType === "POP") return;

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navType]);

  return null;
}
