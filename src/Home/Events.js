import React from 'react';

const Events = () => {
    return (
        <div className='mt-9'>


            <div tabindex="0" className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <div className='text-center'>
                        <h2 className="text-3xl">Our Latest Events</h2>
                    </div>
                </div>
                <div className="collapse-content">
                    <p>On 1st April we are going to arrange a meeting at our Factory to learn more from our manufacturers and our customers</p>
                    <br />
                    <p>Your advices let us become manufacture more tools</p>
                </div>
            </div>
        </div>
    );
};

export default Events;