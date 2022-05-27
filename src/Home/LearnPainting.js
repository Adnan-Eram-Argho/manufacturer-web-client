import React from 'react';

const LearnPainting = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-9">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/artistic-background-with-palette-paints_1284-10291.jpg?t=st=1653421634~exp=1653422234~hmac=ae9e707a967d2db9e9df10a0ac321d45bb97e531938c16bbe1021e1d7d00a394" className="lg:max-w-lg rounded-lg shadow-2xl" alt='painting' />
                <div>
                    <h1 className="text-5xl font-bold">Wanna learn how to paint?</h1>
                    <p className="py-6">Then we have just the doc ready for you just click the button bellow</p>
                    <button className="btn btn-primary"><a href="https://drawpaintacademy.com/painting-for-beginners/" target="_blank">Learn more</a></button>
                </div>
            </div>
        </div>
    );
};

export default LearnPainting;