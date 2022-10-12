import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadTopics = useLoaderData();
    const topics = loadTopics.data;


    return (
        <div className='bg-white text-center'>
            <h5>Yea its Statistics component</h5>
            <div className='text-center w-100 mx-auto'>
                <BarChart width={500} height={400} data={topics} className=' mx-auto'>
                    <Bar dataKey="total" fill="#8884d8" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis dataKey='total' />
                    <Tooltip />
                </BarChart>
            </div>

        </div>
    );
};

export default Statistics;