import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadTopics = useLoaderData();
    const topics = loadTopics.data;


    return (
        <div className='bg-white text-center py-4'>
            <h5 className='pb-3'>Analysis total Quiz by Bar Chirt</h5>
            <div className='text-center w-100 mx-auto'>
                <BarChart width={500} height={400} data={topics} className=' mx-auto'>
                    <Bar dataKey="total" fill="#1A2238" />
                    <XAxis dataKey='name'></XAxis>
                    <YAxis dataKey='total' />
                    <Legend />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                </BarChart>
            </div>

        </div>
    );
};

export default Statistics;