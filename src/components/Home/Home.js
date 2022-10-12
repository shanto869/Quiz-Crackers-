import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topicsLoad = useLoaderData();
    const topics = topicsLoad.data;
    console.log(topics)

    return (

        <div>
            <div className='home mt-4'>
                <div className='home-info text-center'>
                    <h2>Get Ready!! It's Competion Time.</h2>
                    <p>Create a live online quiz contest – engage your audience! Making your own live online quiz with Riddle’s quiz maker is easy.</p>
                </div>
            </div>

            <div className='topics mt-5'>
                {
                    topics.map(topic => {
                        return <Topic key={topic.id} topic={topic}></Topic>
                    })
                }
            </div>

        </div>
    );
};

export default Home;