import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect } from 'react';
import { Context } from '../contexto/context-provider';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  const { updateCurrentUser } = useContext(Context);

  useEffect(() => {
    updateCurrentUser(user.nickname);
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && <div />;
}

export default Profile;
