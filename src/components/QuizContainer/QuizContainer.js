import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './QuizContainer.css'

const QuizContainer = () => {
    const quizLoad = useLoaderData();
    const quiz = quizLoad.data;
    const { logo, name, questions, total } = quiz;
    console.log(questions)

    return (
        <div className='bg-white'>
            <h4>This is quiz component</h4>
        </div>
    );
};

export default QuizContainer;