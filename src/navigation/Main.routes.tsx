import AuthenticatedRoutes from "./Authenticated.routes";
import UnAuthenticatedRoutes from "./UnAuthenticated.routes";

export default function MainStack() {
  const isAuthenticated = false;

  return isAuthenticated ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
}
