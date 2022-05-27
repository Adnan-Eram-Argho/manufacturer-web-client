import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const DashBoard = () => {
    const { email } = useParams();
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>


                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4  w-40 bg-base-900 text-base-content">

                        <li><Link to={`/dashboard/${email}`}>My Orders</Link></li>
                        {/* <li><Link to={`/dashboard/review/${email}`}>review</Link></li> */}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;