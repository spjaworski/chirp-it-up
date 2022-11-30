
export interface IChirp {
    id: number;
    userid: number;
    content: string;
    location: string;
    name: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    _created: string | Date;
}

export interface ChirpWithUser extends IChirp {
    name: IUser["name"];
    email: IUser["email"];
} 

export interface UserProfile extends IUser {
    name: IUser["name"];
    email: IUser["email"];
}

export interface NewPost {
    name: string;
    content: string;
}

