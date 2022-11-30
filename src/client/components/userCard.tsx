import * as React from 'react';
import { UserProfile } from '../../types/index';


const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className = "shadow-lg m-2 p-2 margin-top: 20px">
            <div className="card m-2">
                <div className="card-title bg-primary text-light m-2 p-1">
                    <span className='m-2'>{user.name}</span>
                    <span className='m-2'>{user.email}</span>
                    </div>
                
            </div>
        </div>    
    )
};

interface UserCardProps {
    user: UserProfile
}

export default UserCard;