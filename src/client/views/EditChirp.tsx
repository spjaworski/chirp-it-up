import * as React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';



const EditChirp = () => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams(); 
  

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const res = await fetch('http://localhost:3000/api/chirprs/' + id + '/edit', {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({id, content})
        });
    
        const data = await res.json();
    
        if(res.ok) {
            
            Swal.fire({
                title: 'Edited',
                icon: 'success',
                confirmButtonText: 'Continue'
            })
            setName("");
            setContent("");
        } else {
            alert("Error: check console");
            console.log(`Error, could not edit Chirp \n ${data.message}`);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <form className="p-3 bg-light shadow-md">
                    
                    <label>Chirp Text</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className='form-control'/>
                    <button disabled={!content} onClick={handleSubmit} className="btn btn-success m-3">
                        Edit Chirp
                    </button>
                </form>
            </div>
        </div>
        
        ); 
    
};

export default EditChirp;



