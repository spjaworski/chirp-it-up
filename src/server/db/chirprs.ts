import { Query } from './index';
import { IChirp, ChirpWithUser, IUser, NewPost } from '../../types';
import * as express from 'express';

const allUsers = async () => Query<IUser[]>('SELECT * FROM users');
const oneUser = async (id: number) => Query<IUser[]>('select * from users where id = ?', [id]);

const allChirps = async () => Query<ChirpWithUser[]>(
`select c.*, u.email from chirps c
join users u on u.id = c.userid order by id; `);

const oneChirp = async (id: number) => Query<ChirpWithUser[]>(
`select c.*, u.email from chirps c
join users u on u.id = c.userid where c.id = ?`, [id]);

const deleteChirp = async (id: IChirp["id"]) => Query('delete from chirps where id = ?', [id]);
const editChirp = async(id: number, content: string) => Query('update chirps set content = ? where id = ?', [content, id]);
const addChirp = async (NewPost: NewPost) => Query('INSERT INTO chirps set ?, userid = 1', [NewPost]);



export default {
    allUsers, 
    oneUser,
    allChirps,
    oneChirp,
    deleteChirp,
    editChirp,
    addChirp
}
