import * as React from 'react';
import { useEffect, useState } from 'react';
import { ChirpWithUser } from '../../types';
import ChirpCard from '../components/chirpCard';

const Chirps = () => {
    const [chirp, setChirps] = useState<ChirpWithUser[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/chirprs/')
        .then(res => res.json())
        .then(chirps => setChirps(chirps))
        .catch(error => console.log(error))
    }, []);
   
    return (
      <div className="row justify-content-center">
        {chirp.reverse().map(c => (
            <ChirpCard key={`chirp-card-${c.id}`} chirp ={c} />
        ))}
      </div>)
};

export default Chirps;

