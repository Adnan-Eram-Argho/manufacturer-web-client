import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Review = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = {
            Name: user.displayName,
            email: user.email,
            stars: data.Stars,
            review: data.Review
        }
        console.log(reviewData)
        console.log(data)
        fetch('https://immense-caverns-52550.herokuapp.com/review', {
            method: 'POST',
            body: JSON.stringify(reviewData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        navigate(from, { replace: true })
    };
    console.log(errors);
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className="sign-form mt-9 ">
                <input type="number" placeholder="Please write between 1-5 stars" {...register("Stars", { required: true, max: 5, min: 1 })} className="mt-2 rounded p-3" />
                <input type="text" placeholder="Review" {...register("Review", { required: true })} className="mt-2 rounded p-3" />

                <input type="submit" className='btn mt-4' />
            </form>
        </div>
    );
};

export default Review;