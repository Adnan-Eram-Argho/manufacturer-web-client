import React from 'react';
import useTools from '../hooks/useTools'
import Tool from './tool'
const Tools = () => {
    const [tools] = useTools();
    return (
        <div className='mt-9 place-items-center container mx-auto'>
            <div className="App ">
                <h2 className="text-3xl">
                    Tools
                </h2>
            </div>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 my-auto justify-items-center'>
                {
                    tools?.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;