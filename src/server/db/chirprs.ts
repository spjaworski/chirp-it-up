import { Query } from './index';
import { Post } from './index';
import { NewPost } from './index';
import * as express from 'express';

const allUsers = async () => Query('SELECT * FROM users');
const oneUser = async (id: number) => Query('select * from users where id = ?', [id]);
const allChirps = async () => Query('SELECT * FROM chirps');
const oneChirp = async (id: number) => Query('select * from chirps where id = ?', [id]);
const deleteChirp = async (id: Post["id"]) => Query('delete from chirps where id = ?', [id]);
const editChirp = async(id: number, content: string) => Query('update chirps set content = ? where id = ?', [content, id]);
const addChirp = async (NewPost) => Query('INSERT INTO chirps set content = ?, userid = 2', [NewPost]);



export default {
    allUsers, 
    oneUser,
    allChirps,
    oneChirp,
    deleteChirp,
    editChirp,
    addChirp
}
