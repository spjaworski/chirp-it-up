import * as express from 'express';
import db from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    console.log('hello connected')
    res.json('World');
});

router.get('/api/users', async (req, res) => {
    try {
        console.log('users connected')
        res.json(await db.chirprs.allUsers())
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/chirprs', async (req, res) => {
    try {
        console.log('chirprs connected')
        res.json(await db.chirprs.allChirps())
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/chirprs/:id', async (req, res) => {
    try {
        console.log('chirprs connected')
        
        res.json((await db.chirprs.oneChirp(parseInt(req.params.id))) [0] )
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/users/:id', async (req, res) => {
    try {
        console.log('users connected')
        
        res.json((await db.chirprs.oneUser(parseInt(req.params.id))) [0] )
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/api/chirprs/:id', async (req, res) => {
    try {
        console.log('chirpr connected')
        
        res.json((await db.chirprs.deleteChirp(parseInt(req.params.id))) [0] )
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/api/chirprs/:id/edit', async (req, res) => {
    try {
        console.log('chirpr connected, put request')
        console.log(req);
        res.json((await db.chirprs.editChirp(parseInt(req.params.id), req.body.content)) )
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});  

router.post('/api/chirprs', async (req, res) => {
    try { 
        const { name, content } = req.body;
        if ( !name || !content ) {
            res.status(400).json({message: "Bad Data Input, missing Name or Content"})
            return;
        }
    
        console.log('chirps connected');
        console.log(req);
        console.log(res);
        res.json((await db.chirprs.addChirp({name, content})))
    } catch(e) { 
        console.log(e);
        res.sendStatus(500);
    }
}); 

export default router; 