import * as mysql from 'mysql';
import chirprs from './chirprs';
import config from '../config';

export const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'chirprapp',
    password: 'blahblah',  //probably don't want to do this, can end up pushed to github
    database: 'chirpr'
});

// export const Connection = mysql.createConnection(config.mysql);

// Connection.connect(err => {
//     if(err) console.log(err);
// });




export const Query=<T=mysql.OkPacket>(query: string , values?: Array<unknown>) => {
    const formattedSQL = mysql.format(query, values || []);

    return new Promise<T> ((resolve, reject) => {
        connection.query(formattedSQL, (err,results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    })

}

export default {
    chirprs
}
