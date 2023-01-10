import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/project_react_redux_routing' state={{ from: location }} />
  }

  return children;
}

export { RequireAuth };