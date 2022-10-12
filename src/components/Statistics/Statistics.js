import React from 'react';
import './Statistics.css'
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const loadTopics = useLoaderData();
    const topics = loadTopics.data;


    return (
        <div className='bg-white text-center py-4 mt-5 chart background'>
            <h5 className='pb-3 text-white'>Analysis total Quiz by Bar Chirt</h5>
            <div className='text-center w-100 mx-auto'>

                <BarChart width={500} height={400} data={topics} className='bar-chart mx-auto'>
                    <Bar dataKey="total" fill="#ffb20e" />
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