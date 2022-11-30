import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../../types';
import UserProfileCard from '../components/userProfileCard';
import { UserProfile } from '../../types/index'

const SingleUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState<UserProfile>();

    useEffect(() => {
        fetch('http://localhost:3000/api/users/' + id)
        .then(res => res.json())
        .then(user => setUser(user))
        .catch(error => console.log(error))
    }, [id]);
   
    return (
      <div className="row justify-content-center">
      
           {user && <UserProfileCard user ={user} />}
      
      </div>)
};

export default SingleUser;

