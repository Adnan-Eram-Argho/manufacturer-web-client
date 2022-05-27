import React from 'react';
import { Link } from 'react-router-dom';

const tool = ({ tool }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={tool.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">Name: {tool.name}</h2>
                <p>Description : {tool.description}</p>
                <p>Minimum order: {tool.minQuantity}</p>
                <p>Available Quantity: {tool.quantity}</p>
                <p>Sold: {tool.sold}</p>
                <p>Price: {tool.price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to={`/purchase/${tool?._id}`}>Buy now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default tool;