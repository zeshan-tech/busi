import { useLocation as rnUseLocation } from "react-router-dom";
import { RouteParams } from ".";

type RoutesParams = RouteParams;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useLocation<K extends keyof RoutesParams>(_key?: K) {
  const location = rnUseLocation();
  const state = location.state as RoutesParams[K];

  return { ...location, ...state };
}
