import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    let navigate = useNavigate();
    let location = useLocation();

    let from = location?.state?.from?.pathname || "/";
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const notify = () => {
        toast("varification email sent")
    }

    //creating user with email and pass
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    //signing in with google
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    //react form
    const { register, handleSubmit, formState: { errors } } = useForm();



    //handle loading
    if (loading1 || updating || loading) {
        return <Loading></Loading>
    }
    //submit
    const onSubmit = async (data) => {
        notify();
        console.log(data.Address)
        await createUserWithEmailAndPassword(data.Email, data.Password);
        await updateProfile({ displayName: data.Name, photoURL: data.Phone, });


    };
    // console.log(errors.Email);
    //error handeling
    let errorElement;
    if (errors.Email) {
        errorElement = <div>
            <p className='text-danger'> please write a valid email</p>
        </div>
    }
    if (error || error1 || updateError) {

        errorElement = <div>
            <p className='text-danger'> {error1?.message || error?.message || updateError.massege}</p>
        </div>
    }




    //handle google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle();
        console.log(user1)
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }
    return (
        <div className="container mt-5 ">

            <div className='flex flex-col items-center '>
                <h1>This is sign up</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="sign-form mt-9 ">
                    <input type="text" className="mt-2 rounded p-3" placeholder="Name" {...register("Name", { required: true, maxLength: 30 })} />

                    <input type="text" className="mt-2 rounded p-3" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} required />
                    <input type="password" placeholder="Password" {...register("Password", {})} className="mt-2 rounded p-3" required />

                    <button type="submit" className="btn mt-2" >Sign Up</button>

                    <div className="grid grid-cols-3 mt-3">
                        <div >
                            <hr />
                        </div>
                        <div >
                            <p> google</p>
                        </div>
                        <div >
                            <hr />
                        </div>
                    </div>

                    <button className="btn mt-3" onClick={handleGoogleSignIn} >Google</button>
                    <br />

                </form>
            </div>


            <div> {
                errorElement
            }</div>
            <div className='App mt-5'>
                <p>Already Have An Account? <Link to='/signin'>login</Link></p>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;