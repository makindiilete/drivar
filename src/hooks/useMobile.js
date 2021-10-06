import { useMediaQuery } from "react-responsive";

export default function useMobile() {
  return useMediaQuery({ query: `(max-width: 760px)` });
}

export function useTablet() {
  return useMediaQuery({ query: `(max-width: 1024px)` });
}
