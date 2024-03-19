import { useNavigate as rnUseNavigate } from "react-router-dom";
import RouteParams from "./Routes.params";

export type Routes = keyof RouteParams;

type ParamsForRoute<T extends Routes> = T extends keyof RouteParams ? (RouteParams[T] extends undefined ? undefined : RouteParams[T]) : never;

export default function useNavigation() {
  const rnNavigate = rnUseNavigate();

  const navigate = <T extends Routes>(route: T, params?: ParamsForRoute<T>) => {
    rnNavigate(route, { state: params });
  };

  const goBack = () => {
    rnNavigate(-1);
  };

  const goToHome = () => {
    rnNavigate("/");
  };

  return {
    navigate,
    goBack,
    goToHome,
  };
}
