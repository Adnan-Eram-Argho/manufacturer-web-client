import React from 'react';

const UserReviews = ({ review }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body flex flex-col items-center justify-center">
                    <h2 class="card-title">{review?.Name}</h2>
                    <p>{review.stars} stars</p>
                    <p>{review.review}</p>

                </div>
            </div>
        </div>
    );
};

export default UserReviews;