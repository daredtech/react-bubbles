// Build a axiosWithAuth module to create an instance of axios with the authentication header

import React from 'react';
import axios from 'axios';

const axiosWithAuth = () => {
    // get the item from the local storage
    const token = localStorage.getItem('token');
    console.log('received the following token: ', token);

    // create the header with the token
    return axios.create(
        {
            headers: {
                Authorization: token
            }
        }
    )
}

export default axiosWithAuth ;