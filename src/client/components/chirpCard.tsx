import * as React from 'react';
import { ChirpWithUser } from '../../types/index';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     const res = await fetch("/api/chirprs/:id", {
//         method: "delete",
//     });
//     const data = await res.json();
    
//     if(res.ok) {
        
//         Swal.fire({
//             title: 'Chirp Deleted',
//             icon: 'success',
//             confirmButtonText: 'Continue'
//         })
        
//     } else {
//         Swal.fire({
//             title: 'Error, could not delete chirp',
//             icon: 'error',
//             confirmButtonText: 'Continue'
//         })
//         console.log(`Error, could not delete Chirp \n ${data.message}`);
//     }
// }



const ChirpCard = ({ chirp, isDetails }: ChirpCardProps) => {
    const nav = useNavigate();
    async function DeleteChirp(id:number) {
        const res = await fetch(`/api/chirprs/${id}`, {
            method: 'delete'
        });
    
        if(res.ok) {
                
            Swal.fire({
                title: 'Chirp deleted',
                icon: 'success',
                confirmButtonText: 'Continue'
            }).then(() => {
                nav('/chirprs')
            })
    
            
        } else {
            console.log(`Error, could not delete Chirp \n ${Error}`);
        }
    
    }
    return (
        <div className = "shadow-lg m-2 p-2 margin-top: 20px">
            
            <Link style={{ textDecoration: "none"}} to={`/chirprs/${chirp.id}`}>
            <div className="card m-2">
                <div className="card-title bg-primary text-light m-2 p-1">
                    <span className='m-2'>{chirp.name}</span>
                    <span className='m-2'>{chirp.email}</span>
                    </div>
                <div className="card-body text-center m-2 p-2 text-dark">
                    <p>{chirp.content}</p>
                </div>
                </div>
            </Link>
            { isDetails && <div className='row justify-content-end'>
                
                <Link to={`/chirprs/${chirp.id}/edit`}>
                    <button className='btn btn-warning m-1 p-2 col-2'>Edit</button>
                </Link>
                
                <button onClick={() => {DeleteChirp(chirp.id)}} className='btn btn-danger m-1 p-2 col-2'>Delete</button>
            
            
        </div>}
        </div>    
    )
};

interface ChirpCardProps {
    chirp: ChirpWithUser;
    isDetails?: boolean;
}

export default ChirpCard;