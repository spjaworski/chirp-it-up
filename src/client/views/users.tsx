import * as React from 'react';
import { useEffect, useState } from 'react';
import { IUser } from '../../types';
import UserProfileCard from '../components/userProfileCard';

const users = () => {
    const [user, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users/')
        .then(res => res.json())
        .then(users => setUsers(users))
        .catch(error => console.log(error))
    }, []);
   
    return (
      <div className="row justify-content-center">
        {user.map(u => (
            <UserProfileCard key={`user-card-${u.id}`} user ={u} />
        ))}
      </div>)
};

export default users;

