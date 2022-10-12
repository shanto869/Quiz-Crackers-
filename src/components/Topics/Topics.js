import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'


const Topics = () => {
    const topicsLoad = useLoaderData();
    const topics = topicsLoad.data;

    return (
        <div>
            <h4 className='text-white text-center py-4'>Choose Your Topics</h4>
            <div className='topics'>
                {
                    topics.map(topic => {
                        return <Topic key={topic.id} topic={topic}></Topic>
                    })
                }
            </div>
        </div>
    );
};

export default Topics;