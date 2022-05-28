import React from 'react';

const Portfolio = () => {
    return (
        <div className='container mx-auto'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://scontent.fdac1-1.fna.fbcdn.net/v/t39.30808-1/279910305_723674865325057_5893921390234721968_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeH8dgajOwu9UYjZV3-FDmyHzOwUXvPYTqDM7BRe89hOoBkYeXoV1LYJnPk5tIVOeVbiHT3_xLWlrTxo7Gd5D3Cs&_nc_ohc=azUMrCz3GrcAX--wD10&_nc_ht=scontent.fdac1-1.fna&oh=00_AT8xOjQZGK5HmV3G_rbHqE7E6gSxqmgVWuY9DUY1CSwAnQ&oe=629660C6" class="max-w-sm rounded-lg shadow-2xl" alt='arg' />
                    <div>
                        <h1 class="text-5xl font-bold">Adnan Eram Argho</h1>
                        <p class="py-6"> I am a college student I read in Bogura Govt College.But I have a great poassion for programming</p>
                        <p>my email: adnaneramargho@gmail.com</p>


                    </div>

                </div>
            </div>
            <div className='text-center mt-5'>
                <h2 className="text-3xl mx-auto ">My skills</h2>

            </div>
            <div>

                <ol className='flex flex-col justify-center items-center'>
                    <li>Html</li>
                    <li>css</li>
                    <li>bootstrap</li>
                    <li>tailwind</li>
                    <li>React</li>
                    <li>MongoDb</li>
                    <li>express</li>
                    <li>jquary</li>
                </ol>
            </div>
            <div className='text-center mt-5 flex flex-col'>
                <h2 className="text-3xl mx-auto ">Link to some of my projects</h2>
                <a href="https://photographers-world-4c2dc.web.app/" className='m-5 p-5 text-cyan-200'>Photographers world</a>
                <a href="https://warehouse-management-486e0.web.app/" className='m-5 p-5 text-cyan-200'>WareHouse projects</a>
                <a href="https://adnan-eram-argho.github.io/Javascript-projetcs/" className='m-5 p-5 text-cyan-200'>Some normal projects(mostly front end)</a>
            </div>
        </div >

    );
};

export default Portfolio;