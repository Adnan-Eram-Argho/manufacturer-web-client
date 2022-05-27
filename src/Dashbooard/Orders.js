import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from './Order'
const Orders = () => {
    const [userTools, setUserTools] = useState([])
    const { email } = useParams();
    const url = `http://localhost:5000/usertools/${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUserTools(data)

            })
    }, [])
    console.log(userTools)
    return (
        <div className='container mx-auto'>
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