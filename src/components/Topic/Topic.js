import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css'

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
                <button onClick={() => handleShowQuiz(id)}>Start Quiz</button>
            </Link>
        </div>
    );
};

export default Topic;