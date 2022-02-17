import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect } from 'react';
import { Context } from '../contexto/context-provider';

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { saveUsers, updateCurrentUser } = useContext(Context);

  useEffect(() => {
    saveUsers(user.nickname);
    updateCurrentUser(user.nickname);
  }, []);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        {/* <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p> */}
      </div>
    )
  );
}

export default Profile;
