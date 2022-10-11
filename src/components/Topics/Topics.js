import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'


const Topics = () => {
    const topicsLoad = useLoaderData();
    const topics = topicsLoad.data;

    return (
        <div>
            <h4>Topics Are Here : {topics.length}</h4>
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