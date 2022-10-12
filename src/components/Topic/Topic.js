import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';
import { BeakerIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic;

    const handleShowQuiz = (quiz) => {
        console.log('id', quiz)
    }

    return (
        <div className='topic background3'>
            <img src={logo} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Total Quiz: {total}</p>
            </div>
            <Link to={`/quiz/${id}`}>
                <button onClick={() => handleShowQuiz(id)} className='btn btn-primary'>Start Quiz
                    <ArrowRightIcon className="arrow text-blue-500" />
                </button>
            </Link>
        </div>
    );
};

export default Topic;