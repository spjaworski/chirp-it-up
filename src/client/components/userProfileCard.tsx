import * as React from 'react';
import { IUser } from '../../types'

const UserProfileCard = ({ user }:UserCardProps) => {
    return (
         <div className = "shadow-lg margin-top: 10px">
            <div className="card m-2">
                <div className="card-title shadow-sm bg-primary text-light m-2 p-1">
                    {user.name}
                </div>
                <div className= "card-body m-1 p-1">
                    <p>{user.email}</p>
                </div>
            </div>
         </div>)
};

interface UserCardProps {
    user: IUser;
}

export default UserProfileCard;