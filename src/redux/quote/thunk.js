import axios from 'axios';
import {setQuote} from './action';

export const getQuote = key =>  dispatch => {
    const config ={
        mode: 'no-cors',
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Content-Type':'application/json'
        }
    }
    axios
    .get(`https://zenquotes.io/api/random/${key}`,config)
    .then(res =>{
        dispatch(setQuote(res.data[0]));
    })
    .catch(err => {
        console.log(err);
    });
}