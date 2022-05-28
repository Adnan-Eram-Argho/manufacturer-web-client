import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [tools, setTools] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [isQuantrue, setIsQuantrue] = useState(true);
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

    //quantity

    const handleQuantity = (e) => {
        let quantity = e.target.value;

        if (quantity > tools.quantity) {
            toast("Please writea number below quantity ")
            setIsQuantrue(false);
        } else if (isNaN(quantity)) {
            toast("please white a number");
            setIsQuantrue(false);
        } else if (quantity < tools.minQuantity) {
            toast("please write a bigger number")
            setIsQuantrue(false);
        } else {
            setIsQuantrue(true);
            setQuantity(e.target.value)
        }
        console.log(e.target.value)


    }
    //submit


    const onSubmit = async (data) => {
        console.log(data)
        const userTools = {
            name: tools.name,
            image: tools.image,
            shortDescription: tools.description,
            price: tools.price,
            Quantity: quantity,
            paid: data.Paid,
            userName: user?.displayName,
            email: user?.email,
            phone: data.phone,
            address: data.Adress
        }
        console.log(userTools);

        fetch('http://localhost:5000/userTools', {
            method: 'POST',
            body: JSON.stringify(userTools),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        navigate(from, { replace: true })
    };


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
                        <button class="btn btn-primary">Place order</button>
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
                    <input type="text" onBlur={handleQuantity} className="mt-2 rounded p-3" placeholder="Quantity" />
                    <label>if you want to pay now then click the checkbox bellow</label>
                    <input type="checkbox" placeholder="Paid" {...register("Paid")} />

                    {
                        isQuantrue ? <button type="submit"
                            className="btn mt-2">PlaceOrder</button> : <button type="submit"
                                className="btn mt-2" disabled>PlaceOrder</button>
                    }

                </form>
            </div>
        </div >
    );
};

export default Purchase;