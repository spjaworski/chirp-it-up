import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChirpCard from '../components/chirpCard';
import { ChirpWithUser } from '../../types/index';

const SingleChirp = () => {
    const {id} = useParams();
    const [ chirp, setChirp ] = useState<ChirpWithUser>(); 
    
    useEffect(() => {

        // fetch('http://localhost:3000/api/chirprs/')
        // .then(res => res.json())
        // .then(chirp => setChirp(chirp))
        // .catch(error => console.error(error))

        async function getChirp() {
            try {
                const res = await fetch('http://localhost:3000/api/chirprs/' + id );
                console.log(res)
                const chirp = await res.json();

                if (res.ok) {
                    setChirp(chirp);
                } else {
                    alert(chirp.message);
                }
            } catch (error) {
                alert("Error, check console");
                console.error(error);
            }
        }
        getChirp();


    }, [id])
   
    return (
        <div className="row justify-content-center">
           {chirp && <ChirpCard chirp ={chirp} isDetails/>}
        </div>
    )
};

export default SingleChirp;


   