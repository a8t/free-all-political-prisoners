import { useWindowScroll, useLocation } from "react-use";

const SCROLL_THRESHOLD = 10;

export default function useHeaderScrollThreshold() {
  const { pathname } = useLocation();

  const { y } = useWindowScroll();

  const isPastHeaderScrollThreshold = pathname === "/" ? y > SCROLL_THRESHOLD : true;

  return { isPastHeaderScrollThreshold };
}
