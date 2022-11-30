import * as React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return(
        
         <div className="bg-dark">
            <Link className="btn btn-primary m-2" to={'/'}>Home</Link>
            <Link className="btn btn-primary m-2" to={'/users'}>Registered Users</Link>
            <Link className="btn btn-primary m-2" to={'/chirprs'}>Chirps</Link>
            <Link className="btn btn-primary m-2" to={'/create'}>Create a Chirp</Link>
         </div>
        
        );

};

export default Navbar;