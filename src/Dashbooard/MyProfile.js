import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [userInfo, setUserInfo] = useState([]);
    const url = `https://immense-caverns-52550.herokuapp.com/user/${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }
        , [])
    console.log(userInfo)
    const onSubmit = data => {
        console.log(data)
        const userData = {
            Name: user.displayName,
            email: user.email,
            education: data.education,
            location: data.location,
            phone: data.phone,
            LinkedIn: data.LinkedIn
        }
        console.log(userData)
        fetch('https://immense-caverns-52550.herokuapp.com/user', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        toast('done')
        // window.location.reload(true);
    };


    return (
        <div>
            <h1 className='text-3xl'>This is my profile</h1>

            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <div>
                <p>education: {userInfo[0]?.education}</p>
                <p>location: {userInfo[0]?.location}</p>
                <p>phone: {userInfo[0]?.phone}</p>
                <p>LinkedIn: {userInfo[0]?.LinkedIn}</p>


            </div>
            <div>
                <div>
                    <h2 className='mt-9 mx-auto text-5xl'>Add more info</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="sign-form mt-9 ">
                        <input className="mt-2 rounded p-3" type="text" placeholder="education" {...register("education", { required: true })} />
                        <input className="mt-2 rounded p-3" type="text" placeholder="location " {...register("location ", { required: true })} />
                        <input className="mt-2 rounded p-3" type="text" placeholder="phone" {...register("phone", { required: true })} />
                        <input className="mt-2 rounded p-3" type="text" placeholder="LinkedIn " {...register("LinkedIn ", { required: true })} />

                        <input type="submit" className='btn mt-4' />
                    </form>
                </div>
            </div>




        </div>
    );
};

export default MyProfile;