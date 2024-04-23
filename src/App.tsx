import './App.css'
import List from './components/List/List'
import Details from './components/Details/Details'
import React, { useEffect, useState } from 'react'

export interface IUser {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then(res => res.json())
      .then(result => setUsers(result))
  }, []);

  return (
    <div className='container'>
      <List users={users} currentUserSetter={setCurrentUser} currentUser={currentUser} />
      <Details info={currentUser} />
    </div>
  )
}

export default App
