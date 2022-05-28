import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className="text-3xl"> How will you improve the performance of a React Application?</h2>
                <p>We can improve our react performanse by keeping component state local.by not repeating code memorizing react components to prevent unnecessary re-render,,using small sized images  by using these ways we can improve the performance</p>
            </div>
            <div className='container mx-auto'>
                <h2 className="text-3xl mt-5"> What are the different ways to manage a state in a React application?</h2>
                <p>you can manage react state in 4 different ways
                </p>
                <ul>
                    <li>1.Local state</li>
                    <li>2.global state</li>
                    <li>3.server state</li>
                    <li>4.url state</li>
                </ul>
            </div>
            <div className='container mx-auto'>
                <h2 className="text-3xl mt-5">  How does prototypical inheritance work?</h2>
                <p>JavaScript is a prototype-based, Object Oriented programming language.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.By using this method an object can inherit the properties and methos of another object
                </p>

            </div>

            <div className='container mx-auto'>
                <h2 className="text-3xl mt-5">  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>by using array.filter methed i will find out the product using name..i will find each item using it and by matching the name
                </p>

            </div>
            <div className='container mx-auto'>
                <h2 className="text-3xl mt-5">   What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing is testing individual components of the software program or application.This is done to check if all the components in a program is working properly.A unit is known as the smallest possible component of software that can be tested
                </p>

            </div>
        </div>
    );
};

export default Blogs;