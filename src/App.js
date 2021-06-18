import React, {useEffect, useState} from 'react';
import PageTitle from './Components/PageTitle/PageTitle';
import Section from './Components/Section/Section';
import UserCard from './Components/UserCard/UserCard';
import {getUsers} from './api/users';
function App() {
  const [users, setUsers] = useState([]);
  useEffect( async () => {
    const fetchUsers = await getUsers();
    console.log(fetchUsers);
    setUsers(fetchUsers);
  }, [])
  return (
    <>
      <PageTitle title={"Speck Academy 2021"}/>
      <Section>
      { users &&
      users.map(user => (
          <UserCard 
            key={user.id}
            isAdmin={user.isAdmin}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
          />
      ))}
        
      </Section>
    </>
  );
}

export default App;
