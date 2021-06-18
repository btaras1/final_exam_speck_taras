import {apiOrigin} from './api';

export const getUsers = () =>{
    return fetch( `${apiOrigin}` , {     
    })
    .then(res => res.json());
};
