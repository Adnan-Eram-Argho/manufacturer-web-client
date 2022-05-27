import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const [tools, setTools] = useState([]);
    const { id } = useParams();
    //react form
    const { register, handleSubmit, formState: { errors } } = useForm();
    //getting item


    const url = `http://localhost:5000/tools/${id}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTools(data)

            })
    }, [])
    //user
    const [user, loading] = useAuthState(auth);
    //handle loading
    if (loading) {
        return <Loading></Loading>
    }
    //submit
    const onSubmit = async (data) => {

        console.log(data)



    };
    console.log(user)
    return (
        < div className='container mx-auto'>
            {/* user details */}
            <div tabIndex="0" class="collapse border border-base-300 bg-base-100 rounded-box" >
                <div class="collapse-title text-xl font-medium">
                    Click me to see User Details
                </div>
                <div class="collapse-content">
                    <p>User Name: {user?.displayName}</p>
                    <p>User Email: {user?.email}</p>
                </div>
            </div >
            <div className='mt-9 justify-center items-center flex'>
                <h3 className="text-3xl">Items Details </h3>
            </div>
            {/* {tool details} */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={tools.image} class="lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-5xl font-bold">{tools.name}</h1>
                        <p class="py-6"> Short Description: {tools.description}</p>
                        <p class="py-6"> Price: {tools.price}</p>
                        <p class="py-6"> Quantity: {tools.quantity}</p>
                        <p class="py-6"> Minimum Quantity: {tools.minQuantity}</p>
                        <p class="py-6">Sold: {tools.sold}</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

            {/* Extra info */}
            <div className='mt-9 justify-center items-center flex'>
                <h3 className="text-3xl">To Confirm purchase you need to give us some extra info </h3>
            </div>
            <div className='flex flex-col items-center '>
                <form onSubmit={handleSubmit(onSubmit)} className="sign-form mt-9 ">
                    <input type="text" className="mt-2 rounded p-3" placeholder="Address" {...register("Adress", { required: true })} />

                    <input type="text" className="mt-2 rounded p-3" placeholder="Phone" {...register("phone")} required />


                    <button type="submit" className="btn mt-2" >Sign Up</button>
                </form>
            </div>
        </div >
    );
};

export default Purchase;