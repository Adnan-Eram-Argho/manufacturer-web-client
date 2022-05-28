import React from 'react';
import { toast } from 'react-toastify';

const order = ({ tools }) => {
    console.log(tools?.image)
    const url = `http://localhost:5000/usertools/${tools._id}`
    const handleDelete = () => {
        let cancel = window.confirm("are you sure you wanna delete this?");
        if (cancel) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        window.location.reload(true);
                    }
                })
        } else {
            toast('no items deleted')
        }


    }
    return (
        <div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={tools.image} alt="Shoes" /></figure>
                <div class="card-body">
                    <h1 class="card-title">{tools.name}</h1>
                    <p > User Name: {tools.userName}</p>
                    <p > User Email: {tools.email}</p>
                    <p > Phone: {tools.phone}</p>
                    <p > Address: {tools.address}</p>
                    <p > Short Description: {tools.shortDescription}</p>
                    <p > Price: {tools.price}</p>
                    <p > Quantity: {tools.Quantity}</p>
                    <p > paid: {tools.paid ? "paid" : "not paid"}</p>
                    <div class="card-actions justify-end">

                        {
                            tools.paid ? "" : <button class="btn btn-primary">Buy Now</button>
                        }

                        {
                            tools.paid ? "" : <button class="btn btn-primary" onClick={handleDelete}>cancel</button>
                        }
                    </div>
                </div>
            </div>



            {/* <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={tools.image} class="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{tools.name}</h1>
                        <p class="py-6"> Short Description: {tools.description}</p>
                        <p class="py-6"> Price: {tools.price}</p>
                        <p class="py-6"> Quantity: {tools.quantity}</p>
                        <p class="py-6"> Minimum Quantity: {tools.minQuantity}</p>
                        <p class="py-6">Sold: {tools.sold}</p>
                        <button class="btn btn-primary">Place order</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default order;