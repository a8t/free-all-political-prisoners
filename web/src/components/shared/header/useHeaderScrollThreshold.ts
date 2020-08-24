import { useWindowScroll, useLocation } from "react-use";

const SCROLL_THRESHOLD = 10;

export default function useHeaderScrollThreshold() {
  const { pathname } = useLocation();

  // initialized weird with SSR so we have to make sure to initialize to 0
  const { y = 0 } = useWindowScroll();
  const windowScroll = y ?? 0;

  const isPastHeaderScrollThreshold = pathname === "/" ? windowScroll > SCROLL_THRESHOLD : true;

  return { isPastHeaderScrollThreshold };
}
