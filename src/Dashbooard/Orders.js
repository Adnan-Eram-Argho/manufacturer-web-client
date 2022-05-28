import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Order from './Order'
const Orders = () => {
    const [userTools, setUserTools] = useState([])

    const [user] = useAuthState(auth)
    const url = `http://localhost:5000/usertools/${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserTools(data)

            })
    }, [])
    console.log(userTools)
    return (
        <div className='container mx-auto overflow-scroll w-10/12 mb-9 '>
            <h1>orders {userTools.length}</h1>
            <div>
                {
                    userTools.map(tool => <Order tools={tool} key={tool._id}></Order>)
                }
            </div>
        </div>
    );
};

export default Orders;