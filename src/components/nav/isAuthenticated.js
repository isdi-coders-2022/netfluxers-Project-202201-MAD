import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect } from 'react';
import { Context } from '../contexto/context-provider';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { updateCurrentUser } = useContext(Context);

  useEffect(() => {
    updateCurrentUser(user.nickname);
  }, [user.nickname, updateCurrentUser]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return isAuthenticated && <div />;
}

export default Profile;
