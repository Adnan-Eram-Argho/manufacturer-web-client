import React, { useEffect, useState } from 'react';
import UserReviews from './UserReviews';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='mt-9'>
            <div className="text-center">
                <h3 className="text-3xl">Reviews</h3>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    {
                        reviews.map(review => <UserReviews review={review} kew={review._id}></UserReviews>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;