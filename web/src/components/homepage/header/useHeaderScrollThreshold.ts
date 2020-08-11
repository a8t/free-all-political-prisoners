import { useWindowScroll } from "react-use";

const SCROLL_THRESHOLD = 10;

export default function useHeaderScrollThreshold() {
  const { y } = useWindowScroll();

  const isPastHeaderScrollThreshold = y > SCROLL_THRESHOLD;

  return { isPastHeaderScrollThreshold };
}
