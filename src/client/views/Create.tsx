import * as React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';



const Create = () => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
  

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    
        const res = await fetch("/api/chirprs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ name, content})
        });
    
        const data = await res.json();
    
        if(res.ok) {
            
            Swal.fire({
                title: 'Chirped!',
                icon: 'success',
                confirmButtonText: 'Continue'
            })
            setName("");
            setContent("");
        } else {
            console.log(`Error, could not create Chirp \n ${data.message}`);
        }
    };

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-md-8">
                <form className="p-3 bg-light shadow-md">
                    <label>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" className='form-control'/>
                    <label>Your Chirp</label>
                    <textarea value={content} onChange={e => setContent(e.target.value)} className='form-control'/>
                    <button disabled={!name || !content} onClick={handleSubmit} className="btn btn-success m-3">
                        Chirp It!
                    </button>
                </form>
            </div>
        </div>
        
        ); 
    
};

export default Create;



